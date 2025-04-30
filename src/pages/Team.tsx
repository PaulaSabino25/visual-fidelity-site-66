
import React from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";

const TeamMember = ({ image, name = "", role = "" }) => (
  <div className="group relative bg-gray-200 rounded-lg overflow-hidden aspect-square">
    <img 
      src={image} 
      alt={name} 
      className="w-full h-full object-cover"
    />
    <div className="absolute top-0 right-0 p-2">
      <div className="bg-white p-2 rounded-full hover:bg-gray-100 transition cursor-pointer">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="#1A3654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  </div>
);

const Team = () => {
  // Placeholder images for team members
  const directors = [
    "/lovable-uploads/5731e299-9eb8-48bc-b71a-630323bf40f4.png",
    "/lovable-uploads/b3c5fb5f-9e5a-48ac-89d9-6cd17b8fe051.png",
    "/lovable-uploads/c8983552-19ba-4543-bcdd-42b40d147150.png",
    "/lovable-uploads/5731e299-9eb8-48bc-b71a-630323bf40f4.png"
  ];
  
  const management = [
    "/lovable-uploads/5731e299-9eb8-48bc-b71a-630323bf40f4.png",
    "/lovable-uploads/b3c5fb5f-9e5a-48ac-89d9-6cd17b8fe051.png",
    "/lovable-uploads/c8983552-19ba-4543-bcdd-42b40d147150.png",
    "/lovable-uploads/5731e299-9eb8-48bc-b71a-630323bf40f4.png"
  ];
  
  const consultants = [
    "/lovable-uploads/5731e299-9eb8-48bc-b71a-630323bf40f4.png",
    "/lovable-uploads/b3c5fb5f-9e5a-48ac-89d9-6cd17b8fe051.png",
    "/lovable-uploads/c8983552-19ba-4543-bcdd-42b40d147150.png",
    "/lovable-uploads/5731e299-9eb8-48bc-b71a-630323bf40f4.png"
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-medium text-[#1A3654] mb-8">Meet the Team</h1>
        
        <div className="mb-16">
          <p className="text-gray-700 max-w-3xl mb-16">
            PETsys Electronics Management Team embodies the vision settled by the company to become world provider in high-resolution medical imaging. The team gathers expertise from science and technology with a strong business and high-value technology transfer experience, in the world market.
          </p>
          
          <div className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl text-[#1A3654]">Board of Directors</h2>
            </div>
            
            <Carousel className="w-full">
              <div className="relative">
                <CarouselContent>
                  {directors.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/4">
                      <TeamMember image={image} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300" />
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300" />
              </div>
            </Carousel>
          </div>
          
          <div className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl text-[#1A3654]">Management Committee</h2>
            </div>
            
            <Carousel className="w-full">
              <div className="relative">
                <CarouselContent>
                  {management.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/4">
                      <TeamMember image={image} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300" />
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300" />
              </div>
            </Carousel>
          </div>
          
          <div className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl text-[#1A3654]">Consultants</h2>
            </div>
            
            <Carousel className="w-full">
              <div className="relative">
                <CarouselContent>
                  {consultants.map((image, index) => (
                    <CarouselItem key={index} className="md:basis-1/4">
                      <TeamMember image={image} />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300" />
                <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-200 hover:bg-gray-300" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
      
      {/* Wave Background */}
      <div className="bg-[#1A3654] h-64 relative -mx-4 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 transform -translate-y-99%">
          <svg viewBox="0 0 1440 200" xmlns="http://www.w3.org/2000/svg" className="fill-[#1A3654]">
            <path d="M0,128L80,117.3C160,107,320,85,480,90.7C640,96,800,128,960,133.3C1120,139,1280,117,1360,106.7L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Team;
