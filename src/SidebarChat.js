import React, { useState, useEffect } from 'react'
import "./SidebarChat.css"
import { Avatar, } from '@material-ui/core';
import db from './firebase'
import { Link } from 'react-router-dom';
function SidebarChat({id,name,addNewChat}) {

    const [seed, setSeed] = useState('');
    const [messages,setMessage]=useState('');
    useEffect(()=>{
        if(id){
        //    alert(id)
          db.collection("rooms")
          .doc(id)
          .collection("messages")
          .orderBy('timestamp','desc')
          .onSnapshot((snapshot)=>
             setMessage(snapshot.docs.map((doc)=>
             doc.data()
             ))
          )
        }
     
  },[id]);

    useEffect(() => {
        
        setSeed(Math.floor(Math.random() * 5000))
    }, []);

    const createChat = () => {
        const roomName = prompt("Enter the room name");

        if (roomName) {
            db.collection("rooms").add({
                name: roomName
            })
        }
    }
    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/avataaars/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>
                        {name}
                    </h2>
                    <p>{messages[0]?.message}</p>
                </div>

            </div>
        </Link>

    ) : (
            <div className="sidebarChat" onClick={createChat}>
                <h2>add new chat</h2>
            </div>
        )
}

export default SidebarChat
