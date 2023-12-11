// Original file: proto/post.proto

import type { PostState as _reddit_PostState, PostState__Output as _reddit_PostState__Output } from '../reddit/PostState';

export interface Post {
  'postId'?: (number);
  'title'?: (string);
  'text'?: (string);
  'videoUrl'?: (string);
  'imageUrl'?: (string);
  'score'?: (number);
  'state'?: (_reddit_PostState);
  'publicationDate'?: (string);
  'authorId'?: (string);
  'subredditId'?: (string);
  'media'?: "videoUrl"|"imageUrl";
}

export interface Post__Output {
  'postId': (number);
  'title': (string);
  'text': (string);
  'videoUrl'?: (string);
  'imageUrl'?: (string);
  'score': (number);
  'state': (_reddit_PostState__Output);
  'publicationDate': (string);
  'authorId': (string);
  'subredditId': (string);
  'media': "videoUrl"|"imageUrl";
}
