import React from 'react';
import './Friend.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faPhone, faEnvelopeOpenText, faMoneyBill, faUser } from '@fortawesome/free-solid-svg-icons'


const Friend = (props) => {
    const { name, email, phone, balance, img, gender } = props.Persons;
    const handleBtn = props.HandleReqBtn;
    return (
        <div className="person row align-items-center">
            <div className="col-4">
                <img src={img} alt="" className="rounded-circle" />
                <h1>{name}</h1>
            </div>
            <div className="col-6">
                <h4><FontAwesomeIcon className="icon-color" icon={faMoneyBill} /> ${balance}</h4>
                <h4><FontAwesomeIcon className="icon-color" icon={faPhone} /> {phone}</h4>
                <h4><FontAwesomeIcon className="icon-color" icon={faEnvelopeOpenText} /> {email}</h4>
                <h4><FontAwesomeIcon className="icon-color" icon={faUser} /> {gender}</h4>
            </div>
            <div className="col-2">
                <button onClick={() => handleBtn(props.Persons)} className="btn btn-success"><FontAwesomeIcon icon={faPlus} /></button>
            </div>
        </div>
    );
};

export default Friend;