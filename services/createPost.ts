import { sendUnaryData, ServerUnaryCall } from '@grpc/grpc-js';
import { RedditServiceHandlers } from '../proto-auto-gen/reddit/RedditService.ts';
import { CreatePostRequest } from '../proto-auto-gen/reddit/CreatePostRequest.ts';
import { CreatePostResponse } from '../proto-auto-gen/reddit/CreatePostResponse.ts';
import { db } from '../db/db.ts';
import { Post as PostType } from '../proto-auto-gen/reddit/Post.ts';

async function createPostInDatabase(postData: PostType): Promise<number> {
  return new Promise((resolve, reject) => {
    const query = `
      INSERT INTO posts (postId, title, text, videoUrl, imageUrl, score, state, publicationDate, authorId, subredditId) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`;

    const params = [
      postData.postId || null,
      postData.title || null, 
      postData.text || null, 
      postData.videoUrl || null, 
      postData.imageUrl || null, 
      postData.score || 0, 
      postData.state, 
      postData.publicationDate || null, 
      postData.authorId || null, 
      postData.subredditId || null
    ];

    db.run(query, params, function (err) {
      if (err) {
        reject(err);
        return;
      }
      resolve(this.lastID);
    });
  });
}

export const CreatePost: RedditServiceHandlers['CreatePost'] = async (
  call: ServerUnaryCall<CreatePostRequest, CreatePostResponse>,
  callback: sendUnaryData<CreatePostResponse>
): Promise<void> => {
    try {
        const request = call.request;
        if(request.imageUrl && request.videoUrl){
            throw new Error("Cannot have two media files attached to one post");
        }
        const newPost: PostType = {
            title: request.title,
            text: request.text,
            videoUrl: request.videoUrl != undefined ? request.videoUrl : undefined,
            imageUrl: request.imageUrl != undefined ? request.imageUrl : undefined,
            score: 0,
            state: request.state,
            publicationDate: new Date().toISOString(),
            authorId: request.authorId,
            subredditId: request.subredditName
        };
        const id = await createPostInDatabase(newPost);
        newPost.postId = id;
        callback(null, { post: newPost, success: true, errorMessage: '' });
  } catch (error) {
    console.error('Failed to create post:', error);
    const errorMessage = error.message || 'Issue with request';
    callback(null, { post: undefined, success: false , errorMessage:  errorMessage});
  }
};


