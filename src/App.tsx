import { useMemo, useState } from "react";
import "./App.css";
import periodicTableData from "./periodicTableData.json";
import ElementComponent from "./components/Element";
import {Element, Block } from "./types";
import { formatPeriodicTableData } from "./utils";

function App() {
  const [highlightedBlock, setHighlightedBlock] = useState<string | null>(null);
  const [isInverted, setIsInverted] = useState(false);

  const displayedData = useMemo(() => {
    return formatPeriodicTableData(
      periodicTableData as Element[],
      isInverted ? true : false
    );
  }, [isInverted]);
  const toggleInversion = () => {
    setIsInverted((prevIsInverted) => !prevIsInverted);
  };

  return (
    <div className="root">
      <h1 className="header">Periodic Table</h1>
      <div className="table">
        {displayedData.map((element) => (
          <ElementComponent
            key={element.atomicNumber}
            element={{
              ...element,
              block: element?.block as Block,
            }}
            highlightedBlock={highlightedBlock}
            setHighlightedBlock={setHighlightedBlock}
          />
        ))}
      </div>
      <button onClick={toggleInversion} className="button">
        <h2> Invert</h2>
      </button>
    </div>
  );
}

export default App;
