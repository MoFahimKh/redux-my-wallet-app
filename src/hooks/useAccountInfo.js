import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAccount, getBalance } from "../utils/ethereum";
import setNetwork from "../utils/network";
import trimAddress from "../utils/trimAddress";
import { setAccount, setWalletAddress, setAccBalance } from "../redux/appSlice";

const useAccountInfo = () => {
  const { selectedOption, setIsTransactionsComplete, tokenBal } = useSelector(
    (state) => state
  );
  const dispatch = useDispatch();
  const { account } = useSelector((state) => state.app);
  const connectWalletHandler = async () => {
    try {
      if (window.ethereum && window.ethereum.isMetaMask) {
        const acc = await getAccount();
        dispatch(setAccount(acc));
        setNetwork(selectedOption);
        if (acc[0]) {
          let trimmedAccount = trimAddress(acc[0]);
          dispatch(setWalletAddress(trimmedAccount));
          const etherBalance = await getBalance(acc[0]);
          dispatch(setAccBalance(etherBalance));
        } else {
          dispatch(setWalletAddress("Connect!"));
          dispatch(setAccBalance(null));
        }
      }
      if (Error) {
        dispatch(setWalletAddress("Connect!"));
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", connectWalletHandler);
      window.ethereum.on("chainChanged", connectWalletHandler);
    }
    if (account) {
      (async () => {
        const etherBalance = await getBalance(account);
        setAccBalance(etherBalance);
      })();
    }
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener("accountsChanged", connectWalletHandler);
        window.ethereum.removeListener("chainChanged", connectWalletHandler);
      }
    };
  }, [account, selectedOption, setAccBalance, setWalletAddress]);
  return { connectWalletHandler };
};

export default useAccountInfo;
