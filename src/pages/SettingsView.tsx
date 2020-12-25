import React, { useEffect, useState } from 'react';

export default function SettingsView(props: {onUpdate: (theme: string) => void}) {
  const [selectedTheme, setSelectedTheme] = useState("light");

  useEffect(() => {
    props.onUpdate(selectedTheme)
  }, [selectedTheme, props]);

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
    </div>
  );
}