import { Book, Heart, Earth, User, Users, Shield } from 'lucide-react';
import AnimatedText from './AnimatedText';

const About = () => {
  const cards = [
    {
      title: "Education & Skill Development",
      description:
        "Providing quality education, vocational training, and financial assistance to empower individuals with self-reliance and employment opportunities.",
      icon: <Book className="w-5 h-5 text-primary" />,
      delay: 300,
      bg: "bg-yellow-50"
    },
    {
      title: "Healthcare & Medical Support",
      description:
        "Organizing free medical camps, vaccination drives, and awareness programs to improve public health and well-being.",
      icon: <Heart className="w-5 h-5 text-primary" />,
      delay: 600,
      bg: "bg-rose-50"
    },
    {
      title: "Women & Child Welfare",
      description:
        "Supporting self-help groups, skill development programs, and care facilities for women, children, and vulnerable individuals.",
      icon: <User className="w-5 h-5 text-primary" />,
      delay: 900,
      bg: "bg-pink-50"
    },
    {
      title: "Environmental Conservation",
      description:
        "Promoting tree plantations, pollution control, and sustainable farming practices to protect and restore the environment.",
      icon: <Earth className="w-5 h-5 text-primary" />,
      delay: 1200,
      bg: "bg-green-50"
    },
    {
      title: "Social Awareness & Reform",
      description:
        "Fighting against dowry, child marriage, and caste discrimination while promoting legal literacy and human rights awareness.",
      icon: <Users className="w-5 h-5 text-primary" />,
      delay: 1500,
      bg: "bg-indigo-50"
    },
    {
      title: "Disaster Relief & Emergency Response",
      description:
        "Providing immediate relief, food, medical aid, and rehabilitation support during floods, earthquakes, and other natural calamities.",
      icon: <Shield className="w-5 h-5 text-primary" />,
      delay: 1800,
      bg: "bg-slate-50"
    },
  ];

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
            <span className="text-xs font-medium text-blue-600">About Us</span>
          </div>

          <AnimatedText
            text="Making a meaningful impact since 2025"
            className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900 text-balance mb-6"
          />

          <AnimatedText
            text="We've been working with communities around the world to create lasting change."
            className="text-xl text-gray-600 max-w-2xl mx-auto"
            delay={300}
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <div
              key={index}
              className={`p-8 flex flex-col h-full rounded-xl shadow-md ${item.bg}`}
            >
              <div className="mb-4 bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center">
                {item.icon}
              </div>

              <AnimatedText
                text={item.title}
                className="text-xl font-semibold mb-3 text-left"
                delay={item.delay}
              />

              <AnimatedText
                text={item.description}
                className="text-gray-600 text-left"
                delay={item.delay + 300}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
