// Original file: proto/subreddit.proto

import type { SubredditVisibility as _reddit_SubredditVisibility, SubredditVisibility__Output as _reddit_SubredditVisibility__Output } from '../reddit/SubredditVisibility';

export interface Subreddit {
  'subRedditId'?: (number);
  'name'?: (string);
  'visibility'?: (_reddit_SubredditVisibility);
  'tags'?: (string)[];
}

export interface Subreddit__Output {
  'subRedditId': (number);
  'name': (string);
  'visibility': (_reddit_SubredditVisibility__Output);
  'tags': (string)[];
}
