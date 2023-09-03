import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', isValidUser: false, errorMsg: ''}

  onChangeUserInput = event => {
    this.setState({username: event.target.value})
  }

  onChangePasswordInput = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onSubmitFailure = errMsg => {
    this.setState({isValidUser: true, errorMsg: errMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    console.log(userDetails)
    const loginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(loginApiUrl, options)
    console.log(response)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data)
    } else if (response.status === 400) {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, isValidUser, errorMsg} = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="login_form_main_container">
        <form className="form_container" onSubmit={this.onSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
            alt="website logo"
            className="logo_jobby"
          />
          <div className="input_container">
            <label htmlFor="username" className="label_text">
              USERNAME
            </label>
            <input
              type="text"
              placeholder="Username"
              id="username"
              value={username}
              onChange={this.onChangeUserInput}
              className="input_box"
            />
          </div>
          <div className="input_container">
            <label htmlFor="Password" className="label_text">
              PASSWORD
            </label>
            <input
              type="password"
              placeholder="Password"
              id="Password"
              value={password}
              onChange={this.onChangePasswordInput}
              className="input_box"
            />
          </div>
          <button type="submit" className="login_button">
            Login
          </button>
          {isValidUser && <p>{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
