
import React from 'react';

interface NewsItemProps {
  date: string;
  content: string;
  link?: string;
}

const NewsItem = ({ date, content, link }: NewsItemProps) => (
  <div className="flex flex-col md:flex-row mb-6">
    <div className="w-full md:w-1/4 mb-2 md:mb-0">
      <h3 className="text-lg text-[#1A3654] font-medium">{date}</h3>
    </div>
    <div className="w-full md:w-3/4 bg-gray-100 p-4 rounded flex justify-between items-center">
      <p>{content}</p>
      {link && (
        <a href={link} className="ml-4 flex items-center justify-center w-10 h-10 bg-white rounded-full hover:bg-gray-200 transition">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 18L15 12L9 6" stroke="#1A3654" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      )}
    </div>
  </div>
);

const TrackRecord = () => {
  const newsItems: NewsItemProps[] = [
    {
      date: "October 2024",
      content: "PETsys was present at 2024 IEEE NSS/MIC, with a booth and presentations"
    },
    {
      date: "June 2024",
      content: "PETsys Electronics was distinguished by CERN with the very exclusive CMS Industrial Award 2024.",
      link: "#"
    },
    {
      date: "December 2023",
      content: "2023: Best year ever for PETsys, once more"
    },
    {
      date: "November 2023",
      content: "PETsys was present at 2023 IEEE NSS/MIC, with a booth and presentations"
    },
    {
      date: "December 2022",
      content: "2022: Best year ever for PETsys, again"
    }
  ];

  return (
    <div className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-medium text-[#1A3654] mb-16">Track Record</h1>
        
        <div className="mb-16">
          {newsItems.map((item, index) => (
            <NewsItem 
              key={index} 
              date={item.date} 
              content={item.content}
              link={item.link}
            />
          ))}
        </div>
        
        <div className="flex justify-center mb-16">
          <button className="bg-gray-400 text-white px-6 py-3 rounded hover:bg-opacity-90 transition">
            SHOW MORE
          </button>
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

export default TrackRecord;
