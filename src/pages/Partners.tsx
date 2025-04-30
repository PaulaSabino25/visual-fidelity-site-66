
import React from 'react';
import WavyBackground from '../components/WavyBackground';
import PageHeading from '../components/PageHeading';
import AccordionSection from '../components/AccordionSection';
import PartnerCard from '../components/PartnerCard';

const Partners = () => {
  return (
    <WavyBackground>
      <div className="container mx-auto px-4 py-12">
        <PageHeading title="Partners of PETsys Electronics" />
        
        <div className="mb-12">
          <AccordionSection 
            title="R&D Partners" 
            to="/partners/r-d-partners"
          />
          
          <div className="mt-8 px-4">
            <PartnerCard
              name="CERN"
              description="European Laboratory for Particle Physics"
              logo="/lovable-uploads/5382a9f4-13af-4e8e-b9e0-135df9f771e5.png"
              rightDescription="At CERN, physicists and engineers are probing the fundamental structure of the universe. They use the world's largest and most complex scientific instruments to study the basic constituents of matter - the fundamental particles. The instruments used at CERN are purpose-built particle accelerators and detectors. The involvement of CERN in the development of medical applications coming from its core activities has been increasing over the years."
            />
            
            <PartnerCard
              name="VRIJE UNIVERSITEIT BRUSSEL"
              description=""
              logo="/lovable-uploads/cfd07fff-d931-4312-ab41-eb537143af8f.png"
              rightDescription="The team of Prof S. Tavernier, Vrije Universiteit Brussel, has a long tradition in developing detectors for radiation detection and made major contributions to the development of the ClearPEM scanner."
            />
          </div>
          
          <AccordionSection 
            title="Clinical and Pre-clinical Partners" 
            to="/partners/clinical-partners"
          />
          
          <AccordionSection 
            title="Private" 
            to="/partners/private"
          />
          
          <AccordionSection 
            title="Other Partners" 
            to="/partners/other-partners"
          />
        </div>
      </div>
    </WavyBackground>
  );
};

export default Partners;
