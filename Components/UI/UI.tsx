import BannerAnimation from "./Banner/BannerAnimation";
import Header from './Header/page';
import ExperiencePage from './Experience/page';
import FrameworkPage from './Framework/page';
import CommunityPage from './Community/page';
import StartedPage from './Started/page';
import Footer from './Footer/page';

export default function UI() {
  return (
    <div className="">
      <Header />     
      <BannerAnimation />
      <ExperiencePage />
      <FrameworkPage />
      <CommunityPage />
      <StartedPage />
      <Footer />
    </div>
  );
}
