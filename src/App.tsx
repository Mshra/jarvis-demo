import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/mode-toggle";
import { SearchBar } from "@tarzi/jarvis";
import { Github } from "lucide-react";
import { Button } from "./components/ui/moving-border";

const NavBar = () => {
  return (
    <div className="flex justify-center">
      <ul className="flex items-center justify-evenly gap-4 p-4 mt-40 border border-black rounded-full dark:border-white bg-white dark:bg-black w-11/12 md:w-7/12 lg:w-5/12">
        <li>
          <a href="https://github.com/Mshra/Jarvis" target="_blank">
            <Github />
          </a>
        </li>
        <li>
          <ThemeToggle />
        </li>
        <li>
          <a href="https://www.npmjs.com/package/@tarzi/jarvis" target="_blank">
            <svg
              width="40"
              preserveAspectRatio="xMidYMid"
              viewBox="0 0 256 100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m0 0v85.4980695h71.1660232v14.3320463h56.8339768v-14.3320463h128v-85.4980695z"
                fill="#cb3837"
              />
              <g fill="#fff">
                <path d="m42.5019305 14.3320463h-28.1698842v14.3320464 42.5019305h28.1698842v-42.5019305h14.3320463v42.5019305h14.3320464v-42.5019305-14.3320464z" />
                <path d="m85.4980695 14.3320463v53.8687259 2.965251 14.3320463h28.6640925v-14.3320463h28.169884v-56.8339769zm42.5019305 42.5019305h-13.837838v-28.1698841h13.837838z" />
                <path d="m184.833977 14.3320463h-28.169884v14.3320464 42.5019305h28.169884v-42.5019305h14.332046v42.5019305h14.332046v-42.5019305h14.332047v42.5019305h14.332046v-42.5019305-13.3436294-.988417z" />
              </g>
            </svg>
          </a>
        </li>
      </ul>
    </div>
  );
};

const Bar = () => {
  return (
    <div className="flex justify-center pt-20">
      <SearchBar />
    </div>
  );
};

function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen gap-8">
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <div className="h-screen w-screen dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative">
          <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

          <NavBar />
          <Bar />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
