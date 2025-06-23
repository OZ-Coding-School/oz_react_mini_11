import { FaUserCircle } from 'react-icons/fa';
import supabase from '../supabaseClient';

function UserIcon() {
  return (
    <div className="relative group">
      <FaUserCircle className="text-2xl cursor-pointer" />
      <div className="absolute top-0 right-0 w-max hidden group-hover:block">
        <div className="mt-10 p-4 bg-[#000000c1] text-sm">
          <button
            className="hover:underline"
            onClick={() => supabase.auth.signOut()}
          >
            로그아웃
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserIcon;