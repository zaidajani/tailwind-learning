import "./App.css";
import { ReactComponent as House } from "./img/logo.svg";

function App() {
  return (
    <>
      <div>
        <nav className="relative container mx-auto p-6">
          <div className="flex items-center justify-between">
            <div className="pt-2">
              <House />
            </div>
            <div className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-darkGrayishBlue">
                Pricing
              </a>
              <a href="#" className="hover:text-darkGrayishBlue">
                Product
              </a>
              <a href="#" className="hover:text-darkGrayishBlue">
                About us
              </a>
              <a href="#" className="hover:text-darkGrayishBlue">
                Careers
              </a>
              <a href="#" className="hover:text-darkGrayishBlue">
                Community
              </a>
            </div>
            <div className="p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight">
              Get Started
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default App;
