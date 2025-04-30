
import React from 'react';
import WavyBackground from '../components/WavyBackground';
import PageHeading from '../components/PageHeading';
import TeamMemberCard from '../components/TeamMemberCard';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Team = () => {
  return (
    <WavyBackground>
      <div className="container mx-auto px-4 py-12">
        <PageHeading title="Meet the Team" />
        
        <p className="text-gray-700 mb-10 max-w-3xl">
          PETsys Electronics Management Team embodies the vision settled by the company to become world provider in high-resolution medical imaging. The team gathers expertise from science and technology with a strong business and high-value technology transfer experience, in the world market.
        </p>
        
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-[#1A3140]">Board of Directors</h2>
            <div className="flex space-x-2">
              <button className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-400 transition-all">
                <ChevronLeft size={20} className="text-white" />
              </button>
              <button className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-400 transition-all">
                <ChevronRight size={20} className="text-white" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <TeamMemberCard
              image="/lovable-uploads/a5d9bf60-8dbc-4aee-aded-1ae315a95bb3.png"
              to="/team/member-1"
            />
            <TeamMemberCard
              image="/lovable-uploads/4a49022d-35e0-4f26-a771-1632de142394.png"
              to="/team/member-2"
            />
            <TeamMemberCard
              image="/lovable-uploads/a401f205-ed76-473c-9a19-a149b1df737f.png"
              to="/team/member-3"
            />
            <TeamMemberCard
              image="/lovable-uploads/c8983552-19ba-4543-bcdd-42b40d147150.png"
              to="/team/member-4"
            />
          </div>
        </div>
        
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-[#1A3140]">Management Committee</h2>
            <div className="flex space-x-2">
              <button className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-400 transition-all">
                <ChevronLeft size={20} className="text-white" />
              </button>
              <button className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-400 transition-all">
                <ChevronRight size={20} className="text-white" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <TeamMemberCard
              image="/lovable-uploads/2505f83d-3905-40ff-873a-21e3db665630.png"
              to="/team/member-5"
            />
            <TeamMemberCard
              image="/lovable-uploads/09101af4-3a7c-4530-bba4-bc0eb282ae74.png"
              to="/team/member-6"
            />
            <TeamMemberCard
              image="/lovable-uploads/3e9260b9-c71e-4256-ad2b-d83e221c095a.png"
              to="/team/member-7"
            />
            <TeamMemberCard
              image="/lovable-uploads/5b4071aa-107b-457f-831e-40e0be03a3fc.png"
              to="/team/member-8"
            />
          </div>
        </div>
        
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-[#1A3140]">Consultants</h2>
            <div className="flex space-x-2">
              <button className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-400 transition-all">
                <ChevronLeft size={20} className="text-white" />
              </button>
              <button className="h-8 w-8 bg-gray-300 rounded-full flex items-center justify-center shadow-sm hover:bg-gray-400 transition-all">
                <ChevronRight size={20} className="text-white" />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <TeamMemberCard
              image="/lovable-uploads/9fe3bbe0-bbb2-45b3-8c63-dad99dfb2e2f.png"
              to="/team/member-9"
            />
            <TeamMemberCard
              image="/lovable-uploads/9fbd4077-0a27-48bc-adba-e25a11247a0e.png"
              to="/team/member-10"
            />
            <TeamMemberCard
              image="/lovable-uploads/ad9a2a26-b15f-4849-9279-3ee46e0fc954.png"
              to="/team/member-11"
            />
            <TeamMemberCard
              image="/lovable-uploads/b7336ce8-02d0-4b87-9d78-e2a627bfa8ff.png"
              to="/team/member-12"
            />
          </div>
        </div>
      </div>
    </WavyBackground>
  );
};

export default Team;
