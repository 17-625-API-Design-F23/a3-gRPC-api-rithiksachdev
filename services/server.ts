import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import {ProtoGrpcType} from '../proto-auto-gen/reddit.ts'
import { RedditServiceHandlers } from '../proto-auto-gen/reddit/RedditService.ts';
import { CreatePost } from './createPost.ts'
import { VotePost } from './updateScore.ts';
import { RetrievePost } from './retrievePost.ts';
import { CreateComment } from './createComment.ts';
import { VoteComment } from './voteComment.ts';
import { RetrieveTopComments } from './retrieveTopComment.ts';
import { ExpandCommentBranch } from './expandCommitBranch.ts';
import { MonitorUpdates } from './monitorUpdates.ts';


const PORT = process.argv[2] ? parseInt(process.argv[2], 10) : 3005;

const PROTO_PATH = './proto/reddit.proto';

const packageDef = protoLoader.loadSync(PROTO_PATH)
const grpcObj = (grpc.loadPackageDefinition(packageDef) as unknown) as ProtoGrpcType
const randomPackage = grpcObj.reddit

function main() {
  const server = getServer()

  server.bindAsync(`0.0.0.0:${PORT}`, grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(err)
      return
    }
    console.log(`Your server as started on port ${port}`)
    server.start()
  })
}

function getServer() {
    const server = new grpc.Server()
    server.addService(randomPackage.RedditService.service, {
        CreatePost, VotePost, RetrievePost, CreateComment, VoteComment, RetrieveTopComments, ExpandCommentBranch, MonitorUpdates
    } as RedditServiceHandlers)
    return server
}

main()