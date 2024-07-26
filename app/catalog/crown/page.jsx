'use client';
import { useState, useEffect } from 'react';
import { storage } from '../../../firebase';
import { ref, listAll, getDownloadURL } from 'firebase/storage';
import '../catalog.css';
import Image from 'next/image';

const Crown = () => {
  const [imageList, setImageList] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      const listRef = ref(storage, 'crown/');
      const response = await listAll(listRef);
      const urls = await Promise.all(response.items.map(item => getDownloadURL(item)));
      setImageList(urls);
    };

    fetchImages();
  }, []);

  const handleImageClick = (url) => {
    setSelectedImage(url);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="crown">
      <div className='crown_banner'>CROWN</div>
      <div className='crown_container'>
        <div className='crown_container_images'>
          {imageList.map((url, index) => (
            <div key={index} className='image_container_container' onClick={() => handleImageClick(url)}>
              <Image src={url} className='image_container' alt="Crown" width={500} height={500} />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <>
          <div className="modal-overlay" onClick={closeModal}></div>
          <div className="modal">
            <Image src={selectedImage} alt="Selected Crown" width={800} height={800} />
          </div>
        </>
      )}
    </div>
  );
};

export default Crown;
