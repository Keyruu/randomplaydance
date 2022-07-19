import { gql } from '@apollo/client/core';

export const PartSearch = gql`
  query PartSearch($search: String) {
    rpd_parts {
      id
      youtube_id
      start_seconds
      end_seconds
      track(where: {_or: [{name: {_ilike: $search}}, {artist: {name: {_ilike: $search}}}]}) {
        name
        artist {
          name
        }
      }
    }
  }
`

export const DaisukiSearch = gql`
  query DaisukiSearch($search: String) {
    kpop_tracks(
      where: {
        _and: {
          _or: [
            {name: {_ilike: $search}},
            {original_name: {_ilike: $search}},
            {artist: {name: {_ilike: $search}}}
          ]
        }, 
        id_parent: {_eq: 0}}, 
      limit: 10, 
      order_by: {views: desc}
    ) {
      vlink
      name
      artist {
        name
      }
    }
  }
`