import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import apiRequest from '../lib/RequestMethods';
import { toast } from 'react-toastify';

const EditPage = () => {
    const [inputs, setInputs] = useState({});
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const { id } = useParams()

    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        const fetchingTask = async () => {
            try {
                const res = await apiRequest.get(`/tasks/${id}`)
                setInputs(res.data)
            } catch (error) {

            }
        }
        fetchingTask()
    }, [id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        try {
            const res = await apiRequest.put(`/tasks/${id}`, inputs);
            if (res.data) {
                toast.success("Sucessfully Updated post")
                navigate(`/task/${res.data.id}`)
            }
        } catch (error) {
            console.log(error)
            setLoading(false)
        } finally {
            setLoading(false)
        }
    }





    return (
        <form className='w-[70%]  m-auto p-10 my-10 rounded-2xl bg-white' onSubmit={handleSubmit}>
            <div className="border-b border-gray-900/10 pb-12">
                <h2 className="text-base font-semibold leading-7 text-gray-900">Update Task Information</h2>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-4">
                        <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                            Title
                        </label>
                        <div className="mt-2">
                            <input
                                id="title"
                                name="title"
                                type="title"
                                autoComplete="title"
                                onChange={handleChange}
                                defaultValue={inputs.title}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                            Description
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="description"
                                name="description"
                                rows={3}
                                onChange={handleChange}
                                defaultValue={inputs.description}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"

                            />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about Task.</p>
                    </div>
                    <div className="sm:col-span-2 sm:col-start-1">
                        <label htmlFor="use_date" className="block text-sm font-medium leading-6 text-gray-900">
                            Due Date
                        </label>
                        <div className="mt-2">
                            <input
                                type="date"
                                name="due_date"
                                id="due_date"
                                value={inputs.due_date}
                                onChange={handleChange}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="priority" className="block text-sm font-medium leading-6 text-gray-900">
                            Priority
                        </label>
                        <div className="mt-2">
                            <select
                                id="priority"
                                name="priority"
                                autoComplete="priority"
                                onChange={handleChange}
                                value={inputs.priority}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option value={""}>Select</option>
                                <option>High</option>
                                <option>Medium</option>
                                <option>Low</option>
                            </select>
                        </div>
                    </div>

                    <div className="sm:col-span-2">
                        <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
                            Status
                        </label>
                        <div className="mt-2">
                            <select
                                id="status"
                                name="status"
                                onChange={handleChange}
                                value={inputs.status}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                                <option value={""}>Select</option>
                                <option>Pending</option>
                                <option>Completed</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <button
                type="submit"
                className=" mt-5 px-10 rounded-md bg-indigo-600  py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 w-full"
            >
                {loading ? "loading..." : "Save Changes"}
            </button>
        </form>
    )
}



export default EditPage
