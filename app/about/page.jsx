'use client';
import Link from 'next/link';
import Image from 'next/image';
import about_storefront from '../../public/about_storefront.jpg';
import about_accoya from '../../public/about_accoya.jpg';
import './about.css';

const About = () => {
    return (
        <div className='about'>
            <div className='about_banner'>
                <h1>ABOUT</h1>
                <span />
            </div>
            {/* ABOUT */}
            <div className='about_container'>
                <div className='about_left'>
                    <div className='redsq' style={{ width: '100%', height: '22vw' }}>
                        <div className='red_sq1' />
                        <Image src={about_storefront} className='red_sq2' alt="Storefront" width={800} height={600} />
                    </div>
                </div>
                <div className='about_right'>
                    <h2>
                        At Traditions Mill our goal is to make you happy with our
                        products, timeliness, and customer service.
                    </h2>
                    <p>You can choose from any of the stock profiles in this catalog
                        or bring in your own profile for us to match.</p>
                    <p>We are also able to adjust sizes with some of the profiles,
                        depending on the knife configuration.</p>
                    <p>New profiles are continually added to our product line.
                        Please call us at (801) 426-4822 for the latest additions and
                        pricing. We are happy to answer any questions.
                    </p>
                </div>
            </div>
            <div className='partners_banner'>
                <h1>PARTNERS</h1>
            </div>
            {/* PARTNERS*/}
            <div className='partners'>
                <div className='partners_left'>
                    <p>
                        <span className='partners_left_span'>Accoya® is wood,</span> but not as you know it. It is modified
                        timber in which a process called acetylation, a cutting-edge
                        patented technology, enables it to resist rot, defy the elements
                        and stay strong for decades. Guaranteed for <span className='partners_left_span' >50 years</span> above
                        ground and <span className='partners_left_span' >25 years</span> in ground or freshwater, its performance
                        and properties are remarkable. From joinery for the home to
                        bridges submerged in water, Accoya® long life wood is a
                        leading material that stands up to every application challenge
                        – wood decking, wood cladding, landscape timbers, sidings,
                        wooden windows and more.
                    </p>
                    <div className='accoya_buttons'>
                        <Link href="/accoya_brochure.pdf" target='_blank' download><button className='accoya_btn accoyabtn'>BROCHURE</button></Link>
                        <Link href="/accoya_benefits.pdf" target='_blank' download><button className='accoya_btn'>BENEFITS</button></Link>
                    </div>
                </div>
                <div className='partners_right'>
                    <div className='tredsq' style={{ width: '70%', height: '22vw' }}>
                        <div className='tred_sq1' />
                        <Image src={about_accoya} className='tred_sq2' alt="Accoya" width={800} height={600} />
                    </div>
                </div>
            </div>

            <div className='footer' id='footer'>
                <p>Footer content here...</p>
            </div>
        </div >
    )
}

export default About;
