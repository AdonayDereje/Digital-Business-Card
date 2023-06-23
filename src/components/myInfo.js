import React from "react"
import Mockprofile from "../Mockprofile.png"
import EmailIcon from "../Email.png"
import LinkedInIcon from "../LinkedIn.png"

function Info () {
    return (
        <div>
            <img src={Mockprofile} className="profile-photo" alt="profile picture"/>
            <h2 className="full-name">Laura Smith</h2>
            <p className="job-title">Frontend Developer</p>
            <p className="personal-website">laurasmith.website</p>

            <button className="btn"><img src={EmailIcon} className="button-icon" width="15px"/>Email</button>
            <button className="btn1"><img src={LinkedInIcon} className="button-icon" width="15px"/>LinkedIn</button>
            {/* <button className="btn"><img src=""/>LinkedIn</button> */}
        </div>
    )
}

export default Info;