import mongoose from 'mongoose';

const SubmissionSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  emirate: {
    type: String,
    required: [true, 'Emirate is required'],
  },
  city: {
    type: String,
    required: [true, 'City is required'],
  },
  address: {
    type: String,
    required: false, // Made optional
  },
  phoneNumber: {
    type: String,
    required: [true, 'Phone number is required'],
    unique: true,
  },
  submittedAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.models.Submission || mongoose.model('Submission', SubmissionSchema);