import React from 'react';

type SidebarItemProps = {
  icon?: React.ReactNode;
  totalTasks?: number;
  children?: React.ReactNode;
  color?: string;
};

export default function SidebarItem({
  icon,
  totalTasks,
  children,
  color,
}: SidebarItemProps) {
  return (
    <li className="group flex items-center justify-between px-2 py-1.5 rounded hover:bg-[#ebebeb] cursor-pointer">
      <div className="flex items-center gap-2">
        <div className="min-w-6 flex items-center justify-center">
          {icon ? icon : null}
          {color ? <div className={`w-4 h-4 rounded ${color}`}></div> : null}
        </div>
        <p className="font-medium">{children}</p>
      </div>
      {totalTasks !== undefined && totalTasks > 0 && (
        <div className="px-3 bg-[#ebebeb] rounded text-sm group-hover:bg-white">
          {totalTasks}
        </div>
      )}
    </li>
  );
}
