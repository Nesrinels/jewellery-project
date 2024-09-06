import React from "react";
import { connect } from 'react-redux';
import { makeStyles } from '@mui/styles'; 
import Button from '@mui/material/Button';
import { updateCartItem } from "../src/redux/cart.actions";
import { useNavigate } from 'react-router-dom'; 
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import img1 from './Assets/Products/return-to-tiffanywrap-necklace-69783430_1035910_ED.webp';
import img2 from './Assets/Products/return-to-tiffanywrap-bead-bracelet-69783325_1035690_ED_M.webp';
import img3 from './Assets/Products/return-to-tiffanyhoop-earrings-69836410_1030527_ED.webp';
import img4 from './Assets/Products/jean-schlumberger-by-tiffanysixteen-stone-ring-19186555_1039864_ED.webp';
import img5 from './Assets/Products/elsa-perettidiamonds-by-the-yard-necklace-17444859_907750_ED.webp';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        padding: theme.spacing(3),
      },
      card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      },
      cardMedia: {
        paddingTop: '73.25%', // 16:9
      },
      cardContent: {
        flexGrow: 1,
      },
      checkoutButton: {
        marginTop: theme.spacing(2),
      },
}));

const jewelryProducts = [
    {
        _id: 1,
    name: 'Wrap Necklace',
    description: 'In Silver with Pearls and a Diamond, Small',
    price: 1700.00,
    image: img1,
    },
    {
        _id: 2,
        name: 'Wrap Bead Bracelet',
        description: 'in Silver with Pearls and a Diamond, Small',
        price: 1100.00,
        image: img2,
      },
      {
        _id: 3,
        name: 'Hoop Earrings',
        description: 'in Sterling Silver with Diamonds, Mini',
        price: 625.00,
        image: img3,
      },
      {
        _id: 4,
        name: 'Sixteen Stone Ring',
        description: 'in Platinum with Diamonds',
        price: 14700.00,
        image: img4,
      },
      {
        _id: 5,
        name: 'Diamonds by the Yard® Necklace',
        price: 14000.00,
        image: img5,
      },
]

const ProductListPage = ({ cart, updateCartItem }) => {
    const classes = useStyles();
    const navigate = useNavigate(); 
    const products = jewelryProducts;

    const handleAddToCart = (product) => {
        const item = cart.items.find(it => it.product._id === product._id);
        const prevQuantity = item ? item.quantity : 0;
        updateCartItem({
            product,
            quantity: prevQuantity + 1
        });
    }

    const handleCheckout = () => {
        navigate('/'); 
    }

    return (
        // <div>
        //     <div>
        //         {
        //             products && products.length > 0 &&
        //             products.map(product =>
        //                 <div className={classes.row} key={product._id}>
        //                     <div className={classes.name}>{product.name}</div>
        //                     <div className={classes.price}>${product.price}</div>
                            
        //                     <Button 
        //                         size="small" 
        //                         variant="outlined"
        //                         onClick={() => handleAddToCart(product)}
        //                     >
        //                         Add to Cart
        //                     </Button>

        //                 </div>
        //             )
        //         }
        //     </div>
        //     <Button variant="outlined" onClick={handleCheckout}>Checkout</Button>
        // </div>
        <div className={classes.root}>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item key={product._id} xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image={product.image}
                title={product.name}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
          {product.description}
        </Typography>
                <Typography>
                  ${product.price.toFixed(2)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button 
        variant="contained" 
        color="primary" 
        className={classes.checkoutButton}
        onClick={handleCheckout}
      >
        Proceed to Checkout
      </Button>
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
