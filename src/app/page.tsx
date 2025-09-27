import {
  OpenSourceBanner,
  Header,
  Features,
  CTA,
  Groups,
  OpenSource,
  Footer
} from '@/components';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <OpenSourceBanner />
      <Header />
      <Features />
      <CTA />
      <Groups />
      {/* <Newsletter /> */}
      <OpenSource />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}
