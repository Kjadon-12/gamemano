"use client";
import Footer from "@/components/Footer/Footer";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header/Header";
import Sidebar from "@/components/Sidebar/Sidebar";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // choose weights you need
  variable: "--font-poppins", // optional for Tailwind custom font
  display: "swap",
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-[#13100A] text-white">
        {pathname === "/" ? (
          <div className="flex">
            <Sidebar />
            <div className="flex-1 min-h-screen pl-16 md:pl-[4rem]">
              {" "}
              {/* Reserve space for sidebar */}
              <Header />
              <main className="pt-[80px] px-4">{children}</main>
              <Footer />
            </div>
          </div>
        ) : (
          <div>
            <Header /> <main className="pt-[80px] px-4">{children}</main>{" "}
            <Footer />
          </div>
        )}
      </body>
    </html>
  );
}
