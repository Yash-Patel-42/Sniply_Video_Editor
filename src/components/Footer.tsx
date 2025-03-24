
import React from 'react';
import { Play } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 pt-16 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-10 md:mb-0">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow">
                <Play className="h-4 w-4 text-white fill-white" />
              </div>
              <span className="text-lg font-bold">Sniply</span>
            </div>
            <p className="text-foreground/70 max-w-xs">
              The AI-powered video editor designed for creating engaging short-form content for social media.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-3">
                <li><a href="#features" className="text-foreground/70 hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="text-foreground/70 hover:text-foreground transition-colors">How It Works</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Tutorials</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Support</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Legal</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-foreground/50 mb-4 md:mb-0">
            © {new Date().getFullYear()} Sniply. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-foreground/50 hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/50 hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
