import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

export async function PUT(request: NextRequest) {
  try {
    const { stepId, isDone } = await request.json();

    if (!stepId) {
      return NextResponse.json(
        { error: 'Missing stepId' },
        { status: 400 }
      );
    }

    const updatedStep = await db.userPlanStep.update({
      where: { id: stepId },
      data: { isDone }
    });

    return NextResponse.json({
      success: true,
      step: updatedStep
    });
  } catch (error) {
    console.error('Error updating plan step:', error);
    return NextResponse.json(
      { error: 'Failed to update plan step' },
      { status: 500 }
    );
  }
}