import Head from "next/head";
import styles from '../styles/Heroes.module.css';

export default function Footer() {
  return (
    <>
    <div>
        <footer>
            <div className="footer-content">
                <p>Copyright © 2022 Febri</p>
            </div>
        </footer>

        <style jsx>{`
            footer{
                position: absolute;
                bottom: 0;
                left: 0;
                right: 0;
                background: #111;
                height: auto;
                width: 100vw;
                padding-top: 40px;
                color: #fff;
            }

            .footer-content{
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                text-align: center;
            }
        `}</style>
    </div>
    </>
  )
}
