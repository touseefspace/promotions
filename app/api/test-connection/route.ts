import { NextResponse } from 'next/server';
import mongoose from 'mongoose';
import connectDB from '@/lib/mongodb';

export async function GET() {
  try {
    await connectDB();
    
    const connectionState = mongoose.connection.readyState;
    
    return NextResponse.json({ 
      success: true, 
      message: 'MongoDB connection successful!',
      connectionState: connectionState,
      connectionStateText: 
        connectionState === 0 ? 'disconnected' :
        connectionState === 1 ? 'connected' :
        connectionState === 2 ? 'connecting' :
        'disconnecting'
    });
    
  } catch (error: any) {
    console.error('Connection test failed:', error);
    return NextResponse.json({ 
      success: false, 
      message: 'MongoDB connection failed!',
      error: error.message 
    }, { status: 500 });
  }
}