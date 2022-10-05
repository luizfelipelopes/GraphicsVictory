import React, { useState } from "react";
import ReactDOM from "react-dom";
import { View } from "react-native";
import {
  VictoryBar,
  VictoryArea,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryStack
} from "victory";

function App() {
  let range = [1];

  const dados = range.map(() => [
    { x: 1, y: 13001 },
    { x: 2, y: 16500 },
    { x: 3, y: 14250 },
    { x: 4, y: 19000 }
  ]);

  return (
    <VictoryChart theme={VictoryTheme.material} animate={{ duration: 1000 }}>
      <VictoryStack colorScale={"blue"}>
        {dados.map((item, i) => (
          <VictoryArea key={i} data={item} interpolation={"basis"} />
        ))}
      </VictoryStack>
    </VictoryChart>
  );
}

export default App;
