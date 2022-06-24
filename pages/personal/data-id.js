import Head from "next/head";
import { useRouter } from "next/router";
import styles from "../../styles/Heroes.module.css";

export default function DetailPage() {
    const router = useRouter();
    const { query } = router;

    return (
        <div className={ styles.body }>
            <Head>
                <title>Page Detail</title>
                <meta name="description" content="Avatar Heroes" />
            </Head>
            <h1 className={ styles.h2 }>Detail</h1>
            <span className={ styles.span }> Nama: { query.name }</span><br />
            <span> Position: { query.position }</span><br />
            <span> Affiliation: { query.affiliation }</span><br />
        </div>
    )
}