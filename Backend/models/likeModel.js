import mongoose, { Schema } from 'mongoose';

const likeSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    likeable: {
      type: Schema.Types.ObjectId,
      required: true,
      refPath: 'onModel',
    },
    onModel: {
      type: String,
      required: true,
      enum: ['Post', 'Reel', 'Comment'],
    },
  },
  { timestamps: true }
);

// Ensure a user can only like a specific item once.
likeSchema.index({ user: 1, likeable: 1, onModel: 1 }, { unique: true });

export const Like = mongoose.model('Like', likeSchema);