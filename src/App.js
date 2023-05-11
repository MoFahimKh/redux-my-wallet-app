import { Routes, Route } from "react-router-dom";
import { React } from "react";
import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./redux/appSlice";
import { Provider } from "react-redux";

import "./App.css";
import Home from "./pages/Home";
import Swap from "./pages/Swap";

const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

function App() {
  // const [account, setAccount] = useState(null);
  // const [walletAddress, setWalletAddress] = useState("Connect!");
  // const [accBalance, setAccBalance] = useState("");
  // const [selectedOption, setSelectedOption] = useState("0xaa36a7");
  // const [isTransactionComplete, setIsTransactionComplete] = useState(false);
  // const [tokenBal, setTokenBal] = useState(null);
  // const [slippageTolerance, setSlippageTolerance] = useState("2");
  // const [transactionDeadline, setTransactionDeadline] = useState("10");
  // const [swapRatio, setSwapRatio] = useState(null);
  // const [swappedPrice, setSwappedPrice] = useState(0);
  // const [swapTransaction, setSwapTransaction] = useState(null);
  // const [inputTokenSelected, setInputTokenSelected] = useState(null);
  // const [outputTokenSelected, setOutputTokenSelected] = useState(null);

  return (
    <div className="main">
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="swap" element={<Swap />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
