import { NextRequest, NextResponse } from 'next/server';

// Mock data for demo
const mockCarePlan = {
  id: 1,
  city: 'Abu Dhabi',
  cancerType: 'Breast Cancer',
  stage: 'Stage 2',
  createdAt: new Date('2024-12-01'),
  steps: [
    {
      id: 1,
      planId: 1,
      stepOrder: 1,
      stepTitle: 'Confirm pathology and obtain your report',
      stepDescription: 'Request your histopathology report from your doctor. This confirms the cancer type and helps guide treatment decisions.',
      isDone: false
    },
    {
      id: 2,
      planId: 1,
      stepOrder: 2,
      stepTitle: 'Book oncologist consultation',
      stepDescription: 'Bring all reports, medication list, and questions. Consider bringing a family member or friend for support.',
      isDone: false
    },
    {
      id: 3,
      planId: 1,
      stepOrder: 3,
      stepTitle: 'Schedule baseline imaging (CT/MRI/PET)',
      stepDescription: 'As ordered by your oncologist to determine the extent of disease. Ensure you understand any preparation required (e.g., fasting).',
      isDone: false
    },
    {
      id: 4,
      planId: 1,
      stepOrder: 4,
      stepTitle: 'Discuss treatment options with your care team',
      stepDescription: 'Review surgery, chemotherapy, radiation, hormonal therapy, and targeted therapy options. Ask about side effects and long-term impacts.',
      isDone: false
    },
    {
      id: 5,
      planId: 1,
      stepOrder: 5,
      stepTitle: 'Join a local support group',
      stepDescription: 'Connect with others who understand your journey. Peer support improves treatment adherence and emotional well-being.',
      isDone: false
    },
    {
      id: 6,
      planId: 1,
      stepOrder: 6,
      stepTitle: 'Consult with a nutritionist',
      stepDescription: 'Get personalized dietary advice to support your body during and after treatment.',
      isDone: false
    }
  ]
};

export async function POST(request: NextRequest) {
  try {
    const { city, cancerType, stage, userId } = await request.json();

    if (!city || !cancerType || !userId) {
      return NextResponse.json(
        { error: 'Missing required fields: city, cancerType, userId' },
        { status: 400 }
      );
    }

    // Return mock data
    return NextResponse.json({
      success: true,
      plan: {
        ...mockCarePlan,
        city,
        cancerType,
        stage: stage || 'Unknown'
      }
    });
  } catch (error) {
    console.error('Error creating plan:', error);
    return NextResponse.json(
      { error: 'Failed to create care plan' },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get('userId');

    if (!userId) {
      return NextResponse.json(
        { error: 'Missing userId parameter' },
        { status: 400 }
      );
    }

    // Return mock data
    return NextResponse.json({
      success: true,
      plan: mockCarePlan
    });
  } catch (error) {
    console.error('Error fetching plan:', error);
    return NextResponse.json(
      { error: 'Failed to fetch care plan' },
      { status: 500 }
    );
  }
}
