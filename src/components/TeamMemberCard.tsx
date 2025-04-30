
import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TeamMemberCardProps {
  name?: string;
  position?: string;
  image: string;
  to: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({
  name,
  position,
  image,
  to,
}) => {
  return (
    <div className="relative overflow-hidden rounded-lg bg-gray-100">
      <img
        src={image}
        alt={name || "Team member"}
        className="w-full h-56 object-cover"
      />
      <Link to={to} className="absolute top-4 right-4">
        <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-gray-100 transition-all">
          <ArrowUpRight size={20} className="text-gray-500" />
        </div>
      </Link>
    </div>
  );
};

export default TeamMemberCard;
