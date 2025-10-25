import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get('city');
    const cancerType = searchParams.get('cancerType');

    // Build where clause
    const where: any = {
      flagged: false // Only show non-flagged posts
    };
    if (city) where.city = city;
    if (cancerType) where.cancerType = cancerType;

    const posts = await db.communityPost.findMany({
      where,
      include: {
        user: {
          select: {
            id: true,
            name: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      },
      take: 50 // Limit to 50 most recent posts
    });

    return NextResponse.json({
      success: true,
      posts
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

    const post = await db.communityPost.create({
      data: {
        userId,
        city,
        cancerType,
        content
      },
      include: {
        user: {
          select: {
            id: true,
            name: true
          }
        }
      }
    });

    return NextResponse.json({
      success: true,
      post
    });
  } catch (error) {
    console.error('Error creating community post:', error);
    return NextResponse.json(
      { error: 'Failed to create community post' },
      { status: 500 }
    );
  }
}