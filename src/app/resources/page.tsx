'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Heart, Users, DollarSign, Phone, Globe, Download } from 'lucide-react';
import Link from 'next/link';

const resources = [
  {
    id: 1,
    title: 'Understanding Your Breast Cancer Diagnosis',
    description: 'A comprehensive guide to help you understand your pathology report and what it means for your treatment journey.',
    category: 'Education',
    type: 'PDF Guide',
    url: '#',
    icon: BookOpen,
    featured: true
  },
  {
    id: 2,
    title: 'Questions to Ask Your Oncologist',
    description: 'Essential questions to prepare for your appointments to make the most of your time with your care team.',
    category: 'Education',
    type: 'Checklist',
    url: '#',
    icon: BookOpen
  },
  {
    id: 3,
    title: 'Managing Treatment Side Effects',
    description: 'Practical tips for managing common side effects of cancer treatment and when to seek medical help.',
    category: 'Education',
    type: 'Article',
    url: '#',
    icon: Heart
  },
  {
    id: 4,
    title: 'Nutrition During Cancer Treatment',
    description: 'Evidence-based nutrition guidance to support your body during and after treatment.',
    category: 'Wellness',
    type: 'Guide',
    url: '#',
    icon: Heart
  },
  {
    id: 5,
    title: 'Emotional Support & Mental Health',
    description: 'Resources for coping with the emotional impact of cancer diagnosis and treatment.',
    category: 'Support',
    type: 'Resource List',
    url: '#',
    icon: Users
  },
  {
    id: 6,
    title: 'Financial Assistance Programs',
    description: 'Information about financial support available for cancer patients in Abu Dhabi.',
    category: 'Financial',
    type: 'Directory',
    url: '#',
    icon: DollarSign
  }
];

const supportServices = [
  {
    id: 1,
    name: 'Friends of Cancer Patients (FOCP)',
    description: 'Provides financial, emotional, and social support to cancer patients and their families.',
    phone: '+971 2 555 9999',
    website: 'https://www.focp.ae',
    services: ['Financial Aid', 'Emotional Support', 'Awareness Programs']
  },
  {
    id: 2,
    name: 'Cancer Patient Care Society',
    description: 'Community-based organization offering support groups and counseling services.',
    phone: '+971 2 444 3333',
    website: 'https://www.cancerpatients.ae',
    services: ['Support Groups', 'Counseling', 'Educational Workshops']
  },
  {
    id: 3,
    name: 'Abu Dhabi Health Authority Hotline',
    description: '24/7 health information and support line for residents.',
    phone: '800 1717',
    website: 'https://www.haad.ae',
    services: ['Health Information', 'Provider Directory', 'Emergency Guidance']
  }
];

export default function Resources() {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Education': return 'bg-blue-100 text-blue-800';
      case 'Support': return 'bg-green-100 text-green-800';
      case 'Wellness': return 'bg-purple-100 text-purple-800';
      case 'Financial': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-primary" />
                <span className="text-lg font-bold">Cancer Navigator</span>
              </Link>
              <Badge variant="secondary">Resources</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/trials">Clinical Trials</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Educational Resources & Support
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Access trusted information, support services, and practical guides to help you navigate your cancer journey.
          </p>
        </div>

        {/* Featured Resource */}
        <Card className="mb-12 border-primary/20 bg-primary/5">
          <CardHeader>
            <div className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <Badge className="bg-primary text-primary-foreground">Featured Guide</Badge>
            </div>
            <CardTitle className="text-2xl">
              Understanding Your Breast Cancer Diagnosis
            </CardTitle>
            <CardDescription className="text-lg">
              A comprehensive guide to help you understand your pathology report and what it means for your treatment journey.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
                <Download className="h-4 w-4 mr-2" />
                Download PDF
              </Button>
              <Button size="lg" variant="outline">
                Read Online
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Educational Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Educational Materials</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resources.map((resource) => {
              const Icon = resource.icon;
              return (
                <Card key={resource.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="h-5 w-5 text-primary" />
                      <Badge className={getCategoryColor(resource.category)}>
                        {resource.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{resource.type}</span>
                      <Button variant="outline" size="sm" asChild>
                        <Link href={resource.url}>
                          {resource.type === 'PDF Guide' ? 'Download' : 'Read More'}
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Support Services */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Support Services in Abu Dhabi</h2>
          <div className="grid gap-6">
            {supportServices.map((service) => (
              <Card key={service.id}>
                <CardHeader>
                  <CardTitle className="text-xl">{service.name}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Services Offered:</h4>
                      <div className="space-y-2">
                        {service.services.map((serviceItem, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-sm">{serviceItem}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Contact Information:</h4>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Phone className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm">{service.phone}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-muted-foreground" />
                          <a href={service.website} target="_blank" rel="noopener noreferrer" 
                             className="text-sm text-primary hover:underline">
                            Visit Website
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Emergency Information */}
        <section className="mt-12">
          <Card className="border-destructive/20 bg-destructive/5">
            <CardHeader>
              <CardTitle className="text-destructive">Emergency Information</CardTitle>
              <CardDescription>
                When to seek immediate medical attention during your cancer treatment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Seek Emergency Care For:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Fever above 38°C (100.4°F)</li>
                    <li>• Difficulty breathing or chest pain</li>
                    <li>• Severe headache or confusion</li>
                    <li>• Uncontrolled bleeding</li>
                    <li>• Severe allergic reaction</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Emergency Contacts:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Emergency:</span>
                      <span>998</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Ambulance:</span>
                      <span>998</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-medium">Poison Control:</span>
                      <span>800 424</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Disclaimer */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            These resources are for informational purposes only and do not replace professional medical advice. 
            Always consult with your healthcare team for medical decisions.
          </p>
        </div>
      </div>
    </div>
  );
}