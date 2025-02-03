import Home from "./components/pages/Home";
import Footer from "./components/ui/footer/Footer";
import NavBar from "./components/ui/nav/NavBar";

const App = () => {
  return (
    <div className="h-[200vh]">
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
};

export default App;
