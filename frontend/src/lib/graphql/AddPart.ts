import { gql } from "@apollo/client/core";

export const AddPartToPlaylist = gql`
  mutation AddPartToPlaylist($part_id: Int, $playlist_id: Int, $position: Int) {
    insert_rpd_playlist_part(object: {part_id: $part_id, playlist_id: $playlist_id, position: $position}) {
      id
    }
  }
`