import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';
import '../../component/checkout/checkout.css'

const header = (props) => {

    return (
        <div className="fixed-header">
            <div className="dashboard">
                <h3>Dashboard</h3>
            </div>
            <div className="OrderButton">
                <Link className="logout" to="/">Logout</Link>
            </div>
        </div>
    )
}

export default header;