import Header from '@/components/platform/header';

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto max-w-7xl px-5 h-screen">
      <Header />
      <div className="h-full flex items-start md:space-x-5">{children}</div>
    </div>
  );
};

export default PlatformLayout;
