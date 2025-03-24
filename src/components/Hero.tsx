
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-3xl opacity-60 animate-pulse-slow"></div>
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-gradient-to-tr from-accent/20 to-primary/20 rounded-full blur-3xl opacity-60 animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col items-center text-center mb-12 md:mb-20">
          <div className="inline-block px-4 py-2 mb-6 bg-secondary rounded-full">
            <p className="text-sm font-medium text-primary">Professional Video Editing Made Simple</p>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight md:leading-tight mb-6 max-w-4xl appear-animation">
            <span className="text-gradient">Transform</span> Your Social Videos <br className="hidden md:block" />with AI-Powered Editing
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mb-8 appear-animation appear-animation-delay-1">
            Create engaging short-form content with automatic background removal, captions, color grading, and transitions—all with a simple, intuitive interface.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 appear-animation appear-animation-delay-2">
            <Button className="btn-primary" size="lg">
              Start Editing Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button className="btn-secondary" size="lg">
              Watch Demo
            </Button>
          </div>
        </div>
        
        <div className="relative mx-auto max-w-5xl appear-animation appear-animation-delay-3">
          <div className="bg-editor rounded-2xl shadow-2xl overflow-hidden border border-editor/50">
            {/* Editor UI Preview */}
            <div className="p-4 border-b border-gray-800 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-gray-400">Untitled Project - Sniply</div>
              </div>
              <div className="flex space-x-4">
                <div className="px-3 py-1 bg-editor-accent rounded-md text-xs font-medium text-white">Export</div>
                <div className="px-3 py-1 bg-gray-700 rounded-md text-xs font-medium text-white">Preview</div>
              </div>
            </div>
            
            <div className="flex h-96 md:h-[500px]">
              {/* Left Sidebar */}
              <div className="w-16 border-r border-gray-800 flex flex-col items-center py-6 space-y-8">
                <div className="w-10 h-10 rounded-lg bg-editor-accent/20 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full bg-editor-accent"></div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                  <div className="w-5 h-1 bg-gray-500 rounded"></div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                  <div className="w-5 h-5 rounded bg-gray-500"></div>
                </div>
                <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center">
                  <div className="w-1 h-5 bg-gray-500 rounded"></div>
                </div>
              </div>
              
              {/* Main Area */}
              <div className="flex-1 flex flex-col">
                {/* Preview Area */}
                <div className="flex-1 flex items-center justify-center p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-editor-accent/10 to-purple-500/10"></div>
                  <div className="w-full max-w-md aspect-[9/16] bg-black rounded-lg flex items-center justify-center relative overflow-hidden shadow-lg">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                    <div className="absolute bottom-6 left-0 right-0 text-center px-6">
                      <div className="inline-block px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-white text-sm font-medium mb-2">
                        Auto-Generated Caption
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Timeline */}
                <div className="h-24 border-t border-gray-800 p-4">
                  <div className="h-full bg-gray-800 rounded-lg flex items-center px-4">
                    <div className="w-14 h-14 rounded bg-editor-accent/20 flex items-center justify-center mr-2 flex-shrink-0">
                      <div className="w-8 h-8 rounded bg-editor-accent/40"></div>
                    </div>
                    <div className="flex-1 h-6 bg-gray-700 rounded-full mx-2 overflow-hidden">
                      <div className="w-2/3 h-full bg-gradient-to-r from-editor-accent to-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Panel */}
              <div className="w-60 border-l border-gray-800 p-4 flex flex-col">
                <div className="mb-4">
                  <div className="text-xs text-gray-400 mb-2">Tools</div>
                  <div className="space-y-2">
                    <div className="p-2 bg-editor-accent/20 rounded-lg flex items-center space-x-3">
                      <div className="w-6 h-6 rounded bg-editor-accent/40 flex-shrink-0"></div>
                      <div className="text-xs text-white">Background Remove</div>
                    </div>
                    <div className="p-2 bg-gray-800 rounded-lg flex items-center space-x-3">
                      <div className="w-6 h-6 rounded bg-gray-700 flex-shrink-0"></div>
                      <div className="text-xs text-gray-400">Auto Caption</div>
                    </div>
                    <div className="p-2 bg-gray-800 rounded-lg flex items-center space-x-3">
                      <div className="w-6 h-6 rounded bg-gray-700 flex-shrink-0"></div>
                      <div className="text-xs text-gray-400">Color Grading</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="text-xs text-gray-400 mb-2">Properties</div>
                  <div className="p-3 bg-gray-800 rounded-lg space-y-3">
                    <div className="space-y-1">
                      <div className="text-xs text-gray-400">Intensity</div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="w-3/4 h-full bg-editor-accent rounded-full"></div>
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-xs text-gray-400">Quality</div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-editor-accent rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Reflection */}
          <div className="absolute -bottom-16 left-4 right-4 h-40 bg-gradient-to-b from-editor/60 to-transparent blur-md rounded-2xl -z-10 scale-95 opacity-30"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
