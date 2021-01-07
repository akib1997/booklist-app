import React from 'react'

export default function TodoItem() {
    return (
        <div className='mt-20'>
            <div className="border-gray-500 border rounded text-left">
                <table className="w-full">
                    <thead>
                        <tr className='border-b border-gray-500'>
                            <th className="font-medium border-r border-gray-500 p-1">Title</th>
                            <th className="font-medium border-r border-gray-500 p-1">Author</th>
                            <th className="font-medium border-r border-gray-500 p-1">Edit</th>
                            <th className="font-medium p-1">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="border-r border-gray-500 p-1">We need to create a new website from scratch.</td>
                        <td className="border-r border-gray-500 p-1">Akib</td>
                        <td className="border-r border-gray-500 p-1"><button className='bg-blue-500 px-2 py-1 text-white leading-none block'>Edit</button></td>
                        <td className="p-1"><button className='bg-red-500 px-1 py-1 text-white leading-none block'>Delete</button></td>
                        </tr>
                    </tbody>
                </table>
            </div>            
        </div>
    )
}
