import ScreenHero from '../components/ScreenHero';
import ScreenCapabilities from '../components/ScreenCapabilities';
import ScreenMetrics from '../components/ScreenMetrics';
import ScreenCompetitive from '../components/ScreenCompetitive';
import ScreenTrust from '../components/ScreenTrust';

function HomePage() {
  return (
    <div className="flex min-h-screen w-full flex-col overflow-hidden bg-background-light font-sans text-slate-700 pt-20">
      <ScreenHero />
      <ScreenCapabilities />
      <ScreenMetrics />
      <ScreenCompetitive />
      <ScreenTrust />
    </div>
  );
}

export default HomePage;
