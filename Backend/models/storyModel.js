import mongoose, { Schema } from 'mongoose';

const storySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true,
    },
    mediaUrl: {
      type: String,
      required: true,
    },
    mediaType: {
      type: String,
      enum: ['image', 'video'],
      default: 'image',
    },
    viewers: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
  },
  { timestamps: true }
);

// Stories expire after 24 hours (86400 seconds)
storySchema.index({ createdAt: 1 }, { expireAfterSeconds: 86400 });

export const Story = mongoose.model('Story', storySchema);