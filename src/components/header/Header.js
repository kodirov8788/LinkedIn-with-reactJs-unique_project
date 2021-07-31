import React from 'react'
import './Header.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import RssFeedIcon from '@material-ui/icons/RssFeed';
import PeopleAltOutlinedIcon from '@material-ui/icons/PeopleAltOutlined';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SearchIcon from '@material-ui/icons/Search';
import Avatar from '@material-ui/core/Avatar';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';


function header() {
    return (
        <div className="header">
            <div className="linkedin">
                <LinkedInIcon className="linkedin__icon" />
            </div>
            <div className="header__icons">
                <div className="header__iconText">
                    <RssFeedIcon className="header__icon" />
                    <p>TEXT</p>
                </div>
                <div className="header__iconText">
                    <PeopleAltOutlinedIcon className="header__icon" />
                    <p>TEXT</p>

                </div>
                <div className="header__iconText">
                    <WorkOutlineIcon className="header__icon" />
                    <p>TEXT</p>

                </div>
                <div className="header__iconText">
                    <ChatBubbleOutlineIcon className="header__icon" />
                    <a href="chat">Chat</a>
                </div>
                <div className="header__iconText">
                    <NotificationsNoneIcon className="header__icon" />
                    <p>TEXT</p>
                </div>
            </div>
            <div className="header__searchInput">

                <SearchIcon className="header__searchButton" />
                <input type="text" className="header__input" placeholder='Search' />
            </div>

            <div className="header__avatar">
                <Avatar className="header__avatar__image" />
                <div className="header__avatarText">
                    <h4>Kodirov</h4>
                    <p>lorem</p>
                </div>

            </div>
            <div className="header__rightIcon">
                <MoreHorizIcon />
                <p>OTHER</p>
            </div>
        </div>
    )
}

export default header
