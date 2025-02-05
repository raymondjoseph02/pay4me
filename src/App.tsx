import Home from "./components/pages/Home";
import Footer from "./components/ui/footer/Footer";
import NavBar from "./components/ui/nav/NavBar";
import { GlobalProvider } from "./context/GlobalContext";
const App = () => {
  return (
    <GlobalProvider>
      <div className="h-[200vh] ">
        <div className=" global_wrapper">
          <NavBar />
          <div className="relative w-full z-30 bg-white">
            <Home />
          </div>
          <Footer />
        </div>
      </div>
    </GlobalProvider>
  );
};

export default App;
