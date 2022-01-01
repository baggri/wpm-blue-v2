import Head from "next/head";
import styles from "../styles/tetrio.module.scss";
import { saveAs } from "file-saver";

export default function Home() {
      
  const tetrioSettings = () => {
    saveAs(
      "rambunctious_config.ttc",
      "rambunctious_config.ttc"
    );
  };
    
    
    return(
          <div className={styles.container}>
      <Head>
        <title>tetr.io download</title>
        <meta name="description" kewwords="" content="download tetr.io config" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>
        download tetrio settings
      </h1>
      
      <div className={styles.button}>
      <button className={styles.click} onClick={tetrioSettings}>
          download .ttc file
      </button>
      </div>

        </div>

    );
}
