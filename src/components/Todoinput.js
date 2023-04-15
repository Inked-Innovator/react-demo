import React, { useState } from 'react';

export default function Todoinput(props) {
  const [inputText, setInputText] = useState('');

  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      addTodo();
    }
  };

  const addTodo = () => {
    if (inputText.trim() !== '') {
      props.addList(inputText.trim());
      setInputText('');
    }
  };

  return (
    <div className='input-container'>
      <div className='input-box'>
        <input 
          type='text' 
          className='input-box-todo' 
          placeholder='Enter The To Do Things!'
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleEnterPress}
        />
        <button 
          className='add-btn'
          onClick={addTodo}
        >+</button>
      </div>
    </div>
  );
}
