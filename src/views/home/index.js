import { useWeb3React } from "@web3-react/core";
import { useEffect } from "react";
import { useCallback } from "react";
import { useState } from "react";
import usePlatziPunks from "../../hooks/usePlatziPunks";

const Home = () => {
  const { active } = useWeb3React();
  const [maxSupply, setMaxSupply] = useState();
  const platziPunks = usePlatziPunks();
  const getMaxSupply = useCallback(async () => {
    if (platziPunks) {
      const result = await platziPunks.methods.maxSupply().call();
      setMaxSupply(result);
    }
  }, [platziPunks]);

  useEffect(() => {
    getMaxSupply();
  }, [getMaxSupply]);

  if (!active) return "Conecta tu wallet!";
  return (
    <div>
      <p>Max Supply: {maxSupply}</p>
    </div>
  );
};

export default Home;
