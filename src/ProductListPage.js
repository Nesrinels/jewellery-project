import React from "react";
import { connect } from 'react-redux';
import { makeStyles } from '@mui/styles'; // Updated import
import Button from '@mui/material/Button';
import { updateCartItem } from "../src/redux/cart.actions";
import { useNavigate } from 'react-router-dom'; // Ensure you're using the correct package

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
    button: {
        width: "calc(100% - 170px)"
    },
}));

const fakeProducts = [
    {
        _id: 1,
        name: 'Buger',
        price: 6.99,
    },
    {
        _id: 2,
        name: 'French Fry',
        price: 3.99,
    },
    {
        _id: 3,
        name: 'Hush Brown',
        price: 2.99,
    },
    {
        _id: 4,
        name: 'Salad',
        price: 1.99,
    },
    {
        _id: 5,
        name: 'Coke',
        price: 1.99,
    },
]

const ProductListPage = ({ cart, updateCartItem }) => {
    const classes = useStyles();
    const navigate = useNavigate(); // Correctly using the hook
    const products = fakeProducts;

    const handleAddToCart = (product) => {
        const item = cart.items.find(it => it.product._id === product._id);
        const prevQuantity = item ? item.quantity : 0;
        updateCartItem({
            product,
            quantity: prevQuantity + 1
        });
    }

    const handleCheckout = () => {
        navigate('/'); // Use navigate instead of history.push
    }

    return (
        <div>
            <div>
                {
                    products && products.length > 0 &&
                    products.map(product =>
                        <div className={classes.row} key={product._id}>
                            <div className={classes.name}>{product.name}</div>
                            <div className={classes.price}>${product.price}</div>
                            
                            <Button 
                                size="small" 
                                variant="outlined"
                                onClick={() => handleAddToCart(product)}
                            >
                                Add to Cart
                            </Button>

                        </div>
                    )
                }
            </div>
            <Button variant="outlined" onClick={handleCheckout}>Checkout</Button>
        </div>
    );
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(
    mapStateToProps,
    { updateCartItem }
)(ProductListPage);
