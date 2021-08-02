import React from 'react';
import "./inputLinks.css";
import Article from "./image/article.png"
import Upwork from "./image/upwork.png"
import Google from "./image/Rectangle 2.2.png"
import Avatar__first from "./image/Photo (3).png"
import Avatar__second from "./image/Photo (4).png"

function InputLinks() {
    return (
        <div className="inputlink">
            <span className="header__searchBar__greyText">JOBS</span>
            <li>
                <a href="#" className="header__searchBar__listItem">
                    <div className="header__searchBar__listImage">
                        <img src={Upwork} alt="" />
                    </div>
                    <div className="header__searchBar__listText">
                        <h5>UX/UI Designer</h5>
                        <p>Upwork</p>
                    </div>
                    <i className="fas fa-chevron-right"></i>
                </a>
            </li>
            <li>
                <a href="#" className="header__searchBar__listItem">
                    <div className="header__searchBar__listImage">
                        <img src={Google} alt="" />
                    </div>
                    <div className="header__searchBar__listText">
                        <h5>UX/UI Designer</h5>
                        <p>Upwork</p>
                    </div>
                    <i className="fas fa-chevron-right"></i>
                </a>
            </li>
            <span className="header__searchBar__blueText">
                ALL USERS
                <p>(18)</p>
            </span>
            <div className="header__searchBar__line"></div>
            <span className="header__searchBar__greyText">USERS</span>
            <li>
                <a href="#" className="header__searchBar__listItem">
                    <div className="header__searchBar__listImage">
                        <img src={Avatar__first} alt="" />
                    </div>
                    <div className="header__searchBar__listText">
                        <h5>UX/UI Designer</h5>
                        <p>Upwork</p>
                    </div>
                    <i className="fas fa-chevron-right"></i>
                </a>
            </li>
            <li>
                <a href="#" className="header__searchBar__listItem">
                    <div className="header__searchBar__listImage">
                        <img src={Avatar__second} alt="" />
                    </div>
                    <div className="header__searchBar__listText">
                        <h5>UX/UI Designer</h5>
                        <p>Upwork</p>
                    </div>
                    <i className="fas fa-chevron-right"></i>
                </a>
            </li>
            <span className="header__searchBar__blueText">ALL JOBS
                <p>(18)</p>
            </span>
            <div className="header__searchBar__line"></div>
            <span className="header__searchBar__greyText">ARTICLES</span>
            <li>
                <a href="#" className="header__searchBar__article">
                    <div className="header__searchBar__listImage">
                        <img className="acticle__img" src={Article} alt="" />
                    </div>
                    <div className="header__searchBar__listText">
                        <h5>UX/UI Designer</h5>
                        <p>Upwork</p>
                    </div>
                    <i className="fas fa-chevron-right"></i>
                </a>
            </li>
            <span className="header__searchBar__blueText">ALL ARTICLES
                <p>(30)</p>
            </span>
            <div className="header__searchBar__line"></div>

            <button className="header__search__btn">
                ALL RESULTS
                <p>(2,000+)</p>
            </button>
        </div>
    )
}

export default InputLinks
