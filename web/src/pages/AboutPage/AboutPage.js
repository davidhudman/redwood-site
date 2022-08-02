import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      <div style={{ width: '100%', margin: '0 auto' }}>
        <Card style={{ margin: '0 auto' }}>
          {/* <Card.Img variant="top" src="https://imgur.com/t/deer/iMZqE3b" /> */}
          <Card.Body>
            {/* align a card title center */}
            <Card.Title style={{ textAlign: 'center' }}>CompanyName</Card.Title>
            <Card.Text style={{ textAlign: 'center' }}>
              An open source, modern web framework for building React
              applications.
            </Card.Text>
            <Button
              style={{ width: '100%', margin: '0 auto' }}
              variant="outline-primary"
              href={routes.contact()}
            >
              Contact Us
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default AboutPage
