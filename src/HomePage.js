import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { FaSearch, FaUser, FaHeart, FaShoppingCart } from 'react-icons/fa';

const useStyles = makeStyles((theme) => ({
  homepage: {
    fontFamily: 'Arial, sans-serif',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
    borderBottom: '1px solid #eee',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  searchBar: {
    display: 'flex',
    alignItems: 'center',
  },
  headerIcons: {
    display: 'flex',
    gap: '15px',
  },
  mainNav: {
    display: 'flex',
    justifyContent: 'center',
    padding: '15px 0',
    '& ul': {
      display: 'flex',
      listStyle: 'none',
      gap: '20px',
    },
    '& a': {
      textDecoration: 'none',
      color: 'black',
      fontWeight: 'bold',
    },
  },
  hero: {
    position: 'relative',
    height: '500px',
    backgroundImage: 'url("path_to_your_image.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heroContent: {
    textAlign: 'center',
    color: 'white',
  },
  ctaButton: {
    padding: '10px 20px',
    backgroundColor: 'black',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
  },
  cartSection: {
    margin: '20px',
  },
  row: {
    width: "100%",
    display: "flex",
    borderBottom: '1px solid #eee',
    padding: '10px 0',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  name: {
    width: "120px",
    flex: '1',
    marginRight: '10px',
    textAlign: 'left',
  },
  price: {
    width: "50px",
    flex: '0.5',
    textAlign: 'right',
    marginRight: '20px',
  },
  quantity: {
    width: "calc(100% - 170px)",
    flex: '0.5',
    textAlign:'right',
  },
  totalPrice: {
    textAlign: 'right',
    fontWeight: 'bold',
    marginTop: '20px',
  },
}));

const HomePage = ({cart}) => {
    const classes = useStyles();

    const calculateTotalPrice = () => {
        return cart.items.reduce((total, item) => {
            return total + item.product.price * item.quantity;
        }, 0);
    }

    const totalPrice = calculateTotalPrice();

    return (
      <div className={classes.homepage}>
        <header className={classes.header}>
          <div className={classes.searchBar}>
            <FaSearch />
            <input type="text" placeholder="SEARCH" />
          </div>
          <h1 className={classes.logo}>JWS</h1>
          <div className={classes.headerIcons}>
            <select>
              <option>USD, $</option>
              {/* Add other currency options */}
            </select>
            <Link to='/login'><FaUser /></Link>
            <FaHeart />
            <FaShoppingCart />
          </div>
        </header>

        <nav className={classes.mainNav}>
          <ul>
            <li><Link to="/">HOME</Link></li>
            <li><Link to="/pages">PAGES</Link></li>
            <li><Link to="/shop">SHOP</Link></li>
            <li><Link to="/product-list">PRODUCTS</Link></li>
          </ul>
        </nav>

        <section className={classes.hero}>
          <div className={classes.heroContent}>
            <h2>Charms</h2>
            <button className={classes.ctaButton}>SHOP NOW</button>
          </div>
        </section>
        <div className={classes.cartSection}>
          <h2>Your Cart</h2>
          {cart && cart.items.length > 0 ?
            <>
              {cart.items.map(item => (
                <div className={classes.row} key={item.product._id}>
                  <div className={classes.name}>{item.product.name}</div>
                  <div className={classes.price}>${item.product.price.toFixed(2)}</div>
                  <div className={classes.quantity}>Qty: {item.quantity}</div>
                </div>
              ))}
              <div className={classes.totalPrice}>
                Total: ${totalPrice.toFixed(2)}
              </div>
            </>
            : <p>Your cart is empty</p>
        }
      </div>
      </div>
    );
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(
    mapStateToProps,
    null
)(HomePage);