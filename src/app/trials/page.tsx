'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, Search, ExternalLink, MapPin, Users, Calendar, Filter } from 'lucide-react';
import Link from 'next/link';

const clinicalTrials = [
  {
    id: 1,
    title: 'Novel Immunotherapy for Metastatic Breast Cancer',
    description: 'A phase 2 study evaluating the effectiveness of a new immunotherapy combination in patients with metastatic breast cancer who have progressed on standard treatments.',
    phase: 'Phase 2',
    status: 'Recruiting',
    condition: 'Metastatic Breast Cancer',
    location: 'Cleveland Clinic Abu Dhabi',
    sponsor: 'Oncology Research Institute',
    ageRange: '18-75 years',
    gender: 'All',
    lastUpdated: '2024-12-01',
    nctId: 'NCT045678901',
    contactEmail: 'trials@clevelandclinicabudhabi.ae',
    contactPhone: '+971 2 659 0200',
    keyInclusion: [
      'Confirmed metastatic breast cancer',
      'Progressed on at least one prior therapy',
      'ECOG performance status 0-2',
      'Adequate organ function'
    ],
    keyExclusion: [
      'Active autoimmune disease',
      'Prior immunotherapy within 6 months',
      'Uncontrolled brain metastases',
      'Pregnancy or breastfeeding'
    ]
  },
  {
    id: 2,
    title: 'Targeted Therapy for HER2-Positive Breast Cancer',
    description: 'Study of a novel HER2-targeted antibody-drug conjugate in patients with HER2-positive metastatic breast cancer.',
    phase: 'Phase 3',
    status: 'Recruiting',
    condition: 'HER2-Positive Breast Cancer',
    location: 'Sheikh Shakhbout Medical City',
    sponsor: 'PharmaCorp International',
    ageRange: '18+ years',
    gender: 'All',
    lastUpdated: '2024-11-28',
    nctId: 'NCT045678902',
    contactEmail: 'research@ssmc.ae',
    contactPhone: '+971 2 314 4444',
    keyInclusion: [
      'HER2-positive metastatic breast cancer',
      'Measurable disease per RECIST 1.1',
      'Prior trastuzumab treatment allowed',
      'Life expectancy > 3 months'
    ],
    keyExclusion: [
      'Prior HER2-targeted ADC therapy',
      'Uncontrolled cardiac disease',
      'Active infection requiring antibiotics',
      'Known CNS metastases'
    ]
  },
  {
    id: 3,
    title: 'Quality of Life Study in Breast Cancer Survivors',
    description: 'Observational study evaluating long-term quality of life and outcomes in breast cancer survivors who completed treatment.',
    phase: 'Observational',
    status: 'Recruiting',
    condition: 'Breast Cancer Survivors',
    location: 'Multiple Centers in Abu Dhabi',
    sponsor: 'UAE Cancer Research Network',
    ageRange: '21-80 years',
    gender: 'Female',
    lastUpdated: '2024-12-05',
    nctId: 'NCT045678903',
    contactEmail: 'survivorstudy@uaecancer.ae',
    contactPhone: '+971 2 555 1234',
    keyInclusion: [
      'Completed breast cancer treatment',
      'Disease-free for at least 1 year',
      'Able to complete questionnaires',
      'Provide informed consent'
    ],
    keyExclusion: [
      'Current cancer treatment',
      'Recurrence of breast cancer',
      'Cognitive impairment',
      'Non-resident of UAE'
    ]
  },
  {
    id: 4,
    title: 'Neoadjuvant Therapy for Early-Stage Triple Negative Breast Cancer',
    description: 'Study comparing different neoadjuvant chemotherapy regimens in early-stage triple-negative breast cancer.',
    phase: 'Phase 2',
    status: 'Not yet recruiting',
    condition: 'Early-Stage Triple Negative Breast Cancer',
    location: 'Burjeel Medical City',
    sponsor: 'Middle East Oncology Group',
    ageRange: '18-70 years',
    gender: 'Female',
    lastUpdated: '2024-11-20',
    nctId: 'NCT045678904',
    contactEmail: 'trials@burjeel.com',
    contactPhone: '+971 2 631 4444',
    keyInclusion: [
      'Confirmed triple-negative breast cancer',
      'Stage II-III disease',
      'No prior systemic therapy',
      'Adequate bone marrow function'
    ],
    keyExclusion: [
      'Metastatic disease',
      'Prior chemotherapy',
      'Pregnancy or lactation',
      'Active infection'
    ]
  }
];

