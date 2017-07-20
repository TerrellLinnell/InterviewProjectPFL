import React from 'react'
import injectSheet from 'react-jss'
import {Link} from 'react-router-dom'

const styles = {
  header: {
    backgroundImage: 'url(http://mattdturner.com/wordpress/wp-content/uploads/2011/04/punitionis8.jpg)',
    color: 'white',
    textAlign: 'center',
    backgroundAttachment: 'fixed',
    height: '450px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100%',
    zIndex: '1',
    position: 'relative',
    '& h1': {
      fontSize: '50px',
      paddingTop: '10%'
    }
  },
  Flexbox2: {
    padding: '5% 0 5% 0',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-around',
    color: '#4169E1'
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
  },
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
  }
}

const enhancer = injectSheet(styles)

const ProductsDisplay = (props) => {
  const {classes} = props

  const mapProducts =
    props.products.map((item) => {
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

  return (
    <div>
      <div className={classes.header}>
        <div className={classes.blackOverlay}>
          <h1> Products </h1>
        </div>
      </div>
      <div className={classes.Flexbox2}>
        {mapProducts}
      </div>
    </div>
  )
}

export default enhancer(ProductsDisplay)
