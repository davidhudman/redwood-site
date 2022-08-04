import {
  Form,
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

// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css'

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

        <Toaster />
        <Form
          onSubmit={onSubmit}
          config={{ mode: 'onBlur' }}
          error={error}
          name="contact"
          data-netlify="true"
        >
          <FormError error={error} wrapperClassName="form-error" />
          <Label name="name">Name</Label>
          <TextField
            name="name"
            label="Name"
            validation={{ required: true }}
            errorClassName="error"
            className="form-control"
          />
          <FieldError name="name" className="error" />

          <Label name="email">Email</Label>
          <TextField
            name="email"
            label="Email"
            validation={{
              required: true,
            }}
            errorClassName="error"
            className="form-control"
          />
          <FieldError name="email" className="error" />

          <Label name="message">Message</Label>
          <TextAreaField
            name="message"
            label="Message"
            multiline
            rows={4}
            validation={{ required: true }}
            errorClassName="error"
            className="form-control"
          />
          <FieldError name="message" className="error" />

          <br />

          <div className="text-center" style={{ width: '100%' }}>
            <Submit
              disabled={loading}
              type="button"
              className="btn btn-primary btn-lg btn-block"
              style={{ width: '100%' }}
            >
              Send Message
            </Submit>
          </div>
        </Form>
      </div>
    </>
  )
}

export default ContactPage
