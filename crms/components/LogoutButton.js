'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', { method: 'GET' });

      const data = await response.json();
      if (response.ok) {
        router.push(data.redirectUrl); // Redirect to login page
      } else {
        console.error('Logout failed:', data.message);
      }
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return (
    <button onClick={handleLogout} className="btn btn-outline-danger nav-link">
      Log Out
    </button>
  );
}
