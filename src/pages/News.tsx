
import React from 'react';
import WavyBackground from '../components/WavyBackground';
import PageHeading from '../components/PageHeading';
import MediaCard from '../components/MediaCard';

const News = () => {
  return (
    <WavyBackground>
      <div className="container mx-auto px-4 py-12">
        <PageHeading title="Media" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MediaCard 
            title="PETsys Electronics: The Next Big Idea"
            image="/lovable-uploads/98b534e3-6509-489e-a33f-5795d24e0df2.png"
            to="/news/next-big-idea"
          />
          
          <MediaCard 
            title="Jornal de Negócios"
            image="/lovable-uploads/5731e299-9eb8-48bc-b71a-630323bf40f4.png"
            date="19.08.2017"
            to="/news/jornal-de-negocios"
          />
          
          <MediaCard 
            title="WebSummit 2016"
            image="/lovable-uploads/7dbb3ab3-18f9-49a9-a82c-88b8aab2f622.png"
            to="/news/websummit-2016"
          />
          
          <MediaCard 
            title="News report from Deutsche Welle Television on the PETsys technology"
            image="/lovable-uploads/4c0b288a-e06d-4a10-98f7-38f7cbd74f46.png"
            to="/news/deutsche-welle-report"
          />
          
          <MediaCard 
            title="Computer animation of PETsys innovative Positron Emission Mammography"
            image="/lovable-uploads/3677df55-adc0-4b1e-8260-2b11ef60959f.png"
            to="/news/animation-positron-emission"
          />
          
          <MediaCard 
            title="Setup of ClearPEM-Sonic at CHU Hopital Nord Marseille, France"
            image="/lovable-uploads/341df18e-44f9-4e34-a35b-b8234b1c7939.png"
            to="/news/clearpem-sonic-setup"
          />
          
          <MediaCard 
            title="ClearPEM – Sonic presentation, Taguaparque"
            image="/lovable-uploads/2e59ab53-765f-4fb6-9bc2-34ef6b6c11c6.png"
            to="/news/clearpem-sonic-presentation"
          />
        </div>
      </div>
    </WavyBackground>
  );
};

export default News;
