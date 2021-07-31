import React from 'react'
import './Footer.css'
import LinkedInIcon from '@material-ui/icons/LinkedIn';

import Button from '@material-ui/core/Button';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';

function Footer() {
    return (
        <div className="footer">
            <div className="footer__grid">


                <div className="footer__logo">
                    <LinkedInIcon className="footer__linkedin__logo" />
                </div>
                <div className="footer__links__group">
                    <div className="footer__title">
                        <a href="/About">About</a>
                        <a href="/careers">Careers</a>
                        <a href="/advertise"> Advertise</a>
                        <a href="/business">Business</a>
                    </div>
                    <div className="footer__links">
                        <a href="/Talent">Talent</a>
                        <a href="/Marketing">Marketing</a>
                        <a href="/Sales"> Sales</a>
                        <a href="/Safety">Safety</a>
                    </div>
                    <div className="footer_privacy__links">
                        <a href="/Comunity">Comunity</a>
                        <a href="/Privacy">Privacy</a>
                        <a href="/Mobilapp">Mobileapp</a>
                    </div>
                </div>

                <div className="footer__settings">
                    <h1>Fast access</h1>
                    <Button className="footer__settingBtn" variant="contained" color="primary">
                        <p>QUESTIONS</p>
                        <HelpOutlineIcon />
                    </Button>
                    <Button variant="outlined" className="footer__settingBtn" color="primary">
                        <p>SETTINGS</p>
                        <SettingsIcon />
                    </Button>
                </div>
                <div className="footer__select">
                    <h1>Language</h1>
                    <select name="Language" id=""></select>
                </div>
            </div>
        </div >
    )
}

export default Footer
