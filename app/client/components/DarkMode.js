import { useTheme } from "next-themes";
import { TiAdjustBrightness } from 'react-icons/ti';
import { TiWeatherNight } from "react-icons/ti";
import { useEffect } from 'react'
import { themeChange} from "theme-change"

export default function DarkMode() {
  const { theme, setTheme } = useTheme();
  const themeValues = ["light", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter"]

  useEffect(() => {themeChange(false)})

    return (
        <div>
            <button className="hover:bg-gray-700 dark:hover:bg-gray-700 rounded-full p-2"
             onClick={() => setTheme(theme === "dark" ? "light" : "dark") }>
                {theme === "dark" ? <TiAdjustBrightness size={30}
                /> : <TiWeatherNight size={30}/>} </button>

<select className='text-primary bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' data-choose-theme>
    
    {themeValues.map((value) => (
      <option className="text-primary" value={value.toLowerCase()} key = {value}
      >{value}</option>
    ))}
    </select>
        </div>
    );
}


