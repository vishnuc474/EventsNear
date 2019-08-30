import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import {connect} from 'react-redux'
  import { BrowserRouter, Link, Route } from 'react-router-dom';
class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="red" light expand="md">
          <NavbarBrand href="/">EventsNear</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              
              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Account
              </DropdownToggle>
              <DropdownMenu right>
              {!this.props.user.name ?
                (<div>
                  <DropdownItem>
                  Profile
                  </DropdownItem>
                   <DropdownItem>
                   <Link to="/logout">Logout</Link>
                   </DropdownItem>
                 </div>
                 ) :
                 (
                   <div>
                 <DropdownItem>
                    Login 
                  </DropdownItem>
                  <DropdownItem>
                     <Link to="/user/register">Register</Link>
                  </DropdownItem>
                  </div>
                 )
              }
              </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.user)
  return {
      user: state.user
  }
  
}
export default connect(mapStateToProps)(NavBar)