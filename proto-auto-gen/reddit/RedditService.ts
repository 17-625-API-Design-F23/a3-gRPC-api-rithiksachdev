// Original file: proto/reddit.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateCommentRequest as _reddit_CreateCommentRequest, CreateCommentRequest__Output as _reddit_CreateCommentRequest__Output } from '../reddit/CreateCommentRequest';
import type { CreateCommentResponse as _reddit_CreateCommentResponse, CreateCommentResponse__Output as _reddit_CreateCommentResponse__Output } from '../reddit/CreateCommentResponse';
import type { CreatePostRequest as _reddit_CreatePostRequest, CreatePostRequest__Output as _reddit_CreatePostRequest__Output } from '../reddit/CreatePostRequest';
import type { CreatePostResponse as _reddit_CreatePostResponse, CreatePostResponse__Output as _reddit_CreatePostResponse__Output } from '../reddit/CreatePostResponse';
import type { ExpandCommentBranchRequest as _reddit_ExpandCommentBranchRequest, ExpandCommentBranchRequest__Output as _reddit_ExpandCommentBranchRequest__Output } from '../reddit/ExpandCommentBranchRequest';
import type { ExpandCommentBranchResponse as _reddit_ExpandCommentBranchResponse, ExpandCommentBranchResponse__Output as _reddit_ExpandCommentBranchResponse__Output } from '../reddit/ExpandCommentBranchResponse';
import type { MonitorUpdatesRequest as _reddit_MonitorUpdatesRequest, MonitorUpdatesRequest__Output as _reddit_MonitorUpdatesRequest__Output } from '../reddit/MonitorUpdatesRequest';
import type { MonitorUpdatesResponse as _reddit_MonitorUpdatesResponse, MonitorUpdatesResponse__Output as _reddit_MonitorUpdatesResponse__Output } from '../reddit/MonitorUpdatesResponse';
import type { RetrievePostRequest as _reddit_RetrievePostRequest, RetrievePostRequest__Output as _reddit_RetrievePostRequest__Output } from '../reddit/RetrievePostRequest';
import type { RetrievePostResponse as _reddit_RetrievePostResponse, RetrievePostResponse__Output as _reddit_RetrievePostResponse__Output } from '../reddit/RetrievePostResponse';
import type { RetrieveTopCommentsRequest as _reddit_RetrieveTopCommentsRequest, RetrieveTopCommentsRequest__Output as _reddit_RetrieveTopCommentsRequest__Output } from '../reddit/RetrieveTopCommentsRequest';
import type { RetrieveTopCommentsResponse as _reddit_RetrieveTopCommentsResponse, RetrieveTopCommentsResponse__Output as _reddit_RetrieveTopCommentsResponse__Output } from '../reddit/RetrieveTopCommentsResponse';
import type { VoteCommentRequest as _reddit_VoteCommentRequest, VoteCommentRequest__Output as _reddit_VoteCommentRequest__Output } from '../reddit/VoteCommentRequest';
import type { VoteCommentResponse as _reddit_VoteCommentResponse, VoteCommentResponse__Output as _reddit_VoteCommentResponse__Output } from '../reddit/VoteCommentResponse';
import type { VotePostRequest as _reddit_VotePostRequest, VotePostRequest__Output as _reddit_VotePostRequest__Output } from '../reddit/VotePostRequest';
import type { VotePostResponse as _reddit_VotePostResponse, VotePostResponse__Output as _reddit_VotePostResponse__Output } from '../reddit/VotePostResponse';

export interface RedditServiceClient extends grpc.Client {
  CreateComment(argument: _reddit_CreateCommentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_CreateCommentResponse__Output>): grpc.ClientUnaryCall;
  CreateComment(argument: _reddit_CreateCommentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_CreateCommentResponse__Output>): grpc.ClientUnaryCall;
  CreateComment(argument: _reddit_CreateCommentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_CreateCommentResponse__Output>): grpc.ClientUnaryCall;
  CreateComment(argument: _reddit_CreateCommentRequest, callback: grpc.requestCallback<_reddit_CreateCommentResponse__Output>): grpc.ClientUnaryCall;
  createComment(argument: _reddit_CreateCommentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_CreateCommentResponse__Output>): grpc.ClientUnaryCall;
  createComment(argument: _reddit_CreateCommentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_CreateCommentResponse__Output>): grpc.ClientUnaryCall;
  createComment(argument: _reddit_CreateCommentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_CreateCommentResponse__Output>): grpc.ClientUnaryCall;
  createComment(argument: _reddit_CreateCommentRequest, callback: grpc.requestCallback<_reddit_CreateCommentResponse__Output>): grpc.ClientUnaryCall;
  
