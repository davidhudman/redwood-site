import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LandListingForm from 'src/components/LandListing/LandListingForm'

const CREATE_LAND_LISTING_MUTATION = gql`
  mutation CreateLandListingMutation($input: CreateLandListingInput!) {
    createLandListing(input: $input) {
      id
    }
  }
`

const NewLandListing = () => {
  const [createLandListing, { loading, error }] = useMutation(
    CREATE_LAND_LISTING_MUTATION,
    {
      onCompleted: () => {
        toast.success('LandListing created')
        navigate(routes.landListings())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createLandListing({ variables: { input } })
  }

  return (
    <div
      className="rw-segment"
      style={{
        width: '100%',
        margin: '0 auto',
        maxWidth: '480px',
        padding: '2rem',
      }}
    >
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New LandListing</h2>
      </header>
      <div className="rw-segment-main">
        <LandListingForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewLandListing
