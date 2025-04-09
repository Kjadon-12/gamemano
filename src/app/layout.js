
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import { Poppins } from 'next/font/google'
import Header from "@/components/Header/Header";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // choose weights you need
  variable: '--font-poppins',   // optional for Tailwind custom font
  display: 'swap',
})


export const metadata = {
  title: "Gamemano - Gaming Website",
  description: "Gamemano provides multiple games",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en" className={poppins.variable}>
      <body
        
      >
        
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
