'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Heart, Calendar, MapPin, Users, Plus, CheckCircle, Clock, Phone, Globe, Star } from 'lucide-react';
import Link from 'next/link';

const carePlan = [
  {
    id: 1,
    step_order: 1,
    step_title: 'Confirm pathology and obtain your report',
    step_description: 'Request your histopathology report from your doctor. This confirms the cancer type and helps guide treatment decisions.',
    is_done: true
  },
  {
    id: 2,
    step_order: 2,
    step_title: 'Book oncologist consultation',
    step_description: 'Bring all reports, medication list, and questions. Consider bringing a family member or friend for support.',
    is_done: true
  },
  {
    id: 3,
    step_order: 3,
    step_title: 'Schedule baseline imaging',
    step_description: 'CT/MRI/PET scans as ordered by your oncologist to determine the extent of disease.',
    is_done: false
  },
  {
    id: 4,
    step_order: 4,
    step_title: 'Discuss treatment options',
    step_description: 'Review surgery, chemotherapy, radiation, hormonal therapy, and targeted therapy options with your care team.',
    is_done: false
  },
  {
    id: 5,
    step_order: 5,
    step_title: 'Join local support group',
    step_description: 'Connect with others who understand your journey. Peer support improves treatment adherence and emotional well-being.',
    is_done: false
  }
];

const providers = [
  {
    id: 1,
    name: 'Cleveland Clinic Abu Dhabi',
    category: 'Hospital',
    address: 'Al Maryah Island, Abu Dhabi',
    phone: '+971 2 659 0200',
    website: 'https://www.clevelandclinicabudhabi.ae',
    blurb: 'Comprehensive oncology center with multidisciplinary team.',
    rating: 4.8,
    distance: '2.5 km'
  },
  {
    id: 2,
    name: 'Sheikh Shakhbout Medical City',
    category: 'Hospital',
    address: 'Al Mafraq, Abu Dhabi',
    phone: '+971 2 314 4444',
    website: 'https://ssmc.ae',
    blurb: 'Tertiary care with advanced oncology services.',
    rating: 4.6,
    distance: '15.2 km'
  },
  {
    id: 3,
    name: 'National Screening Program',
    category: 'NGO',
    address: 'Citywide, Abu Dhabi',
    phone: '+971 2 123 4567',
    website: 'https://www.screening.ae',
    blurb: 'Breast cancer awareness & screening support.',
    rating: 4.5,
    distance: 'Varies'
  }
];

const appointments = [
  {
    id: 1,
    title: 'Oncologist Consultation',
    starts_at: new Date('2024-12-20T10:00:00'),
    location: 'Cleveland Clinic Abu Dhabi',
    notes: 'Bring pathology reports and medication list.',
    provider_name: 'Dr. Sarah Johnson'
  },
  {
    id: 2,
    title: 'CT Scan',
    starts_at: new Date('2024-12-22T14:30:00'),
    location: 'Imaging Center, SSMC',
    notes: 'Contrast enhanced - fasting required',
    provider_name: 'Radiology Department'
  }
];

const communityPosts = [
  {
    id: 1,
    user_name: 'Sarah',
    content: 'Just finished my first chemo session. The team at Cleveland Clinic was amazing. Remember to bring someone with you for support!',
    created_at: new Date('2024-12-15T10:30:00'),
    city: 'Abu Dhabi',
    cancer_type: 'Breast Cancer'
  },
  {
    id: 2,
    user_name: 'Ahmed',
    content: 'Found a great parking spot near SSMC - use the underground parking B2, it\'s usually less crowded.',
    created_at: new Date('2024-12-14T15:45:00'),
    city: 'Abu Dhabi',
    cancer_type: 'Breast Cancer'
  },
  {
    id: 3,
    user_name: 'Fatima',
    content: 'The support group meeting last week was so helpful. Meeting others who understand makes such a difference.',
    created_at: new Date('2024-12-13T09:20:00'),
    city: 'Abu Dhabi',
    cancer_type: 'Breast Cancer'
  }
];

