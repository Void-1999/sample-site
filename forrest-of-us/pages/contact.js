import Link from 'next/link';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook, FaWhatsApp } from 'react-icons/fa';

const Contact = () => {
 return (
  <div className="min-h-screen flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/background.jpg)' }}>
      <div className="container mx-auto p-4">
        <h1 className="text-5xl font-bold mb-6 text-black">Get in Touch with Us!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-wood shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-black">Location</h2>
            <a href="https://maps.app.goo.gl/yR9oJczPfeme3YJj8" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg text-black hover:underline">
              <FaMapMarkerAlt className="mr-2" />
              Address: 11/B Parijatak society, Tandalja Near Muktinagar society, Old Padra Road Vadodara - 390020
            </a>
          </div>
          <div className="p-6 bg-wood shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-black">Email</h2>
            <a href="mailto:[forrestofus01@gmail.com]" className="flex items-center text-lg text-black hover:underline">
              <FaEnvelope className="mr-2" />
              forrestofus01@gmail.com
            </a>
          </div>
          <div className="p-6 bg-wood shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-black">Mobile Numbers</h2>
            <a href="tel:[+91 99982 22133]" className="flex items-center text-lg text-black hover:underline">
              <FaPhoneAlt className="mr-2" />
              Vidipta Bafna
            </a>
            <a href="tel:[+91 85117 35171]" className="flex items-center text-lg text-black hover:underline mt-2">
              <FaPhoneAlt className="mr-2" />
              Aditiya Tripathi
            </a>
          </div>
          <div className="p-6 bg-wood shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4 text-black">Social Media</h2>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/for.restofus?igsh=c3FxcHEzajAxbHFx" target="_blank" rel="noopener noreferrer" className="flex items-center text-lg text-black hover:underline">
                <FaInstagram className="mr-2" />
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
 );
};

export default Contact;