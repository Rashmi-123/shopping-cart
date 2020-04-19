import React, { Component } from 'react';
import Header from '../../component/header/header';
import Checkout from '../../component/checkout/checkout';
import Product from '../../component/Products/products';
import Modal from '../../component/UI/Modal/Modal'
import OrderSummary from '../../component/Ordersummary/OrderSummary';
// import data from '../../../public/products.json'
class Cart extends Component {

  constructor(props) {
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.totalprice = this.totalprice.bind(this);
    this.purchaseSuccess = this.purchaseSuccess.bind(this);
    this.purchaseHandler = this.purchaseHandler.bind(this);
  }

  state = {
    products: null,
    error: null,
    totalPrice: 0,
    purchasable: false,
    purchasing: false
  }

  componentDidMount() {
    let url = window.location.origin;
    fetch(url + '/data/products.json')
      .then(response => response.json())
      .then(data => this.setState({ products: data }))
      .catch(err => {
        this.setState({ error: err })
      });
  }

  //execute on purchase success//
  purchaseSuccess = () => {
    this.setState({ purchasing: false })
  }

  //function to add more Item in cart//
  addItem = (type) => {
    const proIndex = this.state.products.findIndex(p => {
      return p.Productname === type;
    });
    const product = {...this.state.products[proIndex]}
    product.TotalQuantity += 1;
    const arr = [...this.state.products];
    arr[proIndex] = product;
    this.setState({products: arr}, () => this.totalprice())
  }

  //function to remove Item from cart//
  removeItem = (type) => {
    const proIndex = this.state.products.findIndex(p => {
      return p.Productname === type;
    });
    const product = {...this.state.products[proIndex]}
    if(product.TotalQuantity > 0){
      product.TotalQuantity -= 1;
    }
    const arr = [...this.state.products];
    arr[proIndex] = product;
    this.setState({products: arr}, () => this.totalprice())
  }
  
  
  //function to add first Item in cart//
  addToCart = (type) => {
    const proIndex = this.state.products.findIndex(p => {
      return p.Productname === type;
    });
    const product = {...this.state.products[proIndex]}
    product.TotalQuantity = 1;
    const arr = [...this.state.products];
    arr[proIndex] = product;
    this.setState({products: arr}, () => this.totalprice())
  }

//function to calculate total price//
  totalprice = () => {
    let sum = this.state.products.map(pro => {
      return (pro.TotalQuantity * pro.Price)
    }).reduce((sum, el) => {
      return sum + el;
    })
    this.setState({ totalPrice: sum})
  }

//function to handle purachsing using checkout//
  purchaseHandler = () => {
    this.setState({
      purchasing: true
    })
  }

//function to enable checkout//
  updatePurchaseState = () => {
    const temptotal = this.state.totalPrice
    return temptotal > 0;
  }

  render() {
    let products = this.state.products
    let productArray = null;
    let orderSummary = null;
    if (this.state.products) {
      productArray = <Product product={products}
        addItem={(event) => this.addItem(event)}
        removeItem={(event) => this.removeItem(event)}
        addToCart={(event) => this.addToCart(event)}
      />;
      orderSummary = <OrderSummary products={this.state.products}
        Success={this.purchaseSuccess}
        totalPrice={this.state.totalPrice}
      />
    }

  return (
      <>
        <Header />
        {productArray}
        <Checkout totalPrice={this.state.totalPrice}
          products={this.state.products}
          purchasable={this.updatePurchaseState()}
          ordernow={this.purchaseHandler} />

        <div>
          <Modal show={this.state.purchasing} modelClosed={this.purchaseSuccess} >
            {orderSummary}
          </Modal>
        </div>
      </>
    )
  }


}

export default Cart;