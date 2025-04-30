
import React, { useState } from 'react';
import { Dialog, DialogContent } from './ui/dialog';
import { Images } from 'lucide-react';

const images = [
  "/lovable-uploads/09101af4-3a7c-4530-bba4-bc0eb282ae74.png",
  "/lovable-uploads/2505f83d-3905-40ff-873a-21e3db665630.png",
  "/lovable-uploads/2e59ab53-765f-4fb6-9bc2-34ef6b6c11c6.png",
  "/lovable-uploads/341df18e-44f9-4e34-a35b-b8234b1c7939.png",
  "/lovable-uploads/3677df55-adc0-4b1e-8260-2b11ef60959f.png",
  "/lovable-uploads/3e9260b9-c71e-4256-ad2b-d83e221c095a.png",
  "/lovable-uploads/4a49022d-35e0-4f26-a771-1632de142394.png",
  "/lovable-uploads/4c0b288a-e06d-4a10-98f7-38f7cbd74f46.png",
  "/lovable-uploads/5382a9f4-13af-4e8e-b9e0-135df9f771e5.png",
  "/lovable-uploads/5597df55-f1d4-489b-8561-a751221e739b.png",
  "/lovable-uploads/5731e299-9eb8-48bc-b71a-630323bf40f4.png",
  "/lovable-uploads/5b4071aa-107b-457f-831e-40e0be03a3fc.png",
  "/lovable-uploads/7dbb3ab3-18f9-49a9-a82c-88b8aab2f622.png",
  "/lovable-uploads/81f05a65-a7f8-4c51-b499-19c960b94461.png",
  "/lovable-uploads/98b534e3-6509-489e-a33f-5795d24e0df2.png",
  "/lovable-uploads/9fbd4077-0a27-48bc-adba-e25a11247a0e.png",
  "/lovable-uploads/9fe3bbe0-bbb2-45b3-8c63-dad99dfb2e2f.png",
  "/lovable-uploads/a401f205-ed76-473c-9a19-a149b1df737f.png",
  "/lovable-uploads/a5d9bf60-8dbc-4aee-aded-1ae315a95bb3.png",
  "/lovable-uploads/ad9a2a26-b15f-4849-9279-3ee46e0fc954.png",
  "/lovable-uploads/b3c5fb5f-9e5a-48ac-89d9-6cd17b8fe051.png",
  "/lovable-uploads/b5f75b92-2247-4cc7-b342-d1f80dd547d5.png",
  "/lovable-uploads/b7336ce8-02d0-4b87-9d78-e2a627bfa8ff.png",
  "/lovable-uploads/c2755f7a-fd84-4052-98d1-1dd4cea24021.png",
  "/lovable-uploads/c8983552-19ba-4543-bcdd-42b40d147150.png",
  "/lovable-uploads/cd791cf5-26cd-41ea-8dc8-f302f78d20fb.png",
  "/lovable-uploads/cfd07fff-d931-4312-ab41-eb537143af8f.png",
  "/lovable-uploads/e9e71fe5-b52b-4b6d-aec5-6dd9bb65555f.png"
];

interface ImageGalleryProps {
  className?: string;
}

export const ImageGallery = ({ className }: ImageGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ${className}`}>
        {images.map((image, index) => (
          <div 
            key={index}
            className="relative group aspect-square bg-gray-100 rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-all"
            onClick={() => setSelectedImage(image)}
          >
            <img 
              src={image} 
              alt={`Image ${index + 1}`} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
              <div className="text-white flex flex-col items-center gap-2">
                <Images className="w-6 h-6" />
                <span className="text-xs">View</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-4xl w-full h-auto flex items-center justify-center">
          {selectedImage && (
            <div className="relative w-full">
              <img 
                src={selectedImage} 
                alt="Selected image" 
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="mt-4 text-center text-sm text-gray-600">
                {selectedImage.split('/').pop()}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};
