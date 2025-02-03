import Navbar from '@/components/navbar';

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full">{children}</main>
      footer
    </div>
  );
};
export default LandingPageLayout;
