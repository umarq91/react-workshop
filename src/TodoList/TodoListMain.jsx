import React, { useState } from 'react'

const TodoListMain = () => {

    function generateUniqueId() {
        const timestamp = new Date().getTime().toString(36);
        const randomStr = Math.random().toString(36).substr(2, 5);
        return timestamp + randomStr;
      }


    const [input,setInput] = useState("")
    const [todos,setTodos ] = useState([{id:generateUniqueId(),text:"Hello world",completed:false}]);

// 1
// copy1+1
// set1(copy1+1)



    function addTodo(){
        if(input.length==0){
            alert("type something")
            return
        }
        setTodos([...todos,{
            id:generateUniqueId(),
            text:input,    
            completed:false
        }])
        setInput("")
    }


function deleteTodo(id){
    setTodos(todos.filter(todo=>todo.id!==id))
}

function handleComplete(){
    
}
  return (
    <div className="p-20 flex flex-col justify-center items-center">
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        value={input}
        className="border-2 px-5 w-[50%] py-2 rounded-lg "
      />
      <button onClick={addTodo} className="bg-green-400 mt-2 px-6  rounded-lg py-2 ">
        {" "}
        Add{" "}
      </button>
    {todos.map((todo)=>(
        <div className="border-2 w-[60%] flex justify-around items-center">
           <div className="">{todo.text} </div>
           <div className="flex gap-2 ">
            <button onClick={handleComplete}>Done</button>
            <button onClick={()=>deleteTodo(todo.id)} className='bg-red-700 p-2'> X</button>
           </div>
        </div>
    ))}


    </div>
  );
}

export default TodoListMain