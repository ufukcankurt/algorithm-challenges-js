import { useState } from 'react';
import 'h8k-components';

import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [input, setInput] = useState('');

  const handleAddItem = () => {
    // TODO: Add logic to add input to items list
    if (!input.trim()) return;

    setItems((prev) => [...prev, input]);
    setInput('');
  };

  return (
    <>
      <h8k-navbar header='Item List Manager'></h8k-navbar>
      <div className='App'>
        <h3>Item List</h3>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Enter item'
          data-testid='input-field'
        />
        <button onClick={handleAddItem} data-testid='add-button'>
          Add Item
        </button>
        <ul data-testid='item-list'>
          {items.map((item, index) => (
            <li key={index} data-testid='list-item'>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
