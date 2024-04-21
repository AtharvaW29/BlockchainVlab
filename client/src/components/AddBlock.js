import React, { useState } from "react";
import styled from "styled-components";

export default function AddBlock({ addBlock }) {
  const [value, setValue] = useState("");

  const handleDataChange = (e) => {
    setValue(e.target.value);
  };

  const handleAddBlock = (e) => {
    e.preventDefault();
    addBlock(value);
  };

  return (
    <Form>
      <fieldset>
        <label htmlFor='data'>Data </label>
        <textarea
          type='textarea'
          name='data'
          id='data'
          rows='5'
          cols='15'
          placeholder='data...'
          value={value}
          onChange={handleDataChange}
        />
      </fieldset>
      <button onClick={handleAddBlock}>Mine Block</button>
    </Form>
  );
}

const Form = styled.form`
  position: relative;
  padding: 20px;
  margin: auto;
  width: 400px;
  height: 100%;
  border-radius: 10px;
  box-shadow: 10px 10px 10px #00000022;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  button {
    width: 50%;
  }
`;
