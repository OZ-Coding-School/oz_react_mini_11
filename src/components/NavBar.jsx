import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-purple-400">MOVIE</h1>
      <div className="space-x-4">
        <button className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded">로그인</button>
        <button className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded">회원가입</button>
      </div>
    </nav>
  );
}
