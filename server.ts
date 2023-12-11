import * as grpc from '@grpc/grpc-js'
import * as protoLoader from '@grpc/proto-loader'
import {ProtoGrpcType} from './proto-auto-gen/reddit.ts'
import { RedditServiceHandlers } from './proto-auto-gen/reddit/RedditService.ts';
import { CreatePost } from './services/createPost.ts'
import { VotePost } from './services/updateScore.ts';
import { RetrievePost } from './services/retrievePost.ts';
import { CreateComment } from './services/createComment.ts';
import { VoteComment } from './services/voteComment.ts';
import { RetrieveTopComments } from './services/retrieveTopComment.ts';
import { ExpandCommentBranch } from './services/expandCommitBranch.ts';
import { MonitorUpdates } from './services/monitorUpdates.ts';


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