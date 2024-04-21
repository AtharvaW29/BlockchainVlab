import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const SingleBlockCard = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 10px 10px 10px #00000022;
  background-color: ${({ valid }) => (valid ? "#dfffda" : "#ffdada")};

  form {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  fieldset {
    border: none;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0;
  }
  label {
    display: flex;
    flex-direction: column;
  }
  input {
    border-radius: 3px;
    border: 1px solid #333;
  }
  textarea {
    border-radius: 3px;
    border: 1px solid #333;
  }
  span {
    background-color: #eee;
    padding: 1px 3px;
    border-radius: 3px;
    border: 1px solid black;
  }

  .transactions {
    background-color: #ffffffaa;
    border: 1px solid black;
    border-radius: 0.25rem;
    height: 100%;
    padding: 1rem;
  }

  .single-transaction {
    display: flex;
    gap: 1rem;
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

export default function BlockchainBlock({
  genesisBlock,
  nonceChange,
  dataChange,
  setChain,
  blockchain,
  block,
}) {
  const [nonce, setNonce] = useState(block.nonce);
  const [data, setData] = useState(block.data);
  const [isLoading, setIsLoading] = useState(false);

  const handleNonceChange = (event) => {
    setNonce(event.target.value);
    nonceChange(block, data);
  };
  const handleDataChange = (event) => {
    setData(event.target.value);
    dataChange(block, data);
  };

  const handleMine = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      let newChain = [...blockchain.mineBlock(block, true)];
      setIsLoading(false);
      setChain(newChain);
    }, 500);
  };

  const handleUpdateTransactionValue = (e) => {
    //get index from custom attribute
    let transactionIndex = parseInt(e.target.attributes.index.value);
    let key = e.target.name;
    let newChain = [
      ...blockchain.updateBlockTransactions(
        block.index,
        transactionIndex,
        key,
        e.target.value
      ),
    ];

    setChain(newChain);
  };

  return (
    <SingleBlockCard valid={!block.error}>
      <form>
        <fieldset>
          <label htmlFor='block'>Block:</label>
          <input
            type='number'
            name='block'
            id='block'
            value={block.index}
            disabled={true}
          />
          <label htmlFor='nonce'>Nonce:</label>
          <input
            type='number'
            id='nonce'
            name='nonce'
            value={nonce}
            onChange={handleNonceChange}
          />
          <label className='transactions-label' htmlFor='data'>
            Data:
          </label>
          {genesisBlock && (
            <textarea
              type='textarea'
              name='data'
              id='data'
              rows='10'
              cols='40'
              value={data}
              onChange={handleDataChange}
            />
          )}
          {!genesisBlock && (
            <div className='transactions'>
              <>
                {block.transactions.length >= 1 &&
                  block.transactions.map((transaction, index) => (
                    <div
                      key={`block: ${block.index} - transaction: ${index + 1}`}
                      className='single-transaction'>
                      <p>{index + 1}.</p>
                      <label>
                        From
                        <input
                          index={index}
                          onChange={handleUpdateTransactionValue}
                          name='from'
                          value={transaction.from}
                        />
                      </label>
                      <label>
                        To{" "}
                        <input
                          index={index}
                          name='to'
                          value={transaction.to}
                          onChange={handleUpdateTransactionValue}
                        />
                      </label>
                      <label>
                        Amount
                        <input
                          index={index}
                          name='amount'
                          value={transaction.amount}
                          onChange={handleUpdateTransactionValue}
                        />
                      </label>
                    </div>
                  ))}
              </>
            </div>
          )}
          <p>
            Prev Hash: <span>{block.prevHash}</span>
          </p>
          <p>
            Hash: <span>{block.hash}</span>
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
