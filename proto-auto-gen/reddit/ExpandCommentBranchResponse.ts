// Original file: proto/reddit.proto

import type { Comment as _reddit_Comment, Comment__Output as _reddit_Comment__Output } from '../reddit/Comment';

export interface ExpandCommentBranchResponse {
  'comment'?: (_reddit_Comment | null);
  'levelOneReplies'?: (_reddit_Comment)[];
  'levelTwoReplies'?: (_reddit_Comment)[];
}

export interface ExpandCommentBranchResponse__Output {
  'comment': (_reddit_Comment__Output | null);
  'levelOneReplies': (_reddit_Comment__Output)[];
  'levelTwoReplies': (_reddit_Comment__Output)[];
}
