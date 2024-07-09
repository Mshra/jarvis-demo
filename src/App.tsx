import { SearchBar } from "@tarzi/jarvis"
import { ThemeProvider } from "./components/theme-provider"
import { Switch } from "./components/ui/switch"

const Header = () => {
  return (
    <header className="text-center p-8">
      <Switch />
    </header>
  )
}

const Footer = () => {
  return <footer>footer</footer>
}

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-screen w-screen grid grid-rows-[auto_1fr_auto]">
        <Header />

        <div className="flex justify-center items-center">
          <SearchBar />
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
