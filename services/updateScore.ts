import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';
import { RedditServiceHandlers } from '../proto-auto-gen/reddit/RedditService.ts';
import { VotePostRequest } from '../proto-auto-gen/reddit/VotePostRequest.ts';
import { VotePostResponse } from '../proto-auto-gen/reddit/VotePostResponse.ts';
import { db } from '../db/db.ts';
import { Post } from '../proto-auto-gen/reddit/Post.ts';

export const VotePost: RedditServiceHandlers['VotePost'] = async (
  call: ServerUnaryCall<VotePostRequest, VotePostResponse>,
  callback: sendUnaryData<VotePostResponse>
): Promise<void> => {
  const request = call.request;

  try {
    const newScore = await updatePostScore(request.postId, request.vote);
    callback(null, { postId: request.postId, newScore: newScore, success: true, errorMessage: '' });
  } catch (error) {
    console.error('Failed to vote on post:', error);
    const errorMessage = error.message || 'Error voting on post';
    callback(null, { postId: request.postId, newScore: 0, success: false, errorMessage: errorMessage });
  }
};

async function updatePostScore(postId: number, vote: number): Promise<number> {
  return new Promise((resolve, reject) => {
    if(vote == 1 || vote == -1){
        db.get('SELECT score FROM posts WHERE postId = ?', [postId], (err, row: Post) => {
        if (err) {
            reject(err);
            return;
        }
        if (row) {
            const updatedScore = row.score + vote;
            db.run('UPDATE posts SET score = ? WHERE postId = ?', [updatedScore, postId], (err) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(updatedScore);
            });
        } else {
            reject(new Error('Post not found'));
        }
        });
    } else {
        throw new Error("Vote values can only be 1 or -1");
    }
  });
  
}
