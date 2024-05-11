import React, { useEffect, useState } from 'react'
import Task from './Task'
import apiRequest from '../lib/RequestMethods'

const ListTask = () => {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false)
  
    useEffect(() => {
        const fetchingTasks = async () => {
            setLoading(true)
            try {
                const res = await apiRequest.get(`/tasks`)
                setTasks(res.data)
            } catch (error) {
                setLoading(false)
                console.log(error)
            } finally {
                setLoading(false)
            }
        }
        fetchingTasks()
    }, [])

    const handleDelete = async (id) => {
        if (window.confirm("You want to Delete task")) {
            try {
                const res = await apiRequest.delete(`/tasks/${id}`)
                setTasks(tasks.filter((item) => item.id !== id))
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

            <div className=" -mx-3 my-10 w-full">
                <div className="w-full max-w-full px-3 mb-6  mx-auto">
                    <div className="relative flex-[1_auto] flex flex-col break-words min-w-0 bg-clip-border rounded-[.95rem] bg-white m-5">
                        <div className="relative flex flex-col min-w-0 break-words border border-dashed bg-clip-border rounded-2xl border-stone-200 bg-light/30">
                            <div className="px-9 pt-5 flex justify-between items-stretch flex-wrap min-h-[70px] pb-0 bg-transparent">
                                <h3 className="flex flex-col items-start justify-center m-2 ml-0 font-medium text-normail/tight text-dark">
                                    <span className="">Projects Deliveries</span>
                                </h3>
                                <div className="relative flex flex-wrap items-center my-2 gap-4">
                                    <div className="flex items-center gap-2">
                                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                            Priority
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                            >
                                                <option value={""}>Select</option>
                                                <option>High</option>
                                                <option>Medium</option>
                                                <option>Low</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <label htmlFor="country" className="block text-sm font-medium leading-6 text-gray-900">
                                            Status
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="country"
                                                name="country"
                                                autoComplete="country-name"
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

                            <div className="flex-auto block py-8 pt-6 px-9">
                                <div className="overflow-x-auto">
                                    <table className="w-full my-0 align-middle text-dark border-neutral-200">
                                        <thead className="align-bottom">
                                            <tr className="font-semibold text-[0.95rem] text-secondary-dark border-b">
                                                <th className="pb-3 text-start min-w-[175px]">TITLE</th>
                                                <th className="pb-3 text-start min-w-[175px]">DESCRIPTION</th>
                                                <th className="pb-3 text-center min-w-[100px]">PROGRESS</th>
                                                <th className="pb-3 pr-12 text-end min-w-[100px]">DEADLINE</th>
                                                <th className="pb-3 pr-12 text-end min-w-[175px]">STATUS</th>
                                                <th className="pb-3 text-end min-w-[50px]">Actions</th>
                                            </tr>
                                        </thead>
                                        {loading ? "Loading..." :
                                            <tbody>
                                                {tasks.map((item) => {
                                                    return (
                                                        <Task key={item.id} data={item} handleDelete={handleDelete} />
                                                    )
                                                })}

                                            </tbody>
                                        }
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ListTask
