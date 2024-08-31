import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    row: {
        width: "100%",
        display: "flex",
    },
    name: {
        width: "120px"
    },
    price: {
        width: "50px"
    },
    quantity: {
        width: "calc(100% - 170px)"
    },
}));

const HomePage = ({cart}) => {
    const classes = useStyles();
    const orders = [];

    return <div>
        <Link to="/product-list">Product List</Link>
        {
            cart && cart.items.length > 0 &&
            cart.items.map(item => <div className={classes.row} key={item.product._id}>
                <div className={classes.name}>{item.product.name}</div>
                <div className={classes.price}>{item.product.price}</div>
                <div className={classes.quantity}>{item.quantity}</div>
            </div>)
        }
    </div>
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(
    mapStateToProps,
    null
)(HomePage);