import Image from 'next/image';
import { Header } from './components/Header/Header';
import './globals.css';
import type { Metadata } from 'next';
// import planet from '../public/images/planet.jpg';
import planet from '../public/images/planetFullHd.jpg';

export const metadata: Metadata = {
  title: 'Armaggedon',
  description: 'WE DOOMED!',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {

  return (
    <html lang="en">
      <body>
        <Header />
        <Image src={planet} className="image" alt="planet earth" />
        {children}
        <footer className="footer">
          <p className="footer-text">© Все права и планета защищены</p>
        </footer>
      </body>
    </html>
  );
}
