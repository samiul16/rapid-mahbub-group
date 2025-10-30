import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "Your Company Name",
  description: "Professional services and solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSans.variable}>
      <body
        className={`${notoSans.className} antialiased bg-white overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />

        {/* Global WhatsApp Button - Bottom Right */}
        <div className="fixed bottom-6 right-6 z-50">
          <a
            href="https://wa.me/966505176100"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center space-y-2 transition-all duration-300"
          >
            {/* WhatsApp Icon */}
            <div className="relative">
              <div className="w-8 h-8 rounded-full flex items-center justify-center hover:shadow-xl transition-all duration-300 transform hover:scale-110">
                {/* WhatsApp SVG Icon */}
                <Image
                  src={"/wp.svg"}
                  alt="WhatsApp"
                  width={40}
                  height={40}
                  className="w-8 h-8 text-white"
                />
              </div>
            </div>

            {/* Phone Number - Always Visible */}
            <div className="bg-black/20 backdrop-blur-sm text-white px-4 py-1 rounded-lg text-base font-semibold shadow-lg border border-white/10">
              +966 50 517 6100
            </div>
          </a>
        </div>
      </body>
    </html>
  );
}
