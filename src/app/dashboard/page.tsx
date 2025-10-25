'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { AppointmentBookingDialog } from '@/components/appointment-booking-dialog';
import { 
  Heart, Calendar, MapPin, Users, CheckCircle, Clock, 
  Phone, Globe, Star, Plus, Upload, Bell, FileText,
  Sparkles, TrendingUp, Award, AlertCircle
} from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

interface CarePlanStep {
  id: number;
  step_order: number;
  step_title: string;
  step_description: string;
  is_done: boolean;
  estimated_duration?: string;
  priority?: 'high' | 'medium' | 'low';
}

const initialCarePlan: CarePlanStep[] = [
  {
    id: 1,
    step_order: 1,
    step_title: 'Confirm pathology and obtain your report',
    step_description: 'Request your histopathology report from your doctor. This confirms the cancer type and helps guide treatment decisions.',
    is_done: false,
    estimated_duration: '1-2 days',
    priority: 'high'
  },
  {
    id: 2,
    step_order: 2,
    step_title: 'Book oncologist consultation',
    step_description: 'Bring all reports, medication list, and questions. Consider bringing a family member or friend for support.',
    is_done: false,
    estimated_duration: '1 week',
    priority: 'high'
  },
  {
    id: 3,
    step_order: 3,
    step_title: 'Schedule baseline imaging',
    step_description: 'CT/MRI/PET scans as ordered by your oncologist to determine the extent of disease.',
    is_done: false,
    estimated_duration: '2-3 days',
    priority: 'high'
  },
  {
    id: 4,
    step_order: 4,
    step_title: 'Discuss treatment options',
    step_description: 'Review surgery, chemotherapy, radiation, hormonal therapy, and targeted therapy options with your care team.',
    is_done: false,
    estimated_duration: '1-2 weeks',
    priority: 'medium'
  },
  {
    id: 5,
    step_order: 5,
    step_title: 'Join local support group',
    step_description: 'Connect with others who understand your journey. Peer support improves treatment adherence and emotional well-being.',
    is_done: false,
    estimated_duration: 'Ongoing',
    priority: 'medium'
  }
];

