import mongoose, { Schema } from 'mongoose';

const commentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    post: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
    reel: {
      type: Schema.Types.ObjectId,
      ref: 'Reel',
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    replies: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Comment',
      },
    ],
  },
  { timestamps: true }
);

// A comment must belong to either a post or a reel, but not both.
commentSchema.pre('save', function (next) {
  if (!this.post && !this.reel) {
    next(new Error('Comment must be associated with a post or a reel.'));
  }
  if (this.post && this.reel) {
    next(new Error('Comment cannot be associated with both a post and a reel.'));
  }
  next();
});

export const Comment = mongoose.model('Comment', commentSchema);