use anyhow::Result;
use loro::LoroDoc;

fn main() -> Result<()> {
    let doc = get_loro_doc()?;
    let json = doc.export_json_updates(&Default::default(), &doc.oplog_vv());
    let file = std::fs::File::create("../public/seph-blog-updates.json")?;
    serde_json::to_writer(file, &json)?;
    Ok(())
}

fn get_loro_doc() -> Result<LoroDoc> {
    // Sample data from https://github.com/josephg/editing-traces
    use serde::Deserialize;
    #[derive(Debug, Deserialize)]
    #[serde(rename_all = "camelCase")]
    struct SequentialTrace {
        start_content: String,
        end_content: String,
        txns: Vec<Transaction>,
    }

    #[derive(Debug, Deserialize)]
    struct Transaction {
        time: String,
        patches: Vec<Patch>,
    }

    #[derive(Debug, Deserialize)]
    struct Patch {
        position: usize,
        num_deleted: usize,
        insert_content: String,
    }

    let seph_blog1_json_gz = include_bytes!("./seph-blog1.json.gz");

    use flate2::read::GzDecoder;
    let decoder = GzDecoder::new(seph_blog1_json_gz.as_slice());

    let seph_blog1_trace = serde_json::from_reader::<_, SequentialTrace>(decoder).unwrap();

    let doc = LoroDoc::new();
    let text = doc.get_text("text");
    text.insert(0, seph_blog1_trace.start_content.as_str())
        .unwrap();

    seph_blog1_trace.txns.iter().for_each(|txn| {
        _ = txn.time;
        txn.patches.iter().for_each(|patch| {
            text.splice(
                patch.position,
                patch.num_deleted,
                patch.insert_content.as_str(),
            )
            .unwrap();
        });
    });

    assert_eq!(text.to_string(), seph_blog1_trace.end_content);
    doc.commit();
    Ok(doc)
}
