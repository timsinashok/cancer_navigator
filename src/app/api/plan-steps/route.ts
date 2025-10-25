import { NextRequest, NextResponse } from 'next/server';

export async function PUT(request: NextRequest) {
  try {
    const { stepId, isDone } = await request.json();

    if (!stepId) {
      return NextResponse.json(
        { error: 'Missing stepId' },
        { status: 400 }
      );
    }

    // Return mock success response
    return NextResponse.json({
      success: true,
      step: {
        id: stepId,
        isDone
      }
    });
  } catch (error) {
    console.error('Error updating plan step:', error);
    return NextResponse.json(
      { error: 'Failed to update plan step' },
      { status: 500 }
    );
  }
}
