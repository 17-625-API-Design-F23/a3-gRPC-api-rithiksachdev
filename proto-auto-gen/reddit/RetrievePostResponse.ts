// Original file: proto/reddit.proto

import type { Post as _reddit_Post, Post__Output as _reddit_Post__Output } from '../reddit/Post';

export interface RetrievePostResponse {
  'post'?: (_reddit_Post | null);
  'success'?: (boolean);
  'errorMessage'?: (string);
}

export interface RetrievePostResponse__Output {
  'post': (_reddit_Post__Output | null);
  'success': (boolean);
  'errorMessage': (string);
}
