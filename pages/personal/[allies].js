import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../../styles/Heroes.module.css";

export default function DetailPerson() {
    const router = useRouter();
    const { query } = router;

    return (
        // <div className={ styles.body }>
        //     <Head>
        //         <title>Heroes Detail Page</title>
        //         <meta name="description" content="Avatar Heroes" />
        //     </Head>
        //     <h1 className={ styles.h2 }>Detail Heroes</h1>
        //     <span className={ styles.span }> Nama: { query.name }</span><br />
        //     <span> Position: { query.position }</span><br />
        //     <span> Gender: { query.gender }</span><br />
        //     <span> Profession: { query.profession }</span><br />
        //     <span> Image: </span><br /> 
        //     <div className={styles.heroImage} >
        //         <Image 
        //             src={ query.imageUrl } 
        //             height= "100%"
        //             width= "100%"
        //             placeholder= 'blur'
        //             blurDataURL={ query.imageUrl } 
        //             />
        //     </div>
        // </div>
        
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