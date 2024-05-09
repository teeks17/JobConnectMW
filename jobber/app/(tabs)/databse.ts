import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('job_database.db');

// Create tables if they don't exist
const initializeDatabase = () => {
  db.transaction(tx => {
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      )`
    );
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS jobs (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        description TEXT,
        company TEXT,
        posterId INTEGER,
        FOREIGN KEY (posterId) REFERENCES users(id)
      )`
    );
    tx.executeSql(
      `CREATE TABLE IF NOT EXISTS applications (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        jobId INTEGER,
        applicantId INTEGER,
        FOREIGN KEY (jobId) REFERENCES jobs(id),
        FOREIGN KEY (applicantId) REFERENCES users(id)
      )`
    );
  });
};

export { db, initializeDatabase };
