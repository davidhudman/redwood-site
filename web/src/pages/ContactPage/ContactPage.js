import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import {
  Form as FormWrapper,
  TextField,
  TextAreaField,
  Submit,
  FieldError,
  FormError,
  Label,
  useForm,
} from '@redwoodjs/forms'
import { MetaTags, useMutation } from '@redwoodjs/web'
import { Toaster, toast } from '@redwoodjs/web/toast'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()

  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      toast.success('Thank you for your message!')
      formMethods.reset()
    },
  })
  const onSubmit = (data) => {
    console.log('data', data)
    create({ variables: { input: data } })
  }

  return (
    <>
      <MetaTags title="Contact" description="Contact page" />

      {/* h1 page title with centered text */}
      <div
        style={{
          width: '100%',
          margin: '0 auto',
          maxWidth: '480px',
          padding: '1rem',
        }}
      >
        <h1 className="text-center">Contact</h1>
        <br />

        <Toaster />
        <FormWrapper
          onSubmit={onSubmit}
          config={{ mode: 'onBlur' }}
          error={error}
        >
          <Form id="bsForm" data-netlify="true">
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                type="message"
                as="textarea"
                rows={3}
                placeholder="Enter message"
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ width: '100%', margin: '0 auto' }}
            >
              Submit
            </Button>
          </Form>
        </FormWrapper>
      </div>
    </>
  )
}

export default ContactPage
