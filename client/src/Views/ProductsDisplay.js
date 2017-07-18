import React from 'react'
import injectSheet from 'react-jss'

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
  }
}

const enhancer = injectSheet(styles)

const ProductsDisplay = (props) => {
  const {classes} = props
  return (
    <div>
      <div className={classes.header}>
        <div className={classes.blackOverlay}>
          <h1> Products </h1>
        </div>
      </div>
        <div className={classes.Flexbox2}>
          {context.products === null ? <h1>Please wait while we retrieve the products for you</h1> : props.mapProducts()}
      </div>
    </div>
  )
}

ProductsDisplay.contextTypes = {
  products: React.PropTypes.object
}

export default enhancer(ProductsDisplay)
