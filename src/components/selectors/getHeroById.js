import { heroes } from "../../data/heroes"

export const getHeroById = (id) => {
  console.log('Get hero by id called')
  return ( heroes.find( (data) => data.id === id ) )
}
