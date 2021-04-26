import React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import DragonsLair from "../subpages/DragonsLair";
import EvilOrcArmy from "../subpages/EvilOrcArmy";
import EvilOrcCastle from "../subpages/EvilOrcCastle";
import FieryCenter from "../subpages/FieryCenter";
import InsectTemple from "../subpages/InsectTemple";
import TrollCity from "../subpages/TrollCity";
import UndeadArmy from "../subpages/UndeadArmy";
import UpperFireCave from "../subpages/UpperFireCave";

const Raids = () => {
  return (
    <div>
      <h2>Raids</h2>
      <Router>
        <div>
          <nav>
            <ol>
              <li>
                <Link to="/raids/evil-orc-army">Evil Orc Army</Link>
              </li>
              <li>
                <Link to="/raids/upper-fire-cave">Upper Fire Cave</Link>
              </li>
              <li>
                <Link to="/raids/evil-orc-castle">Evil Orc Castle</Link>
              </li>
              <li>
                <Link to="/raids/troll-city">Troll City</Link>
              </li>
              <li>
                <Link to="/raids/dragons-lair">Dragons Lair</Link>
              </li>
              <li>
                <Link to="/raids/insect-temple">Insect Temple</Link>
              </li>
              <li>
                <Link to="/raids/fiery-center">Fiery Center</Link>
              </li>
              <li>
                <Link to="/raids/undead-army">Undead Army</Link>
              </li>
            </ol>
          </nav>
          <Switch>
            <Route path="/raids/evil-orc-army">
              <EvilOrcArmy />
            </Route>
            <Route path="/raids/upper-fire-cave">
              <UpperFireCave />
            </Route>
            <Route path="/raids/evil-orc-castle">
              <EvilOrcCastle />
            </Route>
            <Route path="/raids/troll-city">
              <TrollCity />
            </Route>
            <Route path="/raids/dragons-lair">
              <DragonsLair />
            </Route>
            <Route path="/raids/insect-temple">
              <InsectTemple />
            </Route>
            <Route path="/raids/fiery-center">
              <FieryCenter />
            </Route>
            <Route path="/raids/undead-army">
              <UndeadArmy />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default Raids;
