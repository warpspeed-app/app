use derive_builder::Builder;
use directories as dirs;


#[derive(Builder, Debug)]
#[allow(dead_code)]
pub struct DataBase {
    #[builder(default = "self._db_local_path()?")]
    pub url: String,
}


impl DataBaseBuilder {
    fn _db_local_path(&self) -> Result<String, String> {
        let get_path = || {
            Some(dirs::BaseDirs::new()?.data_dir().to_str()?.to_string())
        };

        match get_path() {
            Some(path) => Ok(path),
            _ => Err("Couldn't locate the data directory.".to_string()),
        }
    }
}
