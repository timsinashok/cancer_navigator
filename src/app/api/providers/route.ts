import { NextRequest, NextResponse } from 'next/server';

// Mock providers data
const mockProviders = [
  {
    id: 1,
    name: 'Cleveland Clinic Abu Dhabi',
    category: 'Hospital',
    city: 'Abu Dhabi',
    address: 'Al Maryah Island, Abu Dhabi',
    phone: '+971 2 659 0200',
    website: 'https://www.clevelandclinicabudhabi.ae',
    blurb: 'Comprehensive oncology center with multidisciplinary team.',
    rating: 4.8,
    distance: '2.5 km'
  },
  {
    id: 2,
    name: 'Sheikh Shakhbout Medical City',
    category: 'Hospital',
    city: 'Abu Dhabi',
    address: 'Al Mafraq, Abu Dhabi',
    phone: '+971 2 314 4444',
    website: 'https://ssmc.ae',
    blurb: 'Tertiary care with advanced oncology services.',
    rating: 4.6,
    distance: '15.2 km'
  },
  {
    id: 3,
    name: 'Burjeel Medical City',
    category: 'Hospital',
    city: 'Abu Dhabi',
    address: 'Mohammed Bin Zayed City',
    phone: '+971 2 812 2000',
    website: 'https://burjeelmedicalcity.com',
    blurb: 'State-of-the-art oncology department with latest treatment options.',
    rating: 4.7,
    distance: '8.3 km'
  },
  {
    id: 4,
    name: 'Hope Cancer Support Center',
    category: 'Support Group',
    city: 'Abu Dhabi',
    address: 'Various locations',
    phone: '+971 50 123 4567',
    website: 'https://hopecancer.ae',
    blurb: 'Peer support groups and counseling for cancer patients and families.',
    rating: 4.9,
    distance: '3.1 km'
  }
];

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const city = searchParams.get('city');
    const category = searchParams.get('category');

    // Filter mock data
    let filteredProviders = mockProviders;
    if (city) {
      filteredProviders = filteredProviders.filter(p => p.city === city);
    }
    if (category) {
      filteredProviders = filteredProviders.filter(p => p.category === category);
    }

    return NextResponse.json({
      success: true,
      providers: filteredProviders
    });
  } catch (error) {
    console.error('Error fetching providers:', error);
    return NextResponse.json(
      { error: 'Failed to fetch providers' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const providerData = await request.json();
    
    const newProvider = {
      id: mockProviders.length + 1,
      ...providerData
    };

    return NextResponse.json({
      success: true,
      provider: newProvider
    });
  } catch (error) {
    console.error('Error creating provider:', error);
    return NextResponse.json(
      { error: 'Failed to create provider' },
      { status: 500 }
    );
  }
}
