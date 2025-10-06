import React from 'react'

export default function Hometable({ users,setUsers,setEditData,setEditIndex }) {
    //users= Array

    let deleteRow=(index)=>{

        if(confirm("Are You Sure Want to Delete?...")){
               let filterData=users.filter((obj,i)=>i!=index)
                setUsers(filterData)
        }
     
        // alert(index)
    }


    let editRow=(currentIndex)=>{
            setEditIndex(currentIndex)
            setEditData(users.find((obj,index)=>index==currentIndex))
    }

    return (
        <div className='shadow-lg p-3'>
            <h3 className="text-2xl font-bold mb-6">Data Table</h3>
            <div className="overflow-x-auto">
                <table className="min-w-full table-auto">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left">Sr No</th>
                            <th className="px-4 py-2 text-left">Name</th>
                            <th className="px-4 py-2 text-left">Email</th>
                            <th className="px-4 py-2 text-left">Phone</th>
                            <th className="px-4 py-2 text-left">Message</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.length >= 1 ?
                            users.map((obj, index) => {
                                return (
                                    <tr className="border-b" key={index}>
                                         <td className="px-4 py-2">
                                            {index+1}
                                        </td>
                                        <td className="px-4 py-2">
                                            {obj.uname}
                                        </td>
                                        <td className="px-4 py-2">
                                            {obj.uemail}
                                        </td>
                                        <td className="px-4 py-2">
                                            {obj.uphone}
                                        </td>
                                        <td className="px-4 py-2">
                                            {obj.umessage}
                                        </td>
                                        <td className="px-4 py-2">
                                            <button
                                            onClick={()=>editRow(index)}
                                            className="bg-blue-500 text-white px-3 py-1 rounded mr-2">
                                                Edit
                                            </button>
                                            <button 
                                            onClick={()=>deleteRow(index)} className="bg-red-500 text-white px-3 py-1 rounded">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                            :
                            <tr>
                                <td colSpan={5}>No Data Found</td>
                            </tr>
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
