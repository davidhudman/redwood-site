import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import { Link, routes } from '@redwoodjs/router'

const Article = ({ article }) => {
  return (
    <Card>
      <Card.Header>Featured Article - #{article.id}</Card.Header>
      <Card.Body>
        <Card.Title>{article.title}</Card.Title>
        <Card.Text>{article.body}</Card.Text>
        <Card.Text>{article.createdAt}</Card.Text>
        <Button
          href={routes.article({ id: article.id })}
          variant="outline-primary"
        >
          Read Article
        </Button>
      </Card.Body>
    </Card>
  )
}

export default Article
