import Taible from "../components/taible"
import { useEffect, useState } from "react"
import axios from 'axios';
import { AppConfig } from "../constant/config";
export default function Blogs (props) {
    const column =["Sr.No",'Title','Date','Author']
    const row = ['title','date','author']
    const [blogs,setBlogs]=useState([{1:'dddddddddd'}])
    const getBlogs=async()=>{
    let data=await axios(`http://localhost:5002/blog/blogList`)
    setBlogs(data.data.data)
    }
    useEffect(()=>{
        props.setSearchText('')
        getBlogs()
    },[])
   return <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
         <Taible data ={blogs} title="blogs" column={column} row={row} searchtext={props.searchtext} getBlogs={getBlogs} /> 
        </div>
}
