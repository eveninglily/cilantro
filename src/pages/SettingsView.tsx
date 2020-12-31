import React, { useContext, useEffect, useState } from 'react';
import { SettingsContext } from '../Settings';

export default function SettingsView(props: {onUpdate: (theme: string) => void, updateCompact: (sidebarCompact: boolean) => void}) {
  const settings = useContext(SettingsContext);
  const [selectedTheme, setSelectedTheme] = useState(settings.theme);
  const [compactSidebar, setCompactSidebar] = useState(settings.sidebarCompact);

  useEffect(() => {
    if (settings.theme !== selectedTheme) {
      props.onUpdate(selectedTheme)
    }
  }, [selectedTheme, props, settings]);

  useEffect(() => {
    if (settings.sidebarCompact !== compactSidebar) {
      props.updateCompact(compactSidebar)
    }
  }, [compactSidebar, props, settings]);

  return (
    <div>
      <h1>Settings</h1>
      <h2>Theme</h2>
      <form>
        <div className="theme-radio">
          <label>
            <input
              type="radio"
              name="theme"
              value="light"
              checked={selectedTheme==="light"}
              onChange={() => setSelectedTheme("light")}
              className="theme-radio-input"
            />
            Light
          </label>
        </div>
        <div className="theme-radio">
          <label>
            <input
              type="radio"
              name="theme"
              value="blue"
              checked={selectedTheme==="blue"}
              onChange={() => setSelectedTheme("blue")}
              className="theme-radio-input"
            />
            Blue
          </label>
        </div>
        <div className="theme-radio">
          <label>
            <input
              type="radio"
              name="theme"
              value="green"
              checked={selectedTheme==="green"}
              onChange={() => setSelectedTheme("green")}
              className="theme-radio-input"
            />
            Green
          </label>
        </div>
        <div className="theme-radio">
          <label>
            <input
              type="radio"
              name="theme"
              value="red"
              checked={selectedTheme==="red"}
              onChange={() => setSelectedTheme("red")}
              className="theme-radio-input"
            />
            Red
          </label>
        </div>
        <div className="theme-radio">
          <label>
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={selectedTheme==="dark"}
              onChange={() => setSelectedTheme("dark")}
              className="theme-radio-input"
            />
            Dark
          </label>
        </div>
      </form>
      <h2>Compact Sidebar</h2>
      <label><input type="checkbox" checked={compactSidebar} onChange={() => setCompactSidebar(!compactSidebar)} /> Compact sidebar</label>
    </div>
  );
}