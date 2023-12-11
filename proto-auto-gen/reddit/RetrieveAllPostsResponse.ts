// Original file: proto/reddit.proto

import type { Post as _reddit_Post, Post__Output as _reddit_Post__Output } from '../reddit/Post';

export interface RetrieveAllPostsResponse {
  'posts'?: (_reddit_Post)[];
  'success'?: (boolean);
  'errorMessage'?: (string);
}

export interface RetrieveAllPostsResponse__Output {
  'posts': (_reddit_Post__Output)[];
  'success': (boolean);
  'errorMessage': (string);
}
