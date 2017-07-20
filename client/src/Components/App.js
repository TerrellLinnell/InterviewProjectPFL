import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import injectSheet from 'react-jss'
import $ from 'jquery'
import PropTypes from 'prop-types'
import ProductsDisplay from '../Views/ProductsDisplay'

const propTypes = {
  classes: PropTypes.object
}

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      products: null
    }
  }

  getProducts () {
    $.ajax({
      url: '/products',
      method: 'GET'
    }).done((data) => {
      this.setState({products: data.results.data})
    })
  }

  componentWillMount () {
    this.getProducts()
  }

  render () {
    console.log(this.state.products)
    return (
      <div>
        {this.state.products
         ? <ProductsDisplay
           products={this.state.products}
          />
        : <h1>Please wait while we retrieve the products for you</h1>}
      </div>
    )
  }
}

App.propTypes = propTypes

export default App
