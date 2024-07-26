import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './catalog.css';

// Importing images directly from the public folder
import w_bc from '../../public/w_bc.png';
import w_cap from '../../public/w_cap.png';
import w_chairrail from '../../public/w_chairrail.png';
import w_cnc from '../../public/w_cnc.png';
import w_crown from '../../public/w_crown.png';
import w_misc from '../../public/w_misc.png';
import w_nosing from '../../public/w_nosing.png';
import w_panelmoldb from '../../public/w_panelmoldb.png';
import woodworker from '../../public/woodworker.jpg';
import catalog_header_bg from '../../public/catalog_header_bg.jpg';

const Things = ({ text, image, link }) => {
  return (
    <div className="things">
      <Link href={link}>
        <div className="things_sq1" />
        <div className="things_sq2" />
        <div className="things_sq3">{text}</div>
        <Image src={image} alt={text} className="things_img" />
      </Link>
    </div>
  );
};

const Catalog = () => {
  return (
    <div className="catalog">
      <div className="catalog_banner">
        <h1>CATALOG</h1>
      </div>
      <div className="catalog_items_container">
        <div className="home_three_rows">
          <div className="home_three_row1">
            <Things text="CROWN" image={w_crown} link="/catalog/crown" />
            <Things text="CHAIR RAIL" image={w_chairrail} link="/catalog/chairrail" />
            <Things text="CAP" image={w_cap} link="/catalog/cap" />
          </div>
          <div className="home_three_row1">
            <Things text="BASE & CASE" image={w_bc} link="/catalog/basencase" />
            <Things text="CNC WORK" image={w_cnc} link="/catalog/cnc" />
            <Things text="PANEL MOLD" image={w_panelmoldb} link="/catalog/panelmould" />
          </div>
          <div className="home_three_row1">
            <Things text="NOSING" image={w_nosing} link="/catalog/nosing" />
            <Things text="MISCELLANEOUS" image={w_misc} link="/catalog/misc" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalog;
