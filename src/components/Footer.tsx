
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const icons = {
    facebook: <FaFacebookF className="w-5 h-5" />,
    twitter: <FaTwitter className="w-5 h-5" />,
    instagram: <FaInstagram className="w-5 h-5" />
  };
  
  return (
    <footer className="bg-gray-50 py-16 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl font-bold mb-6">
              <span className="font-bold">Samyam</span> National Level Organisation
            </h2>
            <p className="text-gray-600 mb-6 max-w-md">
              Empowering communities and transforming lives through compassion, 
              collaboration, and meaningful action.
            </p>
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram'].map((platform) => (
                <a 
                  key={platform}
                  href={`https://${platform}.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all hover:bg-primary hover:text-white"
                  aria-label={platform}
                >
                  {icons[platform]} {/* FIXED: Now icons will appear */}
                  <span className="sr-only">{platform}</span>
                 
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5" />
                <p className="text-gray-600">
                vill + post - Pitambarpur, Dist - Jahanabad , Bihar
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <p className="text-gray-600">+91 xxxxxxxxx</p>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <p className="text-gray-600">samyamnational@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {currentYear} Samyam National Level Org. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm text-gray-500 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
