import { ThemeProvider } from "./components/theme-provider"
import { ThemeToggle } from "./components/mode-toggle"
import { SearchBar } from "@tarzi/jarvis"

function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen gap-8">
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">

        <div className="h-screen w-screen dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex pt-56 justify-center gap-8">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
          <SearchBar />
          <ThemeToggle />
        </div>

      </ThemeProvider >
    </div>
  )
}

export default App
