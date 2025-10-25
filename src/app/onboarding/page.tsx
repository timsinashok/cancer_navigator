'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Heart, ArrowLeft, ArrowRight, CheckCircle, Info } from 'lucide-react';
import Link from 'next/link';

const cities = [
  { value: 'abu-dhabi', label: 'Abu Dhabi' },
  { value: 'dubai', label: 'Dubai' },
  { value: 'sharjah', label: 'Sharjah' },
  { value: 'ajman', label: 'Ajman' },
];

const cancerTypes = [
  { value: 'breast-cancer', label: 'Breast Cancer' },
  { value: 'lung-cancer', label: 'Lung Cancer' },
  { value: 'colorectal-cancer', label: 'Colorectal Cancer' },
  { value: 'prostate-cancer', label: 'Prostate Cancer' },
  { value: 'cervical-cancer', label: 'Cervical Cancer' },
];

const stages = [
  { value: 'unknown', label: 'Unknown / Not Sure' },
  { value: 'stage-1', label: 'Stage I' },
  { value: 'stage-2', label: 'Stage II' },
  { value: 'stage-3', label: 'Stage III' },
  { value: 'stage-4', label: 'Stage IV' },
];

const generatedPlan = [
  {
    step_order: 1,
    step_title: 'Confirm pathology and obtain your report',
    step_description: 'Request your histopathology report from your doctor. This confirms the cancer type and helps guide treatment decisions.'
  },
  {
    step_order: 2,
    step_title: 'Book oncologist consultation',
    step_description: 'Bring all reports, medication list, and questions. Consider bringing a family member or friend for support.'
  },
  {
    step_order: 3,
    step_title: 'Schedule baseline imaging',
    step_description: 'CT/MRI/PET scans as ordered by your oncologist to determine the extent of disease.'
  },
  {
    step_order: 4,
    step_title: 'Discuss treatment options',
    step_description: 'Review surgery, chemotherapy, radiation, hormonal therapy, and targeted therapy options with your care team.'
  },
  {
    step_order: 5,
    step_title: 'Join local support group',
    step_description: 'Connect with others who understand your journey. Peer support improves treatment adherence and emotional well-being.'
  }
];

export default function Onboarding() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCancerType, setSelectedCancerType] = useState('');
  const [selectedStage, setSelectedStage] = useState('unknown');
  const [showPlan, setShowPlan] = useState(false);

  const progress = (currentStep / 4) * 100;

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowPlan(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSavePlan = () => {
    // In a real app, this would save to the database
    router.push('/dashboard');
  };

  if (showPlan) {
    return (
      <div className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-success/10 rounded-full mb-4">
              <CheckCircle className="h-8 w-8 text-success" />
            </div>
            <h1 className="text-3xl font-bold text-foreground mb-4">
              Your Personalized Care Plan is Ready
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              Based on your selections for {cancerTypes.find(c => c.value === selectedCancerType)?.label} in {cities.find(c => c.value === selectedCity)?.label}
            </p>
            <Badge variant="secondary" className="mb-8">
              <Info className="h-3 w-3 mr-1" />
              This is guidance, not medical advice
            </Badge>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5 text-primary" />
                Your 5-Step Navigation Plan
              </CardTitle>
              <CardDescription>
                We'll keep things simple. You can edit this plan anytime.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {generatedPlan.map((step, index) => (
                  <div key={step.step_order} className="flex gap-4 p-4 rounded-lg border bg-card">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-semibold">
                      {step.step_order}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-foreground mb-2">
                        {step.step_title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.step_description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={handleSavePlan}
              className="text-lg px-8 py-6"
            >
              Save Plan & Continue to Dashboard
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => setShowPlan(false)}
              className="text-lg px-8 py-6"
            >
              Edit Information
            </Button>
          </div>

          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>
              Remember: This navigation plan is for informational purposes only. 
              Always consult with your healthcare team for medical decisions.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
          <h1 className="text-3xl font-bold text-foreground mb-4">
            Let's create your personalized care plan
          </h1>
          <p className="text-lg text-muted-foreground">
            We'll ask a few questions to generate your step-by-step navigation guide.
          </p>
        </div>

        {/* Progress */}
        <div className="mb-8">
          <div className="flex justify-between text-sm text-muted-foreground mb-2">
            <span>Step {currentStep} of 4</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Step Content */}
        <Card>
          <CardHeader>
            <CardTitle>
              {currentStep === 1 && 'Select Your City'}
              {currentStep === 2 && 'Select Cancer Type'}
              {currentStep === 3 && 'Select Cancer Stage (Optional)'}
              {currentStep === 4 && 'Review Your Information'}
            </CardTitle>
            <CardDescription>
              {currentStep === 1 && 'Choose the city where you\'re seeking care. We\'ll show you local resources and providers.'}
              {currentStep === 2 && 'Select the primary cancer type. This helps us create the most relevant care plan for you.'}
              {currentStep === 3 && 'If you know the stage, select it. If not, that\'s okay - we\'ll create a general plan.'}
              {currentStep === 4 && 'Review your information before we generate your personalized care plan.'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {currentStep === 1 && (
              <div className="space-y-4">
                <Select value={selectedCity} onValueChange={setSelectedCity}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your city" />
                  </SelectTrigger>
                  <SelectContent>
                    {cities.map((city) => (
                      <SelectItem key={city.value} value={city.value}>
                        {city.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">
                  We'll show you hospitals, oncologists, and support services in your area.
                </p>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-4">
                <Select value={selectedCancerType} onValueChange={setSelectedCancerType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select cancer type" />
                  </SelectTrigger>
                  <SelectContent>
                    {cancerTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">
                  Different cancer types have different care pathways and support needs.
                </p>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-4">
                <Select value={selectedStage} onValueChange={setSelectedStage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select cancer stage" />
                  </SelectTrigger>
                  <SelectContent>
                    {stages.map((stage) => (
                      <SelectItem key={stage.value} value={stage.value}>
                        {stage.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <p className="text-sm text-muted-foreground">
                  Don't worry if you're not sure. "Unknown" is perfectly fine - we'll create a helpful general plan.
                </p>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="bg-muted/50 rounded-lg p-4">
                  <h3 className="font-semibold mb-3">Your Information:</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">City:</span>
                      <span className="font-medium">{cities.find(c => c.value === selectedCity)?.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Cancer Type:</span>
                      <span className="font-medium">{cancerTypes.find(c => c.value === selectedCancerType)?.label}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Stage:</span>
                      <span className="font-medium">{stages.find(s => s.value === selectedStage)?.label}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
                  <h3 className="font-semibold mb-2 text-primary">What happens next?</h3>
                  <p className="text-sm text-muted-foreground">
                    We'll generate a personalized 5-step care plan with actionable guidance, 
                    local provider recommendations, and next steps for your journey.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={
              (currentStep === 1 && !selectedCity) ||
              (currentStep === 2 && !selectedCancerType) ||
              (currentStep === 3 && !selectedStage)
            }
          >
            {currentStep === 4 ? 'Generate Plan' : 'Next'}
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        {/* Help Text */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>
            Your information is kept private and secure. We only use it to personalize your care plan.
          </p>
        </div>
      </div>
    </div>
  );
}