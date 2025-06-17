function NavBar() {
  return (
    <div className="flex justify-between p-4 bg-blue-300">
      <h1>OZ 무비</h1>
      <input type="text" className="bg-white" />
      <div>
        <button className="mr-2">로그인</button>
        <button>회원가입</button>
      </div>
    </div>
  );
}

export default NavBar;
