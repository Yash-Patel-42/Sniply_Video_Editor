
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CallToAction = () => {
  return (
    <section id="how-it-works" className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="relative rounded-3xl overflow-hidden glassmorphism shadow-xl appear-animation">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 z-0"></div>
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center p-8 md:p-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Create Video Content <span className="text-gradient">10x Faster</span>
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Upload your raw footage and let our AI do the heavy lifting. No complex timelines or confusing tools—just professional results in minutes, not hours.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <span className="font-semibold text-primary">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Upload Your Video</h3>
                    <p className="text-foreground/70">Drag and drop your video or select from your device.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <span className="font-semibold text-primary">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Choose AI Enhancements</h3>
                    <p className="text-foreground/70">Select which AI features you want to apply to your video.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                    <span className="font-semibold text-primary">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium mb-1">Export & Share</h3>
                    <p className="text-foreground/70">Download your professionally edited video in high resolution.</p>
                  </div>
                </div>
              </div>
              
              <Button className="btn-primary mt-10" size="lg">
                Try It Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="relative z-10 bg-editor rounded-xl shadow-2xl overflow-hidden border border-editor/50">
                  <div className="p-3 border-b border-gray-800 flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-white">Processing Video...</div>
                  </div>
                  
                  <div className="p-6">
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="w-2/3 h-full bg-editor-accent animate-pulse"></div>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-white">Background Removal</span>
                          <span className="text-editor-accent">67%</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="w-4/5 h-full bg-editor-accent animate-pulse"></div>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-white">Auto Captions</span>
                          <span className="text-editor-accent">80%</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="w-1/2 h-full bg-editor-accent animate-pulse"></div>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-white">Color Grading</span>
                          <span className="text-editor-accent">50%</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="w-1/3 h-full bg-editor-accent animate-pulse"></div>
                        </div>
                        <div className="flex justify-between items-center text-xs">
                          <span className="text-white">Music Selection</span>
                          <span className="text-editor-accent">33%</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 p-4 bg-gray-800 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm text-white font-medium">Estimated Completion</div>
                        <div className="text-sm text-editor-accent">1:32</div>
                      </div>
                      <div className="text-xs text-gray-400">
                        Your video is being processed with AI-powered enhancements. 
                        This usually takes 2-3 minutes depending on length.
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Reflection effect */}
                <div className="absolute -bottom-16 left-10 right-10 h-40 bg-gradient-to-b from-editor/40 to-transparent blur-xl rounded-xl -z-10 scale-90 opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
