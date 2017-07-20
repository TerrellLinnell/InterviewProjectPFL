import {Link} from 'react-router-dom'
import React, {Component} from 'react'
import injectSheet from 'react-jss'
import PropTypes from 'prop-types'
import $ from 'jquery'
import UserInfoForm from '../Forms/UserInfoForm'

const propTypes = {
  classes: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
}

const styles = {
  ProductFlexbox: {
    display: 'flex',
    justifyContent: 'center'
  },
  Image: {
    border: '1px dotted rgb(204, 204, 204)',
    width: '40%',
    height: '50%',
    padding: '3% 3% 3% 3%',
    margin: '5% 3% 5% 0',
    textAlign: 'center'

  },
  ProductDetails: {
    width: '50%'
  },
  Title: {
    margin: '15% 0 5% 0'
  },
  Buttons: {
    backgroundColor: '#550000',
    padding: '.5% .5% .5% .5%',
    overflow: 'hidden',
    margin: '6% 0 2% 0',
    border: '2px solid white',
    borderRadius: '10px',
    boxShadow: '2px 2px 5px black',
    width: '30%',
    color: 'white',
    '&:hover': {
      opacity: '.7'
    }
  }
}

const enhancer = injectSheet(styles)

class IndividualProduct extends Component {
  constructor (props) {
    super(props)
    this.state = {
      loading: false,
      finished: false,
      stepIndex: 0,
      productId: this.props.match.params.productID,
      products: null
    }
    this.getProducts = this.getProducts.bind(this)
    this.getSelectedProductDetails = this.getSelectedProductDetails.bind(this)
  }

  getProducts () {
    $.ajax({
      url: '/products',
      method: 'GET'
    }).done((data) => {
      this.setState({products: data.results.data})
    })
  }

  getSelectedProductDetails () {
    $.ajax({
      url: `/products/productId`,
      method: 'GET'
    }).done((data) => {
      console.log('details:', data)
    })
  }

  componentWillMount () {
    this.getProducts()
    this.getSelectedProductDetails()
  }

  findProduct () {
    if (this.state.products !== null) {
      console.log(this.state.products)
      const ProductId = Number(this.state.productId)
      const product = this.state.products.find(p => Number(p.productID) === ProductId)
      return (
        <div>
          <div className={this.props.classes.ProductFlexbox}>
            <div className={this.props.classes.Image}>
              <img width='50%' src={product.imageURL} alt='display unavailable' />
            </div>
            <div className={this.props.classes.ProductDetails}>
              <h1 className={this.props.classes.Title}>{product.name}</h1>
            </div>
          </div>
          <UserInfoForm productId={this.state.productId} />
        </div>
      )
    }
    else {
      return (
        <h1>Loading...</h1>
      )
    }
  }

  render (props) {
    return (
      this.findProduct()
    )
  }
}

IndividualProduct.propTypes = propTypes

export default enhancer(IndividualProduct)
