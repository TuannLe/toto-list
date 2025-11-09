import React from 'react';

export default function Sidebar() {
  return (
    <div className="w-[350px] h-full bg-[#f4f4f4] rounded-xl p-4 mr-6">
      <div>
        <h1>Menu</h1>
        <p>icon</p>
      </div>
      <div>
        <input type="text" />
      </div>
      <div>
        <h2>Tasks</h2>
        <ul>
          <li>
            <div>
              <p>icon</p>
              <p>Upcoming</p>
              <div>3</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
