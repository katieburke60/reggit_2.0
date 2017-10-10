import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/lib/Navbar'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import Nav from 'react-bootstrap/lib/Nav'
import NavItem from 'react-bootstrap/lib/NavItem'

import CategoryListItem from './categories/CategoryListItem'
import { getCategories, login, registration, logout } from '../actions'


class NavbarMain extends Component {
  constructor(){
    super()

    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount(){
    this.props.getCategories()
  }

  handleClick(){
    localStorage.clear()
    this.props.logout()
    return
  }

  render() {
      const categories = this.props.categories.map((category) => {
       return <CategoryListItem
         key={category.id}
         name={category.name}
       />
      })
      return(
          <Navbar inverse collapseOnSelect id="Navbar">
            <Navbar.Header>
              {/* <Navbar.Brand> */}
                {/* <a className="logotext" href="/events">DevCons</a> */}
              {/* </Navbar.Brand> */}
              <Navbar.Toggle />
            </Navbar.Header>

            <Navbar.Collapse>
              <Nav pullRight>
                <NavItem eventKey={.5} href='/'><Link to="#">About</Link></NavItem>
                  <NavDropdown eventKey={1} title="Categories" id="basic-nav-dropdown-1">
                    {categories}
                  </NavDropdown>
                  {localStorage.getItem('jwt') ?
                  <NavItem eventKey={4} href='/'> <button onClick={this.handleClick}>Logout</button> </NavItem> :
                  <NavItem eventKey={4} href='/'> <Link to="/login">Login/Sign Up </Link> </NavItem>
                }
                </Nav>
            </Navbar.Collapse>
          </Navbar>
      )
    }
}
function mapStateToProps(state) {
  return {
    categories: state.categories.all,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    logout: function() {
      dispatch(logout())
    },
    getCategories: function() {
      dispatch(getCategories())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavbarMain)
