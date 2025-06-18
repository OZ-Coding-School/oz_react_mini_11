
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      <nav style={{ padding: '1rem', background: '#222', color: 'white' }}>
        <h2 style={{ margin: 0 }}>🎬 Movie App</h2>
      </nav>
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </>
  );
}
