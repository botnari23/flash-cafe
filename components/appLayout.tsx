import Footer from "./ui/footer";
import Navbar from "./ui/navbar";
import ScrollToTop from "./ui/ScrollToTop";

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <>
      <Navbar />
      {children}
      <ScrollToTop />
      <Footer />
    </>
  );
}
