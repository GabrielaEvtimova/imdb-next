import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Providers from "./Providers/Providers";
import NavBar from "@/components/NavBar/NavBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb Clone",
  description: "Movie database clone",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <NavBar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
