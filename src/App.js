// import logo from './logo.svg';
// import './App.css';
// import { useState, useEffect } from 'react';

// const TaskItem = (props) => {
//   const [edit,setEdit] = useState(false)
//   const [title,setTitle] = useState(props.task.title)
//   const [content,setContent] = useState(props.task.content)
//   const [priority,setPriorty] = useState(props.task.priority)

//   const titleChangehandler = (e) => {
//     setTitle(e.target.value)
//   }
//   const contentChangehandler = (e) => {
//     setContent(e.target.value)
//   }
//   const priorityChangehandler = (e) => {
//     setPriorty(e.target.value)
//     console.log(e.target.value)
//   }

//   const clicksHandler = () => {
//     setEdit(!edit)
//     props.editHandler(props.task.id, {
//       title:title,
//       content:content,
//       priority:priority
//     })
//   }

//   return(
//     <li>
//       {edit
//         ?(
//           <div>
//             <input value={title} onChange={titleChangehandler} />
//             <input value={content} onChange={contentChangehandler} />
//             <select name='priority' onChange={priorityChangehandler}>
//               <option value={"todo"}>1</option>
//               <option value={"processing"}>2</option>
//               <option value={"finish"}>3</option>
//             </select>
//           </div>
//         ):(
//           <div>
//             <h2>{props.task.id}:{props.task.title}</h2>
//             <p>{props.task.content}</p>
//             <p>{props.task.priority}</p>
//           </div>
//         )}
//         <button onClick={clicksHandler}>編集</button>
//   </li>
//   )
// }
//   const TaskArea = (props) => {
//     return (
//       <ul>
//         {props.tasks.map(task => (
//           <TaskItem
//           key={task.id}
//           task={task}
//           editHandler={props.editHandler}
//           />
//         ))}
//       </ul>
//     )
//   }

// function App() {
//   //入力される文字を!に自動変換
//   const [name,setName] = useState("takuma")
//   const changeHandler = () => {
//     setName(name + "!")
//   }

//   //リアルタイム更新の足し算
//   const [count,setCount] = useState(0)
//   const [num,setNum] = useState(0)
//   const [sum,setSum] = useState(0)
//   const fstcount = (e) => {
//     setCount(e.target.value)
//     setSum(Number(e.target.value)+Number(num))

//   }
//   const sdcount = (e) => {
//     setNum(e.target.value)
//     setSum(Number(count)+Number(e.target.value))
//   }

// //ボタンを何回押したかと押した回数が奇数か偶数か
//   const [numbers,setNumbers] = useState(0)
//   const [odd,setOdd] = useState("")

//   const clickHandler = () => {
//     setNumbers(numbers+1)
//   }
//   useEffect(() => {
//     const msg = numbers % 2 === 0? "偶数":"奇数"
//     setOdd(msg)
//   },[numbers])

// //入力した文字列の長さを表示
//   const [myname,setMyname] = useState("")
//   const [lenname,setLenname] = useState(0)

//   const namechange = (e) => {
//     setMyname(e.target.value)
//   }
//   useEffect(() => {
//     setLenname(myname.length)
//   },[myname])

//   //リストに追加してリストの要素を表示
//   const [tasks,setTasks] = useState(["hello","hello!","hello!!"])
//   const [counts,setCounts] = useState("hello!!!")
//   const [ipt,setIpt] = useState("")

//   const inp = (e) => {
//     setIpt(e.target.value)
//   }
//   const clicks = () => {
//     setCounts(ipt)
//   }

//   // useEffect(() => {
//   //   const newTask = tasks.concat([counts])
//   //   setTasks(newTask)
//   //   setIpt("")
//   // },[counts])

//   useEffect(() => {
//     setTasks([...tasks,counts])
//     setIpt("")
//   },[counts])

