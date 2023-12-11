// Original file: proto/comment.proto

import type { CommentState as _reddit_CommentState, CommentState__Output as _reddit_CommentState__Output } from '../reddit/CommentState';

export interface Comment {
  'commentId'?: (number);
  'text'?: (string);
  'authorId'?: (string);
  'score'?: (number);
  'state'?: (_reddit_CommentState);
  'publicationDate'?: (string);
  'pPostId'?: (number);
  'pCommentId'?: (number);
  'hasReplies'?: (boolean);
  'parentId'?: "pPostId"|"pCommentId";
}

export interface Comment__Output {
  'commentId': (number);
  'text': (string);
  'authorId': (string);
  'score': (number);
  'state': (_reddit_CommentState__Output);
  'publicationDate': (string);
  'pPostId'?: (number);
  'pCommentId'?: (number);
  'hasReplies': (boolean);
  'parentId': "pPostId"|"pCommentId";
}
