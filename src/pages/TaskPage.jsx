import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import apiRequest from '../lib/RequestMethods'
import { toast } from 'react-toastify'

const TaskPage = () => {
    const [task, setTask] = useState("")
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        const fetchingTask = async () => {
            setLoading(true)
            try {
                const res = await apiRequest.get(`/tasks/${id}`)
                setTask(res.data)
            } catch (error) {
                setLoading(false)
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchingTask()
    }, [id])


    const handleDelete = async (id) => {
        if (window.confirm("You want to Delete task")) {
            try {
                await apiRequest.delete(`/tasks/${id}`)
                toast.success("Deleted ")
                navigate("/")
            } catch (error) {
                setLoading(false)
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
    }


    return (
        <>
            {loading ? "Loading" :

                <div className='w-[80%] m-auto my-10 h-[70vh] flex flex-col justify-between border p-5 shadow-xl rounded-2xl bg-white'>
                    <div className="flex flex-col gap-5">
                        <h1 className='text-2xl font-bold'>{task.title}</h1>
                        <div className="">
                            <h2 className='text-xl font-semibold'>{task.priority}</h2>
                            <p>{task.due_date}</p>
                        </div>
                        <p>{task.description}</p>
                    </div>
                    <div className="">
                        <hr />
                        <div className="mt-6 flex items-center justify-end gap-x-6">
                            <Link to={`/edit/${task.id}`}>
                                <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                                    Edit
                                </button>
                            </Link>
                            <button
                                onClick={() => handleDelete(task.id)}
                                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default TaskPage