import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react"

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature

function App() {
  const [colorTheme, setColorTheme] = useState(false)
  const appClass = colorTheme ? "App dark" : "App light"

  function handleTheme() {
    setColorTheme((colorTheme) => !colorTheme)
  }

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleTheme}> {colorTheme ? "App Dark" : "App Light"}  </button>
      </header>

      <ShoppingList items={itemData} />
    
    </div>
  );
}

export default App;
