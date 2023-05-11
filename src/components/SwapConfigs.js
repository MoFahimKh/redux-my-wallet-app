import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSlippageTolerance, setTransactionDeadline } from "../redux/appSlice";

const SwapConfigs = () => {
  const dispatch = useDispatch();
  const { slippageTolerance, transactionDeadline } = useSelector(
    (state) => state.app
  );

  const handleSlippageToleranceChange = (e) => {
    dispatch(setSlippageTolerance(e.target.value));
    console.log("slippage" + slippageTolerance);
  };

  const handleTransactionDeadlineChange = (e) => {
    dispatch(setTransactionDeadline(e.target.value));
    console.log("deadline" + transactionDeadline);
  };

  return (
    <div>
      <div className="body">
        <div className="gearFormContainer">
          <Form.Group>
            <h6>slippage tolerance</h6>
            <Form.Control
              style={{ fontSize: "10px" }}
              placeholder="Slippage Tolerance %"
              type="text"
              value={slippageTolerance}
              onChange={handleSlippageToleranceChange}
            />
          </Form.Group>
          <Form.Group>
            <h6>transaction Deadline</h6>
            <Form.Control
              style={{ fontSize: "10px" }}
              placeholder="Deadline in minutes"
              type="text"
              value={transactionDeadline}
              onChange={handleTransactionDeadlineChange}
            />
          </Form.Group>
        </div>
      </div>
    </div>
  );
};

export default SwapConfigs;
