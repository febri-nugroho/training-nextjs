import Head from "next/head";
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function Layout({children, title="Training NextJs"})  {
  return (
    <div>
        <Head>
            <title>{title}</title>
        </Head>
        <Navbar />
            {children}
        <Footer />
    </div>
  )
}