import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AgentPage from "../AgentPage";
import "../AgentPage.css";

export default function AgentInfo() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    fetch("https://valorant-api.com/v1/agents")
      .then((response) => response.json())
      .then((data) => setAgents(data.data))
      .catch((err) => console.error(`error: ${err}`));
  }, []);

  const filteredAgents = agents.filter((agent, index) => index !== 8);

  return (
    <div className="selectagent">
      <Router>
        <div className="App">
          <h1>CHOOSE YOUR AGENT</h1>
          <div className="IconAgent">
            {filteredAgents.length > 0 ? (
              filteredAgents.map((agent, index) => (
                <div key={agent.uuid}>
                  <div className="agent-icon">
                    <Link to={`/agents/${index}`}>
                      <img
                        src={agent.displayIcon}
                        alt={`${agent.displayName}`}
                      />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <div>
            <Switch>
              <Route
                path="/agents/:index"
                render={({ match }) => (
                  <AgentPage
                    agents={filteredAgents}
                    index={match.params.index}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}
