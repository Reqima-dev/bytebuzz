import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ByteBuzz",
  description: "Bienvenue dans l'univers numérique en pleine effervescence !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
