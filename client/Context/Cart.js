import React, {Component} from 'react'

class Cart extends Component {
  state = {
    products: null
    productId: null,
    productName: null,
    productQuantity: null,
  }

  setProductsState = () => {
    getProducts = () => {
      $.ajax({
        url   : '/products',
        method: 'GET',
      }).done((data) => {
        this.setState({products: data.results.data})
      })
    }
  }
  setProductIdState = (bln) => {
    this.setState({productId: bln})
  }

  setProductNameState = (str) => {
    this.setState({productName: str})
  }

  setProductQuantityState = (num) => {
    this.setState({productQuantity: num})
  }

  getChildContext () {
    return {
      setProductsState: this.setProductsState,
      setProductIdState: this.setProductIdState,
      setProductNameState: this.setProductNameState,
      setProductQuantityState: this.setProductQuantityState
    }
  }
  render () {
    return (
      <div>
        {this.setProductsState()}
        {this.props.children}
      </div>
    )
  }
}

Cart.childContextTypes = {
  setProductsState: React.PropTypes.object,
  setProductIdState:  React.PropTypes.number,
  setProductNameState:  React.PropTypes.string,
  setProductQuantityState:  React.PropTypes.number
}

export default Cart
