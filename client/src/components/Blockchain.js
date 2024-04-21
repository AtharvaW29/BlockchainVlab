import { SHA256 } from "crypto-js";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Blockchain } from "../lib/blockchain";
import AddBlock from "./AddBlock";
import Block from "./Block/index";

function calculateHash(testNonce, data, prevHash, timeStamp = Date.now()) {
  return SHA256(testNonce + data + prevHash + timeStamp).toString();
}

export default function BlockchainComponent() {
  const [blockchain, setBlockChain] = useState(new Blockchain());

  const [chain, setChain] = useState(blockchain.chain);
  const [blocks, setBlocks] = useState(blockchain.blockchain);
  const [outputMessages, setOutputMessages] = useState([]);
  const [pendingTransactions, setPendingTransaction] = useState([]);
  const [values, setValues] = useState({
    from: "",
    to: "",
    amount: 0,
  });
  const [isLoading, setIsLoading] = useState(false);

  const set = (name) => {
    return ({ target: { value } }) => {
      setValues((oldValues) => ({
        ...oldValues,
        [name]: value.toLowerCase(),
      }));
    };
  };

  const handleAddPendingTransaction = (e) => {
    e.preventDefault();
    if (values.from === "" || values.to === "" || values.amount === 0) {
      alert("please enter values for each field... value cannot be 0");
      return;
    }
    let newTransaction = values;
    setPendingTransaction([...pendingTransactions, newTransaction]);
    blockchain.pendingTransactions.push(values);
    setValues({
      from: "",
      to: "",
      amount: 0,
    });
  };

  function computeHash(difficulty) {
    setIsLoading(true);
    setTimeout(() => {
      let testNonce = 0;
      let messages = [];
      setOutputMessages([]);
      while (
        calculateHash(
          testNonce,
          pendingTransactions,
          blockchain.latestBlock.hash
        ).substring(0, difficulty) !== Array(difficulty + 1).join("0")
      ) {
        messages.push(testNonce);
        testNonce++;
      }
      setOutputMessages([...messages]);
      setIsLoading(false);
      setTimeout(() => {
        setOutputMessages([]);
        setPendingTransaction([]);
        blockchain.addNewComputedBlock(
          pendingTransactions,
          blockchain.latestBlock().hash
        );
        blockchain.latestBlock().nonce = testNonce;
        let newBlocks = [...blockchain.chain];
        setBlocks(newBlocks);
      }, 1000);
    }, 10);
  }

  const handleAddBlock = (data) => {
    const newChain = [...blockchain.addNewBlock(data)];
    setChain(newChain);
  };

  const handleDataChange = (block, data) => {
    let newChain = [...blockchain.updateBlockData(block.index, data)];
    setChain(newChain);
  };

  const handleNonceChange = (block, data) => {
    let newChain = [...blockchain.updateBlockNonce(block.index, data)];
    setChain(newChain);
  };

  return (
    <>
      <TodoSection>
        <Form>
          <p className='heading'>Enter New Transaction</p>
          <fieldset>
            <label htmlFor='from'>
              From
              <input
                onChange={set("from")}
                value={values.from}
                name='from'
                type='text'></input>
            </label>
            <label htmlFor='to'>
              To
              <input
                onChange={set("to")}
                value={values.to}
                name='to'
                type='text'></input>
            </label>
            <label htmlFor='amount'>
              Amount
              <input
                onChange={set("amount")}
                value={values.amount}
                name='amount'
                type='number'></input>
            </label>
            <div />
            <button type='submit' onClick={handleAddPendingTransaction}>
              Submit
            </button>
          </fieldset>
        </Form>
        <PendingTransactions>
          <p className='heading'>Pending Transactions</p>
          {pendingTransactions.map((txn, idx) => (
            <Transaction
              key={`${txn.from}-${idx}`}
              from={txn.from}
              to={txn.to}
              amount={txn.amount}
            />
          ))}
        </PendingTransactions>
      </TodoSection>
      <Output
        outputMessages={outputMessages}
        isLoading={isLoading}
        computeHash={() => computeHash(4)}
      />
      <hr />
      <BlockchainContainer>
        {chain.map((block) => (
          <Block
            genisis={block.index === 0}
            key={block.index}
            type='blockchain'
            nonceChange={handleNonceChange}
            dataChange={handleDataChange}
            setChain={setChain}
            blockchain={blockchain}
            block={block}
          />
        ))}
      </BlockchainContainer>
    </>
  );
}

const BlockchainContainer = styled.div`
  display: flex;
  gap: 20px;
  overflow-x: scroll;
`;

function Transaction({ from, to, amount }) {
  return (
    <div className='transaction'>
      <p>
        <strong>From: </strong>
        {from} -&gt; To: {to}
      </p>
      <p>
        <strong>Amount: </strong>
        {"$"}
        {amount}
      </p>
    </div>
  );
}

function Output({ outputMessages, computeHash, isLoading }) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages(outputMessages);
  }, [outputMessages]);

  return (
    <OutputContainer isLoading={isLoading}>
      <h4>Output</h4>
      <p>Answer: {messages[messages.length - 1]}</p>
      <button onClick={computeHash}>Mine</button>
    </OutputContainer>
  );
}

const OutputContainer = styled.div`
  max-width: 1400px;

  margin: 3rem auto;
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #bbb;
  opacity: ${({ isLoading }) => (isLoading ? ".5" : "1")};
`;

const Form = styled.form`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #bbb;
  fieldset {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    max-width: 300px;
    margin: auto;
  }

  label {
    display: flex;
    justify-content: space-between;
  }

  button {
    width: 80px;
    align-self: flex-end;
  }
`;

const PendingTransactions = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 1px solid #bbb;

  p {
    margin: 0;
  }
  .transaction-list {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;

    gap: 1rem;

    max-height: 200px;
  }
  .transaction {
    display: flex;
    gap: 3rem;
    background: #efefef;
    border: 1px solid #333;
    border-radius: 0.25rem;
    padding: 0.5rem;
  }
`;

const TodoSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
  max-width: 1400px;
  margin: auto;

  p {
    margin: 0;
  }

  .heading {
    font-size: 1.25rem;
    font-weight: 600;
    color: #555;
    text-decoration: underline;
    margin-bottom: 0.25rem;
  }
`;

export const AddNewButton = styled.button`
  margin: auto 20px;
  height: 100px;
  width: 70px;
  border: none;
  border-radius: 10px;
  background-color: #ccccff;
  font-size: 50px;
  cursor: pointer;
  box-shadow: 0 0 5px #ddd;
  transition: 0.2s;
  :hover {
    box-shadow: 5px 5px 20px #ddd;
    transform: scale(1.05);
  }
`;
