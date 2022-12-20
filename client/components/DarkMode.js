import { useTheme } from "next-themes";
import { TiAdjustBrightness } from 'react-icons/ti';
import { TiWeatherNight } from "react-icons/ti";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();

    return (
        <div>
            <button className="hover:bg-gray-700 dark:hover:bg-gray-700 rounded-full p-2"
             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? <TiAdjustBrightness size={30}
                /> : <TiWeatherNight size={30}/>} </button>
        </div>
    );
}


