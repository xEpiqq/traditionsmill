'use client';
import React from 'react';
import './gallery.css';

const Gallery = () => {
    return (
        <div className='gallery'>
            <div className='catalog_banner' >
                <h1>GALLERY</h1>
            </div>
            <div className='gallery_container'>
                <div className='gallery_row1'>
                    <img src='/g_img2.jpg' alt='' />
                    <img src='/g_img3.JPG' alt='' />
                    <img src='/g_img4.JPG' alt='' />
                </div>
                <div className='gallery_row2'>
                    <img src='/g_img5.JPG' alt='' />
                    <img src='/g_img6.jpg' alt='' />
                </div>
                <div className='gallery_row3'>
                    <img src='/g_img7.jpg' alt='' />
                    <img src='/g_img8.jpg' alt='' />
                    <img src='/g_img9.jpg' alt='' />
                    <img src='/g_img10.jpg' alt='' />
                </div>
                <div className='gallery_row4'>
                    <img src='/g_img1.jpg' alt='' />
                    <img src='/g_img11.jpg' alt='' />
                    <img src='/g_img12.jpg' alt='' />
                    <img src='/g_img13.jpg' alt='' />
                </div>
            </div>
            <div id='footer' />
        </div>
    )
}

export default Gallery;
