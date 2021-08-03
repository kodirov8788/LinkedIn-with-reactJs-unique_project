import React, { useState, useEffect } from 'react';
import './Chat.css';
import Message from './message/Message'
import Avatar from '@material-ui/core/Avatar';
import AttachmentTwoToneIcon from '@material-ui/icons/AttachmentTwoTone';
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined';
// import FunctionsOutlined from '@material-ui/icons';


function Chat() {
    const [data, setData] = useState("");
    const [messages, setMessages] = useState([
        { username: 'Sardor', text: 'hey guys' },
        { username: 'Atham', text: 'hello' }
    ]);
    const [username, setUsername] = useState('');

    useEffect(() => {
        setUsername(prompt('Please enter your name'))
    }, [])

    const sendMessage = (e) => {
        setMessages([...messages, { username: username, text: data }]);
        setData('');

        // if (data === "") {
        //     alert('Please fill in the box')
        // } else {
        //     const updateUsers = [
        //         ...users,
        //         {
        //             id: users.length + 1,
        //             title: data,
        //             type: "member"
        //         }

        //     ];
        //     setUsers(updateUsers);

        // }
        // setData("")
        e.preventDefault()


    };
    console.log(data);
    console.log(messages);

    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


    const [users, setUsers] = useState([
        {
            id: 1,
            title: "Joe",
            type: "admin"
        }
    ]);


    // function handleAddNewUser(e) {
    //     if (data === "") {
    //         alert('Please fill in the box')
    //     } else {
    //         const updateUsers = [
    //             ...users,
    //             {
    //                 id: users.length + 1,
    //                 title: data,
    //                 type: "member"
    //             }

    //         ];
    //         setUsers(updateUsers);

    //     }
    //     setData("")
    //     e.preventDefault()
    // }







    return (
        <div className="chat__body">
            <div className="chat__sidebar">
                <h3>CHATS</h3>
                <div className="chat__sidebar__contact">
                    <div className="chat__sidebar__person">
                        <Avatar className="chat__sidebar__avatar" />
                        <div className="chat__sidebar__text">
                            <h3>{username}</h3>
                            <p>Hey, how is you project<span></span></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="chat__sidebar__btn">
                <button variant="contained" color="primary">
                    START NEW CHAT
                </button>
            </div>
            <div className="chat__massages">
                <div className="chat__message__header">
                    <div className="chat__message__header__content">
                        <div className="chat__message__header__text">
                            <p>CHAT WITH KODIROV M.</p>
                            <span>LAST ONLINE: 4 HOURS AGO</span>
                        </div>
                        <div className="chat__message__header__sharedMedia">
                            <AttachmentTwoToneIcon />
                            <p>SHARED MEDIA(12)</p>
                        </div>
                    </div>
                </div>
                <div className="chat__message__body">
                    {
                        messages.map(message => (
                            // {
                            //     users.map((user) => (
                            // <div
                            //     key={user.id}>
                            <div className="container__left">
                                <div clasName="container__left__content">
                                    <div className="chat__massages__body__text__light">
                                        {/* {
                                                messages.map(message => (
                                                    <p>{message}</p>
                                                ))
                                            } */}
                                        <Message username={message.username} text={message.text} />
                                        {/* <p>{message}</p> */}

                                        {/* <p>{user.title}</p> */}
                                        <div className="chat__massages__body__left__effect"></div>
                                        <div className="chat__massages__body__left__back"></div>
                                    </div>
                                </div>
                                <div className="chat__massages__body__tik__blue__place">
                                    <div className="chat__massages__body__tik__icons">
                                        <CheckOutlinedIcon className="tik__unread" />
                                        <DoneAllOutlinedIcon className="tik__read" />
                                    </div>
                                    <div class="left__tik__sent__time">
                                        <p>{time}</p>

                                    </div>
                                </div>
                            </div>
                            // </div>

                        ))
                    }

                    < div className="container__right" >
                        <div className="container__right__content">
                            <div className="chat__massages__body__text__dark">
                                <p>Kodirov</p>
                            </div>
                            <div className="right__tik__sent__time">
                                <p>{time}</p>
                                {/* <span>PM</span> */}
                            </div>

                            <div className="chat__massages__body__image">
                                <Avatar classaName="right" />
                            </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={sendMessage} >

                    <div className="chat__message__footer">
                        <input type="text" value={data} placeholder="Write you message" onChange={e => setData(e.target.value)} />
                        <div className="chat__message__footer__send">


                            <div className="fileBtn" ><AttachmentTwoToneIcon className="chat__message__header__sharedMediaIcon" />  <input type="file"
                            /></div>

                            <button type="submit"><SendTwoToneIcon className="chat__message__header__sharedMediaIcon" /></button>


                        </div>
                    </div>
                </form>
            </div>
        </div >
    )
}

export default Chat
