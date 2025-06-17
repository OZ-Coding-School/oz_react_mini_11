import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <header>하이</header>
      <main className="bg-neutral-900 p-10">
        <Outlet />
      </main>
    </div>
  );
}
