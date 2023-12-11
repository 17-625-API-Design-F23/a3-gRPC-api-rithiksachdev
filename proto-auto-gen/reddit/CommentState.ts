// Original file: proto/comment.proto

export const CommentState = {
  NORMAL: 'NORMAL',
  HIDDEN: 'HIDDEN',
} as const;

export type CommentState =
  | 'NORMAL'
  | 0
  | 'HIDDEN'
  | 1

export type CommentState__Output = typeof CommentState[keyof typeof CommentState]
