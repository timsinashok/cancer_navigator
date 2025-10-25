import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function POST(request: NextRequest) {
  try {
    const { city, cancerType, stage, userId } = await request.json();

    if (!city || !cancerType || !userId) {
      return NextResponse.json(
        { error: 'Missing required fields: city, cancerType, userId' },
        { status: 400 }
      );
    }

    // Create user plan
    const userPlan = await db.userPlan.create({
      data: {
        userId,
        city,
        cancerType,
        stage: stage || 'Unknown'
      }
    });

    // Get care steps for this cancer type and stage
    const careSteps = await db.careStep.findMany({
      where: {
        cancerType,
        stage: stage || 'Unknown'
      },
      orderBy: {
        stepOrder: 'asc'
      }
    });

    // If no specific steps found, get generic steps
    let stepsToUse = careSteps;
    if (stepsToUse.length === 0) {
      stepsToUse = await db.careStep.findMany({
        where: {
          cancerType,
          stage: 'Unknown'
        },
        orderBy: {
          stepOrder: 'asc'
        }
      });
    }

    // Create user plan steps
    const userPlanSteps = await Promise.all(
      stepsToUse.map((step) =>
        db.userPlanStep.create({
          data: {
            planId: userPlan.id,
            stepOrder: step.stepOrder,
            stepTitle: step.stepTitle,
            stepDescription: step.stepDescription,
            isDone: false
          }
        })
      )
    );

    return NextResponse.json({
      success: true,
      plan: {
        id: userPlan.id,
        city: userPlan.city,
        cancerType: userPlan.cancerType,
        stage: userPlan.stage,
        createdAt: userPlan.createdAt,
        steps: userPlanSteps
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

    // Get user's latest plan
    const userPlan = await db.userPlan.findFirst({
      where: {
        userId
      },
      orderBy: {
        createdAt: 'desc'
      },
      include: {
        steps: {
          orderBy: {
            stepOrder: 'asc'
          }
        }
      }
    });

    if (!userPlan) {
      return NextResponse.json(
        { error: 'No plan found for this user' },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      plan: userPlan
    });
  } catch (error) {
    console.error('Error fetching plan:', error);
    return NextResponse.json(
      { error: 'Failed to fetch care plan' },
      { status: 500 }
    );
  }
}