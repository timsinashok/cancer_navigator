'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, MessageCircle, Share2, ThumbsUp, Users, Calendar, MapPin, Sparkles, TrendingUp, ArrowLeft } from 'lucide-react';

export default function CommunityPage() {
  // Sample community posts
  const posts = [
    {
      id: 1,
      author: "Sarah M.",
      avatar: "/avatars/sarah.jpg",
      initials: "SM",
      location: "Abu Dhabi",
      date: "2 days ago",
      title: "Just completed my 4th chemo session! 💪",
      content: "Today was tough but I'm halfway through my treatment plan. The nurses at Cleveland Clinic were amazing as always. To anyone starting chemo - bring snacks, water, and something to keep you busy. You've got this!",
      likes: 124,
      comments: 18,
      tags: ["Chemotherapy", "Milestone", "Support"],
      featured: true
    },
    {
      id: 2,
      author: "Fatima A.",
      avatar: "/avatars/fatima.jpg",
      initials: "FA",
      location: "Abu Dhabi",
      date: "5 days ago",
      title: "My Cancer Journey Roadmap - Feel Free to Copy!",
      content: "I've completed my entire treatment journey and wanted to share my path for others. Started with diagnosis at Burjeel Hospital, then surgery at Cleveland Clinic, followed by 6 rounds of chemo. Happy to answer any questions!",
      likes: 89,
      comments: 31,
      tags: ["Journey Map", "Success Story", "Resources"],
      featured: true
    },
    {
      id: 3,
      author: "Ahmed K.",
      avatar: "/avatars/ahmed.jpg",
      initials: "AK",
      location: "Abu Dhabi",
      date: "1 week ago",
      title: "Tips for Managing Side Effects",
      content: "After 3 months of treatment, here's what helped me the most: ginger tea for nausea, short walks every day, and keeping a journal. Small things make a big difference!",
      likes: 67,
      comments: 12,
      tags: ["Tips", "Side Effects", "Wellness"],
      featured: false
    },
    {
      id: 4,
      author: "Layla H.",
      avatar: "/avatars/layla.jpg",
      initials: "LH",
      location: "Abu Dhabi",
      date: "1 week ago",
      title: "Found an amazing support group at NMC Hospital",
      content: "They meet every Tuesday at 6 PM. It's been so helpful to connect with others going through similar experiences. Highly recommend joining if you're looking for local support!",
      likes: 52,
      comments: 8,
      tags: ["Support Group", "Local Resources", "Community"],
      featured: false
    },
    {
      id: 5,
      author: "Mariam S.",
      avatar: "/avatars/mariam.jpg",
      initials: "MS",
      location: "Abu Dhabi",
      date: "2 weeks ago",
      title: "Celebrating 1 Year Cancer-Free! 🎉",
      content: "One year ago today, I heard the words 'you're cancer-free.' To everyone currently fighting - there is hope. This community helped me so much during my journey. Thank you all! ❤️",
      likes: 198,
      comments: 42,
      tags: ["Survivor", "Milestone", "Inspiration"],
      featured: true
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Link>
              </Button>
              <div className="flex items-center space-x-2">
                <Heart className="h-8 w-8 text-primary" />
                <span className="text-xl font-bold text-foreground">Cancer Navigator</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" asChild>
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button asChild>
                <Link href="/onboarding">Get Started</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-accent text-accent-foreground">
              <Users className="h-3 w-3 mr-1" />
              234+ Active Members
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
              Community Stories & Support
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              Share your journey, learn from others, and find support from people who understand what you're going through
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                <Sparkles className="h-4 w-4 mr-2" />
                Share Your Story
              </Button>
              <Button size="lg" variant="outline">
                <MessageCircle className="h-4 w-4 mr-2" />
                Join Discussions
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-4 mb-8">
              <TabsTrigger value="all">All Posts</TabsTrigger>
              <TabsTrigger value="journeys">Journeys</TabsTrigger>
              <TabsTrigger value="tips">Tips</TabsTrigger>
              <TabsTrigger value="milestones">Milestones</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              {/* Trending Section */}
              <Card className="border-2 border-accent/20 bg-gradient-to-r from-accent/5 to-primary/5">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-accent" />
                    <CardTitle>Trending This Week</CardTitle>
                  </div>
                  <CardDescription>Most helpful posts from our community</CardDescription>
                </CardHeader>
              </Card>

              {/* Community Posts */}
              {posts.map((post) => (
                <Card key={post.id} className={`transition-all hover:shadow-lg ${post.featured ? 'border-2 border-primary/30' : ''}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={post.avatar} alt={post.author} />
                          <AvatarFallback className="bg-primary text-primary-foreground">{post.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-foreground">{post.author}</h3>
                            {post.featured && (
                              <Badge variant="secondary" className="text-xs">
                                <Sparkles className="h-3 w-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>{post.location}</span>
                            <span>•</span>
                            <Calendar className="h-3 w-3" />
                            <span>{post.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-lg font-semibold mb-3 text-foreground">{post.title}</h4>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{post.content}</p>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-6 pt-4 border-t">
                      <Button variant="ghost" size="sm" className="gap-2">
                        <ThumbsUp className="h-4 w-4" />
                        <span>{post.likes}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <MessageCircle className="h-4 w-4" />
                        <span>{post.comments}</span>
                      </Button>
                      <Button variant="ghost" size="sm" className="gap-2">
                        <Share2 className="h-4 w-4" />
                        <span>Share</span>
                      </Button>
                      {post.featured && post.tags.includes("Journey Map") && (
                        <Button size="sm" className="ml-auto bg-primary">
                          Copy Journey
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="journeys" className="space-y-6">
              {posts.filter(p => p.tags.includes("Journey Map") || p.tags.includes("Success Story")).map((post) => (
                <Card key={post.id} className="border-2 border-primary/30">
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <Avatar className="h-12 w-12">
                          <AvatarFallback className="bg-primary text-primary-foreground">{post.initials}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-semibold text-foreground">{post.author}</h3>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-3 w-3" />
                            <span>{post.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-lg font-semibold mb-3">{post.title}</h4>
                    <p className="text-muted-foreground mb-4">{post.content}</p>
                    <Button className="bg-primary">View Full Journey & Copy Path</Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="tips" className="space-y-6">
              {posts.filter(p => p.tags.includes("Tips") || p.tags.includes("Resources")).map((post) => (
                <Card key={post.id}>
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-accent text-accent-foreground">{post.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{post.author}</h3>
                        <p className="text-sm text-muted-foreground">{post.date}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-lg font-semibold mb-2">{post.title}</h4>
                    <p className="text-muted-foreground">{post.content}</p>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="milestones" className="space-y-6">
              {posts.filter(p => p.tags.includes("Milestone") || p.tags.includes("Survivor")).map((post) => (
                <Card key={post.id} className="border-2 border-accent/30 bg-gradient-to-br from-accent/5 to-primary/5">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback className="bg-accent text-accent-foreground">{post.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="font-semibold">{post.author}</h3>
                        <p className="text-sm text-muted-foreground">{post.date}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="text-lg font-semibold mb-3">{post.title}</h4>
                    <p className="text-muted-foreground mb-4">{post.content}</p>
                    <div className="flex items-center gap-4">
                      <Button variant="ghost" size="sm">
                        <Heart className="h-4 w-4 mr-2 fill-red-500 text-red-500" />
                        {post.likes}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        {post.comments}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join Our Supportive Community</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Share your story, ask questions, and connect with others who understand your journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-accent hover:bg-accent/90">
              <Link href="/onboarding">Create Your Profile</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

