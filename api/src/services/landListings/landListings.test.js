import {
  landListings,
  landListing,
  createLandListing,
  updateLandListing,
  deleteLandListing,
} from './landListings'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('landListings', () => {
  scenario('returns all landListings', async (scenario) => {
    const result = await landListings()

    expect(result.length).toEqual(Object.keys(scenario.landListing).length)
  })

  scenario('returns a single landListing', async (scenario) => {
    const result = await landListing({ id: scenario.landListing.one.id })

    expect(result).toEqual(scenario.landListing.one)
  })

  scenario('creates a landListing', async () => {
    const result = await createLandListing({
      input: {
        acres: 5721285,
        title: 'String',
        price: 4003165,
        address: 'String',
        city: 'String',
        state: 'String',
        zip: 'String',
      },
    })

    expect(result.acres).toEqual(5721285)
    expect(result.title).toEqual('String')
    expect(result.price).toEqual(4003165)
    expect(result.address).toEqual('String')
    expect(result.city).toEqual('String')
    expect(result.state).toEqual('String')
    expect(result.zip).toEqual('String')
  })

  scenario('updates a landListing', async (scenario) => {
    const original = await landListing({ id: scenario.landListing.one.id })
    const result = await updateLandListing({
      id: original.id,
      input: { acres: 324008 },
    })

    expect(result.acres).toEqual(324008)
  })

  scenario('deletes a landListing', async (scenario) => {
    const original = await deleteLandListing({
      id: scenario.landListing.one.id,
    })

    const result = await landListing({ id: original.id })

    expect(result).toEqual(null)
  })
})
