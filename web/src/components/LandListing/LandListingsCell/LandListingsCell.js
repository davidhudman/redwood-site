import { Link, routes } from '@redwoodjs/router'

import LandListings from 'src/components/LandListing/LandListings'

export const QUERY = gql`
  query FindLandListings {
    landListings {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No landListings yet. '}
      <Link to={routes.newLandListing()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ landListings }) => {
  return <LandListings landListings={landListings} />
}
