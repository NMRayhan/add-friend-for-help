import React from 'react';

const Cart = (props) => {
    const carts = props.CartDetails;

    let total = 0;
    for (let i = 0; i < carts.length; i++) {
        const person = carts[i];
        total = total + person.balance
        var totalAnnual = total.toFixed(2)
    }
    return (
        <div>
            <h3>Total Added Friend : {carts.length}</h3>
            <h2>Added Friend Total Monthly Salary ${totalAnnual}</h2>
        </div>
    );
};

export default Cart;