import { Switch, Route } from "react-router-dom";
import Projets from "../screens/Projets";
import Contact from "../screens/Contact";
import Home from "../screens/Home";
import { AnimatePresence } from "framer-motion";

export default function Main() {
  return (
    <main>
      <AnimatePresence>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Projets" component={Projets} />
          <Route exact path="/Contact" component={Contact} />
        </Switch>
      </AnimatePresence>
    </main>
  );
}
