import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader'
import {ProtoGrpcType} from './proto-auto-gen/reddit.ts'
import { RetrievePostRequest } from './proto-auto-gen/reddit/RetrievePostRequest.ts';
import { RetrieveTopCommentsRequest } from './proto-auto-gen/reddit/RetrieveTopCommentsRequest.ts';
import { ExpandCommentBranchRequest } from './proto-auto-gen/reddit/ExpandCommentBranchRequest.ts';


const PROTO_PATH = './proto/reddit.proto';

// Load the protobuf
const packageDef = protoLoader.loadSync(PROTO_PATH);
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType;
const redditPkg = grpcObj.reddit;

// Create a client
const client = new redditPkg.RedditService(
  `localhost:3005`, 
  grpc.credentials.createInsecure()
);

function retrievePost(postId: number) {
    const request: RetrievePostRequest = {
      postId: postId
    };
  
    client.retrievePost(request, (err, response) => {
      if (err) {
        console.error('Error retrieving post:', err);
        return;
      }
  
      if (response.success) {
        console.log('Retrieved post:', response.post);
        console.log("------------------------------------")
      } else {
        console.log('Failed to retrieve post:', response.errorMessage);
      }
    });
  }

// Example usage
const postIdn = 4;
retrievePost(postIdn);


function retrieveTopComments(postId: number, n: number) {
const request: RetrieveTopCommentsRequest = {
    postId: postId,
    n: n
};

client.retrieveTopComments(request, (err, response) => {
    if (err) {
    console.error('Error retrieving top comments:', err);
    return;
    }

    console.log('Top comments:', response.comments);
    console.log("------------------------------------")
});
}

// Example usage
const postId = 1; // Replace with an actual post ID
const n = 1; // Number of top comments to retrieve
retrieveTopComments(postId, n);


function expandMostUpvotedComment(postId: number, n: number) {
const topCommentsRequest: RetrieveTopCommentsRequest = {
    postId: postId,
    n: n
};
console.log(topCommentsRequest)

client.retrieveTopComments(topCommentsRequest, (err, response) => {
    if (err) {
    console.error('Error retrieving top comments:', err);
    return;
    }
    console.log(response)

    const topComments = response.comments;
    if (topComments && topComments.length > 0) {
    const mostUpvotedCommentId = topComments[0].commentId;

    const expandRequest: ExpandCommentBranchRequest = {
        commentId: mostUpvotedCommentId,
        n: n // Number of replies to expand at each level
    };

    client.expandCommentBranch(expandRequest, (expandErr, expandResponse) => {
        if (expandErr) {
        console.error('Error expanding comment branch:', expandErr);
        return;
        }

        console.log('Expanded comment branch:', expandResponse);
        console.log("------------------------------------")
    });
    } else {
    console.log('No comments available to expand.');
    }
});
}

// Example usage
const postId3 = 1; // Replace with an actual post ID
const n3 = 5; // Number of replies to expand at each level
expandMostUpvotedComment(postId3, n3);


function getMostUpvotedReplyUnderTopComment(postId: number) {
    // First, retrieve the top comment for the post
    const topCommentsRequest: RetrieveTopCommentsRequest = {
      postId: postId,
      n: 1 // Fetching only the most upvoted comment
    };
  
    client.retrieveTopComments(topCommentsRequest, (err, response) => {
      if (err) {
        console.error('Error retrieving top comments:', err);
        return;
      }
  
      const topComments = response.comments;
      if (topComments && topComments.length > 0) {
        const mostUpvotedCommentId = topComments[0].commentId;
  
        // Now, expand the most upvoted comment to get its replies
        const expandRequest: ExpandCommentBranchRequest = {
          commentId: mostUpvotedCommentId,
          n: 1 // Fetching only the most upvoted reply
        };
  
        client.expandCommentBranch(expandRequest, (expandErr, expandResponse) => {
          if (expandErr) {
            console.error('Error expanding comment branch:', expandErr);
            return;
          }
  
          // Check if there are any replies
          if (expandResponse.levelOneReplies.length > 0) {
            const mostUpvotedReply = expandResponse.levelOneReplies[0];
            console.log('Most upvoted reply:', mostUpvotedReply);
            console.log("------------------------------------")
          } else {
            console.log('No replies found under the most upvoted comment.');
          }
        });
      } else {
        console.log('No comments found for the post.');
      }
    });
  }
  
  // Example usage
  const postId4 = 1; // Replace with an actual post ID
  getMostUpvotedReplyUnderTopComment(postId4);
