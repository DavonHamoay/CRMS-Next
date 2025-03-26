import { cookies } from 'next/headers';

export async function GET() {
  try {
    // Remove session cookie
    cookies().delete('sessionToken');

    return new Response(JSON.stringify({ message: 'Logged out successfully', redirectUrl: '/' }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'Error logging out' }), {
      status: 500,
    });
  }
}
