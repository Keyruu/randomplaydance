import { gql } from '@apollo/client/core';

export const PlaylistWithParts = gql`
  query PlaylistWithParts($id: Int!) {
    rpd_playlist(id: $id) {
      id
      created_at
      name
      public
      updated_at
      playlist_parts {
        part {
          id
          start_seconds
          end_seconds
          youtube_id
          created_at
          updated_at
          track {
            name
            artist {
              name
            }
          }
        }
      }
      created_by {
        id
        username
      }
    }
  }
`