import '@/styles/globals.css'
import localFont from "next/font/local";

import type {AppProps} from 'next/app'

const myFont = localFont({src: "./fonts/SB_B.ttf"});
export default function App({Component, pageProps}: AppProps) {
    return (
        <main className={myFont.className}>
            <Component {...pageProps} />
        </main>
    );
}