const upcomingAppointments = [
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

const providers = [
  {
    id: 1,
    name: 'Cleveland Clinic Abu Dhabi',
    category: 'Hospital',
    rating: 4.8,
    distance: '2.5 km',
    phone: '+971 2 659 0200'
  },
  {
    id: 2,
    name: 'Sheikh Shakhbout Medical City',
    category: 'Hospital',
    rating: 4.6,
    distance: '15.2 km',
    phone: '+971 2 314 4444'
  }
];

export default function Dashboard() {
  const [planSteps, setPlanSteps] = useState<CarePlanStep[]>(initialCarePlan);
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedStepForBooking, setSelectedStepForBooking] = useState<string>('');
  const { toast } = useToast();
  
  const completedSteps = planSteps.filter(step => step.is_done).length;
  const progressPercentage = (completedSteps / planSteps.length) * 100;
  const nextStep = planSteps.find(step => !step.is_done);

  const toggleStep = (stepId: number) => {
    setPlanSteps(prev => 
      prev.map(step => 
        step.id === stepId ? { ...step, is_done: !step.is_done } : step
      )
    );
  };

  const handleBookAppointment = (stepTitle?: string) => {
    setSelectedStepForBooking(stepTitle || '');
    setIsBookingOpen(true);
  };

  const handleBookingSuccess = () => {
    toast({
      title: "Appointment Booked!",
      description: "You'll receive a confirmation email shortly.",
    });
  };

  const handleSetReminder = (stepTitle: string) => {
    toast({
      title: "Reminder Set",
      description: `We'll remind you about: ${stepTitle}`,
    });
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

  const getDaysUntil = (date: Date) => {
    const days = Math.ceil((date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
    if (days === 0) return 'Today';
    if (days === 1) return 'Tomorrow';
    return `in ${days} days`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Header */}
      <div className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link href="/" className="flex items-center space-x-2 group">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <span className="text-lg font-bold">Cancer Navigator</span>
              </Link>
              <Badge variant="secondary" className="bg-secondary">
                Abu Dhabi • Breast Cancer
              </Badge>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" asChild>
                <Link href="/resources">Resources</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/trials">Clinical Trials</Link>
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Bell className="h-4 w-4" />
                <span className="hidden sm:inline">Notifications</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-foreground mb-2 flex items-center gap-2">
            Welcome back, Sarah 
            <Sparkles className="h-8 w-8 text-accent" />
          </h1>
          <p className="text-lg text-muted-foreground">
            You're making great progress on your care journey. Here's what's next.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card className="border-l-4 border-l-primary">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Progress</p>
                  <p className="text-3xl font-bold text-primary">{Math.round(progressPercentage)}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-accent">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Upcoming</p>
                  <p className="text-3xl font-bold text-accent">{upcomingAppointments.length}</p>
                </div>
                <Calendar className="h-8 w-8 text-accent" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-success">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Completed</p>
                  <p className="text-3xl font-bold text-success">{completedSteps}</p>
                </div>
                <Award className="h-8 w-8 text-success" />
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-info">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Community</p>
                  <p className="text-3xl font-bold text-info">234</p>
                </div>
                <Users className="h-8 w-8 text-info" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Next Step Highlight */}
        {nextStep && (
          <Card className="mb-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="h-5 w-5 text-primary" />
                    <CardTitle className="text-xl">Your Next Step</CardTitle>
                    <Badge className="bg-accent">Priority: {nextStep.priority?.toUpperCase()}</Badge>
                  </div>
                  <CardDescription className="text-base">
                    <strong className="text-foreground">{nextStep.step_title}</strong>
                  </CardDescription>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {nextStep.step_description}
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    Estimated time: {nextStep.estimated_duration}
                  </p>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button 
                  className="bg-accent hover:bg-accent/90"
                  onClick={() => handleBookAppointment(nextStep.step_title)}
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  Book Appointment
                </Button>
                <Button variant="outline" onClick={() => handleSetReminder(nextStep.step_title)}>
                  <Bell className="h-4 w-4 mr-2" />
                  Set Reminder
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/resources">
                    <FileText className="h-4 w-4 mr-2" />
                    Learn More
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Column - Care Plan */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress Overview */}
            <Card>
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
                    : `Keep going! You're ${Math.round(progressPercentage)}% through your care plan.`
                  }
                </p>
              </CardContent>
            </Card>

            {/* Visual Timeline */}
            <Card>
              <CardHeader>
                <CardTitle>Your Care Journey Timeline</CardTitle>
                <CardDescription>Track your progress step by step</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {planSteps.map((step, index) => (
                    <div key={step.id} className="relative">
                      {/* Timeline Line */}
                      {index < planSteps.length - 1 && (
                        <div 
                          className={`absolute left-4 top-12 bottom-0 w-0.5 ${
                            step.is_done ? 'bg-success' : 'bg-border'
                          }`} 
                        />
                      )}
                      
                      <div className="flex gap-4">
                        {/* Timeline Indicator */}
                        <div className="relative">
                          <div 
                            className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
                              step.is_done 
                                ? 'bg-success border-success text-white' 
                                : step.id === nextStep?.id
                                ? 'bg-primary border-primary text-white animate-pulse'
                                : 'bg-background border-border text-muted-foreground'
                            }`}
                          >
                            {step.is_done ? (
                              <CheckCircle className="h-5 w-5" />
                            ) : (
                              <span className="text-sm font-bold">{step.step_order}</span>
                            )}
                          </div>
                        </div>

                        {/* Content */}
                        <div 
                          className={`flex-1 pb-6 ${
                            step.id === nextStep?.id ? 'ring-2 ring-primary rounded-lg p-4 bg-primary/5' : 'p-4'
                          }`}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h3 className={`font-semibold ${
                              step.is_done ? 'text-success line-through' : 'text-foreground'
                            }`}>
                              {step.step_title}
                            </h3>
                            {step.priority && !step.is_done && (
                              <Badge 
                                variant="outline" 
                                className={
                                  step.priority === 'high' 
                                    ? 'border-accent text-accent'
                                    : 'border-muted-foreground text-muted-foreground'
                                }
                              >
                                {step.priority}
                              </Badge>
                            )}
                          </div>
                          
                          <p className="text-sm text-muted-foreground mb-3">
                            {step.step_description}
                          </p>

                          {step.estimated_duration && !step.is_done && (
                            <p className="text-xs text-muted-foreground flex items-center gap-1 mb-3">
                              <Clock className="h-3 w-3" />
                              {step.estimated_duration}
                            </p>
                          )}

                          {step.is_done && (
                            <Badge variant="outline" className="border-success text-success mb-3">
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Completed
                            </Badge>
                          )}

                          {!step.is_done && (
                            <div className="flex flex-wrap gap-2">
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => handleBookAppointment(step.step_title)}
                                className="text-primary border-primary hover:bg-primary hover:text-white"
                              >
                                <Calendar className="h-3 w-3 mr-1" />
                                Book
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => handleSetReminder(step.step_title)}
                              >
                                <Bell className="h-3 w-3 mr-1" />
                                Remind
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline"
                                onClick={() => toggleStep(step.id)}
                              >
                                Mark Done
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  className="w-full justify-start bg-accent hover:bg-accent/90"
                  onClick={() => handleBookAppointment()}
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Book New Appointment
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Upload className="h-4 w-4 mr-2" />
                  Upload Document
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/resources">
                    <FileText className="h-4 w-4 mr-2" />
                    Browse Resources
                  </Link>
                </Button>
                <Button variant="outline" className="w-full justify-start" asChild>
                  <Link href="/trials">
                    <Sparkles className="h-4 w-4 mr-2" />
                    Find Clinical Trials
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Appointments */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center justify-between">
                  <span>Upcoming Appointments</span>
                  <Badge variant="secondary">{upcomingAppointments.length}</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingAppointments.map((apt) => (
                  <div key={apt.id} className="p-3 bg-muted/50 rounded-lg space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold text-sm">{apt.title}</h4>
                      <Badge variant="outline" className="text-xs">
                        {getDaysUntil(apt.starts_at)}
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {formatDate(apt.starts_at)}
                    </p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {apt.location}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Nearby Providers */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Nearby Providers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {providers.map((provider) => (
                  <div key={provider.id} className="p-3 border rounded-lg space-y-2">
                    <div className="flex items-start justify-between">
                      <h4 className="font-semibold text-sm">{provider.name}</h4>
                      <div className="flex items-center text-xs">
                        <Star className="h-3 w-3 fill-yellow-500 text-yellow-500 mr-1" />
                        {provider.rating}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {provider.distance} away
                    </p>
                    <Button size="sm" variant="outline" className="w-full text-xs">
                      <Phone className="h-3 w-3 mr-1" />
                      Call Now
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Appointment Booking Dialog */}
      <AppointmentBookingDialog
        open={isBookingOpen}
        onOpenChange={setIsBookingOpen}
        stepTitle={selectedStepForBooking}
        onSuccess={handleBookingSuccess}
      />
    </div>
  );
}
