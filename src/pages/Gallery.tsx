
import React from 'react';
import WavyBackground from '../components/WavyBackground';
import PageHeading from '../components/PageHeading';
import { ImageGallery } from '../components/ImageGallery';

const Gallery = () => {
  return (
    <WavyBackground>
      <div className="container mx-auto px-4 py-12">
        <PageHeading title="Image Gallery" subtitle="All project images available" />
        <ImageGallery />
      </div>
    </WavyBackground>
  );
};

export default Gallery;
