import React from 'react';
import FeatureCard from './FeatureCard';
import { 
  Video, 
  Sparkles, 
  Palette, 
  Scissors, 
  Monitor, 
  ArrowRightLeft, 
  Music, 
  ZoomIn 
} from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <Video className="h-6 w-6" />,
      title: "Automatic Background Remover",
      description: "Remove backgrounds with a single click using our advanced AI technology, perfect for creating professional-looking content."
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Automatic Caption Generator",
      description: "Generate accurate captions for your videos instantly, making your content accessible and increasing engagement."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "Automatic Color Grading",
      description: "Enhance your videos with professional color grading that matches the mood and style you want to achieve."
    },
    {
      icon: <Scissors className="h-6 w-6" />,
      title: "Video Trimming",
      description: "Easily trim and cut your videos to the perfect length for any social media platform."
    },
    {
      icon: <Monitor className="h-6 w-6" />,
      title: "High-Quality Export",
      description: "Export your videos in up to 1080p or 720p resolution, ensuring your content looks crisp on any device."
    },
    {
      icon: <ArrowRightLeft className="h-6 w-6" />,
      title: "Automatic Transitions",
      description: "Apply seamless transitions between clips with our AI-powered technology for a polished look."
    },
    {
      icon: <Music className="h-6 w-6" />,
      title: "Automatic Music & Sound Effects",
      description: "Find the perfect soundtrack and sound effects that match your video's mood and style."
    },
    {
      icon: <ZoomIn className="h-6 w-6" />,
      title: "Engaging Zoom Effects",
      description: "Add subtle zoom-in and zoom-out effects automatically to keep your audience engaged."
    }
  ];

  return (
    <section id="features" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute top-20 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 appear-animation">
            Powerful Features, <span className="text-gradient">Simple Interface</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto appear-animation appear-animation-delay-1">
            Everything you need to create stunning social media videos without the complexity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={`appear-animation-delay-${Math.min(index % 3 + 1, 3)}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
