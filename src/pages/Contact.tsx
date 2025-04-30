
import React from 'react';
import WavyBackground from '../components/WavyBackground';
import PageHeading from '../components/PageHeading';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';

const Contact = () => {
  return (
    <WavyBackground>
      <div className="container mx-auto px-4 py-12">
        <PageHeading title="Contact" />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-8">
              <h3 className="text-xl font-semibold text-[#1A3140] mb-4">Address</h3>
              <div className="space-y-2 text-gray-700">
                <p>Taguspark,</p>
                <p>Ed. Tecnologia, 3.2 n.61-64,</p>
                <p>2740-257 Porto Salvo</p>
                <p>Oeiras, Portugal, European Union</p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-[#1A3140] mb-4">Contact Information</h3>
              <div className="space-y-2 text-gray-700">
                <p>info@petsyselectronics.com</p>
                <p>support@petsyselectronics.com</p>
                <p>(+351) 966 002 882</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-[#1A3140] mb-6">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="first-name" className="text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <Input id="first-name" placeholder="John" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="last-name" className="text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input id="email" type="email" placeholder="john.doe@example.com" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                  Subject
                </label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Message
                </label>
                <Textarea id="message" rows={5} placeholder="Write your message here..." />
              </div>
              
              <Button type="submit" className="w-full bg-[#1A3140] hover:bg-[#2a4658]">
                Send Message
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12447.175039488286!2d-9.311444385345362!3d38.73678106000325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecd2cbfd8fe55%3A0x32733a423931c142!2sTaguspark!5e0!3m2!1sen!2spt!4v1656424963416!5m2!1sen!2spt" 
            width="100%" 
            height="450" 
            style={{ border: 0, borderRadius: '0.5rem' }} 
            allowFullScreen 
            loading="lazy"
            title="PETsys Electronics Location"
          ></iframe>
        </div>
      </div>
    </WavyBackground>
  );
};

export default Contact;
