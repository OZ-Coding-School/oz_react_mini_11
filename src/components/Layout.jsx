import { Outlet } from 'react-router-dom';
import NavBar from '@/pages/NavBar';

export default function Layout({ inputValue, setInputValue }) {
  return (
    <>
      <NavBar inputValue={inputValue} setInputValue={setInputValue} />
      <Outlet />
    </>
  );
}
