import React from 'react';
import './Chat.css';

import Avatar from '@material-ui/core/Avatar';
import AttachmentTwoToneIcon from '@material-ui/icons/AttachmentTwoTone';
import SendTwoToneIcon from '@material-ui/icons/SendTwoTone';
import CheckOutlinedIcon from '@material-ui/icons/CheckOutlined';
import DoneAllOutlinedIcon from '@material-ui/icons/DoneAllOutlined';


function Chat() {
    return (
        <div className="chat__body">
            <div className="chat__sidebar">
                <h3>CHATS</h3>
                <div className="chat__sidebar__contact">
                    <div className="chat__sidebar__person">
                        <Avatar className="chat__sidebar__avatar" />
                        <div className="chat__sidebar__text">
                            <h3>Darlene Black</h3>
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

                    <div className="container__left">
                        <div clasName="container__left__content">
                            <div className="chat__massages__body__text__light">
                                <p>Hello. How arsds  today?</p>
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
                                <p>4:00</p>
                                <span>PM</span>
                            </div>
                        </div>
                    </div>


                    <div className="container__right">
                        <div className="container__right__content">
                            <div className="chat__massages__body__text__dark">
                                <p>Hey! I'm fine. Thanks for asking!</p>
                            </div>
                            <div className="right__tik__sent__time">
                                <p>4:00</p>
                                <span>PM</span>
                            </div>

                            <div className="chat__massages__body__image">
                                <Avatar className="right" />
                            </div>
                        </div>

                    </div>
                    <div className="container__left">
                        <div clasName="container__left__content">
                            <div className="chat__massages__body__text__light">
                                <p>Hello. How arsds  today?</p>
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
                                <p>4:00</p>
                                <span>PM</span>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="chat__message__footer">
                    <input type="text" placeholder="Write you message" />
                    <div className="chat__message__footer__send">
                        <button ><AttachmentTwoToneIcon className="chat__message__header__sharedMediaIcon" /></button>
                        <button  ><SendTwoToneIcon className="chat__message__header__sharedMediaIcon" /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat
