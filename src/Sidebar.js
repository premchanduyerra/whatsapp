import React, { useState, useEffect } from 'react'
import './Sidebar.css'
import SidebarChat from "./SidebarChat"
import { Avatar, IconButton, } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

import db from './firebase';
import { useStateValue } from './StateProvider';
function Sidebar() {
    const [{user},dispatch] = useStateValue();
    const [rooms, setRooms] = useState([]);

    useEffect(()=>{
const unsubscribe=db.collection("rooms").onSnapshot((snapchat)=>{
    // console.log(snapchat.docs);
    setRooms(
        snapchat.docs.map((doc)=>({
            id:doc.id,
            data:doc.data()
        }))
    )
 })

 return ()=>{
     unsubscribe();
 }
    },[])
    // alert("rooms"+rooms)
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <Avatar src={user.photoURL} />
                <div className="sidebar__headerRight ">
                    <IconButton >
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>

                </div>
            </div>

            <div className="sidebar__search">
            <div className="sidebar_searchContainer">
            <SearchOutlinedIcon />
            <input placeholder="search or start a new chat" type="text"></input>
            </div>
            
            </div>
            <div className="sidebar__chats">
            
            <SidebarChat addNewChat="add"/>
            {
                rooms.map(room=>(
                    <SidebarChat key={room.id} id={room.id} name={room.data.name} />
                ))
            }
            
            </div>

        </div>
    )
}

export default Sidebar
