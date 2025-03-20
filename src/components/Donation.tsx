
import { Share2, Copy, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import AnimatedText from './AnimatedText';

const Donation = () => {
  const [copied, setCopied] = useState(false);
  
  const bankDetails = {
    accountName: "Samyam Foundation",
    accountNumber: "1234567890",
    bankName: "Universal Bank",
    ifscCode: "UNIV0001234",
    swiftCode: "UNIVABCD"
  };
  
  const copyBankDetails = () => {
    const details = Object.entries(bankDetails)
      .map(([key, value]) => `${key}: ${value}`)
      .join('\n');
      
    navigator.clipboard.writeText(details);
    setCopied(true);
    
    setTimeout(() => setCopied(false), 3000);
  };
  
  const shareDetails = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Donate to Samyam Foundation',
          text: `Bank Details:\n${Object.entries(bankDetails)
            .map(([key, value]) => `${key}: ${value}`)
            .join('\n')}`,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    }
  };

  return (
    <section id="donate" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="text-xs font-medium text-blue-600">Support Our Cause</span>
          </div>
          
          <AnimatedText
            text="Make a Donation"
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-balance mb-6"
          />
          
          <AnimatedText
            text="Your generosity drives our mission forward. Every contribution helps us create a more equitable world."
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            delay={300}
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* QR Code */}
          <div className="glass-card p-8 flex flex-col items-center">
            <h3 className="text-xl font-semibold mb-6">Scan to Donate</h3>
            <div className="w-64 h-64 relative mb-6 mx-auto">
              <div className="absolute inset-0 bg-gray-100 rounded-lg animate-pulse-subtle" />
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=https://example.com/donate" 
                alt="Donation QR Code" 
                className="w-full h-full object-cover rounded-lg relative z-10"
                loading="lazy"
              />
            </div>
            <p className="text-gray-600 text-sm">
              Scan this QR code with your banking app to make a direct donation
            </p>
          </div>
          
          {/* Bank Details */}
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold mb-6">Bank Transfer Details</h3>
            <div className="space-y-4 mb-8">
              {Object.entries(bankDetails).map(([key, value]) => (
                <div key={key} className="flex justify-between items-center border-b border-gray-100 pb-3">
                  <span className="text-gray-500 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center gap-4">
              <button
                onClick={copyBankDetails}
                className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full transition-all hover:bg-gray-50 active:scale-[0.98]"
              >
                {copied ? <CheckCircle2 className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? "Copied!" : "Copy Details"}</span>
              </button>
              
              <button
                onClick={shareDetails}
                className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-full transition-all hover:bg-gray-50 active:scale-[0.98]"
              >
                <Share2 className="w-4 h-4" />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donation;
