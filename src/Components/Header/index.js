import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import {RiShoppingBag3Fill} from 'react-icons/ri'
import {AiFillHome} from 'react-icons/ai'
import {HiLogout} from 'react-icons/hi'
import './index.css'

const Header = props => {
  const onClickLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <div className="header_container">
      <div className="mobile_nav_bar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="nav_logo_jobby"
        />
        <ul className="nav_mobile_items_container">
          <li className="nav_item">
            <Link to="/" className="nav_links">
              <AiFillHome color="white" size={30} />
            </Link>
          </li>
          <li className="nav_item">
            <Link to="/jobs" className="nav_links">
              <RiShoppingBag3Fill color="white" size={30} />
            </Link>
          </li>
          <button
            type="button"
            className="mobile_logout_button nav_item"
            onClick={onClickLogout}
          >
            <HiLogout color="white" size={30} />
          </button>
        </ul>
      </div>
      <div className="desktop_nav_bar">
        <img
          src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
          alt="website logo"
          className="nav_logo_jobby"
        />
        <ul className="nav_desktop_items">
          <li className="nav_desktop_item">
            <Link to="/" className="desktop_nav_link">
              Home
            </Link>
          </li>
          <li className="nav_desktop_item">
            <Link to="/jobs" className="desktop_nav_link">
              Jobs
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="desktop_nav_logout_button"
          onClick={onClickLogout}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default withRouter(Header)
