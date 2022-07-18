import { gql } from '@apollo/client/core';

export const Playlists = gql`
  query Playlists {
    rpd_playlists {
      id
      created_at
      name
      public
      updated_at
      created_by {
        id
        username
      }
    }
  }
`