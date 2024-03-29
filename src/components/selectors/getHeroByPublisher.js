import { heroes } from "../../data/heroes"

export const getHeroByPublisher = (publisher) => {

    const validPublishers = ['DC Comics', 'Marvel Comics'];

    if( !validPublishers.includes(publisher) ){
        throw new Error (`${ publisher } is not a valid publisher`)
    }

  return ( heroes.filter( (data) => data.publisher === publisher ) )
}
