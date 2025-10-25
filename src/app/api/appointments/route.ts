import { NextRequest, NextResponse } from 'next/server';

// Mock appointments data
const mockAppointments = [
  {
    id: 1,
    userId: 'demo-user',
    title: 'Oncologist Consultation',
    startsAt: new Date('2024-12-20T10:00:00'),
    location: 'Cleveland Clinic Abu Dhabi',
    notes: 'Bring pathology reports and medication list.',
    providerId: 1,
    provider: {
      id: 1,
      name: 'Cleveland Clinic Abu Dhabi',
      category: 'Hospital',
      city: 'Abu Dhabi'
    }
  },
  {
    id: 2,
    userId: 'demo-user',
    title: 'CT Scan',
    startsAt: new Date('2024-12-22T14:30:00'),
    location: 'Imaging Center, SSMC',
    notes: 'Contrast enhanced - fasting required',
    providerId: 2,
    provider: {
      id: 2,
      name: 'Sheikh Shakhbout Medical City',
      category: 'Hospital',
      city: 'Abu Dhabi'
    }
  }
];

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

    return NextResponse.json({
      success: true,
      appointments: mockAppointments
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
    
    const newAppointment = {
      id: mockAppointments.length + 1,
      ...appointmentData,
      startsAt: new Date(appointmentData.startsAt)
    };

    return NextResponse.json({
      success: true,
      appointment: newAppointment
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
    
    const appointment = {
      id,
      ...updateData,
      startsAt: updateData.startsAt ? new Date(updateData.startsAt) : new Date()
    };

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