// //リストの要素を辞書にしてリストに追加してリストの要素を表示
//   const [task1,setTask1] = useState([
//     {
//       id:1,
//       title:"hello",
//       content:"test",
//       priority:"todo"
//     },{
//       id:2,
//       title:"hello",
//       content:"tests",
//       priority:"processing"
//     }
//   ])
//   const [title,setTitle] = useState("")
//   const [content,setContent] = useState("")
//   const [ids,setIds] = useState(3)
//   const [priority,setPriorty] = useState("")

//   const diccontent = () => {
//     const newtasks = {
//       id:ids,
//       title:title,
//       content:content,
//       priority:priority
//     }
//     setTask1([...task1,newtasks])
//     setTitle("")
//     setContent("")
//     setIds(ids+1)
//     setPriorty(priority.selectedIndex)
//   }

//   const editHandler  = (id, newTask) =>{
//     setTask1(task1.map(task => (task.id === id?
//       {
//         id: id,
//         title: newTask.title,
//         content: newTask.content,
//         priority: newTask.priority
//       }: task
//       )))
//   }
//   const titleChangehandler = (e) => {
//     setTitle(e.target.value)
//   }

//   const contentChangehandler = (e) => {
//     setContent(e.target.value)
//   }
//   const priorityChangehandler = (e) => {
//     setPriorty(e.target.value)
//     console.log(priority)
//   }

//       return (
//         <div>
//       <input value={name} onChange={changeHandler}/>
//       <p>{name}</p>
//       <input value={count} onChange={fstcount}/>
//       +
//       <input value={num} onChange={sdcount}/>
//       =
//       {sum}
//       <p></p>
//       <button onClick={clickHandler}>{numbers}</button>
//       {odd}
//       <p></p>
//       <input value={myname} onChange={namechange}></input>
//       文字列の長さは{lenname}文字です
//       <p></p>
//       <input value={ipt} onChange={inp}></input>
//       <button onClick={clicks}>追加</button>
//       <ul>
//         {tasks.map((task,idx) => (
//           <li key={idx}>{task}:{idx}</li>
//           ))}
//       </ul>
//       <input value={title} onChange={titleChangehandler}/>
//       <input value={content} onChange={contentChangehandler}/>
//       <select name='priority' onChange={priorityChangehandler}>
//         <option value={"todo"}>1</option>
//         <option value={"processing"}>2</option>
//         <option value={"finish"}>3</option>
//       </select>
//       <button onClick={diccontent}>追加</button>
//       <TaskArea
//         tasks={task1}
//         editHandler={editHandler}
//         />
//       <p></p>

//     </div>
//   );
// }

// export default App;

// import logo from "./logo.svg";
// import "./App.css";
// import { useState, useEffect } from "react";

// const selectOptions = [
//     {
//         id: 1,
//         name: "todo",
//     },
//     {
//         id: 2,
//         name: "processing",
//     },
//     {
//         id: 3,
//         name: "finish",
//     },
// ];

// const TaskItem = (props) => {
//     const [edit, setEdit] = useState(false);
//     const [title, setTitle] = useState(props.task.title);
//     const [content, setContent] = useState(props.task.content);
//     const [status, setStatus] = useState(props.task.status);
//     const [newTask, setNewTask] = useState({
//         title: "",
//         content: "",
//         status: "",
//     });

//     const titleChangeHandler = (e) => {
//         setTitle(e.target.value);
//     };

//     const contentChangeHandler = (e) => {
//         setContent(e.target.value);
//     };

//     const statusChangeHandler = (e) => {
//         setStatus(e.target.value);
//     };

//     const clickHandler = () => {
//         setEdit(!edit);
//         props.editHandler(props.task.id, {
//             title: newTask.title,
//             content: newTask.content,
//             status: Number(newTask.status),
//         });
//     };
//     const changeHandler = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         if (name==="status"){
//           value=Number(value)
//         }
//         setNewTask({
//           ...newTask,
//           [name]: value,
//         })
//         switch (name) {
//             case "title":
//                 setNewTask({
//                     ...newTask,
//                     title: value,
//                 });
//                 break;
//             case "content":
//                 setNewTask({
//                     ...newTask,
//                     content: value,
//                 });
//                 break;
//             case "status":
//                 setNewTask({
//                     ...newTask,
//                     status: Number(value),
//                 });
//         }
//     };

