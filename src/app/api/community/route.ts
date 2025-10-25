import { NextRequest, NextResponse } from 'next/server';

// Mock community posts
const mockPosts = [
  {
    id: 1,
    userId: 'user1',
    city: 'Abu Dhabi',
    cancerType: 'Breast Cancer',
    content: 'Just finished my first chemo session. The team at Cleveland Clinic was amazing. Remember to bring someone with you for support!',
    createdAt: new Date('2024-12-15T10:30:00'),
    flagged: false,
    user: {
      id: 'user1',
      name: 'Sarah'
    }
  },
  {
    id: 2,
    userId: 'user2',
    city: 'Abu Dhabi',
    cancerType: 'Breast Cancer',
    content: 'Looking for recommendations for wigs in Abu Dhabi. Anyone have good experiences?',
    createdAt: new Date('2024-12-14T15:20:00'),
    flagged: false,
    user: {
      id: 'user2',
      name: 'Fatima'
    }
  },
  {
    id: 3,
    userId: 'user3',
    city: 'Abu Dhabi',
    cancerType: 'Breast Cancer',
    content: 'The support group at Hope Cancer Center has been life-changing. Highly recommend joining if you haven\'t already.',
    createdAt: new Date('2024-12-13T09:45:00'),
    flagged: false,
    user: {
      id: 'user3',
      name: 'Layla'
    }
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get('city');
    const cancerType = searchParams.get('cancerType');

    // Filter mock data
    let filteredPosts = mockPosts;
    if (city) {
      filteredPosts = filteredPosts.filter(p => p.city === city);
    }
    if (cancerType) {
      filteredPosts = filteredPosts.filter(p => p.cancerType === cancerType);
    }

    return NextResponse.json({
      success: true,
      posts: filteredPosts
    });
  } catch (error) {
    console.error('Error fetching community posts:', error);
    return NextResponse.json(
      { error: 'Failed to fetch community posts' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const { userId, city, cancerType, content } = await request.json();

    if (!userId || !city || !cancerType || !content) {
      return NextResponse.json(
        { error: 'Missing required fields: userId, city, cancerType, content' },
        { status: 400 }
      );
    }

    // Basic content validation
    if (content.length > 1000) {
      return NextResponse.json(
        { error: 'Content must be less than 1000 characters' },
        { status: 400 }
      );
    }

    // Check for medical advice keywords (basic moderation)
    const medicalKeywords = ['diagnosis', 'treatment', 'medicine', 'drug', 'prescribe', 'therapy', 'dosage'];
    const containsMedicalAdvice = medicalKeywords.some(keyword => 
      content.toLowerCase().includes(keyword)
    );

    if (containsMedicalAdvice) {
      return NextResponse.json(
        { error: 'Please avoid sharing medical advice. Focus on personal experience and support.' },
        { status: 400 }
      );
    }

    const newPost = {
      id: mockPosts.length + 1,
      userId,
      city,
      cancerType,
      content,
      createdAt: new Date(),
      flagged: false,
      user: {
        id: userId,
        name: 'Anonymous User'
      }
    };

    return NextResponse.json({
      success: true,
      post: newPost
    });
  } catch (error) {
    console.error('Error creating community post:', error);
    return NextResponse.json(
      { error: 'Failed to create community post' },
      { status: 500 }
    );
  }
}
