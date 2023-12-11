import sqlite3 from 'sqlite3';

const dbPath = './redditDB.sqlite';
export const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database', err);
    return;
  }
  console.log('Connected successfully to SQLite database');

  // Initialize the posts table
  db.run(`
    CREATE TABLE IF NOT EXISTS posts (
      postId INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      text TEXT,
      videoUrl TEXT,
      imageUrl TEXT,
      score INTEGER,
      state INTEGER,
      publicationDate TEXT,
      authorId TEXT,
      subredditId TEXT
    )`);

  // Initialize the comments table
  db.run(`
    CREATE TABLE IF NOT EXISTS comments (
      commentId INTEGER PRIMARY KEY AUTOINCREMENT,
      text TEXT,
      author_id TEXT,
      score INTEGER,
      state INTEGER,
      publication_date TEXT,
      p_post_id INTEGER, 
      p_commentId INTEGER,
      FOREIGN KEY (p_post_id) REFERENCES posts(postId),
      FOREIGN KEY (p_commentId) REFERENCES comments(commentId)
    )`);
});
