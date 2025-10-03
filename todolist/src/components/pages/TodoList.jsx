import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
export default function TodoList() {

    let [list, setList] = useState([])

    let addToDo = (e) => {
        e.preventDefault()

        let userTxt = e.target.userTxt.value; //Textbox Value
        if (userTxt == '') {
            return toast.error("Please Fill The Value")
        }

        if (list.includes(userTxt)) {
            return toast.error("Your Todo Already Added in List")
        }


        setList([...list, userTxt])
        e.target.reset()

        toast("New Item Added in Todo")


    }

    let deleteTodo=(currentIndex)=>{
        //Filter
        if(confirm("Are Your sure want to Delete?")){
            //  let filterData=list.filter((v,i)=>i!=currentIndex) //Array
            //  setList(filterData)


            let oldData=[...list] 
            oldData.splice(currentIndex,1)
            setList(oldData)
        }
       
        
        
    }


    return (
        <div>
            <ToastContainer />

            <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4 text-gray-800">Todo List</h1>
                <form onSubmit={addToDo} className="flex gap-2 mb-4">
                    <input
                        type="text"
                        name='userTxt'
                        className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Add a new task"
                    />
                    <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                        Add
                    </button>
                </form>
                <ul className="space-y-2">

                    {
                        list.length >= 1 ?
                            list.map((value, index) => {
                                return (
                                    <li key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                        <span className="text-gray-700">
                                            {value}
                                        </span>
                                        <button onClick={()=>deleteTodo(index)} className="text-red-500 hover:text-red-700">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </li>
                                )
                            })

                            :
                            <li className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                                <span className="text-gray-700">No  Todo Found</span>

                            </li>
                    }


                </ul>
            </div>
        </div>
    )
}
