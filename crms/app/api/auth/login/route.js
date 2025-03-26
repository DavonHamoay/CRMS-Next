import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'crms',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export async function POST(req) {
  try {
    const { username, password } = await req.json();

    const [rows] = await pool.execute(
      'SELECT id, username, password, role FROM users WHERE username = ?',
      [username]
    );

    if (rows.length === 0) {
      return new Response(JSON.stringify({ message: 'Invalid username or password' }), { status: 400 });
    }

    const user = rows[0];

    const passwordMatch = bcrypt.compareSync(password, user.password);
    if (!passwordMatch) {
      return new Response(JSON.stringify({ message: 'Invalid username or password' }), { status: 400 });
    }

    return new Response(
      JSON.stringify({
        redirectUrl: user.role === 'administrator' ? '/admin-dashboard' : '/user-dashboard',
      }),
      { status: 200 }
    );

  } catch (error) {
    console.error('Server Error:', error);
    return new Response(JSON.stringify({ message: 'Server error' }), { status: 500 });
  }
}
