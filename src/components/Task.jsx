import React from 'react'
import { MdDelete, MdOutlineEdit } from 'react-icons/md'
import { Link } from 'react-router-dom'

const Task = ({ data, handleDelete }) => {
    return (
        <tr className="border-b border-dashed last:border-b-0">
            <td className="p-3 pl-0">
                <Link to={`/task/${data.id}`}>
                    <span className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"> {data.title.slice(0, 50)} </span>
                </Link>
            </td>
            <td className="p-3 pr-0 text-start">
                {data.description.slice(0, 60)}...
            </td>
            <td className="p-3 pr-12 text-end">
                <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg" style={{ background: data.priority === "Medium" ? "#a9ff68" : data.priority === "High" ? "#e9b7ce " : "#c9def4" }}  > {data.priority} </span>
            </td>
            <td className="pr-0 text-start">
                <span className="font-semibold text-light-inverse text-md/normal">{data.due_date}</span>
            </td>
            <td className="p-3 pr-12 text-end">
                <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg" style={{ background: data.status === "Pending" ? "#ff0f7b" : "#a9ff68" ,color: data.status === "Pending" ? "white" : ""}} > {data.status} </span>
            </td>
            <td className="p-3 pr-0 flex gap-2">
                <Link to={`/edit/${data.id}`}>
                    <button className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                        <MdOutlineEdit size={20} color='green' />
                    </button>
                </Link>
                <button onClick={() => handleDelete(data.id)} className="ml-auto relative text-secondary-dark bg-light-dark hover:text-primary flex items-center h-[25px] w-[25px] text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-2xl transition-colors duration-200 ease-in-out shadow-none border-0 justify-center">
                    <MdDelete size={20} color='red' />
                </button>
            </td>
        </tr>
    )
}

export default Task
