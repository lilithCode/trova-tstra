import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Trova Tstra",
  description: "A modern web application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="w-full bg-transparent fixed inset-x-0 top-0 z-50">
          <Navbar />
        </div>
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}

