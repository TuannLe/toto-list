import KeyboardDoubleArrowRightRounded from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import MenuIcon from '@mui/icons-material/Menu';
import ChecklistRoundedIcon from '@mui/icons-material/ChecklistRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import StickyNote2RoundedIcon from '@mui/icons-material/StickyNote2Rounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import SidebarItem from './SidebarItem';
import Divider from './Divider';

export default function Sidebar() {
  return (
    <div className="flex flex-col justify-between w-[350px] h-full bg-[#f4f4f4] rounded-xl p-4 mr-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="font-bold text-2xl">Menu</h1>
          <MenuIcon />
        </div>
        <div className="flex items-center rounded border border-gray-200 focus-within:border-gray-400">
          <input type="text" className="flex-1 px-2 outline-none" />
          <button
            type="submit"
            className="p-1.5 rounded cursor-pointer hover:bg-gray-200"
          >
            <SearchRoundedIcon />
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <h2 className="font-bold uppercase mb-2">Tasks</h2>
            <ul>
              <SidebarItem
                icon={<KeyboardDoubleArrowRightRounded fontSize="small" />}
                totalTasks={3}
              >
                Upcoming
              </SidebarItem>
              <SidebarItem
                icon={<ChecklistRoundedIcon fontSize="small" />}
                totalTasks={7}
              >
                Today
              </SidebarItem>
              <SidebarItem icon={<CalendarMonthRoundedIcon fontSize="small" />}>
                Calendar
              </SidebarItem>
              <SidebarItem icon={<StickyNote2RoundedIcon fontSize="small" />}>
                Sticky Wall
              </SidebarItem>
            </ul>
          </div>
          <Divider />
          <div>
            <h2 className="font-bold uppercase mb-2">Lists</h2>
            <ul>
              <SidebarItem color="bg-blue-500" totalTasks={3}>
                Personal
              </SidebarItem>
              <SidebarItem color="bg-purple-500" totalTasks={7}>
                Work
              </SidebarItem>
              <SidebarItem color="bg-red-500">List1</SidebarItem>
              <SidebarItem color="bg-green-500">List2</SidebarItem>
              <SidebarItem icon={<AddRoundedIcon fontSize="small" />}>
                Add New List
              </SidebarItem>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <SidebarItem icon={<TuneRoundedIcon fontSize="small" />}>
          Settings
        </SidebarItem>
        <SidebarItem icon={<LogoutRoundedIcon fontSize="small" />}>
          Sign out
        </SidebarItem>
      </div>
    </div>
  );
}
