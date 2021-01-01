import React from "react";

export interface AppSettings {
  dataRootURL: string;
  indexFile: string;
  theme: string;
  sidebarCompact: boolean;
}

export const SettingsContext = React.createContext<AppSettings>({
  // TODO: update
  dataRootURL: "http://localhost:3000/recipes/",
  indexFile: "README.md",
  theme: "light",
  sidebarCompact: false,
});

export function getEmoji(settings: AppSettings): string {
  let emoji;
  switch (settings.theme) {
    case "red": {
      emoji = "🍎";
      break;
    }
    case "blue": {
      emoji = "🫐";
      break;
    }
    case "green": {
      emoji = "🍈";
      break;
    }
    case "dark": {
      emoji = "🍇";
      break;
    }
    default: {
      emoji = "🌿";
    }
  }

  return emoji;
}
