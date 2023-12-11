// Original file: proto/subreddit.proto

export const SubredditVisibility = {
  PUBLIC: 'PUBLIC',
  PRIVATE: 'PRIVATE',
  HIDDEN: 'HIDDEN',
} as const;

export type SubredditVisibility =
  | 'PUBLIC'
  | 0
  | 'PRIVATE'
  | 1
  | 'HIDDEN'
  | 2

export type SubredditVisibility__Output = typeof SubredditVisibility[keyof typeof SubredditVisibility]
