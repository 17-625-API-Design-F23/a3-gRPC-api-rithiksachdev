import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';
import { RedditServiceHandlers } from '../proto-auto-gen/reddit/RedditService.ts';
import { CreateCommentRequest } from '../proto-auto-gen/reddit/CreateCommentRequest.ts';
import { CreateCommentResponse } from '../proto-auto-gen/reddit/CreateCommentResponse.ts';
import { db } from '../db/db.ts';

export const CreateComment: RedditServiceHandlers['CreateComment'] = (
  call: ServerUnaryCall<CreateCommentRequest, CreateCommentResponse>,
  callback: sendUnaryData<CreateCommentResponse>
): void => {
  const request = call.request;

  // Current date and time for the publication_date
  const publicationDate = new Date().toISOString();

  // Initial score for the comment
  const initialScore = 0;

  const query = `
    INSERT INTO comments (text, author_id, score, state, publication_date, p_post_id, p_commentId) 
    VALUES (?, ?, ?, ?, ?, ?, ?)`;
  const params = [
    request.text,
    request.authorId,
    initialScore,
    request.state || 'NORMAL',
    publicationDate,
    request.pPostId != undefined ? request.pPostId : null,
    request.pCommentId != undefined ? request.pCommentId : null
  ];

  db.run(query, params, function (err) {
    if (err) {
      console.error('Failed to create comment:', err);
      callback(null, { commentId: 0, success: false, errorMessage: 'Error creating comment' });
      return;
    }
    const createdCommentId = this.lastID; // Get the ID of the newly inserted comment
    callback(null, { commentId: createdCommentId, success: true, errorMessage: '' });
  });
};
