import React, { useState, useEffect, useRef } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form bg-gray-100 p-8 mt-8 w-full md:w-2/3 mx-auto'>
      {props.edit ? (
        <>
            <div className='form-group mb-4 flex'>
                <label htmlFor='title' className='w-1/4 block'>
                    Title<span className='text-red-500'>*</span>
                </label>
                <input
                    placeholder='Update your item'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    ref={inputRef}
                    className='todo-input edit w-3/4 py-1 px-2 border-gray-500 border-2 rounded bg-white'
                />
          </div>
          <button onClick={handleSubmit} className='todo-button edit bg-blue-600 text-white py-1 px-2 mt-6 ml-40 rounded'>
            Update
          </button>
        </>
      ) : (
        <>
            <div className='form-group mb-4 flex'>
                <label htmlFor='title' className='w-1/4 block'>
                    Title<span className='text-red-500'>*</span>
                </label>
                <input
                    placeholder='Add book'
                    value={input}
                    onChange={handleChange}
                    name='text'
                    className='todo-input w-3/4 py-1 px-2 border-gray-500 border-2 rounded bg-white'
                    ref={inputRef}
                />
            </div>
            <div className='border-t mt-12'>
                <button onClick={handleSubmit} className='todo-button bg-blue-600 text-white py-1 px-2 mt-6 ml-40 rounded'>
                    Add
                </button>
            </div>          
        </>
      )}
    </form>
  );
}
export default TodoForm