import "./App.css";
import firebaseInit from "./firebaseInit";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./routes/home";
import Original from "./routes/original";
import Contact from "./routes/contact";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/original" component={Original} />
      <Route path="/contact" component={Contact} />
    </BrowserRouter>
  );
}

export default App;
