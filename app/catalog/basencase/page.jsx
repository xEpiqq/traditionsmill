'use client';
import { useState, useEffect } from 'react';
import { storage } from '../../../firebase'; // Importing the configured storage from your Firebase setup
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import '../catalog.css';
import Image from 'next/image';

const Basencase = () => {
  const [baseCaseImages, setBaseCaseImages] = useState([]);
  const [architraveImages, setArchitraveImages] = useState([]);
  const [miscBaseCaseImages, setMiscBaseCaseImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchImages = async (path, setImageList) => {
    const listRef = ref(storage, path);
    const response = await listAll(listRef);
    const urls = await Promise.all(response.items.map(item => getDownloadURL(item)));
    setImageList(urls);
  };

  useEffect(() => {
    fetchImages('base-n-case/base-n-case', setBaseCaseImages);
    fetchImages('base-n-case/architrave', setArchitraveImages);
    fetchImages('base-n-case/misc-base-n-case', setMiscBaseCaseImages);
  }, []);

  return (
    <div className="crown">
      <div className='crown_banner'>BASE & CASE</div>
      <div className='crown_container'>
        <div className='crown_container_images'>
          {baseCaseImages.map((url, index) => (
            <div key={index} className='image_container_container' onClick={() => setSelectedImage(url)}>
              <Image src={url} className='image_container' alt="Base and Case" width={500} height={500} />
            </div>
          ))}
        </div>
      </div>

      <div className='bbcrown_banner'>ARCHITRAVE</div>
      <div className='crown_container'>
        <div className='crown_container_images'>
          {architraveImages.map((url, index) => (
            <div key={index} className='image_container_container' onClick={() => setSelectedImage(url)}>
              <Image src={url} className='image_container' alt="Architrave" width={500} height={500} />
            </div>
          ))}
        </div>
      </div>

      <div className='bbcrown_banner'>BASE & CASE - MISCELLANEOUS</div>
      <div className='crown_container'>
        <div className='crown_container_images'>
          {miscBaseCaseImages.map((url, index) => (
            <div key={index} className='image_container_container' onClick={() => setSelectedImage(url)}>
              <Image src={url} className='image_container' alt="Miscellaneous Base and Case" width={500} height={500} />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <>
          <div className="modal-overlay" onClick={() => setSelectedImage(null)}></div>
          <div className="modal">
            <Image src={selectedImage} alt="Selected" width={1000} height={1000} />
          </div>
        </>
      )}
    </div>
  );
};

export default Basencase;
