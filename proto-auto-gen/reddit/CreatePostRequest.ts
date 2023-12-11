// Original file: proto/reddit.proto

import type { PostState as _reddit_PostState, PostState__Output as _reddit_PostState__Output } from '../reddit/PostState';

export interface CreatePostRequest {
  'title'?: (string);
  'text'?: (string);
  'videoUrl'?: (string);
  'imageUrl'?: (string);
  'state'?: (_reddit_PostState);
  'authorId'?: (string);
  'subredditName'?: (string);
  'media'?: "videoUrl"|"imageUrl";
}

export interface CreatePostRequest__Output {
  'title': (string);
  'text': (string);
  'videoUrl'?: (string);
  'imageUrl'?: (string);
  'state': (_reddit_PostState__Output);
  'authorId': (string);
  'subredditName': (string);
  'media': "videoUrl"|"imageUrl";
}