export default function Dashboard() {
  const [planSteps, setPlanSteps] = useState(carePlan);
  const completedSteps = planSteps.filter(step => step.is_done).length;
  const progressPercentage = (completedSteps / planSteps.length) * 100;

  const toggleStep = (stepId: number) => {
    setPlanSteps(prev => 
      prev.map(step => 
        step.id === stepId ? { ...step, is_done: !step.is_done } : step
      )
    );
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: '2-digit'
    }).format(date);
  };

  const formatRelativeTime = (date: Date) => {
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return 'Just now';
    if (diffInHours < 24) return `${diffInHours}h ago`;
    const diffInDays = Math.floor(diffInHours / 24);
    return `${diffInDays}d ago`;
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
              <Badge variant="secondary">
                Abu Dhabi • Breast Cancer
              </Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/resources">Resources</Link>
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
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back! Here's your care journey
          </h1>
          <p className="text-lg text-muted-foreground">
            You're making progress. Keep going, one step at a time.
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="h-5 w-5 text-primary" />
              Your Care Plan Progress
            </CardTitle>
            <CardDescription>
              {completedSteps} of {planSteps.length} steps completed
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Progress value={progressPercentage} className="h-3 mb-4" />
            <p className="text-sm text-muted-foreground">
              {progressPercentage === 100 
                ? "🎉 Excellent! You've completed all your initial steps." 
                : `You're ${Math.round(progressPercentage)}% through your initial care plan. Keep going!`
              }
            </p>
          </CardContent>
        </Card>

        {/* Main Tabs */}
        <Tabs defaultValue="plan" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="plan" className="flex items-center gap-2">
              <CheckCircle className="h-4 w-4" />
              Plan
            </TabsTrigger>
            <TabsTrigger value="providers" className="flex items-center gap-2">
              <MapPin className="h-4 w-4" />
              Providers
            </TabsTrigger>
            <TabsTrigger value="appointments" className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              Appointments
            </TabsTrigger>
            <TabsTrigger value="community" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Community
            </TabsTrigger>
          </TabsList>

          {/* Plan Tab */}
          <TabsContent value="plan" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Your 5-Step Navigation Plan</CardTitle>
                <CardDescription>
                  Check off steps as you complete them. You can always come back to review.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {planSteps.map((step) => (
                    <div 
                      key={step.id} 
                      className={`flex gap-4 p-4 rounded-lg border ${
                        step.is_done ? 'bg-success/5 border-success/20' : 'bg-card'
                      }`}
                    >
                      <div className="flex-shrink-0 pt-1">
                        <Checkbox 
                          checked={step.is_done}
                          onCheckedChange={() => toggleStep(step.id)}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className={`font-semibold mb-2 ${
                          step.is_done ? 'text-success line-through' : 'text-foreground'
                        }`}>
                          Step {step.step_order}: {step.step_title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {step.step_description}
                        </p>
                        {step.is_done && (
                          <Badge variant="success" className="mt-2">
                            <CheckCircle className="h-3 w-3 mr-1" />
                            Completed
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Providers Tab */}
          <TabsContent value="providers" className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Local Healthcare Providers</h2>
              <Button variant="outline" size="sm">
                <MapPin className="h-4 w-4 mr-2" />
                View Map
              </Button>
            </div>
            
            <div className="grid gap-4">
              {providers.map((provider) => (
                <Card key={provider.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{provider.name}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="secondary">{provider.category}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Star className="h-3 w-3 mr-1 fill-current text-yellow-500" />
                            {provider.rating}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3 mr-1" />
                            {provider.distance}
                          </div>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Save
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      {provider.blurb}
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <span>{provider.address}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span>{provider.phone}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <a href={provider.website} target="_blank" rel="noopener noreferrer" 
                           className="text-primary hover:underline">
                          Visit Website
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Appointments Tab */}
          <TabsContent value="appointments" className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Your Appointments</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Appointment
              </Button>
            </div>

            {appointments.length === 0 ? (
              <Card>
                <CardContent className="text-center py-12">
                  <Calendar className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-2">No appointments yet</h3>
                  <p className="text-muted-foreground mb-4">
                    Keep important dates in one place. Add your first appointment.
                  </p>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Your First Appointment
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {appointments.map((appointment) => (
                  <Card key={appointment.id}>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-lg">{appointment.title}</CardTitle>
                          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4" />
                            {formatDate(appointment.starts_at)}
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{appointment.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{appointment.provider_name}</span>
                        </div>
                        {appointment.notes && (
                          <div className="mt-2 p-2 bg-muted/50 rounded text-muted-foreground">
                            {appointment.notes}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Community Tab */}
          <TabsContent value="community" className="space-y-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Abu Dhabi • Breast Cancer Community</h2>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                New Post
              </Button>
            </div>

            <div className="bg-muted/30 border border-muted rounded-lg p-4 mb-4">
              <p className="text-sm text-muted-foreground">
                <strong>Community Guidelines:</strong> No medical advice. Be kind and supportive. 
                Flag inappropriate content for moderation.
              </p>
            </div>

            <div className="space-y-4">
              {communityPosts.map((post) => (
                <Card key={post.id}>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <span className="text-sm font-semibold text-primary">
                          {post.user_name[0]}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-semibold">{post.user_name}</span>
                          <span className="text-sm text-muted-foreground">
                            {formatRelativeTime(post.created_at)}
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed mb-3">
                          {post.content}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <Button variant="ghost" size="sm">Like</Button>
                          <Button variant="ghost" size="sm">Reply</Button>
                          <Button variant="ghost" size="sm">Flag</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}