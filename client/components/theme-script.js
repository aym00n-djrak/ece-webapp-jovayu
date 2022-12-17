import React from "react";

function setColorsByTheme(
  defaultDarkTheme,
  defaultLightTheme,
  themeStorageKey
) {
  var mql = window.matchMedia("(prefers-color-scheme: dark)");
  var prefersDarkFromMQ = mql.matches;
  var persistedPreference = localStorage.getItem(themeStorageKey);
  var root = document.body;
  var colorMode = "";

  var hasUsedToggle = typeof persistedPreference === "string";

  if (hasUsedToggle) {
    colorMode = JSON.parse(persistedPreference);
  } else {
    colorMode = prefersDarkFromMQ ? defaultDarkTheme : defaultLightTheme;
    localStorage.setItem(themeStorageKey, JSON.stringify(colorMode));
  }

  root.classList.add(colorMode);
}

const ThemeScriptTag = () => {
  const themeScript = `(${setColorsByTheme})(
        'theme-twitter',
        'theme-midnightgreen',
        'theme',
      )`;
// eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: themeScript }} />;
};

export default ThemeScriptTag;