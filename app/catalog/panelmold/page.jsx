'use client';
import { useState, useEffect } from 'react';
import { storage } from '../../../firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import '../catalog.css';
import Image from 'next/image';

const Panelmould = () => {
  const [panelMouldImages, setPanelMouldImages] = useState([]);
  const [pencilMouldImages, setPencilMouldImages] = useState([]);
  const [roundsImages, setRoundsImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchImages = async (path, setImageList) => {
    const listRef = ref(storage, path);
    const response = await listAll(listRef);
    const urls = await Promise.all(response.items.map(item => getDownloadURL(item)));
    setImageList(urls);
  };

  useEffect(() => {
    fetchImages('panel-mould/panel-mould', setPanelMouldImages);
    fetchImages('panel-mould/pencil-mould', setPencilMouldImages);
    fetchImages('panel-mould/rounds', setRoundsImages);
  }, []);

  const handleImageClick = (url) => {
    setSelectedImage(url);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="crown">
      <div className='crown_banner'>PANEL MOULD</div>
      <div className='crown_container'>
        <div className='crown_container_images'>
          {panelMouldImages.map((url, index) => (
            <div key={index} className='image_container_container' onClick={() => handleImageClick(url)}>
              <Image src={url} className='image_container' alt="Panel Mould" width={500} height={500} />
            </div>
          ))}
        </div>
      </div>

      <div className='bbcrown_banner'>PENCIL MOULD</div>
      <div className='crown_container'>
        <div className='crown_container_images'>
          {pencilMouldImages.map((url, index) => (
            <div key={index} className='image_container_container' onClick={() => handleImageClick(url)}>
              <Image src={url} className='image_container' alt="Pencil Mould" width={500} height={500} />
            </div>
          ))}
        </div>
      </div>

      <div className='bbcrown_banner'>ROUNDS</div>
      <div className='crown_container'>
        <div className='crown_container_images'>
          {roundsImages.map((url, index) => (
            <div key={index} className='image_container_container' onClick={() => handleImageClick(url)}>
              <Image src={url} className='image_container' alt="Rounds" width={500} height={500} />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <>
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal">
            <Image src={selectedImage} alt="Selected Image" width={600} height={600} />
          </div>
        </>
      )}
    </div>
  );
};

export default Panelmould;
