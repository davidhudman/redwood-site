import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import LandListingForm from 'src/components/LandListing/LandListingForm'

export const QUERY = gql`
  query EditLandListingById($id: Int!) {
    landListing: landListing(id: $id) {
      id
      acres
      title
      price
      address
      city
      state
      zip
      createdAt
    }
  }
`
const UPDATE_LAND_LISTING_MUTATION = gql`
  mutation UpdateLandListingMutation(
    $id: Int!
    $input: UpdateLandListingInput!
  ) {
    updateLandListing(id: $id, input: $input) {
      id
      acres
      title
      price
      address
      city
      state
      zip
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ landListing }) => {
  const [updateLandListing, { loading, error }] = useMutation(
    UPDATE_LAND_LISTING_MUTATION,
    {
      onCompleted: () => {
        toast.success('LandListing updated')
        navigate(routes.landListings())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateLandListing({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit LandListing {landListing.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <LandListingForm
          landListing={landListing}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
