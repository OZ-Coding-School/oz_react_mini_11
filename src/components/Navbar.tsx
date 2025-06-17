import Button from "./Button";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between absolute top-0 w-full text-neutral-50 space-x-5 p-2">
      <h1 className="text-4xl font-semibold">Movie Wiki</h1>
      <input className="bg-neutral-50 text-neutral-900 rounded-full focus:outline-none p-1 flex-1 max-w-2xl" />
      <div className="flex items-center justify-center space-x-2">
        <Button theme="outline">회원가입</Button>
        <Button theme="default">로그인</Button>
      </div>
    </header>
  );
}
