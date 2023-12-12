import type * as grpc from '@grpc/grpc-js';
import type { EnumTypeDefinition, MessageTypeDefinition } from '@grpc/proto-loader';

import type { RedditServiceClient as _reddit_RedditServiceClient, RedditServiceDefinition as _reddit_RedditServiceDefinition } from './reddit/RedditService';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  reddit: {
    Comment: MessageTypeDefinition
    CommentState: EnumTypeDefinition
    CreateCommentRequest: MessageTypeDefinition
    CreateCommentResponse: MessageTypeDefinition
    CreatePostRequest: MessageTypeDefinition
    CreatePostResponse: MessageTypeDefinition
    ExpandCommentBranchRequest: MessageTypeDefinition
    ExpandCommentBranchResponse: MessageTypeDefinition
    MonitorUpdatesRequest: MessageTypeDefinition
    MonitorUpdatesResponse: MessageTypeDefinition
    Post: MessageTypeDefinition
    PostState: EnumTypeDefinition
    RedditService: SubtypeConstructor<typeof grpc.Client, _reddit_RedditServiceClient> & { service: _reddit_RedditServiceDefinition }
    RetrievePostRequest: MessageTypeDefinition
    RetrievePostResponse: MessageTypeDefinition
    RetrieveTopCommentsFromCommentRequest: MessageTypeDefinition
    RetrieveTopCommentsRequest: MessageTypeDefinition
    RetrieveTopCommentsResponse: MessageTypeDefinition
    Subreddit: MessageTypeDefinition
    SubredditVisibility: EnumTypeDefinition
    User: MessageTypeDefinition
    VoteCommentRequest: MessageTypeDefinition
    VoteCommentResponse: MessageTypeDefinition
    VotePostRequest: MessageTypeDefinition
    VotePostResponse: MessageTypeDefinition
  }
}

