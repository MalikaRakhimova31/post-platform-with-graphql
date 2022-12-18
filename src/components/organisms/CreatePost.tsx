import MainButton from 'components/atoms/MainButton'
import InputBar from 'components/atoms/SearchBar'
import Select from 'components/atoms/Select'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { postReducer } from '../../../store/posts'
import { CalendarIcon } from 'components/Icons'
import { useRouter } from 'next/router'
import { request } from '../../../service/request'


export default function CreatePost() {
    const options = [
        {value: 'published', label: 'Published'},
        {value: 'draft', label: 'Draft'},
    ]
    const router = useRouter()
    const dispatch = useDispatch()
    const [post, setPost] = useState<object>({
        title: '',
        time: '',
        status: ''
    })
    const handleSubmit = (event: any) => {
        event.preventDefault()
        console.dir("event form", event.target)
        dispatch(postReducer(post))
        request(`mutation createNewPost {
            createPost(title: "${post.title}", time: "${post.time}", status: "${post.status}") {
                title
                time
                status
            }
            }`, "createNewPost", ).then(res => console.log("res",res))
        router.push('/')
    }

    const handleChange = (e: any) => {
        setPost((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }
    
    const handleSelect = (e: any) => {
        setPost((prev) => ({
            ...prev,
            status: e.label
        }))
    }

    return (
        <div>
            <div><p className='text-8 font-normal leading-12 text-dod-grey mb-9'>Post information</p></div>
            <form onSubmit={handleSubmit}>
                <div className='flex flex-col space-y-10'>
                    <div className='flex flex-col space-y-2'>
                        <InputBar
                            placeholder='Title'
                            value={post.title}
                            onChange={handleChange}
                            icon={<></>}
                            name="title"
                        />
                        <Select
                            placeholder='Select Status'
                            options={options}
                            onChange={handleSelect}
                        />
                        <InputBar
                            placeholder='title'
                            value={post.time}
                            type='date'
                            icon={<CalendarIcon />}
                            onChange={handleChange}
                            icon={<></>}
                            name="time"
                        />
                    </div>
                    <MainButton text='Create' type='submit' handleClick={()=>{}}/>
                </div>
            </form>
        </div>
    )
}