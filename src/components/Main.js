import { Switch, Route } from 'react-router-dom';
import Portfolio from '../screens/Portfolio';
import Contact from '../screens/Contact';
import Home from '../screens/Home';
import About from '../screens/About';
import { AnimatePresence , } from 'framer-motion';

export default function Main() {
  return (
    <main>
      <AnimatePresence>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Contact" component={Contact} />
      </Switch>
      </AnimatePresence>
    </main>
  );
}