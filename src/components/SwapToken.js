import { Form, Button } from "react-bootstrap";
import { React, useState, useEffect } from "react";
import "../App.css";
import { GearFill } from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import SwapConfigs from "./SwapConfigs";
import getTokenBalance from "../utils/getTokenBalance";
import CoinIcon from "./CoinIcon";
import getSigner from "../utils/getSigner";
import { getPrice, runSwap } from "../utils/alphaRouterService";
import SelectTokenDropdown from "./SelectTokenDropdown";
import { getAccount } from "../utils/ethereum";
import {
  setTokenBal,
  swapTransaction,
  setSwapRatio,
  setSwappedPrice,
  setSwapTransaction,
} from "../redux/appSlice";

const SwapToken = () => {
  const swapRatio = useSelector((state) => state.app.swapRatio);
  const [inputAmount, setInputAmount] = useState(0);
  const [clicked, setClicked] = useState(false);
  const dispatch = useDispatch();
  let signerAddress;

  const getSignerAddress = async () => {
    const signerAddressArray = await getAccount();
    signerAddress = signerAddressArray[0];
  };

  const handleChange = (event) => {
    dispatch(setInputAmount(event.target.value));
  };

  const {
    tokenBal,
    slippageTolerance,
    swapTransaction,
    transactionDeadline,
    inputTokenSelected,
    outputTokenSelected,
  } = useSelector((state) => state.app);

  useEffect(() => {
    getPrice(
      inputAmount,
      slippageTolerance,
      Math.floor(Date.now() / 1000 + transactionDeadline * 60),
      signerAddress,
      inputTokenSelected,
      outputTokenSelected
    ).then((data) => {
      console.log(data);
      setSwapTransaction(data[0]);
      setSwappedPrice(data[1]);
      setSwapRatio(data[2]);
    });
    getSignerAddress();
  }, [inputAmount, inputTokenSelected, outputTokenSelected]);

  return (
    <div className="body">
      <div className="formContainer">
        <Form>
          <span
            className="gear-icon"
            onClick={() => {
              clicked === false ? setClicked(true) : setClicked(false);
            }}
          >
            <GearFill /> Settings
          </span>
          {clicked === true && <SwapConfigs />}

          <Form.Group>
            <SelectTokenDropdown typeOfToken="input" />
            <Form.Label>
              {inputTokenSelected}{" "}
              {
                <CoinIcon
                  coinId={
                    inputTokenSelected === "WMATIC"
                      ? "matic-network"
                      : inputTokenSelected === "LINK"
                      ? "chainlink"
                      : "weth"
                  }
                />
              }
            </Form.Label>{" "}
            <Form.Control
              type="text"
              placeholder="Enter amount"
              value={inputAmount}
              onChange={handleChange}
            />
            {getTokenBalance(setTokenBal, inputTokenSelected) && (
              <Form.Label className="">{`${inputTokenSelected} balance : ${tokenBal}`}</Form.Label>
            )}
          </Form.Group>
          <SelectTokenDropdown typeOfToken="output" />
          <div>{`1 ${outputTokenSelected} = ${swapRatio} ${inputTokenSelected} `}</div>
          <Form.Group>
            <Form.Label>
              {outputTokenSelected}{" "}
              {
                <CoinIcon
                  coinId={
                    outputTokenSelected === "WMATIC"
                      ? "matic-network"
                      : outputTokenSelected === "LINK"
                      ? "chainlink"
                      : "weth"
                  }
                />
              }
            </Form.Label>{" "}
            <Form.Control
              type="text"
              placeholder=""
              readOnly
              value={inputAmount / swapRatio}
            />
            <Form.Label></Form.Label>
          </Form.Group>
          <Button
            className=""
            variant="outline-success"
            onClick={async () => {
              const signer = await getSigner();
              runSwap(swapTransaction, signer);
            }}
          >
            Swap
          </Button>
          <Form.Label></Form.Label>
        </Form>
      </div>
    </div>
  );
};

export default SwapToken;
