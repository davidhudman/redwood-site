import LandListing from 'src/components/LandListing/LandListing'

export const QUERY = gql`
  query FindLandListingById($id: Int!) {
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

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>LandListing not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ landListing }) => {
  return <LandListing landListing={landListing} />
}
