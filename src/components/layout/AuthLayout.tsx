import Illustrator from '@/assets/images/Illustrator.png';
import { Outlet } from 'react-router-dom';

export default function AuthLayout() {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex-1/2 flex justify-center items-center relative overflow-hidden bg-[#111]">
        <p className="text-white text-6xl font-bold absolute top-10 left-10 z-10">
          Organic
          <br />
          Mind
        </p>
        <img
          src={Illustrator}
          alt="Illustrator image"
          className="max-w-full max-h-full object-contain"
        />
      </div>
      <div className="flex-1/2 px-40">
        <Outlet />
      </div>
    </div>
  );
}
