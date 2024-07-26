'use client';
import { useState, useEffect } from 'react';
import { storage } from '../../../firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import '../catalog.css';
import Image from 'next/image';

const Miscellaneous = () => {
  const [doorPartsImages, setDoorPartsImages] = useState([]);
  const [sidingImages, setSidingImages] = useState([]);
  const [architraveImages, setArchitraveImages] = useState([]);
  const [handrailImages, setHandrailImages] = useState([]);
  const [doorRailImages, setDoorRailImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async (path, setImageList) => {
      const listRef = ref(storage, path);
      const response = await listAll(listRef);
      const urls = await Promise.all(response.items.map(item => getDownloadURL(item)));
      setImageList(urls);
    };

    fetchImages('miscellaneous/door-parts', setDoorPartsImages);
    fetchImages('miscellaneous/siding', setSidingImages);
    fetchImages('miscellaneous/architrave', setArchitraveImages);
    fetchImages('miscellaneous/hand-rail', setHandrailImages);
    fetchImages('miscellaneous/door-rail-picture-frame', setDoorRailImages);
  }, []);

  const handleImageClick = (url) => {
    setSelectedImage(url);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="crown">
      <div className='crown_banner'>MISCELLANEOUS</div>

      <div className='crown_separator' />
      <div className='bbcrown_banner'>DOOR PARTS</div>
      <div className='crown_container'>
        <div className='crown_container_images'>
          {doorPartsImages.map((url, index) => (
            <div key={index} className='image_container_container' onClick={() => handleImageClick(url)}>
              <Image src={url} className='image_container' alt="Door Parts" width={500} height={500} />
            </div>
          ))}
        </div>
      </div>

      <div className='bbcrown_banner'>SIDING</div>
      <div className='crown_container'>
        <div className='crown_container_images'>
          {sidingImages.map((url, index) => (
            <div key={index} className='image_container_container' onClick={() => handleImageClick(url)}>
              <Image src={url} className='image_container' alt="Siding" width={500} height={500} />
            </div>
          ))}
        </div>
      </div>

      <div className='bbcrown_banner'>ARCHITRAVE</div>
      <div className='crown_container'>
        <div className='crown_container_images'>
          {architraveImages.map((url, index) => (
            <div key={index} className='image_container_container' onClick={() => handleImageClick(url)}>
              <Image src={url} className='image_container' alt="Architrave" width={500} height={500} />
            </div>
          ))}
        </div>
      </div>

      <div className='bbcrown_banner'>HANDRAIL</div>
      <div className='crown_container'>
        <div className='crown_container_images'>
          {handrailImages.map((url, index) => (
            <div key={index} className='image_container_container' onClick={() => handleImageClick(url)}>
              <Image src={url} className='image_container' alt="Handrail" width={500} height={500} />
            </div>
          ))}
        </div>
      </div>

      <div className='bbcrown_banner'>DOOR RAIL / PICTURE FRAME</div>
      <div className='crown_container'>
        <div className='crown_container_images'>
          {doorRailImages.map((url, index) => (
            <div key={index} className='image_container_container' onClick={() => handleImageClick(url)}>
              <Image src={url} className='image_container' alt="Door Rail / Picture Frame" width={500} height={500} />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <>
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal">
            <Image src={selectedImage} alt="Selected Image" width={800} height={800} />
          </div>
        </>
      )}
    </div>
  );
};

export default Miscellaneous;
