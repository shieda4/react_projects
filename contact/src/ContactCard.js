import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
function ContactCard(props) {
    return (
        <>
            <div className="card">
                <img src={props.image} className="card-img-top"></img>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.email}</p>
                </div>
            </div>
        </>
    );
}

export default ContactCard;