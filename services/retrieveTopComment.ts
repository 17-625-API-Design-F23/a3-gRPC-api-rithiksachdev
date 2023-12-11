import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';
import { RedditServiceHandlers } from '../proto-auto-gen/reddit/RedditService.ts';
import { RetrieveTopCommentsRequest } from '../proto-auto-gen/reddit/RetrieveTopCommentsRequest.ts';
import { RetrieveTopCommentsResponse} from '../proto-auto-gen/reddit/RetrieveTopCommentsResponse.ts';
import { Comment } from '../proto-auto-gen/reddit/Comment.ts';
import { db } from '../db/db.ts';

export const RetrieveTopComments: RedditServiceHandlers['RetrieveTopComments'] = async (
    call: ServerUnaryCall<RetrieveTopCommentsRequest, RetrieveTopCommentsResponse>,
    callback: sendUnaryData<RetrieveTopCommentsResponse>
  ): Promise<void> => {
    const request = call.request;
  
    try {
      const topCommentsQuery = `
        SELECT * FROM comments
        WHERE p_post_id = ?
        ORDER BY score DESC
        LIMIT ?`;
  
      const topComments = await new Promise<Comment[]>((resolve, reject) => {
        db.all(topCommentsQuery, [request.postId, request.n], (err, rows: Comment[]) => {
          if (err) {
            reject(err);
            return;
          }
          resolve(rows.map(row => ({ ...row, hasReplies: false }))); // Initialize hasReplies as false
        });
      });
      // Debug point
      //console.log(topComments)
  
      // Get the IDs of the top comments
      const commentIds = topComments.map(comment => comment.commentId);
      
      // Step 2: Check for replies to these comments in bulk
      if (commentIds.length > 0) {
        const repliesQuery = `
          SELECT DISTINCT p_commentId FROM comments
          WHERE p_commentId IN (${commentIds.join(',')})`;
  
        const replies = await new Promise<Set<number>>((resolve, reject) => {
          db.all(repliesQuery, [], (err, rows: Comment[]) => {
            if (err) {
              reject(err);
              return;
            }
            const replyIds = new Set(rows.map(row => row.pCommentId));
            resolve(replyIds);
          });
        });
        // Debug point
        //console.log(replies)
  
        // Update the hasReplies property based on the replies
        topComments.forEach(comment => {
          if (replies.has(comment.commentId)) {
            comment.hasReplies = true;
          }
        });
      }
  
      callback(null, { comments: topComments });
    } catch (error) {
      console.error('Error retrieving top comments:', error);
      callback(null, { comments: [] });
    }
  };
  
