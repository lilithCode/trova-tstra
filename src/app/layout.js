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
       
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}

