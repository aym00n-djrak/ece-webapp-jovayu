import { useTheme } from "next-themes";

export default function DarkMode() {
  const { theme, setTheme } = useTheme();

    return (
        <div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
             onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                {theme === "dark" ? "Light Mode" : "Dark Mode"} </button>
        </div>
    );
}


