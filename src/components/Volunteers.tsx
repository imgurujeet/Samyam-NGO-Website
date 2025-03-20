
import React, { useEffect, useState } from 'react';
import AnimatedText from './AnimatedText';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Volunteer {
  id: number;
  name: string;
  role: string;
  message: string;
  image: string;
}

const volunteers: Volunteer[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Organizational President",
    message: "Working with Samyam has been the most rewarding experience of my life. Together, we're creating lasting change in our communities.",
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 2,
    name: "Mritunjay Prasad",
    role: "Secratary",
    message: "I've seen firsthand how education transforms lives. Samyam's commitment to accessible learning for all is truly inspiring.",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 3,
    name: "Rita Sharma",
    role: "Treasurer",
    message: "The dedication of everyone at Samyam to improving healthcare access has made a real difference in underserved communities.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=150&q=80",
  },
  {
    id: 4,
    name: "Mahesh Kumar",
    role: "Member",
    message: "Together with Samyam, we're building a sustainable future for the next generation. Every small action matters.",
    image: "https://placehold.co/150x150/3498db/ffffff?text=VP",
  },
  {
    id: 5,
    name: "Shrawan Kumar",
    role: "Memeber",
    message: "Empowering young people to become leaders has been my passion, and Samyam provides the perfect platform for this important work.",
    image: "https://placehold.co/150x150/9b59b6/ffffff?text=AR",
  },
  {
    id: 6,
    name: "Ravindra Kumar",
    role: "Member",
    message: "Empowering young people to become leaders has been my passion, and Samyam provides the perfect platform for this important work.",
    image: "https://placehold.co/150x150/9b59b6/ffffff?text=AR",
  },

  {
    id: 7,
    name: "Ajay Kumar",
    role: "Member",
    message: "Empowering young people to become leaders has been my passion, and Samyam provides the perfect platform for this important work.",
    image: "https://placehold.co/150x150/9b59b6/ffffff?text=AR",
  }
  

];

const Volunteers = () => {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<any>(null);
  
  // Setup automatic sliding
  useEffect(() => {
    if (!api || !isAutoPlaying) return;
    
    const interval = setInterval(() => {
      api.scrollNext();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [api, isAutoPlaying]);
  
  // Update current slide index when scroll happens
  useEffect(() => {
    if (!api) return;
    
    const handleSelect = () => {
      setCurrentSlide(api.selectedScrollSnap());
    };
    
    api.on('select', handleSelect);
    return () => api.off('select', handleSelect);
  }, [api]);

  // Pause autoplay when user interacts with carousel
  const handleInteraction = () => {
    setIsAutoPlaying(false);
    
    // Resume autoplay after 10 seconds of no interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section id="volunteers" className="section-padding bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="text-xs font-medium text-blue-600">Our Team</span>
          </div>
          
          <AnimatedText
            text="Meet Our Volunteers"
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-balance mb-6"
          />
          
          <AnimatedText
            text="Our dedicated volunteers are the heart of Samyam. Their passion and commitment drive our mission forward every day."
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            delay={300}
          />
        </div>
        
        <div 
          className="px-4 sm:px-6 md:px-10 pb-10" 
          onClick={handleInteraction}
          onTouchStart={handleInteraction}
        >
          <Carousel 
            setApi={setApi}
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {volunteers.map((volunteer) => (
                <CarouselItem key={volunteer.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <div className="glass-card p-6 h-full flex flex-col">
                    <div className="flex items-center gap-4 mb-4">
                      <Avatar className="h-16 w-16 border-2 border-white shadow-sm">
                        <AvatarImage src={volunteer.image} alt={volunteer.name} />
                        <AvatarFallback>{volunteer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div className="text-left">
                        <h3 className="font-medium text-lg">{volunteer.name}</h3>
                        <p className="text-blue-600 text-sm">{volunteer.role}</p>
                      </div>
                    </div>
                    <blockquote className="text-gray-600 italic flex-grow">
                      "{volunteer.message}"
                    </blockquote>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-8 flex justify-center gap-2">
              <CarouselPrevious className="static translate-y-0 h-9 w-9" />
              <div className="flex items-center gap-1 px-2">
                {volunteers.map((_, index) => (
                  <span 
                    key={index}
                    className={`block h-2 w-2 rounded-full transition-colors duration-300 ${
                      currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <CarouselNext className="static translate-y-0 h-9 w-9" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Volunteers;