  CreatePost(argument: _reddit_CreatePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  CreatePost(argument: _reddit_CreatePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  CreatePost(argument: _reddit_CreatePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  CreatePost(argument: _reddit_CreatePostRequest, callback: grpc.requestCallback<_reddit_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  createPost(argument: _reddit_CreatePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  createPost(argument: _reddit_CreatePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  createPost(argument: _reddit_CreatePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  createPost(argument: _reddit_CreatePostRequest, callback: grpc.requestCallback<_reddit_CreatePostResponse__Output>): grpc.ClientUnaryCall;
  
  ExpandCommentBranch(argument: _reddit_ExpandCommentBranchRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_ExpandCommentBranchResponse__Output>): grpc.ClientUnaryCall;
  ExpandCommentBranch(argument: _reddit_ExpandCommentBranchRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_ExpandCommentBranchResponse__Output>): grpc.ClientUnaryCall;
  ExpandCommentBranch(argument: _reddit_ExpandCommentBranchRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_ExpandCommentBranchResponse__Output>): grpc.ClientUnaryCall;
  ExpandCommentBranch(argument: _reddit_ExpandCommentBranchRequest, callback: grpc.requestCallback<_reddit_ExpandCommentBranchResponse__Output>): grpc.ClientUnaryCall;
  expandCommentBranch(argument: _reddit_ExpandCommentBranchRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_ExpandCommentBranchResponse__Output>): grpc.ClientUnaryCall;
  expandCommentBranch(argument: _reddit_ExpandCommentBranchRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_ExpandCommentBranchResponse__Output>): grpc.ClientUnaryCall;
  expandCommentBranch(argument: _reddit_ExpandCommentBranchRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_ExpandCommentBranchResponse__Output>): grpc.ClientUnaryCall;
  expandCommentBranch(argument: _reddit_ExpandCommentBranchRequest, callback: grpc.requestCallback<_reddit_ExpandCommentBranchResponse__Output>): grpc.ClientUnaryCall;
  
  MonitorUpdates(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_reddit_MonitorUpdatesRequest, _reddit_MonitorUpdatesResponse__Output>;
  MonitorUpdates(options?: grpc.CallOptions): grpc.ClientDuplexStream<_reddit_MonitorUpdatesRequest, _reddit_MonitorUpdatesResponse__Output>;
  monitorUpdates(metadata: grpc.Metadata, options?: grpc.CallOptions): grpc.ClientDuplexStream<_reddit_MonitorUpdatesRequest, _reddit_MonitorUpdatesResponse__Output>;
  monitorUpdates(options?: grpc.CallOptions): grpc.ClientDuplexStream<_reddit_MonitorUpdatesRequest, _reddit_MonitorUpdatesResponse__Output>;
  
  RetrievePost(argument: _reddit_RetrievePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_RetrievePostResponse__Output>): grpc.ClientUnaryCall;
  RetrievePost(argument: _reddit_RetrievePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_RetrievePostResponse__Output>): grpc.ClientUnaryCall;
  RetrievePost(argument: _reddit_RetrievePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_RetrievePostResponse__Output>): grpc.ClientUnaryCall;
  RetrievePost(argument: _reddit_RetrievePostRequest, callback: grpc.requestCallback<_reddit_RetrievePostResponse__Output>): grpc.ClientUnaryCall;
  retrievePost(argument: _reddit_RetrievePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_RetrievePostResponse__Output>): grpc.ClientUnaryCall;
  retrievePost(argument: _reddit_RetrievePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_RetrievePostResponse__Output>): grpc.ClientUnaryCall;
  retrievePost(argument: _reddit_RetrievePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_RetrievePostResponse__Output>): grpc.ClientUnaryCall;
  retrievePost(argument: _reddit_RetrievePostRequest, callback: grpc.requestCallback<_reddit_RetrievePostResponse__Output>): grpc.ClientUnaryCall;
  
  RetrieveTopComments(argument: _reddit_RetrieveTopCommentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_RetrieveTopCommentsResponse__Output>): grpc.ClientUnaryCall;
  RetrieveTopComments(argument: _reddit_RetrieveTopCommentsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_RetrieveTopCommentsResponse__Output>): grpc.ClientUnaryCall;
  RetrieveTopComments(argument: _reddit_RetrieveTopCommentsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_RetrieveTopCommentsResponse__Output>): grpc.ClientUnaryCall;
  RetrieveTopComments(argument: _reddit_RetrieveTopCommentsRequest, callback: grpc.requestCallback<_reddit_RetrieveTopCommentsResponse__Output>): grpc.ClientUnaryCall;
  retrieveTopComments(argument: _reddit_RetrieveTopCommentsRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_RetrieveTopCommentsResponse__Output>): grpc.ClientUnaryCall;
  retrieveTopComments(argument: _reddit_RetrieveTopCommentsRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_RetrieveTopCommentsResponse__Output>): grpc.ClientUnaryCall;
  retrieveTopComments(argument: _reddit_RetrieveTopCommentsRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_RetrieveTopCommentsResponse__Output>): grpc.ClientUnaryCall;
  retrieveTopComments(argument: _reddit_RetrieveTopCommentsRequest, callback: grpc.requestCallback<_reddit_RetrieveTopCommentsResponse__Output>): grpc.ClientUnaryCall;
  
  VoteComment(argument: _reddit_VoteCommentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_VoteCommentResponse__Output>): grpc.ClientUnaryCall;
  VoteComment(argument: _reddit_VoteCommentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_VoteCommentResponse__Output>): grpc.ClientUnaryCall;
  VoteComment(argument: _reddit_VoteCommentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_VoteCommentResponse__Output>): grpc.ClientUnaryCall;
  VoteComment(argument: _reddit_VoteCommentRequest, callback: grpc.requestCallback<_reddit_VoteCommentResponse__Output>): grpc.ClientUnaryCall;
  voteComment(argument: _reddit_VoteCommentRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_VoteCommentResponse__Output>): grpc.ClientUnaryCall;
  voteComment(argument: _reddit_VoteCommentRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_VoteCommentResponse__Output>): grpc.ClientUnaryCall;
  voteComment(argument: _reddit_VoteCommentRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_VoteCommentResponse__Output>): grpc.ClientUnaryCall;
  voteComment(argument: _reddit_VoteCommentRequest, callback: grpc.requestCallback<_reddit_VoteCommentResponse__Output>): grpc.ClientUnaryCall;
  
  VotePost(argument: _reddit_VotePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_VotePostResponse__Output>): grpc.ClientUnaryCall;
  VotePost(argument: _reddit_VotePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_VotePostResponse__Output>): grpc.ClientUnaryCall;
  VotePost(argument: _reddit_VotePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_VotePostResponse__Output>): grpc.ClientUnaryCall;
  VotePost(argument: _reddit_VotePostRequest, callback: grpc.requestCallback<_reddit_VotePostResponse__Output>): grpc.ClientUnaryCall;
  votePost(argument: _reddit_VotePostRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_VotePostResponse__Output>): grpc.ClientUnaryCall;
  votePost(argument: _reddit_VotePostRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_reddit_VotePostResponse__Output>): grpc.ClientUnaryCall;
  votePost(argument: _reddit_VotePostRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_reddit_VotePostResponse__Output>): grpc.ClientUnaryCall;
  votePost(argument: _reddit_VotePostRequest, callback: grpc.requestCallback<_reddit_VotePostResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface RedditServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateComment: grpc.handleUnaryCall<_reddit_CreateCommentRequest__Output, _reddit_CreateCommentResponse>;
  
  CreatePost: grpc.handleUnaryCall<_reddit_CreatePostRequest__Output, _reddit_CreatePostResponse>;
  
  ExpandCommentBranch: grpc.handleUnaryCall<_reddit_ExpandCommentBranchRequest__Output, _reddit_ExpandCommentBranchResponse>;
  
  MonitorUpdates: grpc.handleBidiStreamingCall<_reddit_MonitorUpdatesRequest__Output, _reddit_MonitorUpdatesResponse>;
  
  RetrievePost: grpc.handleUnaryCall<_reddit_RetrievePostRequest__Output, _reddit_RetrievePostResponse>;
  
  RetrieveTopComments: grpc.handleUnaryCall<_reddit_RetrieveTopCommentsRequest__Output, _reddit_RetrieveTopCommentsResponse>;
  
  VoteComment: grpc.handleUnaryCall<_reddit_VoteCommentRequest__Output, _reddit_VoteCommentResponse>;
  
  VotePost: grpc.handleUnaryCall<_reddit_VotePostRequest__Output, _reddit_VotePostResponse>;
  
}

export interface RedditServiceDefinition extends grpc.ServiceDefinition {
  CreateComment: MethodDefinition<_reddit_CreateCommentRequest, _reddit_CreateCommentResponse, _reddit_CreateCommentRequest__Output, _reddit_CreateCommentResponse__Output>
  CreatePost: MethodDefinition<_reddit_CreatePostRequest, _reddit_CreatePostResponse, _reddit_CreatePostRequest__Output, _reddit_CreatePostResponse__Output>
  ExpandCommentBranch: MethodDefinition<_reddit_ExpandCommentBranchRequest, _reddit_ExpandCommentBranchResponse, _reddit_ExpandCommentBranchRequest__Output, _reddit_ExpandCommentBranchResponse__Output>
  MonitorUpdates: MethodDefinition<_reddit_MonitorUpdatesRequest, _reddit_MonitorUpdatesResponse, _reddit_MonitorUpdatesRequest__Output, _reddit_MonitorUpdatesResponse__Output>
  RetrievePost: MethodDefinition<_reddit_RetrievePostRequest, _reddit_RetrievePostResponse, _reddit_RetrievePostRequest__Output, _reddit_RetrievePostResponse__Output>
  RetrieveTopComments: MethodDefinition<_reddit_RetrieveTopCommentsRequest, _reddit_RetrieveTopCommentsResponse, _reddit_RetrieveTopCommentsRequest__Output, _reddit_RetrieveTopCommentsResponse__Output>
  VoteComment: MethodDefinition<_reddit_VoteCommentRequest, _reddit_VoteCommentResponse, _reddit_VoteCommentRequest__Output, _reddit_VoteCommentResponse__Output>
  VotePost: MethodDefinition<_reddit_VotePostRequest, _reddit_VotePostResponse, _reddit_VotePostRequest__Output, _reddit_VotePostResponse__Output>
}
