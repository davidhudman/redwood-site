import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

const BlogLayout = ({ children }) => {
  const { isAuthenticated, currentUser, logOut } = useAuth()
  return (
    <>
      <header style={{ width: '90%', margin: '0 auto' }}>
        <Navbar bg="light" expand="15000px">
          <Container>
            <Navbar.Brand href={routes.home()}>RW</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                {isAuthenticated ? (
                  <div>
                    <span>Hello, {currentUser.email}</span>{' '}
                  </div>
                ) : (
                  <></>
                )}
                <Nav.Link href={routes.home()}>Home</Nav.Link>
                <Nav.Link href={routes.about()}>About</Nav.Link>
                <Nav.Link href={routes.contact()}>Contact</Nav.Link>
                <NavDropdown title="Admin Pages" id="basic-nav-dropdown">
                  <NavDropdown.Item href={routes.newPost()}>
                    Add New Post
                  </NavDropdown.Item>
                  <NavDropdown.Item href={routes.posts()}>
                    Posts
                  </NavDropdown.Item>
                  <NavDropdown.Item href={routes.contact()}>
                    Add Land Listing
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href={routes.landListings()}>
                    View Land Listings
                  </NavDropdown.Item>
                </NavDropdown>
                {isAuthenticated ? (
                  <button className="btn btn-secondary" onClick={logOut}>
                    Logout
                  </button>
                ) : (
                  <Button href={routes.login()}>Login</Button>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
      <main>{children}</main>
    </>
  )
}

export default BlogLayout
