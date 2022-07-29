import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_LAND_LISTING_MUTATION = gql`
  mutation DeleteLandListingMutation($id: Int!) {
    deleteLandListing(id: $id) {
      id
    }
  }
`

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

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
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

const LandListing = ({ landListing }) => {
  const [deleteLandListing] = useMutation(DELETE_LAND_LISTING_MUTATION, {
    onCompleted: () => {
      toast.success('LandListing deleted')
      navigate(routes.landListings())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete landListing ' + id + '?')) {
      deleteLandListing({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            LandListing {landListing.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{landListing.id}</td>
            </tr>
            <tr>
              <th>Acres</th>
              <td>{landListing.acres}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{landListing.title}</td>
            </tr>
            <tr>
              <th>Price</th>
              <td>{landListing.price}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{landListing.address}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{landListing.city}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{landListing.state}</td>
            </tr>
            <tr>
              <th>Zip</th>
              <td>{landListing.zip}</td>
            </tr>
            <tr>
              <th>Created at</th>
              <td>{timeTag(landListing.createdAt)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editLandListing({ id: landListing.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(landListing.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default LandListing
