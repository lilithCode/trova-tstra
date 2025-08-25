import "./globals.css";
import Navbar from "@/components/Navbar";
import Particles from "./../components/Particles";
import ForestComponent from "./../components/ForestComponent";
import Footer from "@/components/Footer";

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
        <div className="w-full bg-transparent fixed inset-x-0 top-0 z-100">
          <Navbar />
        </div>
        <main className="relative z-20">{children}</main>
        <ForestComponent className="relative z-20 mt-20" />
        <Footer className="relative z-20 mt-20" />
      </body>
    </html>
  );
}
