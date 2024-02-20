import { blockColors, Element } from "../../types";
import "./element.css";

interface ElementProps {
  element: Element;
  highlightedBlock: string | null;
  setHighlightedBlock: React.Dispatch<React.SetStateAction<string | null>>;
}

const ElementComponent: React.FC<ElementProps> = ({
  element,
  highlightedBlock,
  setHighlightedBlock,
}) => {
  const isHighlighted = element.block === highlightedBlock;
  const backgroundColor = isHighlighted ? "orange" : blockColors[element.block];

 
  const hancleOnClick = () => {
    if (highlightedBlock == null) {
      setHighlightedBlock(element.block);
    } else {
      setHighlightedBlock(null);
    }
  };
  return (
    <div
      key={element.atomicNumber}
      className="element"
      style={{
        gridColumn: element.column,
        gridRow: element.row,
        backgroundColor: backgroundColor,
      }}
      data-testid={`element-${element.atomicNumber}`}
      onClick={hancleOnClick}
    //  onMouseEnter={handleMouseEnter} 
     // onMouseLeave={handleMouseLeave}
    >
      <span>{element.symbol}</span>
      <span>{element.atomicNumber}</span>
    </div>
  );
};

export default ElementComponent;
