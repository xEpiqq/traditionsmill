'use client';
import { useState, useEffect } from 'react';
import { storage } from '../../../firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import '../catalog.css';
import Image from 'next/image';

const Cnc = () => {
  const [doorPanelImages, setDoorPanelImages] = useState([]);
  const [cuttingBoardImages, setCuttingBoardImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async (path, setImageList) => {
      const listRef = ref(storage, path);
      const response = await listAll(listRef);
      const urls = await Promise.all(response.items.map(item => getDownloadURL(item)));
      setImageList(urls);
    };

    fetchImages('cnc/door-panel-designs', setDoorPanelImages);
    fetchImages('cnc/cutting-boards', setCuttingBoardImages);
  }, []);

  const handleImageClick = (url) => {
    setSelectedImage(url);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="crown">
      <div className='crown_banner'>CNC</div>
      <div className='crown_container'>
        <div className='crown_container_images'>
          {doorPanelImages.map((url, index) => (
            <div key={index} className='image_container_container' onClick={() => handleImageClick(url)}>
              <Image src={url} className='image_container' alt="Door Panel Design" width={500} height={500} />
            </div>
          ))}
        </div>
      </div>

      <div className='bbcrown_banner'>CUTTING BOARDS</div>
      <div className='crown_container'>
        <div className='crown_container_images'>
          {cuttingBoardImages.map((url, index) => (
            <div key={index} className='image_container_container' onClick={() => handleImageClick(url)}>
              <Image src={url} className='image_container' alt="Cutting Board" width={500} height={500} />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <>
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal">
            <Image src={selectedImage} alt="Selected CNC" width={800} height={800} />
          </div>
        </>
      )}
    </div>
  );
};

export default Cnc;
