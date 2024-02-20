import WeatherSection from "./customComps/weatherSection/weather";
import ArticleSection from "./customComps/articleSection/article";
import RightSection from "./customComps/musicAndHealth/RightSection";

export default function Home() {
  return (
    <main className="flex">
      <div className="flex h-screen w-full bg-gray-500 justify-evenly">
        <ArticleSection />
        <WeatherSection />
        <RightSection />
      </div>
    </main>
  );
}
