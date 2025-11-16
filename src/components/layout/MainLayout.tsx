import Sidebar from '../Sidebar';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen p-6">
      <Sidebar />
      {children}
    </div>
  );
}
