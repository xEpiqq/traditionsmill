'use client';
import './globals.css';
import './home.css';  // Importing the layout-specific CSS
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

// Importing images directly
import logo from '../public/logo.png';
import hamburgerX from '../public/hamburgerX.svg';
import footerbg from '../public/footer_bg.jpg';
import ffphone from '../public/ffphone.svg';
import ffclock from '../public/ffclock.svg';
import ffemail from '../public/ffemail.svg';
import ffmap from '../public/ffmap.svg';

const inter = Inter({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export default function RootLayout({ children }) {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='navbar'>
          <div className='navbar_left'>
            <Link href='/'><Image src={logo} alt='logo' className='navbar_logo' /></Link>
          </div>
          <div className='navbar_right'>
            <Link href='/' className='navbar_links'>HOME</Link>
            <Link href='/catalog' className='navbar_links'>CATALOG</Link>
            <Link href='/gallery' className='navbar_links'>GALLERY</Link>
            <Link href='/about' className='navbar_links'>ABOUT</Link>
            <a href='#footer' className='navbar_links'>CONTACT</a>
          </div>
          <div className='navbar_right_hamburger' onClick={() => setToggleMenu(true)}>
            <span />
            <span />
            <span />
          </div>
          {toggleMenu && (
            <div className='navbar_right_hamburger_clicked'>
              <Image src={hamburgerX} onClick={() => setToggleMenu(false)} />
              <Link href='/' className='navbar_right_hamburger_clicked_links' onClick={() => setToggleMenu(false)}>HOME</Link>
              <Link href='/catalog' className='navbar_right_hamburger_clicked_links' onClick={() => setToggleMenu(false)}>CATALOG</Link>
              <Link href='/gallery' className='navbar_right_hamburger_clicked_links' onClick={() => setToggleMenu(false)}>GALLERY</Link>
              <Link href='/about' className='navbar_right_hamburger_clicked_links' onClick={() => setToggleMenu(false)}>ABOUT</Link>
              <a href='#contact' className='navbar_right_hamburger_clicked_links' onClick={() => setToggleMenu(false)}>CONTACT</a>
            </div>
          )}
        </div>

        {children}

        <div className='footer' id='footer'>
          <Image src={footerbg} className='footerbg' alt='' />
          <div className='footer_text'>
            <div className='footer_row'>
              <div className='footer_element'>
                <Image src={ffphone} alt='phone' />
                <h2>(801) 426-4822</h2>
              </div>
              <div className='footer_element'>
                <Image src={ffclock} alt='clock' />
                <h2>Mon - Fri: 8:00 - 5:00</h2>
              </div>
            </div>
            <div className='footer_row_two'>
              <div className='footer_element'>
                <Image src={ffemail} alt='email' />
                <h2>traditionsmill@gmail.com</h2>
              </div>
              <div className='footer_element'>
                <Image src={ffmap} alt='map' />
                <h2> 1876 N 2700 W Unit 1 Provo, Utah</h2>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
