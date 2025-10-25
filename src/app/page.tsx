'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, MapPin, Calendar, Users, Shield, Star, CheckCircle } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-foreground">Cancer Navigator</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link href="#about">About</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="#features">Features</Link>
              </Button>
              <Button asChild>
                <Link href="/onboarding">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              🇦🇪 Abu Dhabi • Breast Cancer Support
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                AI-Powered
              </span>
              {" "}Cancer Navigation
              <span className="block text-foreground">Made Simple</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Your personal AI-powered care companion. Get step-by-step guidance, book appointments instantly, 
              and connect with local experts—all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild className="text-lg px-10 py-7 bg-accent hover:bg-accent/90 shadow-lg hover:shadow-xl transition-all">
                <Link href="/onboarding">Get Started →</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg px-10 py-7 border-2">
                <Link href="#features">See How It Works</Link>
              </Button>
            </div>
            
            {/* Trust Markers */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Shield className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">Safe & Secure</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Users className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">234+ Active Members</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="p-2 bg-primary/10 rounded-full">
                  <MapPin className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">Local Focus</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <div className="p-2 bg-primary/10 rounded-full">
                  <Star className="h-4 w-4 text-primary" />
                </div>
                <span className="font-medium">Expert-Reviewed</span>
              </div>
            </div>
          </div>

          {/* Our Mission */}
          <div className="max-w-5xl mx-auto mt-16">
            <Card className="border-2 border-primary/20 shadow-2xl">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-3xl md:text-4xl mb-4">Our Mission: Navigate Cancer with Confidence</CardTitle>
                <CardDescription className="text-lg">
                  Cancer navigation shouldn't be complex. We're starting with cancer care to help patients navigate their journey 
                  and make it easy—powered by AI and community wisdom.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="bg-gradient-to-br from-accent/10 to-primary/10 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Real Use Case: Copy Successful Navigation Paths
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Meet Sarah, who was diagnosed with breast cancer and felt overwhelmed. Through our platform, she discovered 
                    that Fatima had a similar diagnosis and successfully navigated her treatment at local facilities.
                  </p>
                  <div className="bg-card rounded-lg p-4 border-l-4 border-primary">
                    <p className="text-sm mb-2">
                      <strong>Sarah's Journey:</strong> She copied Fatima's navigation path with one click—following the same 
                      sequence of appointments, tests, and specialists. Within days, Sarah had her personalized roadmap, 
                      booked her first appointments, and felt empowered knowing she was following a proven path.
                    </p>
                    <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      <span>Community-proven paths</span>
                      <CheckCircle className="h-4 w-4 text-primary ml-2" />
                      <span>One-click execution</span>
                      <CheckCircle className="h-4 w-4 text-primary ml-2" />
                      <span>Instant confidence</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Origin Story Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-primary text-primary-foreground">Our Story</Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Why We Built This
            </h2>
          </div>

          <Card className="border-2 shadow-lg">
            <CardContent className="pt-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  We saw a critical problem: <strong>navigating cancer is incredibly difficult</strong>, especially in developing 
                  countries. Even in the UAE, where healthcare infrastructure exists, the process remains complex and overwhelming 
                  for patients and their families.
                </p>
                
                <div className="bg-accent/5 rounded-xl p-6 mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">The Inspiration</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>In many developing countries, patients struggle to find the right doctors, understand treatment options, 
                      and coordinate complex care journeys</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>Even in the UAE, despite having excellent facilities, navigating the healthcare system is confusing 
                      and time-consuming</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent font-bold mt-1">•</span>
                      <span>Private firms exist that help with navigation, but they're expensive and not accessible to everyone</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">→</span>
                      <span><strong>We believe AI can democratize this service</strong> and make expert navigation available to all</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-primary/5 rounded-xl p-6">
                  <h3 className="text-xl font-semibold mb-4 text-foreground">Building the MVP</h3>
                  <p className="text-muted-foreground mb-4">
                    As we developed the concept, we explored different approaches to create a Minimum Viable Product that 
                    could actually help patients today:
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Start local:</strong> Focus on Abu Dhabi to build deep, actionable provider networks</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>AI-first approach:</strong> Use AI to generate personalized care plans instantly</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Community wisdom:</strong> Enable patients to share and copy successful navigation paths</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Actionable integration:</strong> Direct appointment booking, not just information</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span><strong>Start with one cancer type:</strong> Begin with breast cancer to perfect the experience</span>
                    </li>
                  </ul>
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed mt-6 text-center">
                  <strong className="text-foreground">The result?</strong> A platform that combines AI intelligence with human experience 
                  to guide cancer patients through their journey—accessible, affordable, and empowering.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary text-primary-foreground">Why Cancer Navigator?</Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Everything you need in one place
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From your first appointment to ongoing support, we're here to guide you every step of the way. 
              Join hundreds of patients who've found clarity with our platform.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 border-primary/10 shadow-lg hover:shadow-2xl hover:border-primary/30 transition-all group">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Calendar className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">AI-Powered Care Plan</CardTitle>
                <CardDescription className="text-base">
                  Get a personalized 3-5 step roadmap with actionable next steps and instant appointment booking.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Step-by-step visual timeline</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Progress tracking & milestones</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>Smart reminders & checklists</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-accent/10 shadow-lg hover:shadow-2xl hover:border-accent/30 transition-all group">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">Verified Local Providers</CardTitle>
                <CardDescription className="text-base">
                  Book directly with top-rated oncologists, hospitals, and labs in Abu Dhabi.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Real-time availability</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Ratings & reviews from patients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                    <span>Insurance & distance info</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-success/10 shadow-lg hover:shadow-2xl hover:border-success/30 transition-all group">
              <CardHeader>
                <div className="w-14 h-14 bg-gradient-to-br from-success to-success/70 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Users className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl">24/7 AI Assistant & Community</CardTitle>
                <CardDescription className="text-base">
                  Get instant answers and connect with others who understand your journey.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span>AI chatbot for instant help</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Local patient community</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <span>Peer support & shared experiences</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Social Proof */}
          <div className="mt-16 bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Trusted by Cancer Patients Across Abu Dhabi</h3>
              <p className="text-muted-foreground">Real stories from real people</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm mb-4 italic">"This app made my cancer journey so much less overwhelming. Having everything in one place was a lifesaver."</p>
                <p className="text-sm font-semibold">- Sarah M.</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm mb-4 italic">"The AI assistant answered my questions at 2 AM when I was worried. The community support is incredible."</p>
                <p className="text-sm font-semibold">- Ahmed K.</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-sm mb-4 italic">"Booking appointments is so easy now. I found the best oncologist near me and scheduled in minutes."</p>
                <p className="text-sm font-semibold">- Fatima A.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            More than just information—guidance when you need it most
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Cancer Navigator is an informational tool and not a medical service. It doesn't replace professional 
            medical advice, diagnosis, or treatment. We provide navigation, coordination, and community support 
            to help you organize your care journey.
          </p>
          <div className="bg-muted/50 rounded-2xl p-8 text-left">
            <h3 className="text-xl font-semibold mb-4">What we offer:</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="mb-2">✓ Educational resources</p>
                <p className="mb-2">✓ Appointment organization</p>
                <p className="mb-2">✓ Local provider directory</p>
              </div>
              <div>
                <p className="mb-2">✓ Community connections</p>
                <p className="mb-2">✓ Care plan templates</p>
                <p className="mb-2">✓ Reminder system</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary via-primary/90 to-accent text-primary-foreground relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-white/20 text-white border-white/30">Free to Start</Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Start Your Care Journey Today
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join 234+ patients who've found clarity, confidence, and community with Cancer Navigator.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button 
              size="lg" 
              asChild 
              className="text-lg px-10 py-7 bg-white text-primary hover:bg-white/90 shadow-2xl hover:shadow-xl transition-all"
            >
              <Link href="/onboarding">Get Started Free →</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="text-lg px-10 py-7 border-2 border-white text-white hover:bg-white/10"
            >
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
          <p className="text-sm opacity-75">
            ✓ No credit card required  ✓ Set up in 2 minutes  ✓ Available in English & Arabic
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">Cancer Navigator</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Your guide through the cancer care journey.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/onboarding" className="hover:text-foreground">Get Started</Link></li>
                <li><Link href="/resources" className="hover:text-foreground">Resources</Link></li>
                <li><Link href="/trials" className="hover:text-foreground">Clinical Trials</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/about" className="hover:text-foreground">About Us</Link></li>
                <li><Link href="/privacy" className="hover:text-foreground">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-foreground">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Contact</h4>
              <p className="text-sm text-muted-foreground">
                Questions or feedback?<br />
                We're here to help.
              </p>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 Cancer Navigator. All rights reserved.</p>
            <p className="mt-2">
              This is not medical advice. Please consult with healthcare professionals for medical decisions.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}