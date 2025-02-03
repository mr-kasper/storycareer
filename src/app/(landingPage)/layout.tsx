import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const LandingPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <Navbar />
      <main className="h-full">{children}</main>
      <Footer />
    </div>
  );
};
export default LandingPageLayout;
