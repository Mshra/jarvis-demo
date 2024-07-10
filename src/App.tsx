import { ThemeProvider } from "./components/theme-provider"
import { ThemeToggle } from "./components/mode-toggle"
import { SearchBar } from "@tarzi/jarvis"
import { WobbleCard } from "./components/ui/wobble-card"

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="bg-white dark:bg-black flex justify-center">
        <div className="h-screen w-full">
          <div className="h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex-col pt-6 justify-center">
            <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_50%,black)]"></div>

            <div className="flex justify-center items-center gap-8 py-12 mb-8">
              <h1 className="font-LilitaOne text-4xl sm:text-8xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-red-200 to-red-500">
                Jarvis
              </h1>
              <ThemeToggle />
            </div>
            <div className="flex justify-center">
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider >
  )
}

export default App
