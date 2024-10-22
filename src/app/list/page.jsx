'use client';

import { faCheck, faPencil, faTrashCan, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ListAccordeon = ({ id, index, title, deleteTodo, updateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [confirmation, setConfirmation] = useState(false);
  const inputRef = useRef(null);

  const toggleEdit = () => {
    if (isEditing) {
      updateTodo(id, editedTitle);
    } else {
      setEditedTitle(title);
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    if (confirmation) {
      deleteTodo(id);
    } else {
      setConfirmation(true);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      toggleEdit();
    }
  };

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isEditing]);

  return (
    <li className="flex items-center gap-3">
      <div className="flex items-center space-x-2">
        <div className="flex items-start space-x-1">
          <p>{index + 1}.</p>
          {isEditing ? <input type="text" ref={inputRef} value={editedTitle} onKeyDown={handleKeyDown} onChange={(e) => setEditedTitle(e.target.value)} className="outline-none bg-neutral-800 border border-neutral-600 px-2 py-1 rounded-lg" /> : <p>{title}</p>}
        </div>

        {confirmation ? (
          <>
            <button onClick={handleDelete} className="w-6 h-6 flex items-center justify-center border border-neutral-800 rounded-md">
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button onClick={() => setConfirmation(false)} className="w-6 h-6 flex items-center justify-center border border-neutral-800 rounded-md">
              <FontAwesomeIcon icon={faXmark} />
            </button>
          </>
        ) : (
          <>
            <button onClick={toggleEdit} className="w-6 h-6 flex items-center justify-center border border-neutral-800 rounded-md">
              <FontAwesomeIcon icon={isEditing ? faCheck : faPencil} />
            </button>
            <button onClick={() => setConfirmation(true)} className="w-6 h-6 flex items-center justify-center border border-neutral-800 rounded-md relative">
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </>
        )}
      </div>
    </li>
  );
};

const List = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoTitle, setNewTodoTitle] = useState('');

  const addTodos = () => {
    if (newTodoTitle.trim() == '') return;
    const newTodo = {
      id: uuidv4(),
      title: newTodoTitle.trim(),
    };
    setTodos([...todos, newTodo]);
    setNewTodoTitle('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newTitle) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, title: newTitle } : todo)));
  };

  useEffect(() => {
    const cachedTodos = localStorage.getItem('todos');
    if (cachedTodos) {
      setTodos(JSON.parse(cachedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <div className="py-[60px] flex-1 flex flex-col">
      <div className="container flex-1 flex">
        <div className="flex-1 flex flex-col space-y-3 max-w-full p-6 border-2 border-neutral-800 rounded-2xl">
          <h2 className="text-2xl">List</h2>
          <div className="flex flex-1 flex-col justify-between">
            <ul className="flex flex-col space-y-3">
              {todos.map((todo, index) => (
                <ListAccordeon key={todo.id} id={todo.id} index={index} title={todo.title} deleteTodo={deleteTodo} updateTodo={updateTodo} />
              ))}
            </ul>
            <div className="flex items-center space-x-3">
              <input type="text" className="outline-none w-full border border-neutral-600 bg-neutral-800 rounded-lg p-2" value={newTodoTitle} onChange={(e) => setNewTodoTitle(e.target.value)} />
              <button onClick={addTodos} className="flex whitespace-nowrap items-center p-2 border border-neutral-800 rounded-lg w-fit">
                <div className="relative w-6 h-6">
                  <div className="flex justify-center items-center absolute inset-0">
                    <div className="w-1/2 h-0.5 bg-neutral-50 rounded-full"></div>
                  </div>
                  <div className="flex justify-center items-center absolute inset-0">
                    <div className="w-0.5 h-1/2 bg-neutral-50 rounded-full"></div>
                  </div>
                </div>
                <p className="text-sm mx-1">Add task</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
