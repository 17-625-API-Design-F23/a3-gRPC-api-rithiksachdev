import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';
import { RedditServiceHandlers } from '../proto-auto-gen/reddit/RedditService.ts';
import { ExpandCommentBranchRequest } from '../proto-auto-gen/reddit/ExpandCommentBranchRequest.ts';
import { ExpandCommentBranchResponse } from '../proto-auto-gen/reddit/ExpandCommentBranchResponse.ts';
import { Comment } from '../proto-auto-gen/reddit/Comment.ts';
import { db } from '../db/db.ts';



export const ExpandCommentBranch: RedditServiceHandlers['ExpandCommentBranch'] = async (
    call: ServerUnaryCall<ExpandCommentBranchRequest, ExpandCommentBranchResponse>,
    callback: sendUnaryData<ExpandCommentBranchResponse>
  ): Promise<void> => {
    const request = call.request;

    try {
      // Retrieve the main comment
      const mainComment = await getCommentById(request.commentId);
      if (!mainComment) {
        throw new Error("Main comment not found");
      }

      // Fetch top N level one replies for the main comment
      const levelOneReplies = await getComments(request.commentId, request.n);
      console.log(levelOneReplies)
      // Initialize level two replies array
      let levelTwoReplies = [];

      // Fetch top N level two replies for each level one reply
      for (const reply of levelOneReplies) {
        const childReplies = await getComments(reply.commentId, (request.n - levelOneReplies.length));
        levelTwoReplies = levelTwoReplies.concat(childReplies);
      }

      callback(null, { 
        comment: mainComment, 
        levelOneReplies: levelOneReplies,
        levelTwoReplies: levelTwoReplies
      });
    } catch (error) {
      console.error('Error expanding comment branch:', error);
      callback(null, { comment: null, levelOneReplies: [], levelTwoReplies: [] });
    }
  };

async function getCommentById(commentId: number): Promise<Comment | null> {
  return new Promise((resolve, reject) => {
    const query = `SELECT * FROM comments WHERE commentId = ?`;

    db.get(query, [commentId], (err, row: Comment) => {
      if (err) {
        reject(err);
        return;
      }
      if (row) {
        resolve(row);
      } else {
        resolve(null);
      }
    });
  });
}



 
  async function getComments(parentId: number, n: number): Promise<Comment[]> {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT * FROM comments
        WHERE p_commentId = ?
        ORDER BY score DESC
        LIMIT ?`;
  
      db.all(query, [parentId, n], (err, rows: Comment[]) => {
        if (err) {
          reject(err);
          return;
        }
  
        const comments = rows.map(row => ({
          commentId: row.commentId,
          text: row.text,
          authorId: row.authorId,
          score: row.score,
          state: row.state,
          publicationDate: row.publicationDate,
          pPostId: row.pPostId,
          pCommentId: row.pCommentId,
          hasReplies: false, // This will be updated later if needed
          replies: [] // Placeholder for child comments
        }));
  
        resolve(comments);
      });
    });
  }
  