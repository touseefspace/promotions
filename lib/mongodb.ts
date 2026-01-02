import mongoose from 'mongoose';

declare global {
  var mongooseCache: {
    conn: mongoose.Connection | null;
    promise: Promise<mongoose.Connection> | null;
  };
}

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/contest';

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable');
}

let cached = global.mongooseCache;

if (!cached) {
  cached = global.mongooseCache = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) {
    console.log('Using cached connection');
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    console.log('Connecting to MongoDB with URI:', MONGODB_URI.replace(/:([^:@]{4})[^:@]*@/, ':****@'));
    cached.promise = mongoose.connect(MONGODB_URI, opts).then(() => mongoose.connection);
  }

  try {
    cached.conn = await cached.promise;
    console.log('Connected to MongoDB successfully');
  } catch (e) {
    console.error('Failed to connect to MongoDB:', e);
    cached.promise = null;
    throw e;
  }

  return cached.conn;
}

export default connectDB;