//     return (
//         <li>
//             {edit ? (
//                 <div>
//                     <input name="title" value={newTask.title} onChange={changeHandler} />
//                     <input name="content" value={newTask.content} onChange={changeHandler} />
//                     <select name="status" value={newTask.status} onChange={changeHandler}>
//                         {selectOptions.map((selectOption) => (
//                             <option
//                                 key={selectOption.id}
//                                 value={selectOption.id}
//                             >
//                                 {selectOption.name}
//                             </option>
//                         ))}
//                     </select>
//                 </div>
//             ) : (
//                 <div>
//                     <h2>
//                         {props.task.id}:{props.task.title}
//                     </h2>
//                     <p>{props.task.content}</p>
//                     <p>
//                         {
//                             selectOptions.find(
//                                 (selectOption) =>
//                                     selectOption.id === props.task.status
//                             )?.name
//                         }
//                     </p>
//                 </div>
//             )}
//             <button onClick={clickHandler}>編集</button>
//         </li>
//     );
// };

// const TaskArea = (props) => {
//     return (
//         <ul>
//             {props.tasks.map((task) => (
//                 <TaskItem
//                     key={task.id}
//                     task={task}
//                     editHandler={props.editHandler}
//                 />
//             ))}
//         </ul>
//     );
// };

// function App() {
//     const [id, setId] = useState(2);
//     const [newTask, setNewTask] = useState({
//         title: "",
//         content: "",
//         status: 0,
//     });
//     const [tasks, setTasks] = useState([
//         {
//             id: 1,
//             title: "hello",
//             content: "test",
//             status: 1,
//         },
//         {
//             id: 2,
//             title: "hello2",
//             content: "ta",
//             status: 2,
//         },
//     ]);

//     const clickHanlder = () => {
//         setTasks([
//             ...tasks,
//             {
//                 id: id,
//                 ...newTask,
//             },
//         ]);
//         setNewTask({
//             title: "",
//             content: "",
//             status: 0,
//         });
//     };

//     const editHandler = (id, newTask) => {
//         setTasks(
//             tasks.map((task) =>
//                 task.id === id
//                     ? {
//                           id: id,
//                           title: newTask.title,
//                           content: newTask.content,
//                           status: newTask.status,
//                       }
//                     : task
//             )
//         );
//     };

//     const changeHandler = (e) => {
//         const name = e.target.name;
//         const value = e.target.value;
//         if (name === "status") {
//             value = Number(e.terget.value)
//         }
//         setNewTask({
//             ...newTask,
//             [name]: value
//         })
//         switch (name) {
//             case "title":
//                 setNewTask({
//                     ...newTask,
//                     title: value,
//                 });
//                 break;
//             case "content":
//                 setNewTask({
//                     ...newTask,
//                     content: value,
//                 });
//                 break;
//             case "status":
//                 setNewTask({
//                     ...newTask,
//                     status: Number(value),
//                 });
//         }
//     };

//     useEffect(() => {
//         setId(id + 1);
//     }, [tasks]);

//     return (
//         <div>
//             <input
//                 name="title"
//                 value={newTask.title}
//                 onChange={changeHandler}
//             />
//             <input
//                 name="content"
//                 value={newTask.content}
//                 onChange={changeHandler}
//             />
//             <select
//                 name="status"
//                 value={newTask.status}
//                 onChange={changeHandler}
//             >
//                 {selectOptions.map((selectOption) => (
//                     <option key={selectOption.id} value={selectOption.id}>
//                         {selectOption.name}
//                     </option>
//                 ))}
//             </select>
//             <button onClick={clickHanlder}>追加</button>
//             <TaskArea tasks={tasks} editHandler={editHandler} />
//         </div>
//     );
// }

// export default App;
// import logo from "./logo.svg";
// import "./App.css";
// import { useState, useEffect } from "react";
// import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

