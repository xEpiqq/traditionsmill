import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Inter, Fugaz_One } from 'next/font/google';
import './home.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const fugazOne = Fugaz_One({
  subsets: ['latin'],
  weight: '400'
});

const Home = () => {
  return (
    <div className={`home ${inter.className}`}>
      <div className="home_one">
        <div className="home_one_text">
          <h1 className={fugazOne.className}>REDEFINING 'RUN OF THE MILL'</h1>
          <p className="home_one_text_two">Traditions Mill specializes in manufacturing of custom hardwood moldings.</p>
          <p className="home_one_text_three">No job too large or too small</p>
        </div>
        <button className="home_one_button">
          <Link href="/catalog">CATALOG</Link>
        </button>
        <Image src="/gear.svg" alt="" className="home_one_gear_one" width={500} height={500} />
        <Image src="/gear.svg" alt="" className="home_one_gear_two" width={500} height={500} />
        <div className="home_one_diag">SERVICES</div>
      </div>

      <div className="home_two">
        <div className="home_two_text">
          <div className="home_two_text_1">
            <h1 className={fugazOne.className}>MOULDINGS</h1>
            <p>We have profiles for all hardwood applications. We can match any profile that fits your needs. Whether you need eight, or thousands of feet, we can help you with your project</p>
          </div>
          <div className="home_two_text_2">
            <h1 className={fugazOne.className}>SURFACED 4 SIDES</h1>
            <p>We make surfaced 4 sides. The most common sizes are 1x4, 1x6, 1x8, 1x10, and 1x12 We can however make any size needed for your application</p>
          </div>
          <div className="home_two_text_3">
            <h1 className={fugazOne.className}>CNC WORK</h1>
            <p>From the unique drawer front to a beautiful sign to display on your home, we can do it all. For those unique one of a kind projects, give us a call</p>
          </div>
        </div>
        <div className="home_two_w">
          <div className="things">
            <Link href="/catalog">
              <div className="things_sq1" />
              <div className="things_sq2" />
              <div className="things_sq3">MOULDINGS</div>
              <Image src="/w_crown.png" alt="" className="things_img" width={500} height={500} />
            </Link>
          </div>
          <div className="things">
            <Link href="/catalog">
              <div className="things_sq1" />
              <div className="things_sq2" />
              <div className="things_sq3">S4S</div>
              <Image src="/w_s4s.png" alt="" className="things_img" width={500} height={500} />
            </Link>
          </div>
          <div className="things">
            <Link href="/catalog">
              <div className="things_sq1" />
              <div className="things_sq2" />
              <div className="things_sq3">CNC WORK</div>
              <Image src="/w_cnc.png" alt="" className="things_img" width={500} height={500} />
            </Link>
          </div>
        </div>
      </div>

      <div className="home_three">
        <div className="home_three_bar">WORK</div>
        <Image className="home_three_banner" alt="Woodworker" src="/woodworker.jpg" width={800} height={600} />
        <div className="home_three_rows">
          <div className="home_three_row1">
            <div className="things">
              <Link href="/crown">
                <div className="things_sq1" />
                <div className="things_sq2" />
                <div className="things_sq3">CROWN</div>
                <Image src="/w_crown.png" alt="" className="things_img" width={500} height={500} />
              </Link>
            </div>
            <div className="things">
              <Link href="/chairrail">
                <div className="things_sq1" />
                <div className="things_sq2" />
                <div className="things_sq3">CHAIR RAIL</div>
                <Image src="/w_chairrail.png" alt="" className="things_img" width={500} height={500} />
              </Link>
            </div>
            <div className="things">
              <Link href="/cap">
                <div className="things_sq1" />
                <div className="things_sq2" />
                <div className="things_sq3">CAP</div>
                <Image src="/w_cap.png" alt="" className="things_img" width={500} height={500} />
              </Link>
            </div>
          </div>
          <div className="home_three_row1">
            <div className="things">
              <Link href="/basencase">
                <div className="things_sq1" />
                <div className="things_sq2" />
                <div className="things_sq3">BASE & CASE</div>
                <Image src="/w_bc.png" alt="" className="things_img" width={500} height={500} />
              </Link>
            </div>
            <div className="things">
              <Link href="/cncwork">
                <div className="things_sq1" />
                <div className="things_sq2" />
                <div className="things_sq3">CNC WORK</div>
                <Image src="/w_cnc.png" alt="" className="things_img" width={500} height={500} />
              </Link>
            </div>
            <div className="things">
              <Link href="/panelmould">
                <div className="things_sq1" />
                <div className="things_sq2" />
                <div className="things_sq3">PANEL MOLD</div>
                <Image src="/w_panelmoldb.png" alt="" className="things_img" width={500} height={500} />
              </Link>
            </div>
          </div>
          <div className="home_three_row1">
            <div className="things">
              <Link href="/nosing">
                <div className="things_sq1" />
                <div className="things_sq2" />
                <div className="things_sq3">NOSING</div>
                <Image src="/w_nosing.png" alt="" className="things_img" width={500} height={500} />
              </Link>
            </div>
            <div className="things">
              <Link href="/miscellaneous">
                <div className="things_sq1" />
                <div className="things_sq2" />
                <div className="things_sq3">MISCELLANEOUS</div>
                <Image src="/w_misc.png" alt="" className="things_img" width={500} height={500} />
              </Link>
            </div>
            <div className="things">
              <Link href="/crown">
                <div className="things_sq1" />
                <div className="things_sq2" />
                <div className="things_sq3">CROWN</div>
                <Image src="/w_crown.png" alt="" className="things_img" width={500} height={500} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
