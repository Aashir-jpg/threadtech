import React from 'react';
import { Button } from './ui/button.tsx';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card.tsx';
import { Badge } from './ui/badge.tsx';
import { Slider } from './ui/slider.tsx';
import { 
  Palette, 
  Shirt, 
  Sparkles, 
  ArrowRight, 
  Star,
  Instagram,
  Twitter,
  Facebook,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';

export function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      icon: <Palette className="w-12 h-12 text-indigo-600" />,
      title: "Color Analysis",
      description: "AI analyzes your skin tone and preferences to suggest perfect color combinations."
    },
    {
      icon: <Shirt className="w-12 h-12 text-indigo-600" />,
      title: "Style Matching",
      description: "Get personalized recommendations based on your personality and lifestyle."
    },
    {
      icon: <Sparkles className="w-12 h-12 text-indigo-600" />,
      title: "Trend Updates",
      description: "Stay current with the latest fashion trends tailored to your unique style."
    }
  ];

  const testimonials = [
    {
      quote: "ThreadTech completely transformed my wardrobe. The recommendations are spot-on!",
      author: "Sarah Johnson",
      role: "Fashion Blogger",
      avatar: "SJ"
    },
    {
      quote: "I finally found my personal style. The AI understands me better than I do!",
      author: "Mike Chen",
      role: "Software Engineer",
      avatar: "MC"
    },
    {
      quote: "Shopping is now effortless. Every suggestion is perfect for my lifestyle.",
      author: "Emma Davis",
      role: "Marketing Manager",
      avatar: "ED"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-indigo-600">ThreadTech</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</a>
              <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors">Features</a>
              <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="outline" className="text-indigo-600 border-indigo-600 hover:bg-indigo-50">
                Sign In
              </Button>
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</a>
                <a href="#features" className="text-gray-700 hover:text-indigo-600 transition-colors">Features</a>
                <a href="#about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
                <a href="#contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
                <div className="flex flex-col space-y-2 pt-4">
                  <Button variant="outline" className="text-indigo-600 border-indigo-600 hover:bg-indigo-50">
                    Sign In
                  </Button>
                  <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
                    Get Started
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-slate-50 to-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Discover Your
                <span className="text-indigo-600"> Perfect Style</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                AI-powered style recommendations tailored just for you. 
                Find clothes that match your personality, body type, and lifestyle.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 text-lg">
                  Start Style Quiz
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-8 py-4 text-lg">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center space-x-2">
                    <Palette className="w-6 h-6 text-indigo-600" />
                    <h3 className="text-lg font-semibold">Color Preferences</h3>
                  </div>
                  <div className="grid grid-cols-5 gap-2">
                    {['#000000', '#FFFFFF', '#8B7355', '#D2B48C', '#F5F5DC'].map((color) => (
                      <div
                        key={color}
                        className="w-12 h-12 rounded-lg border-2 border-indigo-200"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shirt className="w-6 h-6 text-indigo-600" />
                    <h3 className="text-lg font-semibold">Style Personality</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {['Classic', 'Modern', 'Minimalist'].map((style) => (
                      <Badge key={style} variant="secondary" className="px-3 py-1">
                        {style}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our AI-powered platform analyzes your preferences to deliver personalized style recommendations
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    {feature.icon}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900">{feature.title}</h4>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Style Preferences Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">Personalize Your Experience</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tell us about your style preferences to get the most accurate recommendations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Color Palettes Preview */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-indigo-600" />
                  Color Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <h4 className="font-medium">Classic Neutrals</h4>
                  <div className="flex gap-2">
                    {['#000000', '#FFFFFF', '#8B7355', '#D2B48C', '#F5F5DC'].map((color) => (
                      <div
                        key={color}
                        className="w-10 h-10 rounded-lg border-2 border-gray-200"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium">Cool Blues</h4>
                  <div className="flex gap-2">
                    {['#000080', '#4169E1', '#6495ED', '#87CEEB', '#B0E0E6'].map((color) => (
                      <div
                        key={color}
                        className="w-10 h-10 rounded-lg border-2 border-gray-200"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Style Personality Preview */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shirt className="w-5 h-5 text-indigo-600" />
                  Style Personality
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {['Classic', 'Modern', 'Bohemian', 'Minimalist', 'Edgy', 'Romantic'].map((style) => (
                    <Badge key={style} variant="outline" className="px-3 py-1">
                      {style}
                    </Badge>
                  ))}
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium">Style Boldness</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-500">
                      <span>Conservative</span>
                      <span>Bold & Adventurous</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-indigo-600 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">What Our Users Say</h3>
            <p className="text-xl text-gray-600">Join thousands of satisfied customers</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 text-center">
                <CardContent className="space-y-4">
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                  <div className="space-y-1">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto">
                      <span className="text-indigo-600 font-semibold">{testimonial.avatar}</span>
                    </div>
                    <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-4xl font-bold text-white mb-4">Ready to Find Your Style?</h3>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of users who have discovered their perfect style with ThreadTech
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 text-lg">
              Start Your Style Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-indigo-700 px-8 py-4 text-lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h4 className="text-2xl font-bold text-indigo-400">ThreadTech</h4>
              <p className="text-gray-400">
                AI-powered style recommendations that help you discover your perfect look.
              </p>
              <div className="flex space-x-4">
                <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
                <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer" />
              </div>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Company</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/careers" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="/press" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Product</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="/pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="/api" className="hover:text-white transition-colors">API</a></li>
                <li><a href="/integrations" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/help" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="/contact" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ThreadTech. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
