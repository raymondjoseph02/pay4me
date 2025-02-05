import Home from "./components/pages/Home";
import Footer from "./components/ui/footer/Footer";
import NavBar from "./components/ui/nav/NavBar";
import { GlobalProvider } from "./context/GlobalContext";
const App = () => {
  return (
    <GlobalProvider>
      <div className="h-[200vh] max-2xl:w-[80rem] mx-auto">
        <NavBar />
        <div className="relative z-30 bg-white">
          <Home />
        </div>
        <div className="w-full h-auto lg:h-[50vh]  relative">
          <Footer />
        </div>
      </div>
    </GlobalProvider>
  );
};

export default App;
