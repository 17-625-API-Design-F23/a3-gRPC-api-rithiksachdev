import { ServerWritableStream } from '@grpc/grpc-js';
import { RedditServiceHandlers } from '../proto-auto-gen/reddit/RedditService.ts';
import { MonitorUpdatesRequest } from '../proto-auto-gen/reddit/MonitorUpdatesRequest.ts';
import { MonitorUpdatesResponse } from '../proto-auto-gen/reddit/MonitorUpdatesResponse.ts';

import { sendUnaryData, ServerDuplexStream } from '@grpc/grpc-js';
import { db } from '../db/db.ts';
import { Post } from '../proto-auto-gen/reddit/Post.ts';
import { Comment } from '../proto-auto-gen/reddit/Comment.ts';


export const MonitorUpdates: RedditServiceHandlers['MonitorUpdates'] = (
  call: ServerDuplexStream<MonitorUpdatesRequest, MonitorUpdatesResponse>
) => {
  const monitoredEntities = new Map<number, { type: 'post' | 'comment', lastKnownScore: number }>();

  call.on('data', async (request) => {
    console.log(request)
    if (request.postId) {
        console.log(request.postId)
      monitoredEntities.set(request.postId, { type: 'post', lastKnownScore: -1 });
      const postScore = await fetchScore(request.postId, 'post');
      call.write({ postId: request.postId, newScore: postScore });
    }

    request.commentIds.forEach(async commentId => {
      const id = parseInt(commentId);
      monitoredEntities.set(id, { type: 'comment', lastKnownScore: -1 });
      const commentScore = await fetchScore(id, 'comment');
      call.write({ commentId: id, newScore: commentScore });
    });
  });
  console.log(monitoredEntities)


  call.on('end', () => {
    call.end();
  });
};

async function fetchScore(entityId: number, entityType: 'post' | 'comment'): Promise<number> {
  const query = entityType === 'post' ? 'SELECT * FROM posts WHERE postId = ?' : 'SELECT score FROM comments WHERE commentId = ?';
  return new Promise((resolve, reject) => {
    if (entityType == 'post'){
        // bebug points
        //console.log(query)
        //console.log(entityId)
        db.get(query, [entityId], (err, row : Post) => {
        if (err) {
            reject(err);
            return;
        }
        // debug point
        //console.log(row)
        resolve(row ? row.score : 0);
        });
    } else {
        db.get(query, [entityId], (err, row : Comment) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(row ? row.score : 0);
            });
    }
  });

}

