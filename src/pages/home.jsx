import ListItem from "../Components/ListItem";
import Footter from "../Footter/footer";
import Header from "../Header/header";
import "../App.css";
import About from "../Components/About";

const Home = () => (
  <div className="App">
    <Header />
    <ListItem />
    <About />
    <Footter />
  </div>
);

export default Home;
