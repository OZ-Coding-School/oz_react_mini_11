
import { Outlet, NavLink } from 'react-router-dom';

export default function Layout() {
  const navStyle = {
    padding: '1rem',
    background: '#222',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  };

   const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    marginLeft: '1rem',
  };

  return (
    <>
      <nav style={navStyle}>
        <h2 style={{ margin: 0 }}>🎬 Movie App</h2>
        <div>
          <NavLink to="/" style={linkStyle}>홈</NavLink>
          <NavLink to="/movies" style={linkStyle}>영화 목록</NavLink>
          <NavLink to="/favorites" style={linkStyle}>즐겨찾기</NavLink>
        </div>
      </nav>
      <main style={{ padding: '1rem' }}>
        <Outlet />
      </main>
    </>
  );
}