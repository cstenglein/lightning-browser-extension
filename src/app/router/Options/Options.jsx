import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";

import Navbar from "../../components/Navbar";

import Publishers from "../../screens/Publishers";
import Publisher from "../../screens/Publisher";

class Options extends React.Component {
  render() {
    return (
      <HashRouter>
        <Navbar
          title="myNode"
          subtitle="₿ 0.0016 7930   €33.57"
          onOptionsClick={() => alert("options clicked")}
        >
          <Navbar.Link exact href="/">
            Publishers
          </Navbar.Link>
          <Navbar.Link href="/send">Send</Navbar.Link>
          <Navbar.Link href="/receive">Receive</Navbar.Link>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <div className="container mx-auto px-4">
              <Publishers />
            </div>
          </Route>
          <Route exact path="/publisher/:id">
            <Publisher />
          </Route>
          <Route path="/send">
            <div className="container mx-auto px-4">
              <h2 className="mt-12 mb-6 text-2xl font-bold">Send</h2>
              <p>Test content</p>
            </div>
          </Route>
          <Route path="/receive">
            <div className="container mx-auto px-4">
              <h2 className="mt-12 mb-6 text-2xl font-bold">Receive</h2>
              <p>Lorem ipsum</p>
            </div>
          </Route>
        </Switch>
      </HashRouter>
    );
  }
}

export default Options;
