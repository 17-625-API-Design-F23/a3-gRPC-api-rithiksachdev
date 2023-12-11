// Original file: proto/reddit.proto

import type { CommentState as _reddit_CommentState, CommentState__Output as _reddit_CommentState__Output } from '../reddit/CommentState';

export interface CreateCommentRequest {
  'text'?: (string);
  'authorId'?: (string);
  'pPostId'?: (number);
  'pCommentId'?: (number);
  'state'?: (_reddit_CommentState);
  'parentId'?: "pPostId"|"pCommentId";
}

export interface CreateCommentRequest__Output {
  'text': (string);
  'authorId': (string);
  'pPostId'?: (number);
  'pCommentId'?: (number);
  'state': (_reddit_CommentState__Output);
  'parentId': "pPostId"|"pCommentId";
}