// const selectOptions = [
//     {
//         id: 1,
//         name: "todo",
//     },
//     {
//         id: 2,
//         name: "processing",
//     },
//     {
//         id: 3,
//         name: "finish",
//     },
// ];

// const TaskItem = (props) => {
//     const [edit, setEdit] = useState(false);
//     const [task, setTask] = useState(props.task);

//     const changeHandler = (e) => {
//         const name = e.target.name;
//         let value = e.target.value;
//         if (name === "status") {
//             value = Number(value);
//         }
//         setTask({
//             ...task,
//             [name]: value,
//         });
//     };

//     const clickHandler = () => {
//         setEdit(!edit);
//         props.editHandler(props.task.id, task);
//     };

//     const delHandler = (e) => {
//         console.log(task.id)
//         setTask(
//             task.filter((task) => (task.id !== props.task.id))
//         )
//     }

//     return (
//         <li>
//             {edit ? (
//                 <TaskForm
//                     task={task}
//                     clickHandler={clickHandler}
//                     changeHandler={changeHandler}
//                     buttonText="編集"
//                 />
//             ) : (
//                 <div>
//                     <h2>
//                         {props.task.id}:{props.task.title}
//                     </h2>
//                     <p>{props.task.content}</p>
//                     <p>
//                         {
//                             selectOptions.find(
//                                 (selectOption) =>
//                                     selectOption.id === props.task.status
//                             )?.name
//                         }
//                     </p>
//                     <button onClick={clickHandler}>編集</button>
//                     <button onClick={delHandler}>削除</button>
//                 </div>
//             )}
//         </li>
//     );
// };

// const TaskArea = (props) => {
//     return (
//         <ul>
//             {props.tasks.map((task) => (
//                 <TaskItem
//                     key={task.id}
//                     task={task}
//                     editHandler={props.editHandler}
//                 />
//             ))}
//         </ul>
//     );
// };

// const TaskForm = (props) => {
//     return (
//         <>
//             <input
//                 name="title"
//                 value={props.task.title}
//                 onChange={props.changeHandler}
//             />
//             <input
//                 name="content"
//                 value={props.task.content}
//                 onChange={props.changeHandler}
//             />
//             <select
//                 name="status"
//                 value={props.task.status}
//                 onChange={props.changeHandler}
//             >
//                 {selectOptions.map((selectOption) => (
//                     <option key={selectOption.id} value={selectOption.id}>
//                         {selectOption.name}
//                     </option>
//                 ))}
//             </select>
//             <button onClick={props.clickHandler}>{props.buttonText}</button>
//         </>
//     );
// };

// function App() {
//     const [id, setId] = useState(2);
//     const [newTask, setNewTask] = useState({
//         title: "",
//         content: "",
//         status: 0,
//     });
//     const [tasks, setTasks] = useState([]);

//     const clickHandler = () => {
//         fetch("http://localhost:3001/tasks", {
//             method: "post",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(newTask),
//         });
//         setTasks([
//             ...tasks,
//             {
//                 id: id,
//                 ...newTask,
//             },
//         ]);
//         setNewTask({
//             title: "",
//             content: "",
//             status: 0,
//         });
//     };

//     const editHandler = (id, editTask) => {
//         fetch(`http://localhost:3001/tasks${id}`,{
//             method: "put",
//             headers: {
//                 "Content-Type" : "application/json"
//             },
//             body: JSON.stringify(editTask)
//         }).then(res => console.log(res))
//         setTasks(tasks.map((task) => (task.id === id ? editTask : task)));
//     };

//     const changeHandler = (e) => {
//         const name = e.target.name;
//         let value = e.target.value;
//         if (name === "status") {
//             value = Number(value);
//         }
//         setNewTask({
//             ...newTask,
//             [name]: value,
//         });
//     };

//     useEffect(() => {
//         setId(id + 1);
//     }, [tasks]);

