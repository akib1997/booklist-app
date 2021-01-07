import React, {useState} from 'react'

export default function TodoInput({BookTitle}) {

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        BookTitle(title)
        console.log(title)
        console.log(author)
    }
    return (
        <form className='form bg-gray-100 p-8 mt-20' onSubmit={handleSubmit}>

            <div className='form-group mb-4 flex'>
                <label htmlFor='title' className='w-1/4 block'>
                    Title<span className='text-red-500'>*</span>
                </label>
                <input type='text' className='w-3/4 py-1 px-2 border-gray-500 border-2 rounded bg-white' value={title} onChange={e => setTitle(e.target.value)} />
            </div>

            <div className='form-group mb-4 flex'>
                <label htmlFor='author' className='w-1/4 block'>
                    Author<span className='text-red-500'>*</span>
                </label>
                <input type='text' className='w-3/4 py-1 px-2 border-gray-500 border-2 rounded bg-white' value={author} onChange={e => setAuthor(e.target.value)} />
            </div>
            
            <div className='border-t mt-12'>
                <button className='bg-blue-600 text-white py-1 px-2 mt-6 ml-40 rounded'>Add</button>
            </div>            
        </form>
    )
}
