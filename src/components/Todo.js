import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return (
    <>
    <div className='mt-20 md:w-2/3 mx-auto'>
         <div className="border-gray-500 border rounded text-left">
                <table className="w-full table">
                    <thead>
                        <tr className='border-b border-gray-500'>
                            <th className="font-medium border-r border-gray-500 p-1">Title</th>
                            <th className="font-medium border-r border-gray-500 p-1">Edit</th>
                            <th className="font-medium p-1">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo, index) => (                       
                            <tr key={index}>
                                <td className="border-r border-gray-500 p-1" key={todo.id} onClick={() => completeTodo(todo.id)}>
                                    {todo.text}
                                </td>
                                <td className="p-1"><button className='bg-red-500 px-1 py-1 text-white leading-none block'>
                                    <TiEdit onClick={() => setEdit({ id: todo.id, value: todo.text })}  />
                                    </button>
                                </td>
                                <td className="border-l border-gray-500 p-1">
                                    <button className='bg-blue-500 px-2 py-1 text-white leading-none block'>
                                        <RiCloseCircleLine onClick={() => removeTodo(todo.id)}  />
                                    </button>
                                </td>                            
                            </tr>                   
                        ))}
                    </tbody>
                </table>
         </div>
    </div>
    </>
  )
};

export default Todo;