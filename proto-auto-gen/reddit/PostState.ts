// Original file: proto/post.proto

export const PostState = {
  NORMAL: 'NORMAL',
  LOCKED: 'LOCKED',
  HIDDEN: 'HIDDEN',
} as const;

export type PostState =
  | 'NORMAL'
  | 0
  | 'LOCKED'
  | 1
  | 'HIDDEN'
  | 2

export type PostState__Output = typeof PostState[keyof typeof PostState]
