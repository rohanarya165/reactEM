import React from 'react'
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import { NavLink } from 'react-router-dom'

export default function ReachUs() {
    return (
        <>
            <center>
                <div className="container-fluid" id="reach1">
                    <h1>Reach US</h1>
                    <h5> <NavLink className="" to="/">Home</NavLink> 🟠 Reach us</h5>

                </div>
            </center>



















            <div class="row row-cols-1 row-cols-md-2 g-4">
            
                <div class="col">
                <center>
                    <div className="col-md-4"  >

                        <PhoneIcon />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Phone</h5>
                            <p className="card-text">+1-858-726-9115</p>
                            <p className="card-text">+91-731-498-0455</p>

                        </div>
                    </div>
                    </center>
                </div>

                <div class="col">
                <center>
                    <div className="col-md-4"  >

                        <EmailIcon />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">E-Mail</h5>
                            <p className="card-text">info@engineermaster.in</p>
                            <p className="card-text">sales@engineermaster.in</p>

                        </div>
                    </div>
                    </center>
                </div>
                
            </div>










        </>
    )
}
