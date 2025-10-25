import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';

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

    const appointments = await db.appointment.findMany({
      where: {
        userId
      },
      include: {
        provider: true
      },
      orderBy: {
        startsAt: 'asc'
      }
    });

    return NextResponse.json({
      success: true,
      appointments
    });
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return NextResponse.json(
      { error: 'Failed to fetch appointments' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const appointmentData = await request.json();
    
    const appointment = await db.appointment.create({
      data: {
        ...appointmentData,
        startsAt: new Date(appointmentData.startsAt)
      },
      include: {
        provider: true
      }
    });

    // TODO: Send email reminder logic here
    // This would integrate with Resend or similar service

    return NextResponse.json({
      success: true,
      appointment
    });
  } catch (error) {
    console.error('Error creating appointment:', error);
    return NextResponse.json(
      { error: 'Failed to create appointment' },
      { status: 500 }
    );
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, ...updateData } = await request.json();
    
    const appointment = await db.appointment.update({
      where: { id },
      data: {
        ...updateData,
        startsAt: updateData.startsAt ? new Date(updateData.startsAt) : undefined
      },
      include: {
        provider: true
      }
    });

    return NextResponse.json({
      success: true,
      appointment
    });
  } catch (error) {
    console.error('Error updating appointment:', error);
    return NextResponse.json(
      { error: 'Failed to update appointment' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { error: 'Missing appointment id' },
        { status: 400 }
      );
    }

    await db.appointment.delete({
      where: { id: parseInt(id) }
    });

    return NextResponse.json({
      success: true,
      message: 'Appointment deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting appointment:', error);
    return NextResponse.json(
      { error: 'Failed to delete appointment' },
      { status: 500 }
    );
  }
}