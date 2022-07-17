export interface UserInfo {
  sub?:                            string;
  email_verified?:                 boolean;
  "https://hasura.io/jwt/claims"?: HTTPSHasuraIoJwtClaims;
  name?:                           string;
  preferred_username?:             string;
  given_name?:                     string;
  family_name?:                    string;
  email?:                          string;
}

export interface HTTPSHasuraIoJwtClaims {
  "x-hasura-default-role":  string;
  "x-hasura-user-id":       string;
  "x-hasura-allowed-roles": string[];
}
