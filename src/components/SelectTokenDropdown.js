import { Dropdown, DropdownButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  setInputTokenSelected,
  setOutputTokenSelected,
} from "../redux/appSlice";


function SelectTokenDropdown({ typeOfToken }) {
  const dispatch = useDispatch();
  const inputTokenSelected = useSelector(
    (state) => state.app.inputTokenSelected
  );
  const outputTokenSelected = useSelector(
    (state) => state.app.outputTokenSelected
  );
  const [selectedToken, setSelectedToken] = useState(
    typeOfToken === "input" ? inputTokenSelected : outputTokenSelected
  );

 

  let titleValue;
  switch (selectedToken) {
    case "WETH":
      titleValue = "Wrapped Ether";
      break;
    case "WMATIC":
      titleValue = "Wrapped Matic";
      break;
    case "LINK":
      titleValue = "Chainlink";
      break;
    default:
      titleValue = "Select a token";
  }

  const handleOptionChange = (eventKey) => {
    if (typeOfToken === "input") {
      dispatch(setInputTokenSelected(eventKey));
    } else if (typeOfToken === "output") {
      dispatch(setOutputTokenSelected(eventKey));
    }
  };

  return (
    <DropdownButton
      variant="outline-success"
      title={titleValue}
      value={selectedToken}
      onSelect={handleOptionChange}
    >
      <Dropdown.Item eventKey="WETH">Wrapped Ether</Dropdown.Item>
      <Dropdown.Item eventKey="WMATIC">Wrapped Matic</Dropdown.Item>
      <Dropdown.Item eventKey="LINK">Chainlink</Dropdown.Item>
    </DropdownButton>
  );
}

export default SelectTokenDropdown;
