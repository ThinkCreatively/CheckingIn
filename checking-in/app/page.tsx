import WeatherSection from "./customComps/weatherSection/weather";
import ArticleSection from "./customComps/articleSection/article";

export default function Home() {
  return (
    <main className="flex">
      <div className="flex h-screen w-full bg-gray-500 justify-evenly">
        <ArticleSection />
        <WeatherSection />
        <div className="flex justify-center border-2 border-yellow-900 w-full ">
          Section
        </div>
      </div>
    </main>
  );
}
