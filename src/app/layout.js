import "./globals.css";
import Navbar from "@/components/Navbar";
import Particles from "./../components/Particles";

export const metadata = {
  title: "Trova Tstra",
  description: "A modern web application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black overflow-x-hidden">
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <Particles />
        </div>
        <div className="w-full bg-transparent fixed inset-x-0 top-0 z-50">
          <Navbar />
        </div>
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
