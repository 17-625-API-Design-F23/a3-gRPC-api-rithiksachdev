import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';
import { RedditServiceHandlers } from '../proto-auto-gen/reddit/RedditService.ts';
import { VoteCommentRequest } from '../proto-auto-gen/reddit/VoteCommentRequest.ts';
import { VoteCommentResponse } from '../proto-auto-gen/reddit/VoteCommentResponse.ts';
import { db } from '../db/db.ts';
import { Comment } from '../proto-auto-gen/reddit/Comment.ts';

export const VoteComment: RedditServiceHandlers['VoteComment'] = (
  call: ServerUnaryCall<VoteCommentRequest, VoteCommentResponse>,
  callback: sendUnaryData<VoteCommentResponse>
): void => {
  const request = call.request;

  try {
    if (request.vote === 1 || request.vote === -1) {
      db.serialize(() => {
        db.get('SELECT score FROM comments WHERE commentId = ?', [request.commentId], (err, row: Comment) => {
          if (err) {
            console.error('Database error:', err);
            callback(null, { newScore: 0, success: false, errorMessage: 'Database error' });
            return;
          }
          if (row) {
            const newScore = row.score + request.vote;
            db.run('UPDATE comments SET score = ? WHERE commentId = ?', [newScore, request.commentId], (err) => {
              if (err) {
                console.error('Failed to update comment score:', err);
                callback(null, { newScore: 0, success: false, errorMessage: 'Error updating comment score' });
                return;
              }
              callback(null, { newScore: newScore, success: true, errorMessage: '' });
            });
          } else {
            callback(null, { newScore: 0, success: false, errorMessage: 'Comment not found' });
          }
        });
      });
    } else {
      callback(null, { newScore: 0, success: false, errorMessage: 'Invalid vote value' });
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    callback(null, { newScore: 0, success: false, errorMessage: 'Unexpected error occurred' });
  }
};
