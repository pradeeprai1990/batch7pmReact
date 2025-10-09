import React, { useEffect, useState } from 'react'
import Hometable from '../Hometable'
import { ToastContainer, toast } from 'react-toastify';
export default function Home() {
    let [users, setUsers] = useState(
        localStorage.getItem("USERS") ? JSON.parse(localStorage.getItem("USERS")) : []
    )
    let [editData, setEditData] = useState(null)
    let [editIndex, setEditIndex] = useState(-1)
    let saveUser = (e) => {


        e.preventDefault()

        console.log(users);

        if (editData) {
            let oldData=[...users]
             oldData[editIndex].uname=e.target.uname.value
             oldData[editIndex].uemail=e.target.uemail.value
             oldData[editIndex].uphone=e.target.uphone.value
             oldData[editIndex].umessage=e.target.umessage.value
             setUsers(oldData);
             setEditData(null)
             setEditIndex(-1)
            //Update
        }
        else {

            let checkEmail = users.find((obj) => obj.uemail == e.target.uemail.value)
            let checkPhone = users.find((obj) => obj.uphone == e.target.uphone.value)

            if (checkEmail) {
                return toast.error("Email Id Already Exist..")
            }


            if (checkPhone) {
                return toast.error("Phone Number  Already Exist..")
            }

            let obj = {
                uname: e.target.uname.value,
                uemail: e.target.uemail.value,
                uphone: e.target.uphone.value,
                umessage: e.target.umessage.value
            }
            // let oldData=[...users] //Array
            // oldData.push(obj) //Array in Object Push
            setUsers([...users, obj])
        }

        e.target.reset()


    }

    console.log(editData);


    let getMovies = () => {
        console.log("Movie List");

    }


    useEffect(() => {
        localStorage.setItem("USERS", JSON.stringify(users))
    }, [users]) //Single Time

    // getMovies()



    //Filter ->Results  [ {} ]
    //Find  --> One Results- > Object {}


    return (
        <section className=" px-4 mt-20">
            <ToastContainer />
            {editIndex}
            <div className="grid grid-cols-1 md:grid-cols-[30%_auto] gap-8">
                {/* Left Side - Form */}
                <div className='shadow-lg p-3'>
                    <h3 className="text-2xl font-bold mb-6">Contact Form</h3>
                    <form onSubmit={saveUser}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                            <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='uname'
                                defaultValue={editData ? editData.uname : ''}

                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                            <input type="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" name='uemail' defaultValue={editData ? editData.uemail : ''} />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                            <input type="tel" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name='uphone'
                                defaultValue={editData ? editData.uphone : ''}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                            <textarea name='umessage' className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                defaultValue={editData ? editData.umessage : ''}
                                rows="3"></textarea>
                        </div>
                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            {editData ? "Update" : "Save"}
                        </button>
                    </form>
                </div>

                {/* Right Side - Table */}

                <Hometable users={users} setUsers={setUsers} setEditData={setEditData} setEditIndex={setEditIndex} />

            </div>
        </section>
    )
}
