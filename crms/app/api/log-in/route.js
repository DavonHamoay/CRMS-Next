import mysql from 'mysql2';
import bcrypt from 'bcryptjs';

// Set up MySQL connection
const db = mysql.createConnection({
  host: 'localhost',  // WAMPServer uses localhost by default
  user: 'root',       // Default MySQL user for WAMPServer
  password: '',       // WAMPServer usually has an empty password for the root user
  database: 'crms', // Replace with your actual database name
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

export async function POST(req) {
  const { username, password } = await req.json(); // Parse the request body

  // SQL query to fetch user based on the username
  const query = 'SELECT id, username, password, role FROM users WHERE username = ?';
  
  return new Promise((resolve, reject) => {
    db.execute(query, [username], (err, results) => {
      if (err) {
        console.error('Error executing query:', err);
        return reject(new Error('Server error'));
      }

      const user = results[0];

      if (user && bcrypt.compareSync(password, user.password)) {
        // If password matches, send redirectUrl based on role
        if (user.role === 'administrator') {
          return resolve(new Response(JSON.stringify({ redirectUrl: '/admin-dashboard' }), { status: 200 }));
        } else {
          return resolve(new Response(JSON.stringify({ redirectUrl: '/user-dashboard' }), { status: 200 }));
        }
      } else {
        return resolve(new Response(JSON.stringify({ message: 'Invalid username or password' }), { status: 400 }));
      }
    });
  });
}
