export const schema = gql`
  type LandListing {
    id: Int!
    acres: Int!
    title: String!
    price: Int!
    address: String!
    city: String!
    state: String!
    zip: String!
    createdAt: DateTime!
  }

  type Query {
    landListings: [LandListing!]! @requireAuth
    landListing(id: Int!): LandListing @requireAuth
  }

  input CreateLandListingInput {
    acres: Int!
    title: String!
    price: Int!
    address: String!
    city: String!
    state: String!
    zip: String!
  }

  input UpdateLandListingInput {
    acres: Int
    title: String
    price: Int
    address: String
    city: String
    state: String
    zip: String
  }

  type Mutation {
    createLandListing(input: CreateLandListingInput!): LandListing! @requireAuth
    updateLandListing(id: Int!, input: UpdateLandListingInput!): LandListing!
      @requireAuth
    deleteLandListing(id: Int!): LandListing! @requireAuth
  }
`
