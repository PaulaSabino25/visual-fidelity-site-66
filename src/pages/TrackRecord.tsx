
import React from 'react';
import WavyBackground from '../components/WavyBackground';
import PageHeading from '../components/PageHeading';
import TimelineItem from '../components/TimelineItem';
import { Button } from '../components/ui/button';

const TrackRecord = () => {
  return (
    <WavyBackground>
      <div className="container mx-auto px-4 py-12">
        <PageHeading title="Track Record" />
        
        <div className="max-w-3xl mx-auto">
          <TimelineItem 
            date="October 2024"
            description="PETsys was present at 2024 IEEE NSS/MIC, with a booth and presentations"
          />
          
          <TimelineItem 
            date="June 2024"
            description="PETsys Electronics was distinguished by CERN with the very exclusive CMS Industrial Award 2024."
            link={{
              text: "know more",
              url: "/news/cern-cms-award"
            }}
          />
          
          <TimelineItem 
            date="December 2023"
            description="2023: Best year ever for PETsys, once more"
          />
          
          <TimelineItem 
            date="November 2023"
            description="PETsys was present at 2023 IEEE NSS/MIC, with a booth and presentations"
          />
          
          <TimelineItem 
            date="December 2022"
            description="2022: Best year ever for PETsys, again"
          />
          
          <div className="text-center mt-12">
            <Button
              variant="secondary"
              className="uppercase font-medium"
            >
              Show More
            </Button>
          </div>
        </div>
      </div>
    </WavyBackground>
  );
};

export default TrackRecord;
