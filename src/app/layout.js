import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/component/navBar";
import BgPic from '@/component/bg';
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sytles MC Server",
  description: "Sytles MC Server",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></Script>
      <body className={inter.className} style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
        <NavBar />
        <BgPic />
        {children}
      </body>
    </html>
  );
}
