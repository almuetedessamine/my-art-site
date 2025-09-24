import React, { useState } from "react";
import About from "./About";
import Works from "./Works";
import Connect from "./Connect";
import Home from "./Home";
import "../css/TabSystem.css";
import { motion, AnimatePresence } from "framer-motion";

// Tab components mapping
const tabComponents = {
  Home: Home,
  About: About,
  Works: Works,
  Connect: Connect,
};

function TabSystem() {
  const [tabs, setTabs] = useState([{ name: "Home", component: <Home addTab={addTab} /> }]);
  const [activeTab, setActiveTab] = useState("Home");

  // Map tab names to colors
  const tabColors = {
    Home: "#F68B01",
    About: "#FFC730",
    Works: "#4CC0C0",
    Connect: "#A5D8F9",
  };

  function addTab(name) {
    setTabs((prevTabs) => {
      if (prevTabs.find((tab) => tab.name === name)) {
        setActiveTab(name);
        return prevTabs;
      }
      const Component = tabComponents[name];
      return [...prevTabs, { name, component: <Component addTab={addTab} /> }];
    });
    setActiveTab(name);
  }

  function closeTab(name) {
    if (name === "Home") return;

    setTabs((prevTabs) => {
      const tabIndex = prevTabs.findIndex((tab) => tab.name === name);
      const newTabs = prevTabs.filter((tab) => tab.name !== name);

      if (activeTab === name) {
        if (newTabs.length > 1) {
          // go to the previous tab
          const newIndex = Math.max(0, tabIndex - 1);
          setActiveTab(newTabs[newIndex].name);
        } else {
          // fallback to Home
          setActiveTab("Home");
        }
      }

      return newTabs;
    });
  }

  return (
    <div className="browser">
      {/* Tab bar */}
      <div className="tab-bar">
        <AnimatePresence initial={false}>
          {tabs.map((tab) => (
            <motion.div
              key={tab.name}
              className={`tab ${activeTab === tab.name ? "active" : ""}`}
              style={{ backgroundColor: tabColors[tab.name] || "#ddd" }}
              onClick={() => setActiveTab(tab.name)}
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 1 }}
              transition={{ duration: 0.30 }}
              whileTap={{ y: 2 }}
            >
              <div className="tab-inner">
                <span className="tab-label">{tab.name}</span>
                {tab.name !== "Home" && (
                  <button
                    className="close-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      closeTab(tab.name);
                    }}
                  >
                    ✕
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Tab content */}
      <div className="tab-content">
        {tabs.find((tab) => tab.name === activeTab)?.component}
      </div>
    </div>
  );
}

export default TabSystem;
