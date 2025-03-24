
import React from 'react';
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  delay = "",
  className,
}) => {
  return (
    <div 
      className={cn(
        "feature-card glassmorphism rounded-xl p-6 h-full appear-animation", 
        delay,
        className
      )}
    >
      <div className="feature-icon mb-5 inline-block p-3 rounded-lg bg-primary/10 text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-foreground/70">{description}</p>
    </div>
  );
};

export default FeatureCard;
