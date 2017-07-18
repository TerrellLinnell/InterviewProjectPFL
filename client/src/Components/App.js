import React, { Component } from 'react';
import ProductsDisplay from '../Views/ProductsDisplay'
import {Link} from 'react-router-dom'
import injectSheet from 'react-jss'
import $ from 'jquery'

const styles = {
  ProductItems: {
    width: 'calc(21%)',
    '& a': {
      textDecorationColor: '#1E90FF'
    }
  },
  ProductItemsFlexbox: {
    color: '#1E90FF',
    textDecorationColor: '#1E90FF',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    textAlign: 'center',
    height: '100%'
  },
  ProductImages: {
    padding: '5% 0 5% 0',
    width: '100%',
    height: '100%',
    border: '1px solid grey'
  },
  blackOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgba(0,0,0,0.5)',
    zIndex: '2'
  }
}
const enhancer = injectSheet(styles)
class App extends Component {
  mapProducts = (props) => {
    return (
      this.state.products.map((item) => {
        const {classes} = this.props
        return (
          <div className={classes.ProductItems}>
            <Link to={`/products/${item.productID}`}>
              <div className={classes.ProductItemsFlexbox}>
                <div className={classes.ProductImages}>
                  <img width='60%' src={item.imageURL} alt='display currently unavailable' />
                </div>
                <div>
                  <h5>{item.name}</h5>
                </div>
              </div>
            </Link>
          </div>
        )
      })
      )
    }
  componentWillMount = (context) => {
    this.context.setProductState()
  }
  render () {
    console.log(this.state.products);
    return (
      <div>
        <ProductsDisplay
        products={this.state.products}
        mapProducts={this.mapProducts}
        />
      </div>
    );
  }
}

App.contextTypes = {
  setProductState: React.propTypes.func,
  phoneId: React.PropTypes.number
}

export default enhancer(App)
