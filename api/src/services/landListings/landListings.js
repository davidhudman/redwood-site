import { db } from 'src/lib/db'

export const landListings = () => {
  return db.landListing.findMany()
}

export const landListing = ({ id }) => {
  return db.landListing.findUnique({
    where: { id },
  })
}

export const createLandListing = ({ input }) => {
  return db.landListing.create({
    data: input,
  })
}

export const updateLandListing = ({ id, input }) => {
  return db.landListing.update({
    data: input,
    where: { id },
  })
}

export const deleteLandListing = ({ id }) => {
  return db.landListing.delete({
    where: { id },
  })
}
