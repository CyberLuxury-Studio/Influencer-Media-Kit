import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Influencer Media Kit - Home",
  description: "Digital Creator & Tech Streamer exploring the bleeding edge of interactive entertainment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0" />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} font-body antialiased min-h-screen flex flex-col`}
      >
        {/* TopAppBar */}
        <header className="fixed top-0 w-full z-50 bg-neutral-950/80 backdrop-blur-md border-b border-white/10 shadow-[0_0_15px_rgba(0,240,255,0.1)]">
          <div className="flex justify-between items-center px-6 py-4 w-full max-w-screen-2xl mx-auto">
            <div className="text-2xl font-black text-cyan-400 tracking-tighter font-headline uppercase">KINETIC_ARCHIVE</div>
            <nav className="hidden md:flex space-x-8 font-headline uppercase tracking-tight">
              <a className="text-cyan-400 border-b border-cyan-400 pb-1" href="#">MANIFESTO</a>
              <a className="text-neutral-400 hover:text-white transition-colors hover:text-cyan-300 hover:bg-white/5 transition-all px-2 py-1 rounded" href="#metrics">METRICS</a>
              <a className="text-neutral-400 hover:text-white transition-colors hover:text-cyan-300 hover:bg-white/5 transition-all px-2 py-1 rounded" href="#portfolio">PORTFOLIO</a>
              <a className="text-neutral-400 hover:text-white transition-colors hover:text-cyan-300 hover:bg-white/5 transition-all px-2 py-1 rounded" href="#connect">CONNECT</a>
            </nav>
            <button className="hidden md:block btn-gradient px-6 py-2 font-headline uppercase text-sm tracking-widest font-bold rounded-full scale-95 duration-200 ease-in-out hover:scale-100">DOWNLOAD_KIT</button>
            <button className="md:hidden text-cyan-400"><span className="material-symbols-outlined">menu</span></button>
          </div>
        </header>

        <main className="flex-grow pt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
