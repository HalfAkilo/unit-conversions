import "./App.css";
import i18n from "./i18n";
import LengthConverter from "./components/LengthConverter";
import WeightConverter from "./components/WeightConverter";
const App = () => {
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="content">
      <div className="mb-4">
        <button
          onClick={() => changeLanguage("en")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          English
        </button>
        <button
          onClick={() => changeLanguage("zh-CN")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          中文
        </button>
        <button
          onClick={() => changeLanguage("fr")}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Français
        </button>
      </div>
      <LengthConverter />
      <WeightConverter />
    </div>
  );
};

export default App;
