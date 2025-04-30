
import React from 'react';
import WavyBackground from '../components/WavyBackground';
import PageHeading from '../components/PageHeading';
import AccordionSection from '../components/AccordionSection';
import PublicationItem from '../components/PublicationItem';

const Publications = () => {
  return (
    <WavyBackground>
      <div className="container mx-auto px-4 py-12">
        <PageHeading 
          title="Scientific Publications" 
          subtitle="(Patents, Papers and Slides)"
        />
        
        <AccordionSection 
          title="Patents" 
          to="/publications/patents"
          rounded={false}
        />
        
        <AccordionSection 
          title="Most significant publications" 
          to="/publications/significant"
          rounded={false}
        />
        
        <AccordionSection 
          title="Conference Proceedings, Presentations and Slides" 
          to="/publications/conferences"
          rounded={false}
        />
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-[#1A3140] mb-6">
            Independent Publications
          </h2>
          <h3 className="text-lg text-gray-700 mb-6">
            Based on PETsys TOFPET ASIC
          </h3>
          
          <div className="space-y-8">
            <PublicationItem
              index={1}
              title="Design Study of a Dedicated Head and Neck Cancer PET System"
              authors="Muller L, Barret Nedder, and Stéphane Vandenberghe"
              reference="IEEE TRANSACTIONS ON RADIATION AND PLASMA MEDICAL SCIENCES, VOL. 4, NO. 4, JULY 2020"
            />
            
            <PublicationItem
              index={2}
              title="Convolutional Neural Network for Crystal Identification and Gamma-Ray Position Localization in PET"
              authors="Brent Huisman, Stefaan Vandenberghe"
              reference="IEEE TRANSACTIONS ON RADIATION AND PLASMA MEDICAL SCIENCES, VOL. 4, NO. 3, MAY 2020"
            />
            
            <PublicationItem
              index={3}
              title="Cognitive-function study of a dual-readout detector based on TOFPET2 application-specific integrated circuit"
              authors="Akira MIZUSHIMA, NUTIFAFA Y DOUMON, RIKU HASHIMOTO, GIORA"
              reference="MEDICAL PHYSICS 2020; DOI: 10.1002/MP.14516"
            />
            
            <PublicationItem
              index={4}
              title="First J-PET Demonstrator: A Compton imager with Dynamic Electronic Collimation"
              authors="Giancarlo Sportelli, Nicola Belleno, P Camarri, F Corsi, G De Robertis, F Iacoangeli, G Marino, R. Perrino, C. Santoni, G Saponaro, et al."
              reference="IEEE NSS 2019 Proceeding, October 2020"
            />
            
            <PublicationItem
              index={5}
              title="Exploring TOF capabilities of PET detector blocks based on large monolithic T crystals and analog SiPMs"
              authors="Lamprou Efthymios, Andrea González-Montoro, Gabriela Llosa-Surely, Jose M Benlloch"
              reference="Physics Medica 70 (2020): 10-18."
            />
          </div>
        </div>
      </div>
    </WavyBackground>
  );
};

export default Publications;
