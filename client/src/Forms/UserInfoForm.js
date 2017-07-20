import React, {Component} from 'react'
import injectSheet from 'react-jss'
import $ from 'jquery'

const styles = {
  FormFlexBox: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'center',
    margin: '0 25% 0 25%'
  },
  FormInput: {
    fontSize: '100%',
    padding: '.5% .5% .5% .5%',
    width: '100%'
  },
  Label: {
    fontSize: '100%',
    marginBottom: '.5%'
  },
  PlaceOrderButton: {
    width: '70%',
    padding: '3% 0 3% 0',
    margin: '2% 0 2% 0',
    fontSize: '150%',
    color: 'white',
    backgroundColor: 'green',
    borderRadius: '20px',
    alignSelf: 'center',
    border: '1px solid white',
    transition: '1s',
    '&:hover': {
      transition: '1s',
      backgroundColor: 'white',
      color: 'green',
      border: '1px solid green'
    },
    '@media (max-width: 800px)': {
      fontSize: '100%',
      padding: '3% 1% 3% 1%',
      width: '75%'

    }

  },
  FormHeading: {
    backgroundColor: 'green',
    borderTop: '4px double lightgreen',
    borderBottom: '4px double lightgreen',
    textAlign: 'center',
    padding: '1% 0 1% 0',
    color: 'white',
    '@media (max-width: 800px)': {
      fontSize: '150%'
    }
  }
}

const enhancer = injectSheet(styles)

class UserInfoForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      FirstName: null,
      LastName: null,
      Address: null,
      City: null,
      PostalCode: null,
      CountryCode: null,
      Email: null,
      Phone: null,
      productId: this.props.productId,
      quantity: null
    }
  }
  placeOrder (e) {
    e.preventDefault()
    const data = this.state
    $.ajax({
      url: `/products/productId/orders`,
      method: 'POST',
      data: data
    }).done((data) => {
      console.log('order:', data)
    })
  }
  render () {
    console.log(this.state.FirstName)
    const {classes} = this.props
    return (
      <div>
        <form>
          <h1 className={classes.FormHeading}>Fill Out The Form To<br />Place Your Order</h1>
          <div className={classes.FormFlexBox}>
            <div>
              <h3 className={classes.Label}>FirstName:</h3>
              <input className={classes.FormInput} className={classes.FormInput} onChange={(event) => this.setState({FirstName: event.target.value})} type='text' />
            </div>
            <div>
              <h3 className={classes.Label}>LastName:</h3>
              <input className={classes.FormInput} onChange={(event) => this.setState({LastName: event.target.value})} type='text' />
            </div>
            <div>
              <h3 className={classes.Label}>Address:</h3>
              <input className={classes.FormInput} onChange={(event) => this.setState({Address: event.target.value})} type='text' />
            </div>
            <div>
              <h3 className={classes.Label}>City:</h3>
              <input className={classes.FormInput} onChange={(event) => this.setState({City: event.target.value})} type='text' />
            </div>
            <div>
              <h3 className={classes.Label}>PostalCode:</h3>
              <input className={classes.FormInput} onChange={(event) => this.setState({PostalCode: event.target.value})} type='text' />
            </div>
            <div>
              <h3 className={classes.Label}>CountryCode:</h3>
              <input className={classes.FormInput} onChange={(event) => this.setState({CountryCode: event.target.value})} type='text' />
            </div>
            <div>
              <h3 className={classes.Label}>Email:</h3>
              <input className={classes.FormInput} onChange={(event) => this.setState({Email: event.target.value})} type='text' />
            </div>
            <div>
              <h3 className={classes.Label}>Phone:</h3>
              <input className={classes.FormInput} onChange={(event) => this.setState({Phone: event.target.value})} type='text' />
            </div>
            <div>
              <h3 className={classes.Label}>Quantity:</h3>
              <input className={classes.FormInput} onChange={(event) => this.setState({quantity: event.target.value})} type='text' />
            </div>
            <button className={classes.PlaceOrderButton} type='submit' onClick={() => this.placeOrder()}><strong>Place Your Order</strong></button>
          </div>
        </form>
      </div>
    )
  }
}

export default enhancer(UserInfoForm)
