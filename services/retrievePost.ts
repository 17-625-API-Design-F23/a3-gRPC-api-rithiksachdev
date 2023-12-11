import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';
import { RedditServiceHandlers } from '../proto-auto-gen/reddit/RedditService.ts';
import { RetrievePostRequest } from '../proto-auto-gen/reddit/RetrievePostRequest.ts';
import { RetrievePostResponse } from '../proto-auto-gen/reddit/RetrievePostResponse.ts';
import { Post as PostType } from '../proto-auto-gen/reddit/Post.ts';
import { db } from '../db/db.ts';
export const RetrievePost: RedditServiceHandlers['RetrievePost'] = (
  call: ServerUnaryCall<RetrievePostRequest, RetrievePostResponse>,
  callback: sendUnaryData<RetrievePostResponse>
): void => {
  const postId = call.request.postId;

  const query = 'SELECT * FROM posts WHERE postId = ?';
  console.log(`Executing query: ${query} with postId: ${postId}`);

  db.get(query, [postId], (err, row: PostType) => {
    if (err) {
      console.error('Database error:', err);
      callback(null, { post: undefined, success: false, errorMessage: 'Database error' });
      return;
    }
    if (row) {
      callback(null, { post: row, success: true, errorMessage: '' });
    } else {
      console.log('Post not found for postId:', postId);
      callback(null, { post: undefined, success: false, errorMessage: 'Post not found' });
    }
  });
};
