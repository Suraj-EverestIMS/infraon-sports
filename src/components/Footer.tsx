import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, CookingPot as Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 flex items-center justify-center">
                <img src="https://infraon.io/assets/img/favicon.svg" alt="Logo" width={'150'} className="w-full h-full object-contain" />
              </div>
            </a>
            <span className="text-xl font-bold text-white">Infraon Sports Tournament 2025</span>
            <p className="text-gray-400 mb-4">
              The premier table tennis tournament bringing together the players from different teams.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Infraon-107350731609994" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://twitter.com/infraoncorp" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://www.instagram.com/infraoncorp/" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@infraoncorp" className="text-gray-400 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#matches" className="text-gray-400 hover:text-white transition-colors">Matches</a></li>
              <li><a href="#points" className="text-gray-400 hover:text-white transition-colors">Points Table</a></li>
              <li><a href="#brackets" className="text-gray-400 hover:text-white transition-colors">Tournament Bracket</a></li>
              <li><a href="#highlights" className="text-gray-400 hover:text-white transition-colors">Highlights</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Info</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tournament Rules</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Player Profiles</a></li> */}
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Sponsors</a></li> */}
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Media</a></li> */}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gray-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Sree Gururaya Mansion, SN 1, No 759, 8th Main Rd, South Wing, KSRTC Layout, J. P. Nagar 3rd phase, Bengaluru, 560 078.Karnataka, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-gray-400 flex-shrink-0" />
                <a href="tel:+12345678900" className="text-gray-400 hover:text-white transition-colors">+1 (415) 322-2237</a>
              </div>
              {/* <div className="flex items-center gap-3">
                <Mail size={18} className="text-gray-400 flex-shrink-0" />
                <a href="mailto:info@pingpongmasters.com" className="text-gray-400 hover:text-white transition-colors">info@pingpongmasters.com</a>
              </div> */}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {currentYear} PingPong Masters. All rights reserved.</p>
          {/* <div className="mt-2 space-x-4">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;