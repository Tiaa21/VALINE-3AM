import React, { useState } from "react";
import { useParams } from "react-router-dom";

function AgentPage({ agents }) {
  const { index } = useParams();
  const agentIndex = parseInt(index);

  const agent = agents[agentIndex];

  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
  };

  if (!agent) {
    return <p>Agent not found.</p>;
  }

  return (
    <div className="agents">
      <div className="agent-agent">
        <div className="picagent">
          <img
            src={agent.background}
            alt={`${agent.displayName}`}
            className="bottom-image"
          />
          <img
            src={agent.fullPortrait}
            alt={`${agent.displayName}`}
            className="top-image"
          />
        </div>
        <div className="agentdesc">
          <p>|| Name</p>
          <h1>{agent.displayName}</h1>
          <p>|| Biography</p>
          <p>{agent.description}</p>
          <br />
          <p>|| Role
          </p>
          <div className="agentrole">
            <img src={agent.role.displayIcon} alt={`${agent.displayName}`} />
            <h1>{agent.role.displayName}</h1>
          </div>
        </div>
        <div className="abilities-container">
          <h2>Abilities:</h2>
          <div className="ability-cards-container">
            {agent.abilities &&
              agent.abilities.map((ability) => (
                <div
                  key={ability.slot}
                  className={`ability-card ${
                    selectedIcon === ability.displayIcon ? "selected" : ""
                  }`}
                  onClick={() => handleIconClick(ability.displayIcon)}
                >
                  <div className="icon-container">
                    <img src={ability.displayIcon} alt={ability.displayName} />
                  </div>
                </div>
              ))}
          </div>
          {selectedIcon && (
            <div className="selected-ability">
              <center>
              <h3>
                {
                  agent.abilities.find(
                    (ability) => ability.displayIcon === selectedIcon
                  )?.displayName
                }
              </h3>
              <p>
                {
                  agent.abilities.find(
                    (ability) => ability.displayIcon === selectedIcon
                  )?.description
                }
              </p>
              </center>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AgentPage;
