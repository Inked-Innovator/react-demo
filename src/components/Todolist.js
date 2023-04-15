import React from 'react';

function Todolist(props) {
  return (
    <div>
      <li className='list-item'>
        {props.item}
        <span className='icons'>
          <i 
            className="fa-solid fa-trash icon-delete"
            onClick={() => props.deleteitem(props.index)}
          ></i>
        </span>
      </li>
      <style jsx>{`
        .icons {
          margin-left: 50px;
        }
      `}</style>
    </div>
  );
}

export default Todolist;

