import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData();
    // const [data , setData] = useState([]);
    // useEffect(() => {
    //     fetch(`https://api.github.com/users/geekymayur`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log(data);
    //             setData(data);
    //         })

    // }, [])
    return (
        <div className='text-center p-4'>
            <h1>followers: {data.followers}</h1>
            <div>
                <img src={data.avatar_url} className='w-[300px]' alt="" />
            </div>
        </div>
    )
}

export default Github


export const  gitHubdataLoader = async ()=>{
const response = await fetch('https://api.github.com/users/geekymayur');
return response.json();
};