//     useEffect(() => {
//         fetch("http://localhost:3001/tasks")
//             .then((res) => {
//                 return res.json();
//             })
//             .then((data) => {
//                 setTasks(data);
//             });
//     }, []);

//     return (
//         <div>
//             <TaskForm
//                 task={newTask}
//                 clickHandler={clickHandler}
//                 changeHandler={changeHandler}
//                 buttonText="追加"
//             />
//             <TaskArea tasks={tasks} editHandler={editHandler} />
//         </div>
//     );
// }

// export default App;
import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";

const selectOptions = [
    {
        id: 1,
        name: "todo",
    },
    {
        id: 2,
        name: "processing",
    },
    {
        id: 3,
        name: "finish",
    },
];

const TaskItem = (props) => {
    const [edit, setEdit] = useState(false);
    const [task, setTask] = useState(props.task);

    const changeHandler = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        if (name === "status") {
            value = Number(value);
        }
        setTask({
            ...task,
            [name]: value,
        });
    };

    const clickHandler = () => {
        setEdit(!edit);
        props.editHandler(props.task.id, task);
    };

    return (
        <li>
            {edit ? (
                <TaskForm
                    task={task}
                    clickHandler={clickHandler}
                    changeHandler={changeHandler}
                    buttonText="編集"
                />
            ) : (
                <div>
                    <h2>
                        {props.task.id}:{props.task.title}
                    </h2>
                    <p>{props.task.content}</p>
                    <p>
                        {
                            selectOptions.find(
                                (selectOption) =>
                                    selectOption.id === props.task.status
                            )?.name
                        }
                    </p>
                    <button onClick={clickHandler}>編集</button>
                    <button
                        onClick={() => {
                            props.deleteHandler(props.task.id);
                        }}
                    >
                        削除
                    </button>
                </div>
            )}
        </li>
    );
};

const TaskArea = (props) => {
    return (
        <ul>
            {props.tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    task={task}
                    editHandler={props.editHandler}
                    deleteHandler={props.deleteHandler}
                />
            ))}
        </ul>
    );
};

const TaskForm = (props) => {
    return (
        <>
            <input
                name="title"
                value={props.task.title}
                onChange={props.changeHandler}
            />
            <textarea
                name="content"
                value={props.task.content}
                onChange={props.changeHandler}
            />
            <select
                name="status"
                value={props.task.status}
                onChange={props.changeHandler}
            >
                {selectOptions.map((selectOption) => (
                    <option key={selectOption.id} value={selectOption.id}>
                        {selectOption.name}
                    </option>
                ))}
            </select>
            <button onClick={props.clickHandler}>{props.buttonText}</button>
        </>
    );
};

function App() {
    const [id, setId] = useState(2);
    const [newTask, setNewTask] = useState({
        title: "",
        content: "",
        status: 0,
    });
    const [tasks, setTasks] = useState([]);

    const fetchTasks = () => {
        fetch("http://localhost:3001/tasks")
            .then((res) => res.json())
            .then((data) => setTasks(data));
    };

    const clickHandler = () => {
        fetch("http://localhost:3001/tasks", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newTask),
        }).then(() => fetchTasks());
        setNewTask({
            title: "",
            content: "",
            status: 0,
        });
    };

    const deleteHandler = (id) => {
        fetch(`http://localhost:3001/tasks/${id}`, {
            method: "delete",
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => fetchTasks());
    };

    const editHandler = (id, editTask) => {
        fetch(`http://localhost:3001/tasks/${id}`, {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(editTask),
        }).then(() => fetchTasks());
    };

    const changeHandler = (e) => {
        const name = e.target.name;
        let value = e.target.value;
        if (name === "status") {
            value = Number(value);
        }
        setNewTask({
            ...newTask,
            [name]: value,
        });
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div>
            <TaskForm
                task={newTask}
                clickHandler={clickHandler}
                changeHandler={changeHandler}
                buttonText="追加"
            />
            <TaskArea
                tasks={tasks}
                editHandler={editHandler}
                deleteHandler={deleteHandler}
            />
        </div>
    );
}

export default App;