export default function Trials() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPhase, setSelectedPhase] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const filteredTrials = clinicalTrials.filter(trial => {
    const matchesSearch = trial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trial.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         trial.condition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPhase = !selectedPhase || trial.phase === selectedPhase;
    const matchesStatus = !selectedStatus || trial.status === selectedStatus;
    
    return matchesSearch && matchesPhase && matchesStatus;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Recruiting': return 'bg-green-100 text-green-800';
      case 'Not yet recruiting': return 'bg-yellow-100 text-yellow-800';
      case 'Active, not recruiting': return 'bg-blue-100 text-blue-800';
      case 'Completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPhaseColor = (phase: string) => {
    switch (phase) {
      case 'Phase 1': return 'bg-purple-100 text-purple-800';
      case 'Phase 2': return 'bg-blue-100 text-blue-800';
      case 'Phase 3': return 'bg-green-100 text-green-800';
      case 'Phase 4': return 'bg-orange-100 text-orange-800';
      case 'Observational': return 'bg-gray-100 text-gray-800';
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
              <Badge variant="secondary">Clinical Trials</Badge>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/resources">Resources</Link>
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
            Clinical Trials in Abu Dhabi
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore cutting-edge research and innovative treatments available through clinical trials in your area.
          </p>
        </div>

        {/* Important Notice */}
        <Card className="mb-8 border-primary/20 bg-primary/5">
          <CardHeader>
            <CardTitle className="text-primary">Important Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm leading-relaxed">
              Clinical trials are research studies that test new medical approaches. Participation is voluntary and should be discussed with your healthcare team. 
              This information is for educational purposes only and does not replace professional medical advice.
            </p>
          </CardContent>
        </Card>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Search & Filter Trials
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search trials, conditions, or keywords..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <Select value={selectedPhase} onValueChange={setSelectedPhase}>
                <SelectTrigger>
                  <SelectValue placeholder="Phase" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Phases</SelectItem>
                  <SelectItem value="Phase 1">Phase 1</SelectItem>
                  <SelectItem value="Phase 2">Phase 2</SelectItem>
                  <SelectItem value="Phase 3">Phase 3</SelectItem>
                  <SelectItem value="Phase 4">Phase 4</SelectItem>
                  <SelectItem value="Observational">Observational</SelectItem>
                </SelectContent>
              </Select>
              <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Statuses</SelectItem>
                  <SelectItem value="Recruiting">Recruiting</SelectItem>
                  <SelectItem value="Not yet recruiting">Not yet recruiting</SelectItem>
                  <SelectItem value="Active, not recruiting">Active, not recruiting</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-muted-foreground">
            Found {filteredTrials.length} trial{filteredTrials.length !== 1 ? 's' : ''} matching your criteria
          </p>
        </div>

        {/* Trials List */}
        <div className="space-y-6">
          {filteredTrials.map((trial) => (
            <Card key={trial.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <Badge className={getPhaseColor(trial.phase)}>
                        {trial.phase}
                      </Badge>
                      <Badge className={getStatusColor(trial.status)}>
                        {trial.status}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl mb-2">{trial.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {trial.description}
                    </CardDescription>
                  </div>
                  <Button variant="outline" asChild>
                    <a 
                      href={`https://clinicaltrials.gov/ct2/show/${trial.nctId}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View on ClinicalTrials.gov
                    </a>
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Eligibility
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Age Range:</p>
                        <p className="text-sm">{trial.ageRange}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Gender:</p>
                        <p className="text-sm">{trial.gender}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Key Inclusion:</p>
                        <ul className="text-sm space-y-1">
                          {trial.keyInclusion.slice(0, 2).map((criteria, index) => (
                            <li key={index} className="flex items-start gap-1">
                              <span className="text-green-600 mt-0.5">•</span>
                              <span>{criteria}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      Location & Contact
                    </h4>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Location:</p>
                        <p className="text-sm">{trial.location}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Sponsor:</p>
                        <p className="text-sm">{trial.sponsor}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Contact:</p>
                        <p className="text-sm">{trial.contactEmail}</p>
                        <p className="text-sm">{trial.contactPhone}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3 flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      Study Details
                    </h4>
                    <div className="space-y-2">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Condition:</p>
                        <p className="text-sm">{trial.condition}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Study ID:</p>
                        <p className="text-sm font-mono">{trial.nctId}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Last Updated:</p>
                        <p className="text-sm">{trial.lastUpdated}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button variant="outline" asChild className="flex-1">
                      <a href={`mailto:${trial.contactEmail}?subject=Inquiry about Clinical Trial ${trial.nctId}`}>
                        Email Study Team
                      </a>
                    </Button>
                    <Button variant="outline" asChild className="flex-1">
                      <a href={`tel:${trial.contactPhone}`}>
                        Call Study Team
                      </a>
                    </Button>
                    <Button asChild className="flex-1">
                      <Link href="/dashboard">
                        Discuss with Doctor
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredTrials.length === 0 && (
          <Card>
            <CardContent className="text-center py-12">
              <Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2">No trials found</h3>
              <p className="text-muted-foreground mb-4">
                Try adjusting your search terms or filters to find more trials.
              </p>
              <Button variant="outline" onClick={() => {
                setSearchTerm('');
                setSelectedPhase('');
                setSelectedStatus('');
              }}>
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}

        {/* Additional Resources */}
        <section className="mt-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Learn More About Clinical Trials</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">What Are Clinical Trials?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Understand the basics of clinical research, phases, and how trials contribute to medical advances.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.cancer.gov/about-cancer/treatment/clinical-trials" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Is a Trial Right for You?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore the benefits, risks, and questions to ask when considering clinical trial participation.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.clinicaltrials.gov/ct2/about-studies/learn" target="_blank" rel="noopener noreferrer">
                    Get Information
                  </a>
                </Button>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Patient Rights & Safety</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn about patient protections, informed consent, and safety measures in clinical research.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.fda.gov/patients/clinical-trials-what-patients-need-know" target="_blank" rel="noopener noreferrer">
                    Understand Your Rights
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Disclaimer */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          <p>
            Clinical trial information is provided for educational purposes only. Always consult with your healthcare team 
            before making any decisions about treatment or clinical trial participation.
          </p>
        </div>
      </div>
    </div>
  );
}