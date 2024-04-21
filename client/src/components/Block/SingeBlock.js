import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Blockchain } from "../../lib/blockchain";

export const SingleBlockCard = styled.div`
  position: relative;
  padding: 20px;
  margin: auto;
  width: 100%;
  min-width: 600px;
  max-width: 800px;
  border-radius: 10px;
  box-shadow: 10px 10px 10px #00000022;
  background-color: ${({ valid }) => (valid ? "#dfffda" : "#ffdada")};
  fieldset {
    display: flex;
    flex-direction: column;
    border: none;
  }
  input {
    border-radius: 3px;
    border: 1px solid #333;
  }
  textarea {
    border-radius: 3px;
    border: 1px solid #333;
  }
`;

const MineButton = styled.button`
  color: ${({ isLoading }) => (isLoading ? "#aaa" : "#333")};
  transform: ${({ isLoading }) => (isLoading ? "scale(.9)" : "")};
  width: ${({ isLoading }) => (isLoading ? "40px" : "60px")};
  aspect-ratio: ${({ isLoading }) => (isLoading ? "1" : "4")};
  border-radius: ${({ isLoading }) => (isLoading ? "100%" : "3px")};
  border: 1px solid #333;
  transition: 0.1s;
`;

export default function SingeBlock() {
  const [blockchain, setBlockChain] = useState(new Blockchain());
  const [chain, setChain] = useState(blockchain.chain);
  const [nonce, setNonce] = useState(chain[0].nonce);
  const [data, setData] = useState(chain[0].data);
  const [isLoading, setIsLoading] = useState(false);

  const handleNonceChange = (event) => {
    setNonce(event.target.value);
    blockchain.updateBlockNonce(0, event.target.value);
    setChain(blockchain.chain);
  };
  const handleDataChange = (event) => {
    setData(event.target.value);
    blockchain.updateBlockData(0, event.target.value);
    setChain(blockchain.chain);
  };

  const handleMine = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      blockchain.mineBlock(blockchain.chain[0], false);
      setChain(blockchain.chain);
      setNonce(blockchain.chain[0].nonce);
      setIsLoading(false);
    }, 100);
  };

  useEffect(() => {
    let block = chain[0];
    setNonce(block.nonce);
  }, [chain]);

  return (
    <SingleBlockCard valid={!chain[0].error}>
      <form>
        <fieldset>
          <label htmlFor='block'>Block: </label>
          <input
            type='number'
            name='block'
            id='block'
            value={chain[0].index}
            disabled={true}
          />
          <label htmlFor='nonce'>Nonce: </label>
          <input
            type='number'
            id='nonce'
            name='nonce'
            value={nonce}
            onChange={handleNonceChange}
          />
          <label htmlFor='data'>Data: </label>

          <textarea
            type='textarea'
            name='data'
            id='data'
            rows='10'
            cols='40'
            value={data}
            onChange={handleDataChange}
          />

          <p>
            Hash: <span>{chain[0].hash}</span>
          </p>
        </fieldset>
        <MineButton isLoading={isLoading} onClick={handleMine}>
          {" "}
          Mine
        </MineButton>
      </form>
    </SingleBlockCard>
  );
}
