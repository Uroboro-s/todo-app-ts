import type { Metadata } from "next";
import "@/app/_styles/globals.css";

export const metadata: Metadata = {
  title: "Todo App",
  description: "Making every second count",
};

interface AppProps {
  children?: React.ReactNode;
}

export default function RootLayout({ children }: AppProps) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <h1 className="flex justify-center text-6xl">ToDo App</h1>
        <main className="h-full flex justify-center mt-12">{children}</main>
      </body>
    </html>
  );
}
