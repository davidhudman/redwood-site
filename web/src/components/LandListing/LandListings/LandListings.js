import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/LandListing/LandListingsCell'

const DELETE_LAND_LISTING_MUTATION = gql`
  mutation DeleteLandListingMutation($id: Int!) {
    deleteLandListing(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const LandListingsList = ({ landListings }) => {
  const [deleteLandListing] = useMutation(DELETE_LAND_LISTING_MUTATION, {
    onCompleted: () => {
      toast.success('LandListing deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete landListing ' + id + '?')) {
      deleteLandListing({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Acres</th>
            <th>Title</th>
            <th>Price</th>
            <th>Address</th>
            <th>City</th>
            <th>State</th>
            <th>Zip</th>
            <th>Created at</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {landListings.map((landListing) => (
            <tr key={landListing.id}>
              <td>{truncate(landListing.id)}</td>
              <td>{truncate(landListing.acres)}</td>
              <td>{truncate(landListing.title)}</td>
              <td>{truncate(landListing.price)}</td>
              <td>{truncate(landListing.address)}</td>
              <td>{truncate(landListing.city)}</td>
              <td>{truncate(landListing.state)}</td>
              <td>{truncate(landListing.zip)}</td>
              <td>{timeTag(landListing.createdAt)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.landListing({ id: landListing.id })}
                    title={'Show landListing ' + landListing.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editLandListing({ id: landListing.id })}
                    title={'Edit landListing ' + landListing.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete landListing ' + landListing.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(landListing.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default LandListingsList
