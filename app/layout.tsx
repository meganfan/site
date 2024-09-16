import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import avatar from "@/public/jeffrey.jpg";

export const metadata: Metadata = {
  metadataBase: new URL("https://yao.dev"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Jeffrey Yao",
    template: "%s | Jeffrey Yao",
  },
  description: "Software engineer, currently at TikTok.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="[scrollbar-gutter:stable]">
      <body className="antialiased">
        <div className="min-h-screen flex flex-col p-12 my-12 bg-white max-w-[60ch] mx-auto w-full space-y-6">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="flex items-center space-x-4">
      <Image
        className="rounded-full"
        src={avatar}
        alt="A portrait of me."
        placeholder="blur"
        width="52"
        height="52"
        priority
      />
      <div>
        <h1 className="font-medium">Jeffrey Yao</h1>
        <span className="font-medium text-gray-500">Software Engineer</span>
      </div>
    </header>
  );
}

function Footer() {
  const links = [
    { name: "@jeffdyao", url: "https://x.com/jeffdyao" },
    { name: "LinkedIn", url: "https://linkedin.com/in/jeffreydyao/" },
    { name: "GitHub", url: "http://github.com/jeffreydyao" },
  ];

  return (
    <footer>
      <div className="flex space-x-4 tracking-[-0.010em]">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-blue-500 transition-colors"
          >
            {link.name}
          </a>
        ))}
      </div>
    </footer>
  );
}
