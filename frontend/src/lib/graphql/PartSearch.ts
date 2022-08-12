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
  query DaisukiSearch($search_exp: kpop_tracks_bool_exp!) {
    kpop_tracks(
      where: {
        _and: [$search_exp, 
        {id_parent: {_eq: 0}}]}, 
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