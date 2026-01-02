import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Submission from '@/models/Submission';

export async function POST(request: NextRequest) {
  try {
    console.log('Connecting to DB...');
    await connectDB();
    console.log('Connected to DB');
    
    const body = await request.json();
    console.log('Received body:', body);
    
    // Create new submission
    const submission = await Submission.create({
      name: body.name,
      emirate: body.emirate,
      city: body.city,
      address: body.address || '', // Optional field
      phoneNumber: body.phoneNumber,
    });
    
    console.log('Created submission:', submission);
    
    return NextResponse.json({ 
      success: true, 
      message: '🎉 Entry submitted successfully! Good luck!',
      data: submission 
    }, { status: 200 });
    
  } catch (error: any) {
    console.error('Submission error:', error);
    
    if (error.name === 'ValidationError') {
      return NextResponse.json({ 
        success: false, 
        message: Object.values(error.errors).map((err: any) => err.message).join(', ') 
      }, { status: 400 });
    }
    
    // Check for duplicate phone numbers (unique constraint)
    if (error.code === 11000 && error.keyPattern?.phoneNumber) {
      return NextResponse.json({ 
        success: false, 
        message: 'This phone number is already registered for the contest' 
      }, { status: 400 });
    }
    
    return NextResponse.json({ 
      success: false, 
      message: 'Server error. Please try again later.' 
    }, { status: 500 });
  }
}

// GET method to fetch submissions
export async function GET() {
  try {
    await connectDB();
    const submissions = await Submission.find({}).sort({ submittedAt: -1 });
    
    return NextResponse.json({ 
      success: true, 
      count: submissions.length,
      data: submissions 
    });
    
  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      message: 'Failed to fetch submissions' 
    }, { status: 500 });
  }
}