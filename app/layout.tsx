import type { Metadata } from "next";
import "./globals.css";
//import NavigationBar from "./components/nav-bar"
import Footer from "./components/footer"
import { Ibarra_Real_Nova, Bellefair, Philosopher, Poppins, Raleway } from 'next/font/google'
import Navigation from "./components/navigation";

export const ibarraRealNova = Ibarra_Real_Nova({ weight: "400", display: 'swap', subsets: ['latin'] });
export const bellefair = Bellefair({ weight: "400", display: 'swap', subsets: ['latin'] }); 
export const philosopher = Philosopher({ weight: "400", display: 'swap', subsets: ['latin'] }); 
export const poppins = Poppins({ weight: "400", display: 'swap', subsets: ['latin'] }); 
export const raleway = Raleway({ weight: "400", display: 'swap', subsets: ['latin'] }); 

export const metadata: Metadata = {
  title: "Swansong",
  description: "Swansong music website", 
}; 
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">  
      <body className="w-full">
        <header>
          {/* <NavigationBar ></NavigationBar> */}
          <Navigation />
        </header>
        <main className="w-full flex-grow">
          {children}
        </main>       
        <Footer></Footer> 
      </body> 
    </html>
  );
}
