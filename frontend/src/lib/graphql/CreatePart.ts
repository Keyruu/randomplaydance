import { gql } from "@apollo/client/core";

export const CreatePart = gql`
  mutation CreatePart($end_seconds: Int, $start_seconds: Int, $youtube_id: String) {
    insert_rpd_part(object: {end_seconds: $end_seconds, start_seconds: $start_seconds, youtube_id: $youtube_id}) {
      id
    }
  }
`