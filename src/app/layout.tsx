import type {Metadata} from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MaxKb Ai-Office",
  description: "Ready-to-use, flexible RAG Chatbot",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
