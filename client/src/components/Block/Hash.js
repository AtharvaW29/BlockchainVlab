import React, { useState } from "react";
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

export default function SingeBlock() {
  const [blockchain, setBlockChain] = useState(new Blockchain());
  const [chain, setChain] = useState(blockchain.chain);
  const [data, setData] = useState(chain[0].data);

  const handleDataChange = (event) => {
    setData(event.target.value);
    blockchain.updateBlockData(0, event.target.value);
    setChain(blockchain.chain);
  };

  return (
    <SingleBlockCard valid={!chain[0].error}>
      <form>
        <fieldset>
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
      </form>
    </SingleBlockCard>
  );
}
