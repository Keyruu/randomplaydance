export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  app_kpop_group_is_collab: any;
  app_kpop_group_issolo: any;
  app_kpop_group_members: any;
  app_kpop_group_miak_level: any;
  app_kpop_vtype: any;
  bigint: any;
  date: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp_Remote_Rel_Rpd_Partstrack = {
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "app_kpop_group_is_collab". All fields are combined with logical 'AND'. */
export type App_Kpop_Group_Is_Collab_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['app_kpop_group_is_collab']>;
  _gt?: InputMaybe<Scalars['app_kpop_group_is_collab']>;
  _gte?: InputMaybe<Scalars['app_kpop_group_is_collab']>;
  _in?: InputMaybe<Array<Scalars['app_kpop_group_is_collab']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['app_kpop_group_is_collab']>;
  _lte?: InputMaybe<Scalars['app_kpop_group_is_collab']>;
  _neq?: InputMaybe<Scalars['app_kpop_group_is_collab']>;
  _nin?: InputMaybe<Array<Scalars['app_kpop_group_is_collab']>>;
};

/** Boolean expression to compare columns of type "app_kpop_group_issolo". All fields are combined with logical 'AND'. */
export type App_Kpop_Group_Issolo_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['app_kpop_group_issolo']>;
  _gt?: InputMaybe<Scalars['app_kpop_group_issolo']>;
  _gte?: InputMaybe<Scalars['app_kpop_group_issolo']>;
  _in?: InputMaybe<Array<Scalars['app_kpop_group_issolo']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['app_kpop_group_issolo']>;
  _lte?: InputMaybe<Scalars['app_kpop_group_issolo']>;
  _neq?: InputMaybe<Scalars['app_kpop_group_issolo']>;
  _nin?: InputMaybe<Array<Scalars['app_kpop_group_issolo']>>;
};

/** Boolean expression to compare columns of type "app_kpop_group_members". All fields are combined with logical 'AND'. */
export type App_Kpop_Group_Members_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['app_kpop_group_members']>;
  _gt?: InputMaybe<Scalars['app_kpop_group_members']>;
  _gte?: InputMaybe<Scalars['app_kpop_group_members']>;
  _in?: InputMaybe<Array<Scalars['app_kpop_group_members']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['app_kpop_group_members']>;
  _lte?: InputMaybe<Scalars['app_kpop_group_members']>;
  _neq?: InputMaybe<Scalars['app_kpop_group_members']>;
  _nin?: InputMaybe<Array<Scalars['app_kpop_group_members']>>;
};

/** Boolean expression to compare columns of type "app_kpop_group_miak_level". All fields are combined with logical 'AND'. */
export type App_Kpop_Group_Miak_Level_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['app_kpop_group_miak_level']>;
  _gt?: InputMaybe<Scalars['app_kpop_group_miak_level']>;
  _gte?: InputMaybe<Scalars['app_kpop_group_miak_level']>;
  _in?: InputMaybe<Array<Scalars['app_kpop_group_miak_level']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['app_kpop_group_miak_level']>;
  _lte?: InputMaybe<Scalars['app_kpop_group_miak_level']>;
  _neq?: InputMaybe<Scalars['app_kpop_group_miak_level']>;
  _nin?: InputMaybe<Array<Scalars['app_kpop_group_miak_level']>>;
};

/** Boolean expression to compare columns of type "app_kpop_vtype". All fields are combined with logical 'AND'. */
export type App_Kpop_Vtype_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['app_kpop_vtype']>;
  _gt?: InputMaybe<Scalars['app_kpop_vtype']>;
  _gte?: InputMaybe<Scalars['app_kpop_vtype']>;
  _in?: InputMaybe<Array<Scalars['app_kpop_vtype']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['app_kpop_vtype']>;
  _lte?: InputMaybe<Scalars['app_kpop_vtype']>;
  _neq?: InputMaybe<Scalars['app_kpop_vtype']>;
  _nin?: InputMaybe<Array<Scalars['app_kpop_vtype']>>;
};

/** columns and relationships of "keycloak.keycloak_role" */
export type Auth_Roles = {
  __typename?: 'auth_roles';
  client?: Maybe<Scalars['String']>;
  client_realm_constraint?: Maybe<Scalars['String']>;
  client_role: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  realm?: Maybe<Scalars['String']>;
  realm_id?: Maybe<Scalars['String']>;
  /** An array relationship */
  user_role_mapping: Array<Auth_User_Role_Mappings>;
  /** An aggregate relationship */
  user_role_mapping_aggregate: Auth_User_Role_Mappings_Aggregate;
};


/** columns and relationships of "keycloak.keycloak_role" */
export type Auth_RolesUser_Role_MappingArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Role_Mappings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_User_Role_Mappings_Order_By>>;
  where?: InputMaybe<Auth_User_Role_Mappings_Bool_Exp>;
};


/** columns and relationships of "keycloak.keycloak_role" */
export type Auth_RolesUser_Role_Mapping_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Role_Mappings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_User_Role_Mappings_Order_By>>;
  where?: InputMaybe<Auth_User_Role_Mappings_Bool_Exp>;
};

/** aggregated selection of "keycloak.keycloak_role" */
export type Auth_Roles_Aggregate = {
  __typename?: 'auth_roles_aggregate';
  aggregate?: Maybe<Auth_Roles_Aggregate_Fields>;
  nodes: Array<Auth_Roles>;
};

/** aggregate fields of "keycloak.keycloak_role" */
export type Auth_Roles_Aggregate_Fields = {
  __typename?: 'auth_roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_Roles_Max_Fields>;
  min?: Maybe<Auth_Roles_Min_Fields>;
};


/** aggregate fields of "keycloak.keycloak_role" */
export type Auth_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "keycloak.keycloak_role". All fields are combined with a logical 'AND'. */
export type Auth_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Roles_Bool_Exp>>;
  _not?: InputMaybe<Auth_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Roles_Bool_Exp>>;
  client?: InputMaybe<String_Comparison_Exp>;
  client_realm_constraint?: InputMaybe<String_Comparison_Exp>;
  client_role?: InputMaybe<Boolean_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  realm?: InputMaybe<String_Comparison_Exp>;
  realm_id?: InputMaybe<String_Comparison_Exp>;
  user_role_mapping?: InputMaybe<Auth_User_Role_Mappings_Bool_Exp>;
};

/** unique or primary key constraints on table "keycloak.keycloak_role" */
export enum Auth_Roles_Constraint {
  /** unique or primary key constraint on columns "name", "client_realm_constraint" */
  UkJ3Rwuvd56Ontgsuhogm184Ww2_2 = 'UK_J3RWUVD56ONTGSUHOGM184WW2_2',
  /** unique or primary key constraint on columns "id" */
  ConstraintA = 'constraint_a'
}

/** input type for inserting data into table "keycloak.keycloak_role" */
export type Auth_Roles_Insert_Input = {
  client?: InputMaybe<Scalars['String']>;
  client_realm_constraint?: InputMaybe<Scalars['String']>;
  client_role?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  realm?: InputMaybe<Scalars['String']>;
  realm_id?: InputMaybe<Scalars['String']>;
  user_role_mapping?: InputMaybe<Auth_User_Role_Mappings_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Auth_Roles_Max_Fields = {
  __typename?: 'auth_roles_max_fields';
  client?: Maybe<Scalars['String']>;
  client_realm_constraint?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  realm?: Maybe<Scalars['String']>;
  realm_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auth_Roles_Min_Fields = {
  __typename?: 'auth_roles_min_fields';
  client?: Maybe<Scalars['String']>;
  client_realm_constraint?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  realm?: Maybe<Scalars['String']>;
  realm_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "keycloak.keycloak_role" */
export type Auth_Roles_Mutation_Response = {
  __typename?: 'auth_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Roles>;
};

/** input type for inserting object relation for remote table "keycloak.keycloak_role" */
export type Auth_Roles_Obj_Rel_Insert_Input = {
  data: Auth_Roles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Roles_On_Conflict>;
};

/** on_conflict condition type for table "keycloak.keycloak_role" */
export type Auth_Roles_On_Conflict = {
  constraint: Auth_Roles_Constraint;
  update_columns?: Array<Auth_Roles_Update_Column>;
  where?: InputMaybe<Auth_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "keycloak.keycloak_role". */
export type Auth_Roles_Order_By = {
  client?: InputMaybe<Order_By>;
  client_realm_constraint?: InputMaybe<Order_By>;
  client_role?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  realm?: InputMaybe<Order_By>;
  realm_id?: InputMaybe<Order_By>;
  user_role_mapping_aggregate?: InputMaybe<Auth_User_Role_Mappings_Aggregate_Order_By>;
};

/** primary key columns input for table: auth_roles */
export type Auth_Roles_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "keycloak.keycloak_role" */
export enum Auth_Roles_Select_Column {
  /** column name */
  Client = 'client',
  /** column name */
  ClientRealmConstraint = 'client_realm_constraint',
  /** column name */
  ClientRole = 'client_role',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Realm = 'realm',
  /** column name */
  RealmId = 'realm_id'
}

/** input type for updating data in table "keycloak.keycloak_role" */
export type Auth_Roles_Set_Input = {
  client?: InputMaybe<Scalars['String']>;
  client_realm_constraint?: InputMaybe<Scalars['String']>;
  client_role?: InputMaybe<Scalars['Boolean']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  realm?: InputMaybe<Scalars['String']>;
  realm_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "keycloak.keycloak_role" */
export enum Auth_Roles_Update_Column {
  /** column name */
  Client = 'client',
  /** column name */
  ClientRealmConstraint = 'client_realm_constraint',
  /** column name */
  ClientRole = 'client_role',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Realm = 'realm',
  /** column name */
  RealmId = 'realm_id'
}

/** columns and relationships of "keycloak.user_private" */
export type Auth_User_Private = {
  __typename?: 'auth_user_private';
  created_timestamp?: Maybe<Scalars['bigint']>;
  email?: Maybe<Scalars['String']>;
  email_verified?: Maybe<Scalars['Boolean']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "keycloak.user_private" */
export type Auth_User_Private_Aggregate = {
  __typename?: 'auth_user_private_aggregate';
  aggregate?: Maybe<Auth_User_Private_Aggregate_Fields>;
  nodes: Array<Auth_User_Private>;
};

/** aggregate fields of "keycloak.user_private" */
export type Auth_User_Private_Aggregate_Fields = {
  __typename?: 'auth_user_private_aggregate_fields';
  avg?: Maybe<Auth_User_Private_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Auth_User_Private_Max_Fields>;
  min?: Maybe<Auth_User_Private_Min_Fields>;
  stddev?: Maybe<Auth_User_Private_Stddev_Fields>;
  stddev_pop?: Maybe<Auth_User_Private_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auth_User_Private_Stddev_Samp_Fields>;
  sum?: Maybe<Auth_User_Private_Sum_Fields>;
  var_pop?: Maybe<Auth_User_Private_Var_Pop_Fields>;
  var_samp?: Maybe<Auth_User_Private_Var_Samp_Fields>;
  variance?: Maybe<Auth_User_Private_Variance_Fields>;
};


/** aggregate fields of "keycloak.user_private" */
export type Auth_User_Private_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_User_Private_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Auth_User_Private_Avg_Fields = {
  __typename?: 'auth_user_private_avg_fields';
  created_timestamp?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "keycloak.user_private". All fields are combined with a logical 'AND'. */
export type Auth_User_Private_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_User_Private_Bool_Exp>>;
  _not?: InputMaybe<Auth_User_Private_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_User_Private_Bool_Exp>>;
  created_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_verified?: InputMaybe<Boolean_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "keycloak.user_private" */
export type Auth_User_Private_Inc_Input = {
  created_timestamp?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "keycloak.user_private" */
export type Auth_User_Private_Insert_Input = {
  created_timestamp?: InputMaybe<Scalars['bigint']>;
  email?: InputMaybe<Scalars['String']>;
  email_verified?: InputMaybe<Scalars['Boolean']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_User_Private_Max_Fields = {
  __typename?: 'auth_user_private_max_fields';
  created_timestamp?: Maybe<Scalars['bigint']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auth_User_Private_Min_Fields = {
  __typename?: 'auth_user_private_min_fields';
  created_timestamp?: Maybe<Scalars['bigint']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "keycloak.user_private" */
export type Auth_User_Private_Mutation_Response = {
  __typename?: 'auth_user_private_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_User_Private>;
};

/** input type for inserting object relation for remote table "keycloak.user_private" */
export type Auth_User_Private_Obj_Rel_Insert_Input = {
  data: Auth_User_Private_Insert_Input;
};

/** Ordering options when selecting data from "keycloak.user_private". */
export type Auth_User_Private_Order_By = {
  created_timestamp?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_verified?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** select columns of table "keycloak.user_private" */
export enum Auth_User_Private_Select_Column {
  /** column name */
  CreatedTimestamp = 'created_timestamp',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "keycloak.user_private" */
export type Auth_User_Private_Set_Input = {
  created_timestamp?: InputMaybe<Scalars['bigint']>;
  email?: InputMaybe<Scalars['String']>;
  email_verified?: InputMaybe<Scalars['Boolean']>;
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Auth_User_Private_Stddev_Fields = {
  __typename?: 'auth_user_private_stddev_fields';
  created_timestamp?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Auth_User_Private_Stddev_Pop_Fields = {
  __typename?: 'auth_user_private_stddev_pop_fields';
  created_timestamp?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Auth_User_Private_Stddev_Samp_Fields = {
  __typename?: 'auth_user_private_stddev_samp_fields';
  created_timestamp?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Auth_User_Private_Sum_Fields = {
  __typename?: 'auth_user_private_sum_fields';
  created_timestamp?: Maybe<Scalars['bigint']>;
};

/** aggregate var_pop on columns */
export type Auth_User_Private_Var_Pop_Fields = {
  __typename?: 'auth_user_private_var_pop_fields';
  created_timestamp?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Auth_User_Private_Var_Samp_Fields = {
  __typename?: 'auth_user_private_var_samp_fields';
  created_timestamp?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Auth_User_Private_Variance_Fields = {
  __typename?: 'auth_user_private_variance_fields';
  created_timestamp?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "keycloak.user_role_mapping" */
export type Auth_User_Role_Mappings = {
  __typename?: 'auth_user_role_mappings';
  /** An object relationship */
  role?: Maybe<Auth_Roles>;
  role_id: Scalars['String'];
  /** An object relationship */
  user: Auth_Users;
  user_id: Scalars['String'];
};

/** aggregated selection of "keycloak.user_role_mapping" */
export type Auth_User_Role_Mappings_Aggregate = {
  __typename?: 'auth_user_role_mappings_aggregate';
  aggregate?: Maybe<Auth_User_Role_Mappings_Aggregate_Fields>;
  nodes: Array<Auth_User_Role_Mappings>;
};

/** aggregate fields of "keycloak.user_role_mapping" */
export type Auth_User_Role_Mappings_Aggregate_Fields = {
  __typename?: 'auth_user_role_mappings_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Auth_User_Role_Mappings_Max_Fields>;
  min?: Maybe<Auth_User_Role_Mappings_Min_Fields>;
};


/** aggregate fields of "keycloak.user_role_mapping" */
export type Auth_User_Role_Mappings_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_User_Role_Mappings_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "keycloak.user_role_mapping" */
export type Auth_User_Role_Mappings_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Auth_User_Role_Mappings_Max_Order_By>;
  min?: InputMaybe<Auth_User_Role_Mappings_Min_Order_By>;
};

/** input type for inserting array relation for remote table "keycloak.user_role_mapping" */
export type Auth_User_Role_Mappings_Arr_Rel_Insert_Input = {
  data: Array<Auth_User_Role_Mappings_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_User_Role_Mappings_On_Conflict>;
};

/** Boolean expression to filter rows from the table "keycloak.user_role_mapping". All fields are combined with a logical 'AND'. */
export type Auth_User_Role_Mappings_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_User_Role_Mappings_Bool_Exp>>;
  _not?: InputMaybe<Auth_User_Role_Mappings_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_User_Role_Mappings_Bool_Exp>>;
  role?: InputMaybe<Auth_Roles_Bool_Exp>;
  role_id?: InputMaybe<String_Comparison_Exp>;
  user?: InputMaybe<Auth_Users_Bool_Exp>;
  user_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "keycloak.user_role_mapping" */
export enum Auth_User_Role_Mappings_Constraint {
  /** unique or primary key constraint on columns "role_id", "user_id" */
  ConstraintC = 'constraint_c'
}

/** input type for inserting data into table "keycloak.user_role_mapping" */
export type Auth_User_Role_Mappings_Insert_Input = {
  role?: InputMaybe<Auth_Roles_Obj_Rel_Insert_Input>;
  role_id?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<Auth_Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_User_Role_Mappings_Max_Fields = {
  __typename?: 'auth_user_role_mappings_max_fields';
  role_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "keycloak.user_role_mapping" */
export type Auth_User_Role_Mappings_Max_Order_By = {
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Auth_User_Role_Mappings_Min_Fields = {
  __typename?: 'auth_user_role_mappings_min_fields';
  role_id?: Maybe<Scalars['String']>;
  user_id?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "keycloak.user_role_mapping" */
export type Auth_User_Role_Mappings_Min_Order_By = {
  role_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "keycloak.user_role_mapping" */
export type Auth_User_Role_Mappings_Mutation_Response = {
  __typename?: 'auth_user_role_mappings_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_User_Role_Mappings>;
};

/** on_conflict condition type for table "keycloak.user_role_mapping" */
export type Auth_User_Role_Mappings_On_Conflict = {
  constraint: Auth_User_Role_Mappings_Constraint;
  update_columns?: Array<Auth_User_Role_Mappings_Update_Column>;
  where?: InputMaybe<Auth_User_Role_Mappings_Bool_Exp>;
};

/** Ordering options when selecting data from "keycloak.user_role_mapping". */
export type Auth_User_Role_Mappings_Order_By = {
  role?: InputMaybe<Auth_Roles_Order_By>;
  role_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Auth_Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth_user_role_mappings */
export type Auth_User_Role_Mappings_Pk_Columns_Input = {
  role_id: Scalars['String'];
  user_id: Scalars['String'];
};

/** select columns of table "keycloak.user_role_mapping" */
export enum Auth_User_Role_Mappings_Select_Column {
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "keycloak.user_role_mapping" */
export type Auth_User_Role_Mappings_Set_Input = {
  role_id?: InputMaybe<Scalars['String']>;
  user_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "keycloak.user_role_mapping" */
export enum Auth_User_Role_Mappings_Update_Column {
  /** column name */
  RoleId = 'role_id',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "keycloak.user_entity" */
export type Auth_Users = {
  __typename?: 'auth_users';
  created_timestamp?: Maybe<Scalars['bigint']>;
  email?: Maybe<Scalars['String']>;
  email_constraint?: Maybe<Scalars['String']>;
  email_verified: Scalars['Boolean'];
  enabled: Scalars['Boolean'];
  federation_link?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  last_name?: Maybe<Scalars['String']>;
  not_before: Scalars['Int'];
  /** An object relationship */
  private?: Maybe<Auth_User_Private>;
  realm_id?: Maybe<Scalars['String']>;
  service_account_client_link?: Maybe<Scalars['String']>;
  /** An array relationship */
  user_role_mappings: Array<Auth_User_Role_Mappings>;
  /** An aggregate relationship */
  user_role_mappings_aggregate: Auth_User_Role_Mappings_Aggregate;
  username?: Maybe<Scalars['String']>;
};


/** columns and relationships of "keycloak.user_entity" */
export type Auth_UsersUser_Role_MappingsArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Role_Mappings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_User_Role_Mappings_Order_By>>;
  where?: InputMaybe<Auth_User_Role_Mappings_Bool_Exp>;
};


/** columns and relationships of "keycloak.user_entity" */
export type Auth_UsersUser_Role_Mappings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Role_Mappings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_User_Role_Mappings_Order_By>>;
  where?: InputMaybe<Auth_User_Role_Mappings_Bool_Exp>;
};

/** aggregated selection of "keycloak.user_entity" */
export type Auth_Users_Aggregate = {
  __typename?: 'auth_users_aggregate';
  aggregate?: Maybe<Auth_Users_Aggregate_Fields>;
  nodes: Array<Auth_Users>;
};

/** aggregate fields of "keycloak.user_entity" */
export type Auth_Users_Aggregate_Fields = {
  __typename?: 'auth_users_aggregate_fields';
  avg?: Maybe<Auth_Users_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Auth_Users_Max_Fields>;
  min?: Maybe<Auth_Users_Min_Fields>;
  stddev?: Maybe<Auth_Users_Stddev_Fields>;
  stddev_pop?: Maybe<Auth_Users_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Auth_Users_Stddev_Samp_Fields>;
  sum?: Maybe<Auth_Users_Sum_Fields>;
  var_pop?: Maybe<Auth_Users_Var_Pop_Fields>;
  var_samp?: Maybe<Auth_Users_Var_Samp_Fields>;
  variance?: Maybe<Auth_Users_Variance_Fields>;
};


/** aggregate fields of "keycloak.user_entity" */
export type Auth_Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Auth_Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Auth_Users_Avg_Fields = {
  __typename?: 'auth_users_avg_fields';
  created_timestamp?: Maybe<Scalars['Float']>;
  not_before?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "keycloak.user_entity". All fields are combined with a logical 'AND'. */
export type Auth_Users_Bool_Exp = {
  _and?: InputMaybe<Array<Auth_Users_Bool_Exp>>;
  _not?: InputMaybe<Auth_Users_Bool_Exp>;
  _or?: InputMaybe<Array<Auth_Users_Bool_Exp>>;
  created_timestamp?: InputMaybe<Bigint_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  email_constraint?: InputMaybe<String_Comparison_Exp>;
  email_verified?: InputMaybe<Boolean_Comparison_Exp>;
  enabled?: InputMaybe<Boolean_Comparison_Exp>;
  federation_link?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  not_before?: InputMaybe<Int_Comparison_Exp>;
  private?: InputMaybe<Auth_User_Private_Bool_Exp>;
  realm_id?: InputMaybe<String_Comparison_Exp>;
  service_account_client_link?: InputMaybe<String_Comparison_Exp>;
  user_role_mappings?: InputMaybe<Auth_User_Role_Mappings_Bool_Exp>;
  username?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "keycloak.user_entity" */
export enum Auth_Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  ConstraintFb = 'constraint_fb',
  /** unique or primary key constraint on columns "realm_id", "email_constraint" */
  UkDykn684sl8up1crfei6eckhd7 = 'uk_dykn684sl8up1crfei6eckhd7',
  /** unique or primary key constraint on columns "realm_id", "username" */
  UkRu8tt6t700s9v50bu18ws5ha6 = 'uk_ru8tt6t700s9v50bu18ws5ha6'
}

/** input type for incrementing numeric columns in table "keycloak.user_entity" */
export type Auth_Users_Inc_Input = {
  created_timestamp?: InputMaybe<Scalars['bigint']>;
  not_before?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "keycloak.user_entity" */
export type Auth_Users_Insert_Input = {
  created_timestamp?: InputMaybe<Scalars['bigint']>;
  email?: InputMaybe<Scalars['String']>;
  email_constraint?: InputMaybe<Scalars['String']>;
  email_verified?: InputMaybe<Scalars['Boolean']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  federation_link?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  not_before?: InputMaybe<Scalars['Int']>;
  private?: InputMaybe<Auth_User_Private_Obj_Rel_Insert_Input>;
  realm_id?: InputMaybe<Scalars['String']>;
  service_account_client_link?: InputMaybe<Scalars['String']>;
  user_role_mappings?: InputMaybe<Auth_User_Role_Mappings_Arr_Rel_Insert_Input>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Auth_Users_Max_Fields = {
  __typename?: 'auth_users_max_fields';
  created_timestamp?: Maybe<Scalars['bigint']>;
  email?: Maybe<Scalars['String']>;
  email_constraint?: Maybe<Scalars['String']>;
  federation_link?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  not_before?: Maybe<Scalars['Int']>;
  realm_id?: Maybe<Scalars['String']>;
  service_account_client_link?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Auth_Users_Min_Fields = {
  __typename?: 'auth_users_min_fields';
  created_timestamp?: Maybe<Scalars['bigint']>;
  email?: Maybe<Scalars['String']>;
  email_constraint?: Maybe<Scalars['String']>;
  federation_link?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  last_name?: Maybe<Scalars['String']>;
  not_before?: Maybe<Scalars['Int']>;
  realm_id?: Maybe<Scalars['String']>;
  service_account_client_link?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "keycloak.user_entity" */
export type Auth_Users_Mutation_Response = {
  __typename?: 'auth_users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Auth_Users>;
};

/** input type for inserting object relation for remote table "keycloak.user_entity" */
export type Auth_Users_Obj_Rel_Insert_Input = {
  data: Auth_Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Auth_Users_On_Conflict>;
};

/** on_conflict condition type for table "keycloak.user_entity" */
export type Auth_Users_On_Conflict = {
  constraint: Auth_Users_Constraint;
  update_columns?: Array<Auth_Users_Update_Column>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};

/** Ordering options when selecting data from "keycloak.user_entity". */
export type Auth_Users_Order_By = {
  created_timestamp?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  email_constraint?: InputMaybe<Order_By>;
  email_verified?: InputMaybe<Order_By>;
  enabled?: InputMaybe<Order_By>;
  federation_link?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  not_before?: InputMaybe<Order_By>;
  private?: InputMaybe<Auth_User_Private_Order_By>;
  realm_id?: InputMaybe<Order_By>;
  service_account_client_link?: InputMaybe<Order_By>;
  user_role_mappings_aggregate?: InputMaybe<Auth_User_Role_Mappings_Aggregate_Order_By>;
  username?: InputMaybe<Order_By>;
};

/** primary key columns input for table: auth_users */
export type Auth_Users_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "keycloak.user_entity" */
export enum Auth_Users_Select_Column {
  /** column name */
  CreatedTimestamp = 'created_timestamp',
  /** column name */
  Email = 'email',
  /** column name */
  EmailConstraint = 'email_constraint',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  Enabled = 'enabled',
  /** column name */
  FederationLink = 'federation_link',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  NotBefore = 'not_before',
  /** column name */
  RealmId = 'realm_id',
  /** column name */
  ServiceAccountClientLink = 'service_account_client_link',
  /** column name */
  Username = 'username'
}

/** input type for updating data in table "keycloak.user_entity" */
export type Auth_Users_Set_Input = {
  created_timestamp?: InputMaybe<Scalars['bigint']>;
  email?: InputMaybe<Scalars['String']>;
  email_constraint?: InputMaybe<Scalars['String']>;
  email_verified?: InputMaybe<Scalars['Boolean']>;
  enabled?: InputMaybe<Scalars['Boolean']>;
  federation_link?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  not_before?: InputMaybe<Scalars['Int']>;
  realm_id?: InputMaybe<Scalars['String']>;
  service_account_client_link?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Auth_Users_Stddev_Fields = {
  __typename?: 'auth_users_stddev_fields';
  created_timestamp?: Maybe<Scalars['Float']>;
  not_before?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Auth_Users_Stddev_Pop_Fields = {
  __typename?: 'auth_users_stddev_pop_fields';
  created_timestamp?: Maybe<Scalars['Float']>;
  not_before?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Auth_Users_Stddev_Samp_Fields = {
  __typename?: 'auth_users_stddev_samp_fields';
  created_timestamp?: Maybe<Scalars['Float']>;
  not_before?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Auth_Users_Sum_Fields = {
  __typename?: 'auth_users_sum_fields';
  created_timestamp?: Maybe<Scalars['bigint']>;
  not_before?: Maybe<Scalars['Int']>;
};

/** update columns of table "keycloak.user_entity" */
export enum Auth_Users_Update_Column {
  /** column name */
  CreatedTimestamp = 'created_timestamp',
  /** column name */
  Email = 'email',
  /** column name */
  EmailConstraint = 'email_constraint',
  /** column name */
  EmailVerified = 'email_verified',
  /** column name */
  Enabled = 'enabled',
  /** column name */
  FederationLink = 'federation_link',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  NotBefore = 'not_before',
  /** column name */
  RealmId = 'realm_id',
  /** column name */
  ServiceAccountClientLink = 'service_account_client_link',
  /** column name */
  Username = 'username'
}

/** aggregate var_pop on columns */
export type Auth_Users_Var_Pop_Fields = {
  __typename?: 'auth_users_var_pop_fields';
  created_timestamp?: Maybe<Scalars['Float']>;
  not_before?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Auth_Users_Var_Samp_Fields = {
  __typename?: 'auth_users_var_samp_fields';
  created_timestamp?: Maybe<Scalars['Float']>;
  not_before?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Auth_Users_Variance_Fields = {
  __typename?: 'auth_users_variance_fields';
  created_timestamp?: Maybe<Scalars['Float']>;
  not_before?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "storage.buckets" */
export type Buckets = {
  __typename?: 'buckets';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  downloadExpiration: Scalars['Int'];
  /** An array relationship */
  files: Array<Files>;
  /** An aggregate relationship */
  files_aggregate: Files_Aggregate;
  id: Scalars['String'];
  maxUploadFileSize: Scalars['Int'];
  minUploadFileSize: Scalars['Int'];
  presignedUrlsEnabled: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


/** columns and relationships of "storage.buckets" */
export type BucketsFiles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** aggregated selection of "storage.buckets" */
export type Buckets_Aggregate = {
  __typename?: 'buckets_aggregate';
  aggregate?: Maybe<Buckets_Aggregate_Fields>;
  nodes: Array<Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_Fields = {
  __typename?: 'buckets_aggregate_fields';
  avg?: Maybe<Buckets_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Buckets_Max_Fields>;
  min?: Maybe<Buckets_Min_Fields>;
  stddev?: Maybe<Buckets_Stddev_Fields>;
  stddev_pop?: Maybe<Buckets_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Buckets_Stddev_Samp_Fields>;
  sum?: Maybe<Buckets_Sum_Fields>;
  var_pop?: Maybe<Buckets_Var_Pop_Fields>;
  var_samp?: Maybe<Buckets_Var_Samp_Fields>;
  variance?: Maybe<Buckets_Variance_Fields>;
};


/** aggregate fields of "storage.buckets" */
export type Buckets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Buckets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Buckets_Avg_Fields = {
  __typename?: 'buckets_avg_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type Buckets_Bool_Exp = {
  _and?: InputMaybe<Array<Buckets_Bool_Exp>>;
  _not?: InputMaybe<Buckets_Bool_Exp>;
  _or?: InputMaybe<Array<Buckets_Bool_Exp>>;
  cacheControl?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  downloadExpiration?: InputMaybe<Int_Comparison_Exp>;
  files?: InputMaybe<Files_Bool_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  maxUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  minUploadFileSize?: InputMaybe<Int_Comparison_Exp>;
  presignedUrlsEnabled?: InputMaybe<Boolean_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export enum Buckets_Constraint {
  /** unique or primary key constraint on columns "id" */
  BucketsPkey = 'buckets_pkey'
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export type Buckets_Inc_Input = {
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.buckets" */
export type Buckets_Insert_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  files?: InputMaybe<Files_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Buckets_Max_Fields = {
  __typename?: 'buckets_max_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Buckets_Min_Fields = {
  __typename?: 'buckets_min_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "storage.buckets" */
export type Buckets_Mutation_Response = {
  __typename?: 'buckets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type Buckets_Obj_Rel_Insert_Input = {
  data: Buckets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};

/** on_conflict condition type for table "storage.buckets" */
export type Buckets_On_Conflict = {
  constraint: Buckets_Constraint;
  update_columns?: Array<Buckets_Update_Column>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type Buckets_Order_By = {
  cacheControl?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  downloadExpiration?: InputMaybe<Order_By>;
  files_aggregate?: InputMaybe<Files_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  maxUploadFileSize?: InputMaybe<Order_By>;
  minUploadFileSize?: InputMaybe<Order_By>;
  presignedUrlsEnabled?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
};

/** primary key columns input for table: buckets */
export type Buckets_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "storage.buckets" */
export enum Buckets_Select_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "storage.buckets" */
export type Buckets_Set_Input = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Buckets_Stddev_Fields = {
  __typename?: 'buckets_stddev_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Buckets_Stddev_Pop_Fields = {
  __typename?: 'buckets_stddev_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Buckets_Stddev_Samp_Fields = {
  __typename?: 'buckets_stddev_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Buckets_Sum_Fields = {
  __typename?: 'buckets_sum_fields';
  downloadExpiration?: Maybe<Scalars['Int']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
};

/** update columns of table "storage.buckets" */
export enum Buckets_Update_Column {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** aggregate var_pop on columns */
export type Buckets_Var_Pop_Fields = {
  __typename?: 'buckets_var_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Buckets_Var_Samp_Fields = {
  __typename?: 'buckets_var_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Buckets_Variance_Fields = {
  __typename?: 'buckets_variance_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "storage.files" */
export type Files = {
  __typename?: 'files';
  /** An object relationship */
  bucket: Buckets;
  bucketId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  etag?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isUploaded?: Maybe<Scalars['Boolean']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "storage.files" */
export type Files_Aggregate = {
  __typename?: 'files_aggregate';
  aggregate?: Maybe<Files_Aggregate_Fields>;
  nodes: Array<Files>;
};

/** aggregate fields of "storage.files" */
export type Files_Aggregate_Fields = {
  __typename?: 'files_aggregate_fields';
  avg?: Maybe<Files_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Files_Max_Fields>;
  min?: Maybe<Files_Min_Fields>;
  stddev?: Maybe<Files_Stddev_Fields>;
  stddev_pop?: Maybe<Files_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Files_Stddev_Samp_Fields>;
  sum?: Maybe<Files_Sum_Fields>;
  var_pop?: Maybe<Files_Var_Pop_Fields>;
  var_samp?: Maybe<Files_Var_Samp_Fields>;
  variance?: Maybe<Files_Variance_Fields>;
};


/** aggregate fields of "storage.files" */
export type Files_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Files_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "storage.files" */
export type Files_Aggregate_Order_By = {
  avg?: InputMaybe<Files_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Files_Max_Order_By>;
  min?: InputMaybe<Files_Min_Order_By>;
  stddev?: InputMaybe<Files_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Files_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Files_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Files_Sum_Order_By>;
  var_pop?: InputMaybe<Files_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Files_Var_Samp_Order_By>;
  variance?: InputMaybe<Files_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type Files_Arr_Rel_Insert_Input = {
  data: Array<Files_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Files_On_Conflict>;
};

/** aggregate avg on columns */
export type Files_Avg_Fields = {
  __typename?: 'files_avg_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "storage.files" */
export type Files_Avg_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type Files_Bool_Exp = {
  _and?: InputMaybe<Array<Files_Bool_Exp>>;
  _not?: InputMaybe<Files_Bool_Exp>;
  _or?: InputMaybe<Array<Files_Bool_Exp>>;
  bucket?: InputMaybe<Buckets_Bool_Exp>;
  bucketId?: InputMaybe<String_Comparison_Exp>;
  createdAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  etag?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  isUploaded?: InputMaybe<Boolean_Comparison_Exp>;
  mimeType?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  size?: InputMaybe<Int_Comparison_Exp>;
  updatedAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  uploadedByUserId?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "storage.files" */
export enum Files_Constraint {
  /** unique or primary key constraint on columns "id" */
  FilesPkey = 'files_pkey'
}

/** input type for incrementing numeric columns in table "storage.files" */
export type Files_Inc_Input = {
  size?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.files" */
export type Files_Insert_Input = {
  bucket?: InputMaybe<Buckets_Obj_Rel_Insert_Input>;
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Files_Max_Fields = {
  __typename?: 'files_max_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "storage.files" */
export type Files_Max_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Files_Min_Fields = {
  __typename?: 'files_min_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "storage.files" */
export type Files_Min_Order_By = {
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "storage.files" */
export type Files_Mutation_Response = {
  __typename?: 'files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** on_conflict condition type for table "storage.files" */
export type Files_On_Conflict = {
  constraint: Files_Constraint;
  update_columns?: Array<Files_Update_Column>;
  where?: InputMaybe<Files_Bool_Exp>;
};

/** Ordering options when selecting data from "storage.files". */
export type Files_Order_By = {
  bucket?: InputMaybe<Buckets_Order_By>;
  bucketId?: InputMaybe<Order_By>;
  createdAt?: InputMaybe<Order_By>;
  etag?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  isUploaded?: InputMaybe<Order_By>;
  mimeType?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  size?: InputMaybe<Order_By>;
  updatedAt?: InputMaybe<Order_By>;
  uploadedByUserId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: files */
export type Files_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "storage.files" */
export enum Files_Select_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** input type for updating data in table "storage.files" */
export type Files_Set_Input = {
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type Files_Stddev_Fields = {
  __typename?: 'files_stddev_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "storage.files" */
export type Files_Stddev_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Files_Stddev_Pop_Fields = {
  __typename?: 'files_stddev_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type Files_Stddev_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Files_Stddev_Samp_Fields = {
  __typename?: 'files_stddev_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type Files_Stddev_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Files_Sum_Fields = {
  __typename?: 'files_sum_fields';
  size?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "storage.files" */
export type Files_Sum_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** update columns of table "storage.files" */
export enum Files_Update_Column {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** aggregate var_pop on columns */
export type Files_Var_Pop_Fields = {
  __typename?: 'files_var_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "storage.files" */
export type Files_Var_Pop_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Files_Var_Samp_Fields = {
  __typename?: 'files_var_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "storage.files" */
export type Files_Var_Samp_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Files_Variance_Fields = {
  __typename?: 'files_variance_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "storage.files" */
export type Files_Variance_Order_By = {
  size?: InputMaybe<Order_By>;
};

/** columns and relationships of "kpop.app_kpop_group" */
export type Kpop_Artists = {
  __typename?: 'kpop_artists';
  alias?: Maybe<Scalars['String']>;
  /** An array relationship */
  audiotracks: Array<Kpop_Audiotracks>;
  /** An aggregate relationship */
  audiotracks_aggregate: Kpop_Audiotracks_Aggregate;
  /** An object relationship */
  company?: Maybe<Kpop_Companys>;
  date_birth?: Maybe<Scalars['date']>;
  debut_date?: Maybe<Scalars['date']>;
  disband?: Maybe<Scalars['Int']>;
  fanclub?: Maybe<Scalars['String']>;
  fname?: Maybe<Scalars['String']>;
  formation?: Maybe<Scalars['Int']>;
  gaondigital_firsts: Scalars['bigint'];
  gaondigital_times: Scalars['bigint'];
  id: Scalars['bigint'];
  id_company: Scalars['bigint'];
  id_country: Scalars['bigint'];
  id_debut?: Maybe<Scalars['bigint']>;
  id_parentgroup: Scalars['bigint'];
  is_collab: Scalars['app_kpop_group_is_collab'];
  issolo: Scalars['app_kpop_group_issolo'];
  kname: Scalars['String'];
  members: Scalars['app_kpop_group_members'];
  miak: Scalars['bigint'];
  miak_level: Scalars['app_kpop_group_miak_level'];
  name: Scalars['String'];
  previous_kname: Scalars['String'];
  previous_name: Scalars['String'];
  sales: Scalars['bigint'];
  social?: Maybe<Scalars['String']>;
  /** An array relationship */
  tracks: Array<Kpop_Tracks>;
  /** An aggregate relationship */
  tracks_aggregate: Kpop_Tracks_Aggregate;
  yawards?: Maybe<Scalars['String']>;
  yawards_total: Scalars['bigint'];
  yt_followers: Scalars['bigint'];
};


/** columns and relationships of "kpop.app_kpop_group" */
export type Kpop_ArtistsAudiotracksArgs = {
  distinct_on?: InputMaybe<Array<Kpop_Audiotracks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kpop_Audiotracks_Order_By>>;
  where?: InputMaybe<Kpop_Audiotracks_Bool_Exp>;
};


/** columns and relationships of "kpop.app_kpop_group" */
export type Kpop_ArtistsAudiotracks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kpop_Audiotracks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kpop_Audiotracks_Order_By>>;
  where?: InputMaybe<Kpop_Audiotracks_Bool_Exp>;
};


/** columns and relationships of "kpop.app_kpop_group" */
export type Kpop_ArtistsTracksArgs = {
  distinct_on?: InputMaybe<Array<Kpop_Tracks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kpop_Tracks_Order_By>>;
  where?: InputMaybe<Kpop_Tracks_Bool_Exp>;
};


/** columns and relationships of "kpop.app_kpop_group" */
export type Kpop_ArtistsTracks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kpop_Tracks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kpop_Tracks_Order_By>>;
  where?: InputMaybe<Kpop_Tracks_Bool_Exp>;
};

/** aggregated selection of "kpop.app_kpop_group" */
export type Kpop_Artists_Aggregate = {
  __typename?: 'kpop_artists_aggregate';
  aggregate?: Maybe<Kpop_Artists_Aggregate_Fields>;
  nodes: Array<Kpop_Artists>;
};

/** aggregate fields of "kpop.app_kpop_group" */
export type Kpop_Artists_Aggregate_Fields = {
  __typename?: 'kpop_artists_aggregate_fields';
  avg?: Maybe<Kpop_Artists_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Kpop_Artists_Max_Fields>;
  min?: Maybe<Kpop_Artists_Min_Fields>;
  stddev?: Maybe<Kpop_Artists_Stddev_Fields>;
  stddev_pop?: Maybe<Kpop_Artists_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kpop_Artists_Stddev_Samp_Fields>;
  sum?: Maybe<Kpop_Artists_Sum_Fields>;
  var_pop?: Maybe<Kpop_Artists_Var_Pop_Fields>;
  var_samp?: Maybe<Kpop_Artists_Var_Samp_Fields>;
  variance?: Maybe<Kpop_Artists_Variance_Fields>;
};


/** aggregate fields of "kpop.app_kpop_group" */
export type Kpop_Artists_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kpop_Artists_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Kpop_Artists_Avg_Fields = {
  __typename?: 'kpop_artists_avg_fields';
  disband?: Maybe<Scalars['Float']>;
  formation?: Maybe<Scalars['Float']>;
  gaondigital_firsts?: Maybe<Scalars['Float']>;
  gaondigital_times?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  id_company?: Maybe<Scalars['Float']>;
  id_country?: Maybe<Scalars['Float']>;
  id_debut?: Maybe<Scalars['Float']>;
  id_parentgroup?: Maybe<Scalars['Float']>;
  miak?: Maybe<Scalars['Float']>;
  sales?: Maybe<Scalars['Float']>;
  yawards_total?: Maybe<Scalars['Float']>;
  yt_followers?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "kpop.app_kpop_group". All fields are combined with a logical 'AND'. */
export type Kpop_Artists_Bool_Exp = {
  _and?: InputMaybe<Array<Kpop_Artists_Bool_Exp>>;
  _not?: InputMaybe<Kpop_Artists_Bool_Exp>;
  _or?: InputMaybe<Array<Kpop_Artists_Bool_Exp>>;
  alias?: InputMaybe<String_Comparison_Exp>;
  audiotracks?: InputMaybe<Kpop_Audiotracks_Bool_Exp>;
  company?: InputMaybe<Kpop_Companys_Bool_Exp>;
  date_birth?: InputMaybe<Date_Comparison_Exp>;
  debut_date?: InputMaybe<Date_Comparison_Exp>;
  disband?: InputMaybe<Int_Comparison_Exp>;
  fanclub?: InputMaybe<String_Comparison_Exp>;
  fname?: InputMaybe<String_Comparison_Exp>;
  formation?: InputMaybe<Int_Comparison_Exp>;
  gaondigital_firsts?: InputMaybe<Bigint_Comparison_Exp>;
  gaondigital_times?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  id_company?: InputMaybe<Bigint_Comparison_Exp>;
  id_country?: InputMaybe<Bigint_Comparison_Exp>;
  id_debut?: InputMaybe<Bigint_Comparison_Exp>;
  id_parentgroup?: InputMaybe<Bigint_Comparison_Exp>;
  is_collab?: InputMaybe<App_Kpop_Group_Is_Collab_Comparison_Exp>;
  issolo?: InputMaybe<App_Kpop_Group_Issolo_Comparison_Exp>;
  kname?: InputMaybe<String_Comparison_Exp>;
  members?: InputMaybe<App_Kpop_Group_Members_Comparison_Exp>;
  miak?: InputMaybe<Bigint_Comparison_Exp>;
  miak_level?: InputMaybe<App_Kpop_Group_Miak_Level_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  previous_kname?: InputMaybe<String_Comparison_Exp>;
  previous_name?: InputMaybe<String_Comparison_Exp>;
  sales?: InputMaybe<Bigint_Comparison_Exp>;
  social?: InputMaybe<String_Comparison_Exp>;
  tracks?: InputMaybe<Kpop_Tracks_Bool_Exp>;
  yawards?: InputMaybe<String_Comparison_Exp>;
  yawards_total?: InputMaybe<Bigint_Comparison_Exp>;
  yt_followers?: InputMaybe<Bigint_Comparison_Exp>;
};

/** unique or primary key constraints on table "kpop.app_kpop_group" */
export enum Kpop_Artists_Constraint {
  /** unique or primary key constraint on columns "id" */
  Idx_17301Primary = 'idx_17301_primary'
}

/** input type for incrementing numeric columns in table "kpop.app_kpop_group" */
export type Kpop_Artists_Inc_Input = {
  disband?: InputMaybe<Scalars['Int']>;
  formation?: InputMaybe<Scalars['Int']>;
  gaondigital_firsts?: InputMaybe<Scalars['bigint']>;
  gaondigital_times?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  id_company?: InputMaybe<Scalars['bigint']>;
  id_country?: InputMaybe<Scalars['bigint']>;
  id_debut?: InputMaybe<Scalars['bigint']>;
  id_parentgroup?: InputMaybe<Scalars['bigint']>;
  miak?: InputMaybe<Scalars['bigint']>;
  sales?: InputMaybe<Scalars['bigint']>;
  yawards_total?: InputMaybe<Scalars['bigint']>;
  yt_followers?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "kpop.app_kpop_group" */
export type Kpop_Artists_Insert_Input = {
  alias?: InputMaybe<Scalars['String']>;
  audiotracks?: InputMaybe<Kpop_Audiotracks_Arr_Rel_Insert_Input>;
  company?: InputMaybe<Kpop_Companys_Obj_Rel_Insert_Input>;
  date_birth?: InputMaybe<Scalars['date']>;
  debut_date?: InputMaybe<Scalars['date']>;
  disband?: InputMaybe<Scalars['Int']>;
  fanclub?: InputMaybe<Scalars['String']>;
  fname?: InputMaybe<Scalars['String']>;
  formation?: InputMaybe<Scalars['Int']>;
  gaondigital_firsts?: InputMaybe<Scalars['bigint']>;
  gaondigital_times?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  id_company?: InputMaybe<Scalars['bigint']>;
  id_country?: InputMaybe<Scalars['bigint']>;
  id_debut?: InputMaybe<Scalars['bigint']>;
  id_parentgroup?: InputMaybe<Scalars['bigint']>;
  is_collab?: InputMaybe<Scalars['app_kpop_group_is_collab']>;
  issolo?: InputMaybe<Scalars['app_kpop_group_issolo']>;
  kname?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<Scalars['app_kpop_group_members']>;
  miak?: InputMaybe<Scalars['bigint']>;
  miak_level?: InputMaybe<Scalars['app_kpop_group_miak_level']>;
  name?: InputMaybe<Scalars['String']>;
  previous_kname?: InputMaybe<Scalars['String']>;
  previous_name?: InputMaybe<Scalars['String']>;
  sales?: InputMaybe<Scalars['bigint']>;
  social?: InputMaybe<Scalars['String']>;
  tracks?: InputMaybe<Kpop_Tracks_Arr_Rel_Insert_Input>;
  yawards?: InputMaybe<Scalars['String']>;
  yawards_total?: InputMaybe<Scalars['bigint']>;
  yt_followers?: InputMaybe<Scalars['bigint']>;
};

/** aggregate max on columns */
export type Kpop_Artists_Max_Fields = {
  __typename?: 'kpop_artists_max_fields';
  alias?: Maybe<Scalars['String']>;
  date_birth?: Maybe<Scalars['date']>;
  debut_date?: Maybe<Scalars['date']>;
  disband?: Maybe<Scalars['Int']>;
  fanclub?: Maybe<Scalars['String']>;
  fname?: Maybe<Scalars['String']>;
  formation?: Maybe<Scalars['Int']>;
  gaondigital_firsts?: Maybe<Scalars['bigint']>;
  gaondigital_times?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  id_company?: Maybe<Scalars['bigint']>;
  id_country?: Maybe<Scalars['bigint']>;
  id_debut?: Maybe<Scalars['bigint']>;
  id_parentgroup?: Maybe<Scalars['bigint']>;
  is_collab?: Maybe<Scalars['app_kpop_group_is_collab']>;
  issolo?: Maybe<Scalars['app_kpop_group_issolo']>;
  kname?: Maybe<Scalars['String']>;
  members?: Maybe<Scalars['app_kpop_group_members']>;
  miak?: Maybe<Scalars['bigint']>;
  miak_level?: Maybe<Scalars['app_kpop_group_miak_level']>;
  name?: Maybe<Scalars['String']>;
  previous_kname?: Maybe<Scalars['String']>;
  previous_name?: Maybe<Scalars['String']>;
  sales?: Maybe<Scalars['bigint']>;
  social?: Maybe<Scalars['String']>;
  yawards?: Maybe<Scalars['String']>;
  yawards_total?: Maybe<Scalars['bigint']>;
  yt_followers?: Maybe<Scalars['bigint']>;
};

/** aggregate min on columns */
export type Kpop_Artists_Min_Fields = {
  __typename?: 'kpop_artists_min_fields';
  alias?: Maybe<Scalars['String']>;
  date_birth?: Maybe<Scalars['date']>;
  debut_date?: Maybe<Scalars['date']>;
  disband?: Maybe<Scalars['Int']>;
  fanclub?: Maybe<Scalars['String']>;
  fname?: Maybe<Scalars['String']>;
  formation?: Maybe<Scalars['Int']>;
  gaondigital_firsts?: Maybe<Scalars['bigint']>;
  gaondigital_times?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  id_company?: Maybe<Scalars['bigint']>;
  id_country?: Maybe<Scalars['bigint']>;
  id_debut?: Maybe<Scalars['bigint']>;
  id_parentgroup?: Maybe<Scalars['bigint']>;
  is_collab?: Maybe<Scalars['app_kpop_group_is_collab']>;
  issolo?: Maybe<Scalars['app_kpop_group_issolo']>;
  kname?: Maybe<Scalars['String']>;
  members?: Maybe<Scalars['app_kpop_group_members']>;
  miak?: Maybe<Scalars['bigint']>;
  miak_level?: Maybe<Scalars['app_kpop_group_miak_level']>;
  name?: Maybe<Scalars['String']>;
  previous_kname?: Maybe<Scalars['String']>;
  previous_name?: Maybe<Scalars['String']>;
  sales?: Maybe<Scalars['bigint']>;
  social?: Maybe<Scalars['String']>;
  yawards?: Maybe<Scalars['String']>;
  yawards_total?: Maybe<Scalars['bigint']>;
  yt_followers?: Maybe<Scalars['bigint']>;
};

/** response of any mutation on the table "kpop.app_kpop_group" */
export type Kpop_Artists_Mutation_Response = {
  __typename?: 'kpop_artists_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kpop_Artists>;
};

/** input type for inserting object relation for remote table "kpop.app_kpop_group" */
export type Kpop_Artists_Obj_Rel_Insert_Input = {
  data: Kpop_Artists_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Kpop_Artists_On_Conflict>;
};

/** on_conflict condition type for table "kpop.app_kpop_group" */
export type Kpop_Artists_On_Conflict = {
  constraint: Kpop_Artists_Constraint;
  update_columns?: Array<Kpop_Artists_Update_Column>;
  where?: InputMaybe<Kpop_Artists_Bool_Exp>;
};

/** Ordering options when selecting data from "kpop.app_kpop_group". */
export type Kpop_Artists_Order_By = {
  alias?: InputMaybe<Order_By>;
  audiotracks_aggregate?: InputMaybe<Kpop_Audiotracks_Aggregate_Order_By>;
  company?: InputMaybe<Kpop_Companys_Order_By>;
  date_birth?: InputMaybe<Order_By>;
  debut_date?: InputMaybe<Order_By>;
  disband?: InputMaybe<Order_By>;
  fanclub?: InputMaybe<Order_By>;
  fname?: InputMaybe<Order_By>;
  formation?: InputMaybe<Order_By>;
  gaondigital_firsts?: InputMaybe<Order_By>;
  gaondigital_times?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_company?: InputMaybe<Order_By>;
  id_country?: InputMaybe<Order_By>;
  id_debut?: InputMaybe<Order_By>;
  id_parentgroup?: InputMaybe<Order_By>;
  is_collab?: InputMaybe<Order_By>;
  issolo?: InputMaybe<Order_By>;
  kname?: InputMaybe<Order_By>;
  members?: InputMaybe<Order_By>;
  miak?: InputMaybe<Order_By>;
  miak_level?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  previous_kname?: InputMaybe<Order_By>;
  previous_name?: InputMaybe<Order_By>;
  sales?: InputMaybe<Order_By>;
  social?: InputMaybe<Order_By>;
  tracks_aggregate?: InputMaybe<Kpop_Tracks_Aggregate_Order_By>;
  yawards?: InputMaybe<Order_By>;
  yawards_total?: InputMaybe<Order_By>;
  yt_followers?: InputMaybe<Order_By>;
};

/** primary key columns input for table: kpop_artists */
export type Kpop_Artists_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "kpop.app_kpop_group" */
export enum Kpop_Artists_Select_Column {
  /** column name */
  Alias = 'alias',
  /** column name */
  DateBirth = 'date_birth',
  /** column name */
  DebutDate = 'debut_date',
  /** column name */
  Disband = 'disband',
  /** column name */
  Fanclub = 'fanclub',
  /** column name */
  Fname = 'fname',
  /** column name */
  Formation = 'formation',
  /** column name */
  GaondigitalFirsts = 'gaondigital_firsts',
  /** column name */
  GaondigitalTimes = 'gaondigital_times',
  /** column name */
  Id = 'id',
  /** column name */
  IdCompany = 'id_company',
  /** column name */
  IdCountry = 'id_country',
  /** column name */
  IdDebut = 'id_debut',
  /** column name */
  IdParentgroup = 'id_parentgroup',
  /** column name */
  IsCollab = 'is_collab',
  /** column name */
  Issolo = 'issolo',
  /** column name */
  Kname = 'kname',
  /** column name */
  Members = 'members',
  /** column name */
  Miak = 'miak',
  /** column name */
  MiakLevel = 'miak_level',
  /** column name */
  Name = 'name',
  /** column name */
  PreviousKname = 'previous_kname',
  /** column name */
  PreviousName = 'previous_name',
  /** column name */
  Sales = 'sales',
  /** column name */
  Social = 'social',
  /** column name */
  Yawards = 'yawards',
  /** column name */
  YawardsTotal = 'yawards_total',
  /** column name */
  YtFollowers = 'yt_followers'
}

/** input type for updating data in table "kpop.app_kpop_group" */
export type Kpop_Artists_Set_Input = {
  alias?: InputMaybe<Scalars['String']>;
  date_birth?: InputMaybe<Scalars['date']>;
  debut_date?: InputMaybe<Scalars['date']>;
  disband?: InputMaybe<Scalars['Int']>;
  fanclub?: InputMaybe<Scalars['String']>;
  fname?: InputMaybe<Scalars['String']>;
  formation?: InputMaybe<Scalars['Int']>;
  gaondigital_firsts?: InputMaybe<Scalars['bigint']>;
  gaondigital_times?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  id_company?: InputMaybe<Scalars['bigint']>;
  id_country?: InputMaybe<Scalars['bigint']>;
  id_debut?: InputMaybe<Scalars['bigint']>;
  id_parentgroup?: InputMaybe<Scalars['bigint']>;
  is_collab?: InputMaybe<Scalars['app_kpop_group_is_collab']>;
  issolo?: InputMaybe<Scalars['app_kpop_group_issolo']>;
  kname?: InputMaybe<Scalars['String']>;
  members?: InputMaybe<Scalars['app_kpop_group_members']>;
  miak?: InputMaybe<Scalars['bigint']>;
  miak_level?: InputMaybe<Scalars['app_kpop_group_miak_level']>;
  name?: InputMaybe<Scalars['String']>;
  previous_kname?: InputMaybe<Scalars['String']>;
  previous_name?: InputMaybe<Scalars['String']>;
  sales?: InputMaybe<Scalars['bigint']>;
  social?: InputMaybe<Scalars['String']>;
  yawards?: InputMaybe<Scalars['String']>;
  yawards_total?: InputMaybe<Scalars['bigint']>;
  yt_followers?: InputMaybe<Scalars['bigint']>;
};

/** aggregate stddev on columns */
export type Kpop_Artists_Stddev_Fields = {
  __typename?: 'kpop_artists_stddev_fields';
  disband?: Maybe<Scalars['Float']>;
  formation?: Maybe<Scalars['Float']>;
  gaondigital_firsts?: Maybe<Scalars['Float']>;
  gaondigital_times?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  id_company?: Maybe<Scalars['Float']>;
  id_country?: Maybe<Scalars['Float']>;
  id_debut?: Maybe<Scalars['Float']>;
  id_parentgroup?: Maybe<Scalars['Float']>;
  miak?: Maybe<Scalars['Float']>;
  sales?: Maybe<Scalars['Float']>;
  yawards_total?: Maybe<Scalars['Float']>;
  yt_followers?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Kpop_Artists_Stddev_Pop_Fields = {
  __typename?: 'kpop_artists_stddev_pop_fields';
  disband?: Maybe<Scalars['Float']>;
  formation?: Maybe<Scalars['Float']>;
  gaondigital_firsts?: Maybe<Scalars['Float']>;
  gaondigital_times?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  id_company?: Maybe<Scalars['Float']>;
  id_country?: Maybe<Scalars['Float']>;
  id_debut?: Maybe<Scalars['Float']>;
  id_parentgroup?: Maybe<Scalars['Float']>;
  miak?: Maybe<Scalars['Float']>;
  sales?: Maybe<Scalars['Float']>;
  yawards_total?: Maybe<Scalars['Float']>;
  yt_followers?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Kpop_Artists_Stddev_Samp_Fields = {
  __typename?: 'kpop_artists_stddev_samp_fields';
  disband?: Maybe<Scalars['Float']>;
  formation?: Maybe<Scalars['Float']>;
  gaondigital_firsts?: Maybe<Scalars['Float']>;
  gaondigital_times?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  id_company?: Maybe<Scalars['Float']>;
  id_country?: Maybe<Scalars['Float']>;
  id_debut?: Maybe<Scalars['Float']>;
  id_parentgroup?: Maybe<Scalars['Float']>;
  miak?: Maybe<Scalars['Float']>;
  sales?: Maybe<Scalars['Float']>;
  yawards_total?: Maybe<Scalars['Float']>;
  yt_followers?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Kpop_Artists_Sum_Fields = {
  __typename?: 'kpop_artists_sum_fields';
  disband?: Maybe<Scalars['Int']>;
  formation?: Maybe<Scalars['Int']>;
  gaondigital_firsts?: Maybe<Scalars['bigint']>;
  gaondigital_times?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  id_company?: Maybe<Scalars['bigint']>;
  id_country?: Maybe<Scalars['bigint']>;
  id_debut?: Maybe<Scalars['bigint']>;
  id_parentgroup?: Maybe<Scalars['bigint']>;
  miak?: Maybe<Scalars['bigint']>;
  sales?: Maybe<Scalars['bigint']>;
  yawards_total?: Maybe<Scalars['bigint']>;
  yt_followers?: Maybe<Scalars['bigint']>;
};

/** update columns of table "kpop.app_kpop_group" */
export enum Kpop_Artists_Update_Column {
  /** column name */
  Alias = 'alias',
  /** column name */
  DateBirth = 'date_birth',
  /** column name */
  DebutDate = 'debut_date',
  /** column name */
  Disband = 'disband',
  /** column name */
  Fanclub = 'fanclub',
  /** column name */
  Fname = 'fname',
  /** column name */
  Formation = 'formation',
  /** column name */
  GaondigitalFirsts = 'gaondigital_firsts',
  /** column name */
  GaondigitalTimes = 'gaondigital_times',
  /** column name */
  Id = 'id',
  /** column name */
  IdCompany = 'id_company',
  /** column name */
  IdCountry = 'id_country',
  /** column name */
  IdDebut = 'id_debut',
  /** column name */
  IdParentgroup = 'id_parentgroup',
  /** column name */
  IsCollab = 'is_collab',
  /** column name */
  Issolo = 'issolo',
  /** column name */
  Kname = 'kname',
  /** column name */
  Members = 'members',
  /** column name */
  Miak = 'miak',
  /** column name */
  MiakLevel = 'miak_level',
  /** column name */
  Name = 'name',
  /** column name */
  PreviousKname = 'previous_kname',
  /** column name */
  PreviousName = 'previous_name',
  /** column name */
  Sales = 'sales',
  /** column name */
  Social = 'social',
  /** column name */
  Yawards = 'yawards',
  /** column name */
  YawardsTotal = 'yawards_total',
  /** column name */
  YtFollowers = 'yt_followers'
}

/** aggregate var_pop on columns */
export type Kpop_Artists_Var_Pop_Fields = {
  __typename?: 'kpop_artists_var_pop_fields';
  disband?: Maybe<Scalars['Float']>;
  formation?: Maybe<Scalars['Float']>;
  gaondigital_firsts?: Maybe<Scalars['Float']>;
  gaondigital_times?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  id_company?: Maybe<Scalars['Float']>;
  id_country?: Maybe<Scalars['Float']>;
  id_debut?: Maybe<Scalars['Float']>;
  id_parentgroup?: Maybe<Scalars['Float']>;
  miak?: Maybe<Scalars['Float']>;
  sales?: Maybe<Scalars['Float']>;
  yawards_total?: Maybe<Scalars['Float']>;
  yt_followers?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Kpop_Artists_Var_Samp_Fields = {
  __typename?: 'kpop_artists_var_samp_fields';
  disband?: Maybe<Scalars['Float']>;
  formation?: Maybe<Scalars['Float']>;
  gaondigital_firsts?: Maybe<Scalars['Float']>;
  gaondigital_times?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  id_company?: Maybe<Scalars['Float']>;
  id_country?: Maybe<Scalars['Float']>;
  id_debut?: Maybe<Scalars['Float']>;
  id_parentgroup?: Maybe<Scalars['Float']>;
  miak?: Maybe<Scalars['Float']>;
  sales?: Maybe<Scalars['Float']>;
  yawards_total?: Maybe<Scalars['Float']>;
  yt_followers?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Kpop_Artists_Variance_Fields = {
  __typename?: 'kpop_artists_variance_fields';
  disband?: Maybe<Scalars['Float']>;
  formation?: Maybe<Scalars['Float']>;
  gaondigital_firsts?: Maybe<Scalars['Float']>;
  gaondigital_times?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  id_company?: Maybe<Scalars['Float']>;
  id_country?: Maybe<Scalars['Float']>;
  id_debut?: Maybe<Scalars['Float']>;
  id_parentgroup?: Maybe<Scalars['Float']>;
  miak?: Maybe<Scalars['Float']>;
  sales?: Maybe<Scalars['Float']>;
  yawards_total?: Maybe<Scalars['Float']>;
  yt_followers?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "kpop.app_kpop_audio" */
export type Kpop_Audiotracks = {
  __typename?: 'kpop_audiotracks';
  /** An object relationship */
  artist?: Maybe<Kpop_Artists>;
  dislikes: Scalars['bigint'];
  id: Scalars['bigint'];
  id_artist: Scalars['bigint'];
  id_original_artist: Scalars['bigint'];
  kname: Scalars['String'];
  lastupdate: Scalars['timestamptz'];
  likes: Scalars['bigint'];
  name: Scalars['String'];
  name_aka: Scalars['String'];
  original_name: Scalars['String'];
  publishedon: Scalars['timestamptz'];
  recentlikes: Scalars['bigint'];
  recentviews: Scalars['bigint'];
  regionlocked: Scalars['String'];
  releasedate: Scalars['date'];
  tags: Scalars['String'];
  views: Scalars['bigint'];
  vlink: Scalars['String'];
};

/** aggregated selection of "kpop.app_kpop_audio" */
export type Kpop_Audiotracks_Aggregate = {
  __typename?: 'kpop_audiotracks_aggregate';
  aggregate?: Maybe<Kpop_Audiotracks_Aggregate_Fields>;
  nodes: Array<Kpop_Audiotracks>;
};

/** aggregate fields of "kpop.app_kpop_audio" */
export type Kpop_Audiotracks_Aggregate_Fields = {
  __typename?: 'kpop_audiotracks_aggregate_fields';
  avg?: Maybe<Kpop_Audiotracks_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Kpop_Audiotracks_Max_Fields>;
  min?: Maybe<Kpop_Audiotracks_Min_Fields>;
  stddev?: Maybe<Kpop_Audiotracks_Stddev_Fields>;
  stddev_pop?: Maybe<Kpop_Audiotracks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kpop_Audiotracks_Stddev_Samp_Fields>;
  sum?: Maybe<Kpop_Audiotracks_Sum_Fields>;
  var_pop?: Maybe<Kpop_Audiotracks_Var_Pop_Fields>;
  var_samp?: Maybe<Kpop_Audiotracks_Var_Samp_Fields>;
  variance?: Maybe<Kpop_Audiotracks_Variance_Fields>;
};


/** aggregate fields of "kpop.app_kpop_audio" */
export type Kpop_Audiotracks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kpop_Audiotracks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "kpop.app_kpop_audio" */
export type Kpop_Audiotracks_Aggregate_Order_By = {
  avg?: InputMaybe<Kpop_Audiotracks_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kpop_Audiotracks_Max_Order_By>;
  min?: InputMaybe<Kpop_Audiotracks_Min_Order_By>;
  stddev?: InputMaybe<Kpop_Audiotracks_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Kpop_Audiotracks_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Kpop_Audiotracks_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Kpop_Audiotracks_Sum_Order_By>;
  var_pop?: InputMaybe<Kpop_Audiotracks_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Kpop_Audiotracks_Var_Samp_Order_By>;
  variance?: InputMaybe<Kpop_Audiotracks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "kpop.app_kpop_audio" */
export type Kpop_Audiotracks_Arr_Rel_Insert_Input = {
  data: Array<Kpop_Audiotracks_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Kpop_Audiotracks_On_Conflict>;
};

/** aggregate avg on columns */
export type Kpop_Audiotracks_Avg_Fields = {
  __typename?: 'kpop_audiotracks_avg_fields';
  dislikes?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  id_artist?: Maybe<Scalars['Float']>;
  id_original_artist?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
  recentlikes?: Maybe<Scalars['Float']>;
  recentviews?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "kpop.app_kpop_audio" */
export type Kpop_Audiotracks_Avg_Order_By = {
  dislikes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_artist?: InputMaybe<Order_By>;
  id_original_artist?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  recentlikes?: InputMaybe<Order_By>;
  recentviews?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "kpop.app_kpop_audio". All fields are combined with a logical 'AND'. */
export type Kpop_Audiotracks_Bool_Exp = {
  _and?: InputMaybe<Array<Kpop_Audiotracks_Bool_Exp>>;
  _not?: InputMaybe<Kpop_Audiotracks_Bool_Exp>;
  _or?: InputMaybe<Array<Kpop_Audiotracks_Bool_Exp>>;
  artist?: InputMaybe<Kpop_Artists_Bool_Exp>;
  dislikes?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  id_artist?: InputMaybe<Bigint_Comparison_Exp>;
  id_original_artist?: InputMaybe<Bigint_Comparison_Exp>;
  kname?: InputMaybe<String_Comparison_Exp>;
  lastupdate?: InputMaybe<Timestamptz_Comparison_Exp>;
  likes?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  name_aka?: InputMaybe<String_Comparison_Exp>;
  original_name?: InputMaybe<String_Comparison_Exp>;
  publishedon?: InputMaybe<Timestamptz_Comparison_Exp>;
  recentlikes?: InputMaybe<Bigint_Comparison_Exp>;
  recentviews?: InputMaybe<Bigint_Comparison_Exp>;
  regionlocked?: InputMaybe<String_Comparison_Exp>;
  releasedate?: InputMaybe<Date_Comparison_Exp>;
  tags?: InputMaybe<String_Comparison_Exp>;
  views?: InputMaybe<Bigint_Comparison_Exp>;
  vlink?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "kpop.app_kpop_audio" */
export enum Kpop_Audiotracks_Constraint {
  /** unique or primary key constraint on columns "id" */
  Idx_17272Primary = 'idx_17272_primary',
  /** unique or primary key constraint on columns "vlink" */
  Idx_17272Vlink = 'idx_17272_vlink'
}

/** input type for incrementing numeric columns in table "kpop.app_kpop_audio" */
export type Kpop_Audiotracks_Inc_Input = {
  dislikes?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  id_artist?: InputMaybe<Scalars['bigint']>;
  id_original_artist?: InputMaybe<Scalars['bigint']>;
  likes?: InputMaybe<Scalars['bigint']>;
  recentlikes?: InputMaybe<Scalars['bigint']>;
  recentviews?: InputMaybe<Scalars['bigint']>;
  views?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "kpop.app_kpop_audio" */
export type Kpop_Audiotracks_Insert_Input = {
  artist?: InputMaybe<Kpop_Artists_Obj_Rel_Insert_Input>;
  dislikes?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  id_artist?: InputMaybe<Scalars['bigint']>;
  id_original_artist?: InputMaybe<Scalars['bigint']>;
  kname?: InputMaybe<Scalars['String']>;
  lastupdate?: InputMaybe<Scalars['timestamptz']>;
  likes?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  name_aka?: InputMaybe<Scalars['String']>;
  original_name?: InputMaybe<Scalars['String']>;
  publishedon?: InputMaybe<Scalars['timestamptz']>;
  recentlikes?: InputMaybe<Scalars['bigint']>;
  recentviews?: InputMaybe<Scalars['bigint']>;
  regionlocked?: InputMaybe<Scalars['String']>;
  releasedate?: InputMaybe<Scalars['date']>;
  tags?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Scalars['bigint']>;
  vlink?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Kpop_Audiotracks_Max_Fields = {
  __typename?: 'kpop_audiotracks_max_fields';
  dislikes?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  id_artist?: Maybe<Scalars['bigint']>;
  id_original_artist?: Maybe<Scalars['bigint']>;
  kname?: Maybe<Scalars['String']>;
  lastupdate?: Maybe<Scalars['timestamptz']>;
  likes?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  name_aka?: Maybe<Scalars['String']>;
  original_name?: Maybe<Scalars['String']>;
  publishedon?: Maybe<Scalars['timestamptz']>;
  recentlikes?: Maybe<Scalars['bigint']>;
  recentviews?: Maybe<Scalars['bigint']>;
  regionlocked?: Maybe<Scalars['String']>;
  releasedate?: Maybe<Scalars['date']>;
  tags?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['bigint']>;
  vlink?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "kpop.app_kpop_audio" */
export type Kpop_Audiotracks_Max_Order_By = {
  dislikes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_artist?: InputMaybe<Order_By>;
  id_original_artist?: InputMaybe<Order_By>;
  kname?: InputMaybe<Order_By>;
  lastupdate?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_aka?: InputMaybe<Order_By>;
  original_name?: InputMaybe<Order_By>;
  publishedon?: InputMaybe<Order_By>;
  recentlikes?: InputMaybe<Order_By>;
  recentviews?: InputMaybe<Order_By>;
  regionlocked?: InputMaybe<Order_By>;
  releasedate?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
  vlink?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Kpop_Audiotracks_Min_Fields = {
  __typename?: 'kpop_audiotracks_min_fields';
  dislikes?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  id_artist?: Maybe<Scalars['bigint']>;
  id_original_artist?: Maybe<Scalars['bigint']>;
  kname?: Maybe<Scalars['String']>;
  lastupdate?: Maybe<Scalars['timestamptz']>;
  likes?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  name_aka?: Maybe<Scalars['String']>;
  original_name?: Maybe<Scalars['String']>;
  publishedon?: Maybe<Scalars['timestamptz']>;
  recentlikes?: Maybe<Scalars['bigint']>;
  recentviews?: Maybe<Scalars['bigint']>;
  regionlocked?: Maybe<Scalars['String']>;
  releasedate?: Maybe<Scalars['date']>;
  tags?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['bigint']>;
  vlink?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "kpop.app_kpop_audio" */
export type Kpop_Audiotracks_Min_Order_By = {
  dislikes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_artist?: InputMaybe<Order_By>;
  id_original_artist?: InputMaybe<Order_By>;
  kname?: InputMaybe<Order_By>;
  lastupdate?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_aka?: InputMaybe<Order_By>;
  original_name?: InputMaybe<Order_By>;
  publishedon?: InputMaybe<Order_By>;
  recentlikes?: InputMaybe<Order_By>;
  recentviews?: InputMaybe<Order_By>;
  regionlocked?: InputMaybe<Order_By>;
  releasedate?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
  vlink?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "kpop.app_kpop_audio" */
export type Kpop_Audiotracks_Mutation_Response = {
  __typename?: 'kpop_audiotracks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kpop_Audiotracks>;
};

/** on_conflict condition type for table "kpop.app_kpop_audio" */
export type Kpop_Audiotracks_On_Conflict = {
  constraint: Kpop_Audiotracks_Constraint;
  update_columns?: Array<Kpop_Audiotracks_Update_Column>;
  where?: InputMaybe<Kpop_Audiotracks_Bool_Exp>;
};

/** Ordering options when selecting data from "kpop.app_kpop_audio". */
export type Kpop_Audiotracks_Order_By = {
  artist?: InputMaybe<Kpop_Artists_Order_By>;
  dislikes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_artist?: InputMaybe<Order_By>;
  id_original_artist?: InputMaybe<Order_By>;
  kname?: InputMaybe<Order_By>;
  lastupdate?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_aka?: InputMaybe<Order_By>;
  original_name?: InputMaybe<Order_By>;
  publishedon?: InputMaybe<Order_By>;
  recentlikes?: InputMaybe<Order_By>;
  recentviews?: InputMaybe<Order_By>;
  regionlocked?: InputMaybe<Order_By>;
  releasedate?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
  vlink?: InputMaybe<Order_By>;
};

/** primary key columns input for table: kpop_audiotracks */
export type Kpop_Audiotracks_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "kpop.app_kpop_audio" */
export enum Kpop_Audiotracks_Select_Column {
  /** column name */
  Dislikes = 'dislikes',
  /** column name */
  Id = 'id',
  /** column name */
  IdArtist = 'id_artist',
  /** column name */
  IdOriginalArtist = 'id_original_artist',
  /** column name */
  Kname = 'kname',
  /** column name */
  Lastupdate = 'lastupdate',
  /** column name */
  Likes = 'likes',
  /** column name */
  Name = 'name',
  /** column name */
  NameAka = 'name_aka',
  /** column name */
  OriginalName = 'original_name',
  /** column name */
  Publishedon = 'publishedon',
  /** column name */
  Recentlikes = 'recentlikes',
  /** column name */
  Recentviews = 'recentviews',
  /** column name */
  Regionlocked = 'regionlocked',
  /** column name */
  Releasedate = 'releasedate',
  /** column name */
  Tags = 'tags',
  /** column name */
  Views = 'views',
  /** column name */
  Vlink = 'vlink'
}

/** input type for updating data in table "kpop.app_kpop_audio" */
export type Kpop_Audiotracks_Set_Input = {
  dislikes?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  id_artist?: InputMaybe<Scalars['bigint']>;
  id_original_artist?: InputMaybe<Scalars['bigint']>;
  kname?: InputMaybe<Scalars['String']>;
  lastupdate?: InputMaybe<Scalars['timestamptz']>;
  likes?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  name_aka?: InputMaybe<Scalars['String']>;
  original_name?: InputMaybe<Scalars['String']>;
  publishedon?: InputMaybe<Scalars['timestamptz']>;
  recentlikes?: InputMaybe<Scalars['bigint']>;
  recentviews?: InputMaybe<Scalars['bigint']>;
  regionlocked?: InputMaybe<Scalars['String']>;
  releasedate?: InputMaybe<Scalars['date']>;
  tags?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Scalars['bigint']>;
  vlink?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Kpop_Audiotracks_Stddev_Fields = {
  __typename?: 'kpop_audiotracks_stddev_fields';
  dislikes?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  id_artist?: Maybe<Scalars['Float']>;
  id_original_artist?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
  recentlikes?: Maybe<Scalars['Float']>;
  recentviews?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "kpop.app_kpop_audio" */
export type Kpop_Audiotracks_Stddev_Order_By = {
  dislikes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_artist?: InputMaybe<Order_By>;
  id_original_artist?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  recentlikes?: InputMaybe<Order_By>;
  recentviews?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Kpop_Audiotracks_Stddev_Pop_Fields = {
  __typename?: 'kpop_audiotracks_stddev_pop_fields';
  dislikes?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  id_artist?: Maybe<Scalars['Float']>;
  id_original_artist?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
  recentlikes?: Maybe<Scalars['Float']>;
  recentviews?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "kpop.app_kpop_audio" */
export type Kpop_Audiotracks_Stddev_Pop_Order_By = {
  dislikes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_artist?: InputMaybe<Order_By>;
  id_original_artist?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  recentlikes?: InputMaybe<Order_By>;
  recentviews?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Kpop_Audiotracks_Stddev_Samp_Fields = {
  __typename?: 'kpop_audiotracks_stddev_samp_fields';
  dislikes?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  id_artist?: Maybe<Scalars['Float']>;
  id_original_artist?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
  recentlikes?: Maybe<Scalars['Float']>;
  recentviews?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "kpop.app_kpop_audio" */
export type Kpop_Audiotracks_Stddev_Samp_Order_By = {
  dislikes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_artist?: InputMaybe<Order_By>;
  id_original_artist?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  recentlikes?: InputMaybe<Order_By>;
  recentviews?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Kpop_Audiotracks_Sum_Fields = {
  __typename?: 'kpop_audiotracks_sum_fields';
  dislikes?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  id_artist?: Maybe<Scalars['bigint']>;
  id_original_artist?: Maybe<Scalars['bigint']>;
  likes?: Maybe<Scalars['bigint']>;
  recentlikes?: Maybe<Scalars['bigint']>;
  recentviews?: Maybe<Scalars['bigint']>;
  views?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "kpop.app_kpop_audio" */
export type Kpop_Audiotracks_Sum_Order_By = {
  dislikes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_artist?: InputMaybe<Order_By>;
  id_original_artist?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  recentlikes?: InputMaybe<Order_By>;
  recentviews?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
};

/** update columns of table "kpop.app_kpop_audio" */
export enum Kpop_Audiotracks_Update_Column {
  /** column name */
  Dislikes = 'dislikes',
  /** column name */
  Id = 'id',
  /** column name */
  IdArtist = 'id_artist',
  /** column name */
  IdOriginalArtist = 'id_original_artist',
  /** column name */
  Kname = 'kname',
  /** column name */
  Lastupdate = 'lastupdate',
  /** column name */
  Likes = 'likes',
  /** column name */
  Name = 'name',
  /** column name */
  NameAka = 'name_aka',
  /** column name */
  OriginalName = 'original_name',
  /** column name */
  Publishedon = 'publishedon',
  /** column name */
  Recentlikes = 'recentlikes',
  /** column name */
  Recentviews = 'recentviews',
  /** column name */
  Regionlocked = 'regionlocked',
  /** column name */
  Releasedate = 'releasedate',
  /** column name */
  Tags = 'tags',
  /** column name */
  Views = 'views',
  /** column name */
  Vlink = 'vlink'
}

/** aggregate var_pop on columns */
export type Kpop_Audiotracks_Var_Pop_Fields = {
  __typename?: 'kpop_audiotracks_var_pop_fields';
  dislikes?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  id_artist?: Maybe<Scalars['Float']>;
  id_original_artist?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
  recentlikes?: Maybe<Scalars['Float']>;
  recentviews?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "kpop.app_kpop_audio" */
export type Kpop_Audiotracks_Var_Pop_Order_By = {
  dislikes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_artist?: InputMaybe<Order_By>;
  id_original_artist?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  recentlikes?: InputMaybe<Order_By>;
  recentviews?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Kpop_Audiotracks_Var_Samp_Fields = {
  __typename?: 'kpop_audiotracks_var_samp_fields';
  dislikes?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  id_artist?: Maybe<Scalars['Float']>;
  id_original_artist?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
  recentlikes?: Maybe<Scalars['Float']>;
  recentviews?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "kpop.app_kpop_audio" */
export type Kpop_Audiotracks_Var_Samp_Order_By = {
  dislikes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_artist?: InputMaybe<Order_By>;
  id_original_artist?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  recentlikes?: InputMaybe<Order_By>;
  recentviews?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Kpop_Audiotracks_Variance_Fields = {
  __typename?: 'kpop_audiotracks_variance_fields';
  dislikes?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  id_artist?: Maybe<Scalars['Float']>;
  id_original_artist?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
  recentlikes?: Maybe<Scalars['Float']>;
  recentviews?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "kpop.app_kpop_audio" */
export type Kpop_Audiotracks_Variance_Order_By = {
  dislikes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_artist?: InputMaybe<Order_By>;
  id_original_artist?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  recentlikes?: InputMaybe<Order_By>;
  recentviews?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
};

/** columns and relationships of "kpop.app_kpop_company" */
export type Kpop_Companys = {
  __typename?: 'kpop_companys';
  alias?: Maybe<Scalars['String']>;
  id: Scalars['bigint'];
  name: Scalars['String'];
  site?: Maybe<Scalars['String']>;
};

/** aggregated selection of "kpop.app_kpop_company" */
export type Kpop_Companys_Aggregate = {
  __typename?: 'kpop_companys_aggregate';
  aggregate?: Maybe<Kpop_Companys_Aggregate_Fields>;
  nodes: Array<Kpop_Companys>;
};

/** aggregate fields of "kpop.app_kpop_company" */
export type Kpop_Companys_Aggregate_Fields = {
  __typename?: 'kpop_companys_aggregate_fields';
  avg?: Maybe<Kpop_Companys_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Kpop_Companys_Max_Fields>;
  min?: Maybe<Kpop_Companys_Min_Fields>;
  stddev?: Maybe<Kpop_Companys_Stddev_Fields>;
  stddev_pop?: Maybe<Kpop_Companys_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kpop_Companys_Stddev_Samp_Fields>;
  sum?: Maybe<Kpop_Companys_Sum_Fields>;
  var_pop?: Maybe<Kpop_Companys_Var_Pop_Fields>;
  var_samp?: Maybe<Kpop_Companys_Var_Samp_Fields>;
  variance?: Maybe<Kpop_Companys_Variance_Fields>;
};


/** aggregate fields of "kpop.app_kpop_company" */
export type Kpop_Companys_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kpop_Companys_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Kpop_Companys_Avg_Fields = {
  __typename?: 'kpop_companys_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "kpop.app_kpop_company". All fields are combined with a logical 'AND'. */
export type Kpop_Companys_Bool_Exp = {
  _and?: InputMaybe<Array<Kpop_Companys_Bool_Exp>>;
  _not?: InputMaybe<Kpop_Companys_Bool_Exp>;
  _or?: InputMaybe<Array<Kpop_Companys_Bool_Exp>>;
  alias?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  site?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "kpop.app_kpop_company" */
export enum Kpop_Companys_Constraint {
  /** unique or primary key constraint on columns "id" */
  Idx_17289Primary = 'idx_17289_primary'
}

/** input type for incrementing numeric columns in table "kpop.app_kpop_company" */
export type Kpop_Companys_Inc_Input = {
  id?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "kpop.app_kpop_company" */
export type Kpop_Companys_Insert_Input = {
  alias?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Kpop_Companys_Max_Fields = {
  __typename?: 'kpop_companys_max_fields';
  alias?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  site?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Kpop_Companys_Min_Fields = {
  __typename?: 'kpop_companys_min_fields';
  alias?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  site?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "kpop.app_kpop_company" */
export type Kpop_Companys_Mutation_Response = {
  __typename?: 'kpop_companys_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kpop_Companys>;
};

/** input type for inserting object relation for remote table "kpop.app_kpop_company" */
export type Kpop_Companys_Obj_Rel_Insert_Input = {
  data: Kpop_Companys_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Kpop_Companys_On_Conflict>;
};

/** on_conflict condition type for table "kpop.app_kpop_company" */
export type Kpop_Companys_On_Conflict = {
  constraint: Kpop_Companys_Constraint;
  update_columns?: Array<Kpop_Companys_Update_Column>;
  where?: InputMaybe<Kpop_Companys_Bool_Exp>;
};

/** Ordering options when selecting data from "kpop.app_kpop_company". */
export type Kpop_Companys_Order_By = {
  alias?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  site?: InputMaybe<Order_By>;
};

/** primary key columns input for table: kpop_companys */
export type Kpop_Companys_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "kpop.app_kpop_company" */
export enum Kpop_Companys_Select_Column {
  /** column name */
  Alias = 'alias',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Site = 'site'
}

/** input type for updating data in table "kpop.app_kpop_company" */
export type Kpop_Companys_Set_Input = {
  alias?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  site?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Kpop_Companys_Stddev_Fields = {
  __typename?: 'kpop_companys_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Kpop_Companys_Stddev_Pop_Fields = {
  __typename?: 'kpop_companys_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Kpop_Companys_Stddev_Samp_Fields = {
  __typename?: 'kpop_companys_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Kpop_Companys_Sum_Fields = {
  __typename?: 'kpop_companys_sum_fields';
  id?: Maybe<Scalars['bigint']>;
};

/** update columns of table "kpop.app_kpop_company" */
export enum Kpop_Companys_Update_Column {
  /** column name */
  Alias = 'alias',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Site = 'site'
}

/** aggregate var_pop on columns */
export type Kpop_Companys_Var_Pop_Fields = {
  __typename?: 'kpop_companys_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Kpop_Companys_Var_Samp_Fields = {
  __typename?: 'kpop_companys_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Kpop_Companys_Variance_Fields = {
  __typename?: 'kpop_companys_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "kpop.app_kpop" */
export type Kpop_Tracks = {
  __typename?: 'kpop_tracks';
  /** An object relationship */
  artist?: Maybe<Kpop_Artists>;
  awards: Scalars['bigint'];
  dislikes: Scalars['bigint'];
  id: Scalars['bigint'];
  id_artist: Scalars['bigint'];
  id_original_artist: Scalars['bigint'];
  id_parent?: Maybe<Scalars['bigint']>;
  kname: Scalars['String'];
  lastupdate: Scalars['timestamptz'];
  likes: Scalars['bigint'];
  name: Scalars['String'];
  name_aka: Scalars['String'];
  original_name: Scalars['String'];
  publishedon: Scalars['timestamptz'];
  recentlikes: Scalars['bigint'];
  recentviews: Scalars['bigint'];
  regionlocked: Scalars['String'];
  releasedate: Scalars['date'];
  tags: Scalars['String'];
  views: Scalars['bigint'];
  vlink: Scalars['String'];
  vtype: Scalars['app_kpop_vtype'];
};

/** aggregated selection of "kpop.app_kpop" */
export type Kpop_Tracks_Aggregate = {
  __typename?: 'kpop_tracks_aggregate';
  aggregate?: Maybe<Kpop_Tracks_Aggregate_Fields>;
  nodes: Array<Kpop_Tracks>;
};

/** aggregate fields of "kpop.app_kpop" */
export type Kpop_Tracks_Aggregate_Fields = {
  __typename?: 'kpop_tracks_aggregate_fields';
  avg?: Maybe<Kpop_Tracks_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Kpop_Tracks_Max_Fields>;
  min?: Maybe<Kpop_Tracks_Min_Fields>;
  stddev?: Maybe<Kpop_Tracks_Stddev_Fields>;
  stddev_pop?: Maybe<Kpop_Tracks_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Kpop_Tracks_Stddev_Samp_Fields>;
  sum?: Maybe<Kpop_Tracks_Sum_Fields>;
  var_pop?: Maybe<Kpop_Tracks_Var_Pop_Fields>;
  var_samp?: Maybe<Kpop_Tracks_Var_Samp_Fields>;
  variance?: Maybe<Kpop_Tracks_Variance_Fields>;
};


/** aggregate fields of "kpop.app_kpop" */
export type Kpop_Tracks_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Kpop_Tracks_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "kpop.app_kpop" */
export type Kpop_Tracks_Aggregate_Order_By = {
  avg?: InputMaybe<Kpop_Tracks_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Kpop_Tracks_Max_Order_By>;
  min?: InputMaybe<Kpop_Tracks_Min_Order_By>;
  stddev?: InputMaybe<Kpop_Tracks_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Kpop_Tracks_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Kpop_Tracks_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Kpop_Tracks_Sum_Order_By>;
  var_pop?: InputMaybe<Kpop_Tracks_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Kpop_Tracks_Var_Samp_Order_By>;
  variance?: InputMaybe<Kpop_Tracks_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "kpop.app_kpop" */
export type Kpop_Tracks_Arr_Rel_Insert_Input = {
  data: Array<Kpop_Tracks_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Kpop_Tracks_On_Conflict>;
};

/** aggregate avg on columns */
export type Kpop_Tracks_Avg_Fields = {
  __typename?: 'kpop_tracks_avg_fields';
  awards?: Maybe<Scalars['Float']>;
  dislikes?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  id_artist?: Maybe<Scalars['Float']>;
  id_original_artist?: Maybe<Scalars['Float']>;
  id_parent?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
  recentlikes?: Maybe<Scalars['Float']>;
  recentviews?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "kpop.app_kpop" */
export type Kpop_Tracks_Avg_Order_By = {
  awards?: InputMaybe<Order_By>;
  dislikes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_artist?: InputMaybe<Order_By>;
  id_original_artist?: InputMaybe<Order_By>;
  id_parent?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  recentlikes?: InputMaybe<Order_By>;
  recentviews?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "kpop.app_kpop". All fields are combined with a logical 'AND'. */
export type Kpop_Tracks_Bool_Exp = {
  _and?: InputMaybe<Array<Kpop_Tracks_Bool_Exp>>;
  _not?: InputMaybe<Kpop_Tracks_Bool_Exp>;
  _or?: InputMaybe<Array<Kpop_Tracks_Bool_Exp>>;
  artist?: InputMaybe<Kpop_Artists_Bool_Exp>;
  awards?: InputMaybe<Bigint_Comparison_Exp>;
  dislikes?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  id_artist?: InputMaybe<Bigint_Comparison_Exp>;
  id_original_artist?: InputMaybe<Bigint_Comparison_Exp>;
  id_parent?: InputMaybe<Bigint_Comparison_Exp>;
  kname?: InputMaybe<String_Comparison_Exp>;
  lastupdate?: InputMaybe<Timestamptz_Comparison_Exp>;
  likes?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  name_aka?: InputMaybe<String_Comparison_Exp>;
  original_name?: InputMaybe<String_Comparison_Exp>;
  publishedon?: InputMaybe<Timestamptz_Comparison_Exp>;
  recentlikes?: InputMaybe<Bigint_Comparison_Exp>;
  recentviews?: InputMaybe<Bigint_Comparison_Exp>;
  regionlocked?: InputMaybe<String_Comparison_Exp>;
  releasedate?: InputMaybe<Date_Comparison_Exp>;
  tags?: InputMaybe<String_Comparison_Exp>;
  views?: InputMaybe<Bigint_Comparison_Exp>;
  vlink?: InputMaybe<String_Comparison_Exp>;
  vtype?: InputMaybe<App_Kpop_Vtype_Comparison_Exp>;
};

/** Boolean expression to filter rows from the table "kpop.app_kpop". All fields are combined with a logical 'AND'. */
export type Kpop_Tracks_Bool_Exp_Remote_Rel_Rpd_Partstrack = {
  _and?: InputMaybe<Array<Kpop_Tracks_Bool_Exp>>;
  _not?: InputMaybe<Kpop_Tracks_Bool_Exp>;
  _or?: InputMaybe<Array<Kpop_Tracks_Bool_Exp>>;
  artist?: InputMaybe<Kpop_Artists_Bool_Exp>;
  awards?: InputMaybe<Bigint_Comparison_Exp>;
  dislikes?: InputMaybe<Bigint_Comparison_Exp>;
  id?: InputMaybe<Bigint_Comparison_Exp>;
  id_artist?: InputMaybe<Bigint_Comparison_Exp>;
  id_original_artist?: InputMaybe<Bigint_Comparison_Exp>;
  id_parent?: InputMaybe<Bigint_Comparison_Exp>;
  kname?: InputMaybe<String_Comparison_Exp>;
  lastupdate?: InputMaybe<Timestamptz_Comparison_Exp>;
  likes?: InputMaybe<Bigint_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  name_aka?: InputMaybe<String_Comparison_Exp>;
  original_name?: InputMaybe<String_Comparison_Exp>;
  publishedon?: InputMaybe<Timestamptz_Comparison_Exp>;
  recentlikes?: InputMaybe<Bigint_Comparison_Exp>;
  recentviews?: InputMaybe<Bigint_Comparison_Exp>;
  regionlocked?: InputMaybe<String_Comparison_Exp>;
  releasedate?: InputMaybe<Date_Comparison_Exp>;
  tags?: InputMaybe<String_Comparison_Exp>;
  views?: InputMaybe<Bigint_Comparison_Exp>;
  vlink?: InputMaybe<String_Comparison_Exp_Remote_Rel_Rpd_Partstrack>;
  vtype?: InputMaybe<App_Kpop_Vtype_Comparison_Exp>;
};

/** unique or primary key constraints on table "kpop.app_kpop" */
export enum Kpop_Tracks_Constraint {
  /** unique or primary key constraint on columns "id" */
  Idx_17249Primary = 'idx_17249_primary',
  /** unique or primary key constraint on columns "vlink" */
  Idx_17249Vlink = 'idx_17249_vlink'
}

/** input type for incrementing numeric columns in table "kpop.app_kpop" */
export type Kpop_Tracks_Inc_Input = {
  awards?: InputMaybe<Scalars['bigint']>;
  dislikes?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  id_artist?: InputMaybe<Scalars['bigint']>;
  id_original_artist?: InputMaybe<Scalars['bigint']>;
  id_parent?: InputMaybe<Scalars['bigint']>;
  likes?: InputMaybe<Scalars['bigint']>;
  recentlikes?: InputMaybe<Scalars['bigint']>;
  recentviews?: InputMaybe<Scalars['bigint']>;
  views?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "kpop.app_kpop" */
export type Kpop_Tracks_Insert_Input = {
  artist?: InputMaybe<Kpop_Artists_Obj_Rel_Insert_Input>;
  awards?: InputMaybe<Scalars['bigint']>;
  dislikes?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  id_artist?: InputMaybe<Scalars['bigint']>;
  id_original_artist?: InputMaybe<Scalars['bigint']>;
  id_parent?: InputMaybe<Scalars['bigint']>;
  kname?: InputMaybe<Scalars['String']>;
  lastupdate?: InputMaybe<Scalars['timestamptz']>;
  likes?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  name_aka?: InputMaybe<Scalars['String']>;
  original_name?: InputMaybe<Scalars['String']>;
  publishedon?: InputMaybe<Scalars['timestamptz']>;
  recentlikes?: InputMaybe<Scalars['bigint']>;
  recentviews?: InputMaybe<Scalars['bigint']>;
  regionlocked?: InputMaybe<Scalars['String']>;
  releasedate?: InputMaybe<Scalars['date']>;
  tags?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Scalars['bigint']>;
  vlink?: InputMaybe<Scalars['String']>;
  vtype?: InputMaybe<Scalars['app_kpop_vtype']>;
};

/** aggregate max on columns */
export type Kpop_Tracks_Max_Fields = {
  __typename?: 'kpop_tracks_max_fields';
  awards?: Maybe<Scalars['bigint']>;
  dislikes?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  id_artist?: Maybe<Scalars['bigint']>;
  id_original_artist?: Maybe<Scalars['bigint']>;
  id_parent?: Maybe<Scalars['bigint']>;
  kname?: Maybe<Scalars['String']>;
  lastupdate?: Maybe<Scalars['timestamptz']>;
  likes?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  name_aka?: Maybe<Scalars['String']>;
  original_name?: Maybe<Scalars['String']>;
  publishedon?: Maybe<Scalars['timestamptz']>;
  recentlikes?: Maybe<Scalars['bigint']>;
  recentviews?: Maybe<Scalars['bigint']>;
  regionlocked?: Maybe<Scalars['String']>;
  releasedate?: Maybe<Scalars['date']>;
  tags?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['bigint']>;
  vlink?: Maybe<Scalars['String']>;
  vtype?: Maybe<Scalars['app_kpop_vtype']>;
};

/** order by max() on columns of table "kpop.app_kpop" */
export type Kpop_Tracks_Max_Order_By = {
  awards?: InputMaybe<Order_By>;
  dislikes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_artist?: InputMaybe<Order_By>;
  id_original_artist?: InputMaybe<Order_By>;
  id_parent?: InputMaybe<Order_By>;
  kname?: InputMaybe<Order_By>;
  lastupdate?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_aka?: InputMaybe<Order_By>;
  original_name?: InputMaybe<Order_By>;
  publishedon?: InputMaybe<Order_By>;
  recentlikes?: InputMaybe<Order_By>;
  recentviews?: InputMaybe<Order_By>;
  regionlocked?: InputMaybe<Order_By>;
  releasedate?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
  vlink?: InputMaybe<Order_By>;
  vtype?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Kpop_Tracks_Min_Fields = {
  __typename?: 'kpop_tracks_min_fields';
  awards?: Maybe<Scalars['bigint']>;
  dislikes?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  id_artist?: Maybe<Scalars['bigint']>;
  id_original_artist?: Maybe<Scalars['bigint']>;
  id_parent?: Maybe<Scalars['bigint']>;
  kname?: Maybe<Scalars['String']>;
  lastupdate?: Maybe<Scalars['timestamptz']>;
  likes?: Maybe<Scalars['bigint']>;
  name?: Maybe<Scalars['String']>;
  name_aka?: Maybe<Scalars['String']>;
  original_name?: Maybe<Scalars['String']>;
  publishedon?: Maybe<Scalars['timestamptz']>;
  recentlikes?: Maybe<Scalars['bigint']>;
  recentviews?: Maybe<Scalars['bigint']>;
  regionlocked?: Maybe<Scalars['String']>;
  releasedate?: Maybe<Scalars['date']>;
  tags?: Maybe<Scalars['String']>;
  views?: Maybe<Scalars['bigint']>;
  vlink?: Maybe<Scalars['String']>;
  vtype?: Maybe<Scalars['app_kpop_vtype']>;
};

/** order by min() on columns of table "kpop.app_kpop" */
export type Kpop_Tracks_Min_Order_By = {
  awards?: InputMaybe<Order_By>;
  dislikes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_artist?: InputMaybe<Order_By>;
  id_original_artist?: InputMaybe<Order_By>;
  id_parent?: InputMaybe<Order_By>;
  kname?: InputMaybe<Order_By>;
  lastupdate?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_aka?: InputMaybe<Order_By>;
  original_name?: InputMaybe<Order_By>;
  publishedon?: InputMaybe<Order_By>;
  recentlikes?: InputMaybe<Order_By>;
  recentviews?: InputMaybe<Order_By>;
  regionlocked?: InputMaybe<Order_By>;
  releasedate?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
  vlink?: InputMaybe<Order_By>;
  vtype?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "kpop.app_kpop" */
export type Kpop_Tracks_Mutation_Response = {
  __typename?: 'kpop_tracks_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Kpop_Tracks>;
};

/** on_conflict condition type for table "kpop.app_kpop" */
export type Kpop_Tracks_On_Conflict = {
  constraint: Kpop_Tracks_Constraint;
  update_columns?: Array<Kpop_Tracks_Update_Column>;
  where?: InputMaybe<Kpop_Tracks_Bool_Exp>;
};

/** Ordering options when selecting data from "kpop.app_kpop". */
export type Kpop_Tracks_Order_By = {
  artist?: InputMaybe<Kpop_Artists_Order_By>;
  awards?: InputMaybe<Order_By>;
  dislikes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_artist?: InputMaybe<Order_By>;
  id_original_artist?: InputMaybe<Order_By>;
  id_parent?: InputMaybe<Order_By>;
  kname?: InputMaybe<Order_By>;
  lastupdate?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  name_aka?: InputMaybe<Order_By>;
  original_name?: InputMaybe<Order_By>;
  publishedon?: InputMaybe<Order_By>;
  recentlikes?: InputMaybe<Order_By>;
  recentviews?: InputMaybe<Order_By>;
  regionlocked?: InputMaybe<Order_By>;
  releasedate?: InputMaybe<Order_By>;
  tags?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
  vlink?: InputMaybe<Order_By>;
  vtype?: InputMaybe<Order_By>;
};

/** primary key columns input for table: kpop_tracks */
export type Kpop_Tracks_Pk_Columns_Input = {
  id: Scalars['bigint'];
};

/** select columns of table "kpop.app_kpop" */
export enum Kpop_Tracks_Select_Column {
  /** column name */
  Awards = 'awards',
  /** column name */
  Dislikes = 'dislikes',
  /** column name */
  Id = 'id',
  /** column name */
  IdArtist = 'id_artist',
  /** column name */
  IdOriginalArtist = 'id_original_artist',
  /** column name */
  IdParent = 'id_parent',
  /** column name */
  Kname = 'kname',
  /** column name */
  Lastupdate = 'lastupdate',
  /** column name */
  Likes = 'likes',
  /** column name */
  Name = 'name',
  /** column name */
  NameAka = 'name_aka',
  /** column name */
  OriginalName = 'original_name',
  /** column name */
  Publishedon = 'publishedon',
  /** column name */
  Recentlikes = 'recentlikes',
  /** column name */
  Recentviews = 'recentviews',
  /** column name */
  Regionlocked = 'regionlocked',
  /** column name */
  Releasedate = 'releasedate',
  /** column name */
  Tags = 'tags',
  /** column name */
  Views = 'views',
  /** column name */
  Vlink = 'vlink',
  /** column name */
  Vtype = 'vtype'
}

/** input type for updating data in table "kpop.app_kpop" */
export type Kpop_Tracks_Set_Input = {
  awards?: InputMaybe<Scalars['bigint']>;
  dislikes?: InputMaybe<Scalars['bigint']>;
  id?: InputMaybe<Scalars['bigint']>;
  id_artist?: InputMaybe<Scalars['bigint']>;
  id_original_artist?: InputMaybe<Scalars['bigint']>;
  id_parent?: InputMaybe<Scalars['bigint']>;
  kname?: InputMaybe<Scalars['String']>;
  lastupdate?: InputMaybe<Scalars['timestamptz']>;
  likes?: InputMaybe<Scalars['bigint']>;
  name?: InputMaybe<Scalars['String']>;
  name_aka?: InputMaybe<Scalars['String']>;
  original_name?: InputMaybe<Scalars['String']>;
  publishedon?: InputMaybe<Scalars['timestamptz']>;
  recentlikes?: InputMaybe<Scalars['bigint']>;
  recentviews?: InputMaybe<Scalars['bigint']>;
  regionlocked?: InputMaybe<Scalars['String']>;
  releasedate?: InputMaybe<Scalars['date']>;
  tags?: InputMaybe<Scalars['String']>;
  views?: InputMaybe<Scalars['bigint']>;
  vlink?: InputMaybe<Scalars['String']>;
  vtype?: InputMaybe<Scalars['app_kpop_vtype']>;
};

/** aggregate stddev on columns */
export type Kpop_Tracks_Stddev_Fields = {
  __typename?: 'kpop_tracks_stddev_fields';
  awards?: Maybe<Scalars['Float']>;
  dislikes?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  id_artist?: Maybe<Scalars['Float']>;
  id_original_artist?: Maybe<Scalars['Float']>;
  id_parent?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
  recentlikes?: Maybe<Scalars['Float']>;
  recentviews?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "kpop.app_kpop" */
export type Kpop_Tracks_Stddev_Order_By = {
  awards?: InputMaybe<Order_By>;
  dislikes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_artist?: InputMaybe<Order_By>;
  id_original_artist?: InputMaybe<Order_By>;
  id_parent?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  recentlikes?: InputMaybe<Order_By>;
  recentviews?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Kpop_Tracks_Stddev_Pop_Fields = {
  __typename?: 'kpop_tracks_stddev_pop_fields';
  awards?: Maybe<Scalars['Float']>;
  dislikes?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  id_artist?: Maybe<Scalars['Float']>;
  id_original_artist?: Maybe<Scalars['Float']>;
  id_parent?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
  recentlikes?: Maybe<Scalars['Float']>;
  recentviews?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "kpop.app_kpop" */
export type Kpop_Tracks_Stddev_Pop_Order_By = {
  awards?: InputMaybe<Order_By>;
  dislikes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_artist?: InputMaybe<Order_By>;
  id_original_artist?: InputMaybe<Order_By>;
  id_parent?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  recentlikes?: InputMaybe<Order_By>;
  recentviews?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Kpop_Tracks_Stddev_Samp_Fields = {
  __typename?: 'kpop_tracks_stddev_samp_fields';
  awards?: Maybe<Scalars['Float']>;
  dislikes?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  id_artist?: Maybe<Scalars['Float']>;
  id_original_artist?: Maybe<Scalars['Float']>;
  id_parent?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
  recentlikes?: Maybe<Scalars['Float']>;
  recentviews?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "kpop.app_kpop" */
export type Kpop_Tracks_Stddev_Samp_Order_By = {
  awards?: InputMaybe<Order_By>;
  dislikes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_artist?: InputMaybe<Order_By>;
  id_original_artist?: InputMaybe<Order_By>;
  id_parent?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  recentlikes?: InputMaybe<Order_By>;
  recentviews?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Kpop_Tracks_Sum_Fields = {
  __typename?: 'kpop_tracks_sum_fields';
  awards?: Maybe<Scalars['bigint']>;
  dislikes?: Maybe<Scalars['bigint']>;
  id?: Maybe<Scalars['bigint']>;
  id_artist?: Maybe<Scalars['bigint']>;
  id_original_artist?: Maybe<Scalars['bigint']>;
  id_parent?: Maybe<Scalars['bigint']>;
  likes?: Maybe<Scalars['bigint']>;
  recentlikes?: Maybe<Scalars['bigint']>;
  recentviews?: Maybe<Scalars['bigint']>;
  views?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "kpop.app_kpop" */
export type Kpop_Tracks_Sum_Order_By = {
  awards?: InputMaybe<Order_By>;
  dislikes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_artist?: InputMaybe<Order_By>;
  id_original_artist?: InputMaybe<Order_By>;
  id_parent?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  recentlikes?: InputMaybe<Order_By>;
  recentviews?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
};

/** update columns of table "kpop.app_kpop" */
export enum Kpop_Tracks_Update_Column {
  /** column name */
  Awards = 'awards',
  /** column name */
  Dislikes = 'dislikes',
  /** column name */
  Id = 'id',
  /** column name */
  IdArtist = 'id_artist',
  /** column name */
  IdOriginalArtist = 'id_original_artist',
  /** column name */
  IdParent = 'id_parent',
  /** column name */
  Kname = 'kname',
  /** column name */
  Lastupdate = 'lastupdate',
  /** column name */
  Likes = 'likes',
  /** column name */
  Name = 'name',
  /** column name */
  NameAka = 'name_aka',
  /** column name */
  OriginalName = 'original_name',
  /** column name */
  Publishedon = 'publishedon',
  /** column name */
  Recentlikes = 'recentlikes',
  /** column name */
  Recentviews = 'recentviews',
  /** column name */
  Regionlocked = 'regionlocked',
  /** column name */
  Releasedate = 'releasedate',
  /** column name */
  Tags = 'tags',
  /** column name */
  Views = 'views',
  /** column name */
  Vlink = 'vlink',
  /** column name */
  Vtype = 'vtype'
}

/** aggregate var_pop on columns */
export type Kpop_Tracks_Var_Pop_Fields = {
  __typename?: 'kpop_tracks_var_pop_fields';
  awards?: Maybe<Scalars['Float']>;
  dislikes?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  id_artist?: Maybe<Scalars['Float']>;
  id_original_artist?: Maybe<Scalars['Float']>;
  id_parent?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
  recentlikes?: Maybe<Scalars['Float']>;
  recentviews?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "kpop.app_kpop" */
export type Kpop_Tracks_Var_Pop_Order_By = {
  awards?: InputMaybe<Order_By>;
  dislikes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_artist?: InputMaybe<Order_By>;
  id_original_artist?: InputMaybe<Order_By>;
  id_parent?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  recentlikes?: InputMaybe<Order_By>;
  recentviews?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Kpop_Tracks_Var_Samp_Fields = {
  __typename?: 'kpop_tracks_var_samp_fields';
  awards?: Maybe<Scalars['Float']>;
  dislikes?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  id_artist?: Maybe<Scalars['Float']>;
  id_original_artist?: Maybe<Scalars['Float']>;
  id_parent?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
  recentlikes?: Maybe<Scalars['Float']>;
  recentviews?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "kpop.app_kpop" */
export type Kpop_Tracks_Var_Samp_Order_By = {
  awards?: InputMaybe<Order_By>;
  dislikes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_artist?: InputMaybe<Order_By>;
  id_original_artist?: InputMaybe<Order_By>;
  id_parent?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  recentlikes?: InputMaybe<Order_By>;
  recentviews?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Kpop_Tracks_Variance_Fields = {
  __typename?: 'kpop_tracks_variance_fields';
  awards?: Maybe<Scalars['Float']>;
  dislikes?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  id_artist?: Maybe<Scalars['Float']>;
  id_original_artist?: Maybe<Scalars['Float']>;
  id_parent?: Maybe<Scalars['Float']>;
  likes?: Maybe<Scalars['Float']>;
  recentlikes?: Maybe<Scalars['Float']>;
  recentviews?: Maybe<Scalars['Float']>;
  views?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "kpop.app_kpop" */
export type Kpop_Tracks_Variance_Order_By = {
  awards?: InputMaybe<Order_By>;
  dislikes?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  id_artist?: InputMaybe<Order_By>;
  id_original_artist?: InputMaybe<Order_By>;
  id_parent?: InputMaybe<Order_By>;
  likes?: InputMaybe<Order_By>;
  recentlikes?: InputMaybe<Order_By>;
  recentviews?: InputMaybe<Order_By>;
  views?: InputMaybe<Order_By>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "storage.buckets" */
  deleteBucket?: Maybe<Buckets>;
  /** delete data from the table: "storage.buckets" */
  deleteBuckets?: Maybe<Buckets_Mutation_Response>;
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<Files>;
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<Files_Mutation_Response>;
  /** delete data from the table: "keycloak.keycloak_role" */
  delete_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** delete single row from the table: "keycloak.keycloak_role" */
  delete_auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** delete data from the table: "keycloak.user_private" */
  delete_auth_user_private?: Maybe<Auth_User_Private_Mutation_Response>;
  /** delete data from the table: "keycloak.user_role_mapping" */
  delete_auth_user_role_mappings?: Maybe<Auth_User_Role_Mappings_Mutation_Response>;
  /** delete single row from the table: "keycloak.user_role_mapping" */
  delete_auth_user_role_mappings_by_pk?: Maybe<Auth_User_Role_Mappings>;
  /** delete data from the table: "keycloak.user_entity" */
  delete_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** delete single row from the table: "keycloak.user_entity" */
  delete_auth_users_by_pk?: Maybe<Auth_Users>;
  /** delete data from the table: "kpop.app_kpop_group" */
  delete_kpop_artists?: Maybe<Kpop_Artists_Mutation_Response>;
  /** delete single row from the table: "kpop.app_kpop_group" */
  delete_kpop_artists_by_pk?: Maybe<Kpop_Artists>;
  /** delete data from the table: "kpop.app_kpop_audio" */
  delete_kpop_audiotracks?: Maybe<Kpop_Audiotracks_Mutation_Response>;
  /** delete single row from the table: "kpop.app_kpop_audio" */
  delete_kpop_audiotracks_by_pk?: Maybe<Kpop_Audiotracks>;
  /** delete data from the table: "kpop.app_kpop_company" */
  delete_kpop_companys?: Maybe<Kpop_Companys_Mutation_Response>;
  /** delete single row from the table: "kpop.app_kpop_company" */
  delete_kpop_companys_by_pk?: Maybe<Kpop_Companys>;
  /** delete data from the table: "kpop.app_kpop" */
  delete_kpop_tracks?: Maybe<Kpop_Tracks_Mutation_Response>;
  /** delete single row from the table: "kpop.app_kpop" */
  delete_kpop_tracks_by_pk?: Maybe<Kpop_Tracks>;
  /** delete single row from the table: "rpd.parts" */
  delete_rpd_part?: Maybe<Rpd_Parts>;
  /** delete data from the table: "rpd.parts" */
  delete_rpd_parts?: Maybe<Rpd_Parts_Mutation_Response>;
  /** delete single row from the table: "rpd.playlists" */
  delete_rpd_playlist?: Maybe<Rpd_Playlists>;
  /** delete single row from the table: "rpd.playlist_parts" */
  delete_rpd_playlist_part?: Maybe<Rpd_Playlist_Parts>;
  /** delete data from the table: "rpd.playlist_parts" */
  delete_rpd_playlist_parts?: Maybe<Rpd_Playlist_Parts_Mutation_Response>;
  /** delete data from the table: "rpd.playlists" */
  delete_rpd_playlists?: Maybe<Rpd_Playlists_Mutation_Response>;
  /** insert a single row into the table: "storage.buckets" */
  insertBucket?: Maybe<Buckets>;
  /** insert data into the table: "storage.buckets" */
  insertBuckets?: Maybe<Buckets_Mutation_Response>;
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<Files>;
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<Files_Mutation_Response>;
  /** insert data into the table: "keycloak.keycloak_role" */
  insert_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** insert a single row into the table: "keycloak.keycloak_role" */
  insert_auth_roles_one?: Maybe<Auth_Roles>;
  /** insert data into the table: "keycloak.user_private" */
  insert_auth_user_private?: Maybe<Auth_User_Private_Mutation_Response>;
  /** insert a single row into the table: "keycloak.user_private" */
  insert_auth_user_private_one?: Maybe<Auth_User_Private>;
  /** insert data into the table: "keycloak.user_role_mapping" */
  insert_auth_user_role_mappings?: Maybe<Auth_User_Role_Mappings_Mutation_Response>;
  /** insert a single row into the table: "keycloak.user_role_mapping" */
  insert_auth_user_role_mappings_one?: Maybe<Auth_User_Role_Mappings>;
  /** insert data into the table: "keycloak.user_entity" */
  insert_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** insert a single row into the table: "keycloak.user_entity" */
  insert_auth_users_one?: Maybe<Auth_Users>;
  /** insert data into the table: "kpop.app_kpop_group" */
  insert_kpop_artists?: Maybe<Kpop_Artists_Mutation_Response>;
  /** insert a single row into the table: "kpop.app_kpop_group" */
  insert_kpop_artists_one?: Maybe<Kpop_Artists>;
  /** insert data into the table: "kpop.app_kpop_audio" */
  insert_kpop_audiotracks?: Maybe<Kpop_Audiotracks_Mutation_Response>;
  /** insert a single row into the table: "kpop.app_kpop_audio" */
  insert_kpop_audiotracks_one?: Maybe<Kpop_Audiotracks>;
  /** insert data into the table: "kpop.app_kpop_company" */
  insert_kpop_companys?: Maybe<Kpop_Companys_Mutation_Response>;
  /** insert a single row into the table: "kpop.app_kpop_company" */
  insert_kpop_companys_one?: Maybe<Kpop_Companys>;
  /** insert data into the table: "kpop.app_kpop" */
  insert_kpop_tracks?: Maybe<Kpop_Tracks_Mutation_Response>;
  /** insert a single row into the table: "kpop.app_kpop" */
  insert_kpop_tracks_one?: Maybe<Kpop_Tracks>;
  /** insert a single row into the table: "rpd.parts" */
  insert_rpd_part?: Maybe<Rpd_Parts>;
  /** insert data into the table: "rpd.parts" */
  insert_rpd_parts?: Maybe<Rpd_Parts_Mutation_Response>;
  /** insert a single row into the table: "rpd.playlists" */
  insert_rpd_playlist?: Maybe<Rpd_Playlists>;
  /** insert a single row into the table: "rpd.playlist_parts" */
  insert_rpd_playlist_part?: Maybe<Rpd_Playlist_Parts>;
  /** insert data into the table: "rpd.playlist_parts" */
  insert_rpd_playlist_parts?: Maybe<Rpd_Playlist_Parts_Mutation_Response>;
  /** insert data into the table: "rpd.playlists" */
  insert_rpd_playlists?: Maybe<Rpd_Playlists_Mutation_Response>;
  /** update single row of the table: "storage.buckets" */
  updateBucket?: Maybe<Buckets>;
  /** update data of the table: "storage.buckets" */
  updateBuckets?: Maybe<Buckets_Mutation_Response>;
  /** update single row of the table: "storage.files" */
  updateFile?: Maybe<Files>;
  /** update data of the table: "storage.files" */
  updateFiles?: Maybe<Files_Mutation_Response>;
  /** update data of the table: "keycloak.keycloak_role" */
  update_auth_roles?: Maybe<Auth_Roles_Mutation_Response>;
  /** update single row of the table: "keycloak.keycloak_role" */
  update_auth_roles_by_pk?: Maybe<Auth_Roles>;
  /** update data of the table: "keycloak.user_private" */
  update_auth_user_private?: Maybe<Auth_User_Private_Mutation_Response>;
  /** update data of the table: "keycloak.user_role_mapping" */
  update_auth_user_role_mappings?: Maybe<Auth_User_Role_Mappings_Mutation_Response>;
  /** update single row of the table: "keycloak.user_role_mapping" */
  update_auth_user_role_mappings_by_pk?: Maybe<Auth_User_Role_Mappings>;
  /** update data of the table: "keycloak.user_entity" */
  update_auth_users?: Maybe<Auth_Users_Mutation_Response>;
  /** update single row of the table: "keycloak.user_entity" */
  update_auth_users_by_pk?: Maybe<Auth_Users>;
  /** update data of the table: "kpop.app_kpop_group" */
  update_kpop_artists?: Maybe<Kpop_Artists_Mutation_Response>;
  /** update single row of the table: "kpop.app_kpop_group" */
  update_kpop_artists_by_pk?: Maybe<Kpop_Artists>;
  /** update data of the table: "kpop.app_kpop_audio" */
  update_kpop_audiotracks?: Maybe<Kpop_Audiotracks_Mutation_Response>;
  /** update single row of the table: "kpop.app_kpop_audio" */
  update_kpop_audiotracks_by_pk?: Maybe<Kpop_Audiotracks>;
  /** update data of the table: "kpop.app_kpop_company" */
  update_kpop_companys?: Maybe<Kpop_Companys_Mutation_Response>;
  /** update single row of the table: "kpop.app_kpop_company" */
  update_kpop_companys_by_pk?: Maybe<Kpop_Companys>;
  /** update data of the table: "kpop.app_kpop" */
  update_kpop_tracks?: Maybe<Kpop_Tracks_Mutation_Response>;
  /** update single row of the table: "kpop.app_kpop" */
  update_kpop_tracks_by_pk?: Maybe<Kpop_Tracks>;
  /** update single row of the table: "rpd.parts" */
  update_rpd_part?: Maybe<Rpd_Parts>;
  /** update data of the table: "rpd.parts" */
  update_rpd_parts?: Maybe<Rpd_Parts_Mutation_Response>;
  /** update single row of the table: "rpd.playlists" */
  update_rpd_playlist?: Maybe<Rpd_Playlists>;
  /** update single row of the table: "rpd.playlist_parts" */
  update_rpd_playlist_part?: Maybe<Rpd_Playlist_Parts>;
  /** update data of the table: "rpd.playlist_parts" */
  update_rpd_playlist_parts?: Maybe<Rpd_Playlist_Parts_Mutation_Response>;
  /** update data of the table: "rpd.playlists" */
  update_rpd_playlists?: Maybe<Rpd_Playlists_Mutation_Response>;
};


/** mutation root */
export type Mutation_RootDeleteBucketArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDeleteBucketsArgs = {
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDeleteFileArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDeleteFilesArgs = {
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_RolesArgs = {
  where: Auth_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Roles_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_User_PrivateArgs = {
  where: Auth_User_Private_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_User_Role_MappingsArgs = {
  where: Auth_User_Role_Mappings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_User_Role_Mappings_By_PkArgs = {
  role_id: Scalars['String'];
  user_id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Auth_UsersArgs = {
  where: Auth_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Auth_Users_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Kpop_ArtistsArgs = {
  where: Kpop_Artists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kpop_Artists_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Kpop_AudiotracksArgs = {
  where: Kpop_Audiotracks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kpop_Audiotracks_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Kpop_CompanysArgs = {
  where: Kpop_Companys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kpop_Companys_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Kpop_TracksArgs = {
  where: Kpop_Tracks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Kpop_Tracks_By_PkArgs = {
  id: Scalars['bigint'];
};


/** mutation root */
export type Mutation_RootDelete_Rpd_PartArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Rpd_PartsArgs = {
  where: Rpd_Parts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rpd_PlaylistArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Rpd_Playlist_PartArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Rpd_Playlist_PartsArgs = {
  where: Rpd_Playlist_Parts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Rpd_PlaylistsArgs = {
  where: Rpd_Playlists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootInsertBucketArgs = {
  object: Buckets_Insert_Input;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertBucketsArgs = {
  objects: Array<Buckets_Insert_Input>;
  on_conflict?: InputMaybe<Buckets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFileArgs = {
  object: Files_Insert_Input;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsertFilesArgs = {
  objects: Array<Files_Insert_Input>;
  on_conflict?: InputMaybe<Files_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_RolesArgs = {
  objects: Array<Auth_Roles_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Roles_OneArgs = {
  object: Auth_Roles_Insert_Input;
  on_conflict?: InputMaybe<Auth_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_User_PrivateArgs = {
  objects: Array<Auth_User_Private_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_User_Private_OneArgs = {
  object: Auth_User_Private_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_Auth_User_Role_MappingsArgs = {
  objects: Array<Auth_User_Role_Mappings_Insert_Input>;
  on_conflict?: InputMaybe<Auth_User_Role_Mappings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_User_Role_Mappings_OneArgs = {
  object: Auth_User_Role_Mappings_Insert_Input;
  on_conflict?: InputMaybe<Auth_User_Role_Mappings_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_UsersArgs = {
  objects: Array<Auth_Users_Insert_Input>;
  on_conflict?: InputMaybe<Auth_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Auth_Users_OneArgs = {
  object: Auth_Users_Insert_Input;
  on_conflict?: InputMaybe<Auth_Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kpop_ArtistsArgs = {
  objects: Array<Kpop_Artists_Insert_Input>;
  on_conflict?: InputMaybe<Kpop_Artists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kpop_Artists_OneArgs = {
  object: Kpop_Artists_Insert_Input;
  on_conflict?: InputMaybe<Kpop_Artists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kpop_AudiotracksArgs = {
  objects: Array<Kpop_Audiotracks_Insert_Input>;
  on_conflict?: InputMaybe<Kpop_Audiotracks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kpop_Audiotracks_OneArgs = {
  object: Kpop_Audiotracks_Insert_Input;
  on_conflict?: InputMaybe<Kpop_Audiotracks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kpop_CompanysArgs = {
  objects: Array<Kpop_Companys_Insert_Input>;
  on_conflict?: InputMaybe<Kpop_Companys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kpop_Companys_OneArgs = {
  object: Kpop_Companys_Insert_Input;
  on_conflict?: InputMaybe<Kpop_Companys_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kpop_TracksArgs = {
  objects: Array<Kpop_Tracks_Insert_Input>;
  on_conflict?: InputMaybe<Kpop_Tracks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Kpop_Tracks_OneArgs = {
  object: Kpop_Tracks_Insert_Input;
  on_conflict?: InputMaybe<Kpop_Tracks_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rpd_PartArgs = {
  object: Rpd_Parts_Insert_Input;
  on_conflict?: InputMaybe<Rpd_Parts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rpd_PartsArgs = {
  objects: Array<Rpd_Parts_Insert_Input>;
  on_conflict?: InputMaybe<Rpd_Parts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rpd_PlaylistArgs = {
  object: Rpd_Playlists_Insert_Input;
  on_conflict?: InputMaybe<Rpd_Playlists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rpd_Playlist_PartArgs = {
  object: Rpd_Playlist_Parts_Insert_Input;
  on_conflict?: InputMaybe<Rpd_Playlist_Parts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rpd_Playlist_PartsArgs = {
  objects: Array<Rpd_Playlist_Parts_Insert_Input>;
  on_conflict?: InputMaybe<Rpd_Playlist_Parts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Rpd_PlaylistsArgs = {
  objects: Array<Rpd_Playlists_Insert_Input>;
  on_conflict?: InputMaybe<Rpd_Playlists_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdateBucketArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  pk_columns: Buckets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateBucketsArgs = {
  _inc?: InputMaybe<Buckets_Inc_Input>;
  _set?: InputMaybe<Buckets_Set_Input>;
  where: Buckets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdateFileArgs = {
  _inc?: InputMaybe<Files_Inc_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  pk_columns: Files_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdateFilesArgs = {
  _inc?: InputMaybe<Files_Inc_Input>;
  _set?: InputMaybe<Files_Set_Input>;
  where: Files_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_RolesArgs = {
  _set?: InputMaybe<Auth_Roles_Set_Input>;
  where: Auth_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Roles_By_PkArgs = {
  _set?: InputMaybe<Auth_Roles_Set_Input>;
  pk_columns: Auth_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_User_PrivateArgs = {
  _inc?: InputMaybe<Auth_User_Private_Inc_Input>;
  _set?: InputMaybe<Auth_User_Private_Set_Input>;
  where: Auth_User_Private_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_User_Role_MappingsArgs = {
  _set?: InputMaybe<Auth_User_Role_Mappings_Set_Input>;
  where: Auth_User_Role_Mappings_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_User_Role_Mappings_By_PkArgs = {
  _set?: InputMaybe<Auth_User_Role_Mappings_Set_Input>;
  pk_columns: Auth_User_Role_Mappings_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_UsersArgs = {
  _inc?: InputMaybe<Auth_Users_Inc_Input>;
  _set?: InputMaybe<Auth_Users_Set_Input>;
  where: Auth_Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Auth_Users_By_PkArgs = {
  _inc?: InputMaybe<Auth_Users_Inc_Input>;
  _set?: InputMaybe<Auth_Users_Set_Input>;
  pk_columns: Auth_Users_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kpop_ArtistsArgs = {
  _inc?: InputMaybe<Kpop_Artists_Inc_Input>;
  _set?: InputMaybe<Kpop_Artists_Set_Input>;
  where: Kpop_Artists_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kpop_Artists_By_PkArgs = {
  _inc?: InputMaybe<Kpop_Artists_Inc_Input>;
  _set?: InputMaybe<Kpop_Artists_Set_Input>;
  pk_columns: Kpop_Artists_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kpop_AudiotracksArgs = {
  _inc?: InputMaybe<Kpop_Audiotracks_Inc_Input>;
  _set?: InputMaybe<Kpop_Audiotracks_Set_Input>;
  where: Kpop_Audiotracks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kpop_Audiotracks_By_PkArgs = {
  _inc?: InputMaybe<Kpop_Audiotracks_Inc_Input>;
  _set?: InputMaybe<Kpop_Audiotracks_Set_Input>;
  pk_columns: Kpop_Audiotracks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kpop_CompanysArgs = {
  _inc?: InputMaybe<Kpop_Companys_Inc_Input>;
  _set?: InputMaybe<Kpop_Companys_Set_Input>;
  where: Kpop_Companys_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kpop_Companys_By_PkArgs = {
  _inc?: InputMaybe<Kpop_Companys_Inc_Input>;
  _set?: InputMaybe<Kpop_Companys_Set_Input>;
  pk_columns: Kpop_Companys_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Kpop_TracksArgs = {
  _inc?: InputMaybe<Kpop_Tracks_Inc_Input>;
  _set?: InputMaybe<Kpop_Tracks_Set_Input>;
  where: Kpop_Tracks_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Kpop_Tracks_By_PkArgs = {
  _inc?: InputMaybe<Kpop_Tracks_Inc_Input>;
  _set?: InputMaybe<Kpop_Tracks_Set_Input>;
  pk_columns: Kpop_Tracks_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rpd_PartArgs = {
  _inc?: InputMaybe<Rpd_Parts_Inc_Input>;
  _set?: InputMaybe<Rpd_Parts_Set_Input>;
  pk_columns: Rpd_Parts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rpd_PartsArgs = {
  _inc?: InputMaybe<Rpd_Parts_Inc_Input>;
  _set?: InputMaybe<Rpd_Parts_Set_Input>;
  where: Rpd_Parts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rpd_PlaylistArgs = {
  _inc?: InputMaybe<Rpd_Playlists_Inc_Input>;
  _set?: InputMaybe<Rpd_Playlists_Set_Input>;
  pk_columns: Rpd_Playlists_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rpd_Playlist_PartArgs = {
  _inc?: InputMaybe<Rpd_Playlist_Parts_Inc_Input>;
  _set?: InputMaybe<Rpd_Playlist_Parts_Set_Input>;
  pk_columns: Rpd_Playlist_Parts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Rpd_Playlist_PartsArgs = {
  _inc?: InputMaybe<Rpd_Playlist_Parts_Inc_Input>;
  _set?: InputMaybe<Rpd_Playlist_Parts_Set_Input>;
  where: Rpd_Playlist_Parts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Rpd_PlaylistsArgs = {
  _inc?: InputMaybe<Rpd_Playlists_Inc_Input>;
  _set?: InputMaybe<Rpd_Playlists_Set_Input>;
  where: Rpd_Playlists_Bool_Exp;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "keycloak.keycloak_role" using primary key columns */
  auth_role?: Maybe<Auth_Roles>;
  /** fetch data from the table: "keycloak.keycloak_role" */
  auth_roles: Array<Auth_Roles>;
  /** fetch aggregated fields from the table: "keycloak.keycloak_role" */
  auth_roles_aggregate: Auth_Roles_Aggregate;
  /** fetch data from the table: "keycloak.user_entity" using primary key columns */
  auth_user?: Maybe<Auth_Users>;
  /** fetch data from the table: "keycloak.user_private" */
  auth_user_private: Array<Auth_User_Private>;
  /** fetch aggregated fields from the table: "keycloak.user_private" */
  auth_user_private_aggregate: Auth_User_Private_Aggregate;
  /** fetch data from the table: "keycloak.user_role_mapping" using primary key columns */
  auth_user_role_mapping?: Maybe<Auth_User_Role_Mappings>;
  /** fetch data from the table: "keycloak.user_role_mapping" */
  auth_user_role_mappings: Array<Auth_User_Role_Mappings>;
  /** fetch aggregated fields from the table: "keycloak.user_role_mapping" */
  auth_user_role_mappings_aggregate: Auth_User_Role_Mappings_Aggregate;
  /** fetch data from the table: "keycloak.user_entity" */
  auth_users: Array<Auth_Users>;
  /** fetch aggregated fields from the table: "keycloak.user_entity" */
  auth_users_aggregate: Auth_Users_Aggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table: "kpop.app_kpop_group" */
  kpop_artists: Array<Kpop_Artists>;
  /** fetch aggregated fields from the table: "kpop.app_kpop_group" */
  kpop_artists_aggregate: Kpop_Artists_Aggregate;
  /** fetch data from the table: "kpop.app_kpop_group" using primary key columns */
  kpop_artists_by_pk?: Maybe<Kpop_Artists>;
  /** fetch data from the table: "kpop.app_kpop_audio" */
  kpop_audiotracks: Array<Kpop_Audiotracks>;
  /** fetch aggregated fields from the table: "kpop.app_kpop_audio" */
  kpop_audiotracks_aggregate: Kpop_Audiotracks_Aggregate;
  /** fetch data from the table: "kpop.app_kpop_audio" using primary key columns */
  kpop_audiotracks_by_pk?: Maybe<Kpop_Audiotracks>;
  /** fetch data from the table: "kpop.app_kpop_company" */
  kpop_companys: Array<Kpop_Companys>;
  /** fetch aggregated fields from the table: "kpop.app_kpop_company" */
  kpop_companys_aggregate: Kpop_Companys_Aggregate;
  /** fetch data from the table: "kpop.app_kpop_company" using primary key columns */
  kpop_companys_by_pk?: Maybe<Kpop_Companys>;
  /** fetch data from the table: "kpop.app_kpop" using primary key columns */
  kpop_track?: Maybe<Kpop_Tracks>;
  /** fetch data from the table: "kpop.app_kpop" */
  kpop_tracks: Array<Kpop_Tracks>;
  /** fetch aggregated fields from the table: "kpop.app_kpop" */
  kpop_tracks_aggregate: Kpop_Tracks_Aggregate;
  /** fetch data from the table: "rpd.parts" using primary key columns */
  rpd_part?: Maybe<Rpd_Parts>;
  /** fetch data from the table: "rpd.parts" */
  rpd_parts: Array<Rpd_Parts>;
  /** fetch aggregated fields from the table: "rpd.parts" */
  rpd_parts_aggregate: Rpd_Parts_Aggregate;
  /** fetch data from the table: "rpd.playlists" using primary key columns */
  rpd_playlist?: Maybe<Rpd_Playlists>;
  /** fetch data from the table: "rpd.playlist_parts" using primary key columns */
  rpd_playlist_part?: Maybe<Rpd_Playlist_Parts>;
  /** fetch data from the table: "rpd.playlist_parts" */
  rpd_playlist_parts: Array<Rpd_Playlist_Parts>;
  /** fetch aggregated fields from the table: "rpd.playlist_parts" */
  rpd_playlist_parts_aggregate: Rpd_Playlist_Parts_Aggregate;
  /** fetch data from the table: "rpd.playlists" */
  rpd_playlists: Array<Rpd_Playlists>;
  /** fetch aggregated fields from the table: "rpd.playlists" */
  rpd_playlists_aggregate: Rpd_Playlists_Aggregate;
};


export type Query_RootAuth_RoleArgs = {
  id: Scalars['String'];
};


export type Query_RootAuth_RolesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Roles_Order_By>>;
  where?: InputMaybe<Auth_Roles_Bool_Exp>;
};


export type Query_RootAuth_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Roles_Order_By>>;
  where?: InputMaybe<Auth_Roles_Bool_Exp>;
};


export type Query_RootAuth_UserArgs = {
  id: Scalars['String'];
};


export type Query_RootAuth_User_PrivateArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_User_Private_Order_By>>;
  where?: InputMaybe<Auth_User_Private_Bool_Exp>;
};


export type Query_RootAuth_User_Private_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_User_Private_Order_By>>;
  where?: InputMaybe<Auth_User_Private_Bool_Exp>;
};


export type Query_RootAuth_User_Role_MappingArgs = {
  role_id: Scalars['String'];
  user_id: Scalars['String'];
};


export type Query_RootAuth_User_Role_MappingsArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Role_Mappings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_User_Role_Mappings_Order_By>>;
  where?: InputMaybe<Auth_User_Role_Mappings_Bool_Exp>;
};


export type Query_RootAuth_User_Role_Mappings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Role_Mappings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_User_Role_Mappings_Order_By>>;
  where?: InputMaybe<Auth_User_Role_Mappings_Bool_Exp>;
};


export type Query_RootAuth_UsersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Query_RootAuth_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Query_RootBucketArgs = {
  id: Scalars['String'];
};


export type Query_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Query_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Query_RootKpop_ArtistsArgs = {
  distinct_on?: InputMaybe<Array<Kpop_Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kpop_Artists_Order_By>>;
  where?: InputMaybe<Kpop_Artists_Bool_Exp>;
};


export type Query_RootKpop_Artists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kpop_Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kpop_Artists_Order_By>>;
  where?: InputMaybe<Kpop_Artists_Bool_Exp>;
};


export type Query_RootKpop_Artists_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootKpop_AudiotracksArgs = {
  distinct_on?: InputMaybe<Array<Kpop_Audiotracks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kpop_Audiotracks_Order_By>>;
  where?: InputMaybe<Kpop_Audiotracks_Bool_Exp>;
};


export type Query_RootKpop_Audiotracks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kpop_Audiotracks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kpop_Audiotracks_Order_By>>;
  where?: InputMaybe<Kpop_Audiotracks_Bool_Exp>;
};


export type Query_RootKpop_Audiotracks_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootKpop_CompanysArgs = {
  distinct_on?: InputMaybe<Array<Kpop_Companys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kpop_Companys_Order_By>>;
  where?: InputMaybe<Kpop_Companys_Bool_Exp>;
};


export type Query_RootKpop_Companys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kpop_Companys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kpop_Companys_Order_By>>;
  where?: InputMaybe<Kpop_Companys_Bool_Exp>;
};


export type Query_RootKpop_Companys_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Query_RootKpop_TrackArgs = {
  id: Scalars['bigint'];
};


export type Query_RootKpop_TracksArgs = {
  distinct_on?: InputMaybe<Array<Kpop_Tracks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kpop_Tracks_Order_By>>;
  where?: InputMaybe<Kpop_Tracks_Bool_Exp>;
};


export type Query_RootKpop_Tracks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kpop_Tracks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kpop_Tracks_Order_By>>;
  where?: InputMaybe<Kpop_Tracks_Bool_Exp>;
};


export type Query_RootRpd_PartArgs = {
  id: Scalars['Int'];
};


export type Query_RootRpd_PartsArgs = {
  distinct_on?: InputMaybe<Array<Rpd_Parts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rpd_Parts_Order_By>>;
  where?: InputMaybe<Rpd_Parts_Bool_Exp>;
};


export type Query_RootRpd_Parts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rpd_Parts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rpd_Parts_Order_By>>;
  where?: InputMaybe<Rpd_Parts_Bool_Exp>;
};


export type Query_RootRpd_PlaylistArgs = {
  id: Scalars['Int'];
};


export type Query_RootRpd_Playlist_PartArgs = {
  id: Scalars['Int'];
};


export type Query_RootRpd_Playlist_PartsArgs = {
  distinct_on?: InputMaybe<Array<Rpd_Playlist_Parts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rpd_Playlist_Parts_Order_By>>;
  where?: InputMaybe<Rpd_Playlist_Parts_Bool_Exp>;
};


export type Query_RootRpd_Playlist_Parts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rpd_Playlist_Parts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rpd_Playlist_Parts_Order_By>>;
  where?: InputMaybe<Rpd_Playlist_Parts_Bool_Exp>;
};


export type Query_RootRpd_PlaylistsArgs = {
  distinct_on?: InputMaybe<Array<Rpd_Playlists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rpd_Playlists_Order_By>>;
  where?: InputMaybe<Rpd_Playlists_Bool_Exp>;
};


export type Query_RootRpd_Playlists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rpd_Playlists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rpd_Playlists_Order_By>>;
  where?: InputMaybe<Rpd_Playlists_Bool_Exp>;
};

/** columns and relationships of "rpd.parts" */
export type Rpd_Parts = {
  __typename?: 'rpd_parts';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  created_by: Auth_Users;
  created_by_id: Scalars['String'];
  end_seconds: Scalars['Int'];
  id: Scalars['Int'];
  /** An array relationship */
  playlists: Array<Rpd_Playlist_Parts>;
  /** An aggregate relationship */
  playlists_aggregate: Rpd_Playlist_Parts_Aggregate;
  start_seconds: Scalars['Int'];
  track: Array<Kpop_Tracks>;
  updated_at: Scalars['timestamptz'];
  youtube_id: Scalars['String'];
};


/** columns and relationships of "rpd.parts" */
export type Rpd_PartsPlaylistsArgs = {
  distinct_on?: InputMaybe<Array<Rpd_Playlist_Parts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rpd_Playlist_Parts_Order_By>>;
  where?: InputMaybe<Rpd_Playlist_Parts_Bool_Exp>;
};


/** columns and relationships of "rpd.parts" */
export type Rpd_PartsPlaylists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rpd_Playlist_Parts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rpd_Playlist_Parts_Order_By>>;
  where?: InputMaybe<Rpd_Playlist_Parts_Bool_Exp>;
};


/** columns and relationships of "rpd.parts" */
export type Rpd_PartsTrackArgs = {
  distinct_on?: InputMaybe<Array<Kpop_Tracks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kpop_Tracks_Order_By>>;
  where?: InputMaybe<Kpop_Tracks_Bool_Exp_Remote_Rel_Rpd_Partstrack>;
};

/** aggregated selection of "rpd.parts" */
export type Rpd_Parts_Aggregate = {
  __typename?: 'rpd_parts_aggregate';
  aggregate?: Maybe<Rpd_Parts_Aggregate_Fields>;
  nodes: Array<Rpd_Parts>;
};

/** aggregate fields of "rpd.parts" */
export type Rpd_Parts_Aggregate_Fields = {
  __typename?: 'rpd_parts_aggregate_fields';
  avg?: Maybe<Rpd_Parts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rpd_Parts_Max_Fields>;
  min?: Maybe<Rpd_Parts_Min_Fields>;
  stddev?: Maybe<Rpd_Parts_Stddev_Fields>;
  stddev_pop?: Maybe<Rpd_Parts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rpd_Parts_Stddev_Samp_Fields>;
  sum?: Maybe<Rpd_Parts_Sum_Fields>;
  var_pop?: Maybe<Rpd_Parts_Var_Pop_Fields>;
  var_samp?: Maybe<Rpd_Parts_Var_Samp_Fields>;
  variance?: Maybe<Rpd_Parts_Variance_Fields>;
};


/** aggregate fields of "rpd.parts" */
export type Rpd_Parts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rpd_Parts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Rpd_Parts_Avg_Fields = {
  __typename?: 'rpd_parts_avg_fields';
  end_seconds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  start_seconds?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "rpd.parts". All fields are combined with a logical 'AND'. */
export type Rpd_Parts_Bool_Exp = {
  _and?: InputMaybe<Array<Rpd_Parts_Bool_Exp>>;
  _not?: InputMaybe<Rpd_Parts_Bool_Exp>;
  _or?: InputMaybe<Array<Rpd_Parts_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Auth_Users_Bool_Exp>;
  created_by_id?: InputMaybe<String_Comparison_Exp>;
  end_seconds?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  playlists?: InputMaybe<Rpd_Playlist_Parts_Bool_Exp>;
  start_seconds?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  youtube_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "rpd.parts" */
export enum Rpd_Parts_Constraint {
  /** unique or primary key constraint on columns "id" */
  PartsPkey = 'parts_pkey'
}

/** input type for incrementing numeric columns in table "rpd.parts" */
export type Rpd_Parts_Inc_Input = {
  end_seconds?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  start_seconds?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "rpd.parts" */
export type Rpd_Parts_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Auth_Users_Obj_Rel_Insert_Input>;
  created_by_id?: InputMaybe<Scalars['String']>;
  end_seconds?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  playlists?: InputMaybe<Rpd_Playlist_Parts_Arr_Rel_Insert_Input>;
  start_seconds?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  youtube_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Rpd_Parts_Max_Fields = {
  __typename?: 'rpd_parts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['String']>;
  end_seconds?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  start_seconds?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  youtube_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Rpd_Parts_Min_Fields = {
  __typename?: 'rpd_parts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['String']>;
  end_seconds?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  start_seconds?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  youtube_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "rpd.parts" */
export type Rpd_Parts_Mutation_Response = {
  __typename?: 'rpd_parts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rpd_Parts>;
};

/** input type for inserting object relation for remote table "rpd.parts" */
export type Rpd_Parts_Obj_Rel_Insert_Input = {
  data: Rpd_Parts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Rpd_Parts_On_Conflict>;
};

/** on_conflict condition type for table "rpd.parts" */
export type Rpd_Parts_On_Conflict = {
  constraint: Rpd_Parts_Constraint;
  update_columns?: Array<Rpd_Parts_Update_Column>;
  where?: InputMaybe<Rpd_Parts_Bool_Exp>;
};

/** Ordering options when selecting data from "rpd.parts". */
export type Rpd_Parts_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Auth_Users_Order_By>;
  created_by_id?: InputMaybe<Order_By>;
  end_seconds?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  playlists_aggregate?: InputMaybe<Rpd_Playlist_Parts_Aggregate_Order_By>;
  start_seconds?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  youtube_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rpd_parts */
export type Rpd_Parts_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "rpd.parts" */
export enum Rpd_Parts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  EndSeconds = 'end_seconds',
  /** column name */
  Id = 'id',
  /** column name */
  StartSeconds = 'start_seconds',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  YoutubeId = 'youtube_id'
}

/** input type for updating data in table "rpd.parts" */
export type Rpd_Parts_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by_id?: InputMaybe<Scalars['String']>;
  end_seconds?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  start_seconds?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  youtube_id?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Rpd_Parts_Stddev_Fields = {
  __typename?: 'rpd_parts_stddev_fields';
  end_seconds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  start_seconds?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Rpd_Parts_Stddev_Pop_Fields = {
  __typename?: 'rpd_parts_stddev_pop_fields';
  end_seconds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  start_seconds?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Rpd_Parts_Stddev_Samp_Fields = {
  __typename?: 'rpd_parts_stddev_samp_fields';
  end_seconds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  start_seconds?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Rpd_Parts_Sum_Fields = {
  __typename?: 'rpd_parts_sum_fields';
  end_seconds?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  start_seconds?: Maybe<Scalars['Int']>;
};

/** update columns of table "rpd.parts" */
export enum Rpd_Parts_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  EndSeconds = 'end_seconds',
  /** column name */
  Id = 'id',
  /** column name */
  StartSeconds = 'start_seconds',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  YoutubeId = 'youtube_id'
}

/** aggregate var_pop on columns */
export type Rpd_Parts_Var_Pop_Fields = {
  __typename?: 'rpd_parts_var_pop_fields';
  end_seconds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  start_seconds?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Rpd_Parts_Var_Samp_Fields = {
  __typename?: 'rpd_parts_var_samp_fields';
  end_seconds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  start_seconds?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Rpd_Parts_Variance_Fields = {
  __typename?: 'rpd_parts_variance_fields';
  end_seconds?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  start_seconds?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "rpd.playlist_parts" */
export type Rpd_Playlist_Parts = {
  __typename?: 'rpd_playlist_parts';
  created_at: Scalars['timestamptz'];
  id: Scalars['Int'];
  /** An object relationship */
  part: Rpd_Parts;
  part_id: Scalars['Int'];
  /** An object relationship */
  playlist: Rpd_Playlists;
  playlist_id: Scalars['Int'];
  position: Scalars['Int'];
};

/** aggregated selection of "rpd.playlist_parts" */
export type Rpd_Playlist_Parts_Aggregate = {
  __typename?: 'rpd_playlist_parts_aggregate';
  aggregate?: Maybe<Rpd_Playlist_Parts_Aggregate_Fields>;
  nodes: Array<Rpd_Playlist_Parts>;
};

/** aggregate fields of "rpd.playlist_parts" */
export type Rpd_Playlist_Parts_Aggregate_Fields = {
  __typename?: 'rpd_playlist_parts_aggregate_fields';
  avg?: Maybe<Rpd_Playlist_Parts_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rpd_Playlist_Parts_Max_Fields>;
  min?: Maybe<Rpd_Playlist_Parts_Min_Fields>;
  stddev?: Maybe<Rpd_Playlist_Parts_Stddev_Fields>;
  stddev_pop?: Maybe<Rpd_Playlist_Parts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rpd_Playlist_Parts_Stddev_Samp_Fields>;
  sum?: Maybe<Rpd_Playlist_Parts_Sum_Fields>;
  var_pop?: Maybe<Rpd_Playlist_Parts_Var_Pop_Fields>;
  var_samp?: Maybe<Rpd_Playlist_Parts_Var_Samp_Fields>;
  variance?: Maybe<Rpd_Playlist_Parts_Variance_Fields>;
};


/** aggregate fields of "rpd.playlist_parts" */
export type Rpd_Playlist_Parts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rpd_Playlist_Parts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "rpd.playlist_parts" */
export type Rpd_Playlist_Parts_Aggregate_Order_By = {
  avg?: InputMaybe<Rpd_Playlist_Parts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Rpd_Playlist_Parts_Max_Order_By>;
  min?: InputMaybe<Rpd_Playlist_Parts_Min_Order_By>;
  stddev?: InputMaybe<Rpd_Playlist_Parts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Rpd_Playlist_Parts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Rpd_Playlist_Parts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Rpd_Playlist_Parts_Sum_Order_By>;
  var_pop?: InputMaybe<Rpd_Playlist_Parts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Rpd_Playlist_Parts_Var_Samp_Order_By>;
  variance?: InputMaybe<Rpd_Playlist_Parts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "rpd.playlist_parts" */
export type Rpd_Playlist_Parts_Arr_Rel_Insert_Input = {
  data: Array<Rpd_Playlist_Parts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Rpd_Playlist_Parts_On_Conflict>;
};

/** aggregate avg on columns */
export type Rpd_Playlist_Parts_Avg_Fields = {
  __typename?: 'rpd_playlist_parts_avg_fields';
  id?: Maybe<Scalars['Float']>;
  part_id?: Maybe<Scalars['Float']>;
  playlist_id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "rpd.playlist_parts" */
export type Rpd_Playlist_Parts_Avg_Order_By = {
  id?: InputMaybe<Order_By>;
  part_id?: InputMaybe<Order_By>;
  playlist_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "rpd.playlist_parts". All fields are combined with a logical 'AND'. */
export type Rpd_Playlist_Parts_Bool_Exp = {
  _and?: InputMaybe<Array<Rpd_Playlist_Parts_Bool_Exp>>;
  _not?: InputMaybe<Rpd_Playlist_Parts_Bool_Exp>;
  _or?: InputMaybe<Array<Rpd_Playlist_Parts_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  part?: InputMaybe<Rpd_Parts_Bool_Exp>;
  part_id?: InputMaybe<Int_Comparison_Exp>;
  playlist?: InputMaybe<Rpd_Playlists_Bool_Exp>;
  playlist_id?: InputMaybe<Int_Comparison_Exp>;
  position?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "rpd.playlist_parts" */
export enum Rpd_Playlist_Parts_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlaylistPartsPkey = 'playlist_parts_pkey'
}

/** input type for incrementing numeric columns in table "rpd.playlist_parts" */
export type Rpd_Playlist_Parts_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  part_id?: InputMaybe<Scalars['Int']>;
  playlist_id?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "rpd.playlist_parts" */
export type Rpd_Playlist_Parts_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  part?: InputMaybe<Rpd_Parts_Obj_Rel_Insert_Input>;
  part_id?: InputMaybe<Scalars['Int']>;
  playlist?: InputMaybe<Rpd_Playlists_Obj_Rel_Insert_Input>;
  playlist_id?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Rpd_Playlist_Parts_Max_Fields = {
  __typename?: 'rpd_playlist_parts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  part_id?: Maybe<Scalars['Int']>;
  playlist_id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "rpd.playlist_parts" */
export type Rpd_Playlist_Parts_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  part_id?: InputMaybe<Order_By>;
  playlist_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Rpd_Playlist_Parts_Min_Fields = {
  __typename?: 'rpd_playlist_parts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  part_id?: Maybe<Scalars['Int']>;
  playlist_id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "rpd.playlist_parts" */
export type Rpd_Playlist_Parts_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  part_id?: InputMaybe<Order_By>;
  playlist_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "rpd.playlist_parts" */
export type Rpd_Playlist_Parts_Mutation_Response = {
  __typename?: 'rpd_playlist_parts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rpd_Playlist_Parts>;
};

/** on_conflict condition type for table "rpd.playlist_parts" */
export type Rpd_Playlist_Parts_On_Conflict = {
  constraint: Rpd_Playlist_Parts_Constraint;
  update_columns?: Array<Rpd_Playlist_Parts_Update_Column>;
  where?: InputMaybe<Rpd_Playlist_Parts_Bool_Exp>;
};

/** Ordering options when selecting data from "rpd.playlist_parts". */
export type Rpd_Playlist_Parts_Order_By = {
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  part?: InputMaybe<Rpd_Parts_Order_By>;
  part_id?: InputMaybe<Order_By>;
  playlist?: InputMaybe<Rpd_Playlists_Order_By>;
  playlist_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rpd_playlist_parts */
export type Rpd_Playlist_Parts_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "rpd.playlist_parts" */
export enum Rpd_Playlist_Parts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PartId = 'part_id',
  /** column name */
  PlaylistId = 'playlist_id',
  /** column name */
  Position = 'position'
}

/** input type for updating data in table "rpd.playlist_parts" */
export type Rpd_Playlist_Parts_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  part_id?: InputMaybe<Scalars['Int']>;
  playlist_id?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Rpd_Playlist_Parts_Stddev_Fields = {
  __typename?: 'rpd_playlist_parts_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  part_id?: Maybe<Scalars['Float']>;
  playlist_id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "rpd.playlist_parts" */
export type Rpd_Playlist_Parts_Stddev_Order_By = {
  id?: InputMaybe<Order_By>;
  part_id?: InputMaybe<Order_By>;
  playlist_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Rpd_Playlist_Parts_Stddev_Pop_Fields = {
  __typename?: 'rpd_playlist_parts_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  part_id?: Maybe<Scalars['Float']>;
  playlist_id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "rpd.playlist_parts" */
export type Rpd_Playlist_Parts_Stddev_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  part_id?: InputMaybe<Order_By>;
  playlist_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Rpd_Playlist_Parts_Stddev_Samp_Fields = {
  __typename?: 'rpd_playlist_parts_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  part_id?: Maybe<Scalars['Float']>;
  playlist_id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "rpd.playlist_parts" */
export type Rpd_Playlist_Parts_Stddev_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  part_id?: InputMaybe<Order_By>;
  playlist_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Rpd_Playlist_Parts_Sum_Fields = {
  __typename?: 'rpd_playlist_parts_sum_fields';
  id?: Maybe<Scalars['Int']>;
  part_id?: Maybe<Scalars['Int']>;
  playlist_id?: Maybe<Scalars['Int']>;
  position?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "rpd.playlist_parts" */
export type Rpd_Playlist_Parts_Sum_Order_By = {
  id?: InputMaybe<Order_By>;
  part_id?: InputMaybe<Order_By>;
  playlist_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** update columns of table "rpd.playlist_parts" */
export enum Rpd_Playlist_Parts_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  PartId = 'part_id',
  /** column name */
  PlaylistId = 'playlist_id',
  /** column name */
  Position = 'position'
}

/** aggregate var_pop on columns */
export type Rpd_Playlist_Parts_Var_Pop_Fields = {
  __typename?: 'rpd_playlist_parts_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  part_id?: Maybe<Scalars['Float']>;
  playlist_id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "rpd.playlist_parts" */
export type Rpd_Playlist_Parts_Var_Pop_Order_By = {
  id?: InputMaybe<Order_By>;
  part_id?: InputMaybe<Order_By>;
  playlist_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Rpd_Playlist_Parts_Var_Samp_Fields = {
  __typename?: 'rpd_playlist_parts_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  part_id?: Maybe<Scalars['Float']>;
  playlist_id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "rpd.playlist_parts" */
export type Rpd_Playlist_Parts_Var_Samp_Order_By = {
  id?: InputMaybe<Order_By>;
  part_id?: InputMaybe<Order_By>;
  playlist_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Rpd_Playlist_Parts_Variance_Fields = {
  __typename?: 'rpd_playlist_parts_variance_fields';
  id?: Maybe<Scalars['Float']>;
  part_id?: Maybe<Scalars['Float']>;
  playlist_id?: Maybe<Scalars['Float']>;
  position?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "rpd.playlist_parts" */
export type Rpd_Playlist_Parts_Variance_Order_By = {
  id?: InputMaybe<Order_By>;
  part_id?: InputMaybe<Order_By>;
  playlist_id?: InputMaybe<Order_By>;
  position?: InputMaybe<Order_By>;
};

/** columns and relationships of "rpd.playlists" */
export type Rpd_Playlists = {
  __typename?: 'rpd_playlists';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  created_by: Auth_Users;
  created_by_id: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  playlist_parts: Array<Rpd_Playlist_Parts>;
  /** An aggregate relationship */
  playlist_parts_aggregate: Rpd_Playlist_Parts_Aggregate;
  public: Scalars['Boolean'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "rpd.playlists" */
export type Rpd_PlaylistsPlaylist_PartsArgs = {
  distinct_on?: InputMaybe<Array<Rpd_Playlist_Parts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rpd_Playlist_Parts_Order_By>>;
  where?: InputMaybe<Rpd_Playlist_Parts_Bool_Exp>;
};


/** columns and relationships of "rpd.playlists" */
export type Rpd_PlaylistsPlaylist_Parts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rpd_Playlist_Parts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rpd_Playlist_Parts_Order_By>>;
  where?: InputMaybe<Rpd_Playlist_Parts_Bool_Exp>;
};

/** aggregated selection of "rpd.playlists" */
export type Rpd_Playlists_Aggregate = {
  __typename?: 'rpd_playlists_aggregate';
  aggregate?: Maybe<Rpd_Playlists_Aggregate_Fields>;
  nodes: Array<Rpd_Playlists>;
};

/** aggregate fields of "rpd.playlists" */
export type Rpd_Playlists_Aggregate_Fields = {
  __typename?: 'rpd_playlists_aggregate_fields';
  avg?: Maybe<Rpd_Playlists_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Rpd_Playlists_Max_Fields>;
  min?: Maybe<Rpd_Playlists_Min_Fields>;
  stddev?: Maybe<Rpd_Playlists_Stddev_Fields>;
  stddev_pop?: Maybe<Rpd_Playlists_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Rpd_Playlists_Stddev_Samp_Fields>;
  sum?: Maybe<Rpd_Playlists_Sum_Fields>;
  var_pop?: Maybe<Rpd_Playlists_Var_Pop_Fields>;
  var_samp?: Maybe<Rpd_Playlists_Var_Samp_Fields>;
  variance?: Maybe<Rpd_Playlists_Variance_Fields>;
};


/** aggregate fields of "rpd.playlists" */
export type Rpd_Playlists_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Rpd_Playlists_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Rpd_Playlists_Avg_Fields = {
  __typename?: 'rpd_playlists_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "rpd.playlists". All fields are combined with a logical 'AND'. */
export type Rpd_Playlists_Bool_Exp = {
  _and?: InputMaybe<Array<Rpd_Playlists_Bool_Exp>>;
  _not?: InputMaybe<Rpd_Playlists_Bool_Exp>;
  _or?: InputMaybe<Array<Rpd_Playlists_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Auth_Users_Bool_Exp>;
  created_by_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  playlist_parts?: InputMaybe<Rpd_Playlist_Parts_Bool_Exp>;
  public?: InputMaybe<Boolean_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "rpd.playlists" */
export enum Rpd_Playlists_Constraint {
  /** unique or primary key constraint on columns "id" */
  PlaylistPkey = 'playlist_pkey'
}

/** input type for incrementing numeric columns in table "rpd.playlists" */
export type Rpd_Playlists_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "rpd.playlists" */
export type Rpd_Playlists_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Auth_Users_Obj_Rel_Insert_Input>;
  created_by_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  playlist_parts?: InputMaybe<Rpd_Playlist_Parts_Arr_Rel_Insert_Input>;
  public?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Rpd_Playlists_Max_Fields = {
  __typename?: 'rpd_playlists_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Rpd_Playlists_Min_Fields = {
  __typename?: 'rpd_playlists_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "rpd.playlists" */
export type Rpd_Playlists_Mutation_Response = {
  __typename?: 'rpd_playlists_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Rpd_Playlists>;
};

/** input type for inserting object relation for remote table "rpd.playlists" */
export type Rpd_Playlists_Obj_Rel_Insert_Input = {
  data: Rpd_Playlists_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Rpd_Playlists_On_Conflict>;
};

/** on_conflict condition type for table "rpd.playlists" */
export type Rpd_Playlists_On_Conflict = {
  constraint: Rpd_Playlists_Constraint;
  update_columns?: Array<Rpd_Playlists_Update_Column>;
  where?: InputMaybe<Rpd_Playlists_Bool_Exp>;
};

/** Ordering options when selecting data from "rpd.playlists". */
export type Rpd_Playlists_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Auth_Users_Order_By>;
  created_by_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  playlist_parts_aggregate?: InputMaybe<Rpd_Playlist_Parts_Aggregate_Order_By>;
  public?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: rpd_playlists */
export type Rpd_Playlists_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "rpd.playlists" */
export enum Rpd_Playlists_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Public = 'public',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "rpd.playlists" */
export type Rpd_Playlists_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  public?: InputMaybe<Scalars['Boolean']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Rpd_Playlists_Stddev_Fields = {
  __typename?: 'rpd_playlists_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Rpd_Playlists_Stddev_Pop_Fields = {
  __typename?: 'rpd_playlists_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Rpd_Playlists_Stddev_Samp_Fields = {
  __typename?: 'rpd_playlists_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Rpd_Playlists_Sum_Fields = {
  __typename?: 'rpd_playlists_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "rpd.playlists" */
export enum Rpd_Playlists_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedById = 'created_by_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Public = 'public',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Rpd_Playlists_Var_Pop_Fields = {
  __typename?: 'rpd_playlists_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Rpd_Playlists_Var_Samp_Fields = {
  __typename?: 'rpd_playlists_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Rpd_Playlists_Variance_Fields = {
  __typename?: 'rpd_playlists_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "keycloak.keycloak_role" using primary key columns */
  auth_role?: Maybe<Auth_Roles>;
  /** fetch data from the table: "keycloak.keycloak_role" */
  auth_roles: Array<Auth_Roles>;
  /** fetch aggregated fields from the table: "keycloak.keycloak_role" */
  auth_roles_aggregate: Auth_Roles_Aggregate;
  /** fetch data from the table: "keycloak.user_entity" using primary key columns */
  auth_user?: Maybe<Auth_Users>;
  /** fetch data from the table: "keycloak.user_private" */
  auth_user_private: Array<Auth_User_Private>;
  /** fetch aggregated fields from the table: "keycloak.user_private" */
  auth_user_private_aggregate: Auth_User_Private_Aggregate;
  /** fetch data from the table: "keycloak.user_role_mapping" using primary key columns */
  auth_user_role_mapping?: Maybe<Auth_User_Role_Mappings>;
  /** fetch data from the table: "keycloak.user_role_mapping" */
  auth_user_role_mappings: Array<Auth_User_Role_Mappings>;
  /** fetch aggregated fields from the table: "keycloak.user_role_mapping" */
  auth_user_role_mappings_aggregate: Auth_User_Role_Mappings_Aggregate;
  /** fetch data from the table: "keycloak.user_entity" */
  auth_users: Array<Auth_Users>;
  /** fetch aggregated fields from the table: "keycloak.user_entity" */
  auth_users_aggregate: Auth_Users_Aggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: Buckets_Aggregate;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: Files_Aggregate;
  /** fetch data from the table: "kpop.app_kpop_group" */
  kpop_artists: Array<Kpop_Artists>;
  /** fetch aggregated fields from the table: "kpop.app_kpop_group" */
  kpop_artists_aggregate: Kpop_Artists_Aggregate;
  /** fetch data from the table: "kpop.app_kpop_group" using primary key columns */
  kpop_artists_by_pk?: Maybe<Kpop_Artists>;
  /** fetch data from the table: "kpop.app_kpop_audio" */
  kpop_audiotracks: Array<Kpop_Audiotracks>;
  /** fetch aggregated fields from the table: "kpop.app_kpop_audio" */
  kpop_audiotracks_aggregate: Kpop_Audiotracks_Aggregate;
  /** fetch data from the table: "kpop.app_kpop_audio" using primary key columns */
  kpop_audiotracks_by_pk?: Maybe<Kpop_Audiotracks>;
  /** fetch data from the table: "kpop.app_kpop_company" */
  kpop_companys: Array<Kpop_Companys>;
  /** fetch aggregated fields from the table: "kpop.app_kpop_company" */
  kpop_companys_aggregate: Kpop_Companys_Aggregate;
  /** fetch data from the table: "kpop.app_kpop_company" using primary key columns */
  kpop_companys_by_pk?: Maybe<Kpop_Companys>;
  /** fetch data from the table: "kpop.app_kpop" using primary key columns */
  kpop_track?: Maybe<Kpop_Tracks>;
  /** fetch data from the table: "kpop.app_kpop" */
  kpop_tracks: Array<Kpop_Tracks>;
  /** fetch aggregated fields from the table: "kpop.app_kpop" */
  kpop_tracks_aggregate: Kpop_Tracks_Aggregate;
  /** fetch data from the table: "rpd.parts" using primary key columns */
  rpd_part?: Maybe<Rpd_Parts>;
  /** fetch data from the table: "rpd.parts" */
  rpd_parts: Array<Rpd_Parts>;
  /** fetch aggregated fields from the table: "rpd.parts" */
  rpd_parts_aggregate: Rpd_Parts_Aggregate;
  /** fetch data from the table: "rpd.playlists" using primary key columns */
  rpd_playlist?: Maybe<Rpd_Playlists>;
  /** fetch data from the table: "rpd.playlist_parts" using primary key columns */
  rpd_playlist_part?: Maybe<Rpd_Playlist_Parts>;
  /** fetch data from the table: "rpd.playlist_parts" */
  rpd_playlist_parts: Array<Rpd_Playlist_Parts>;
  /** fetch aggregated fields from the table: "rpd.playlist_parts" */
  rpd_playlist_parts_aggregate: Rpd_Playlist_Parts_Aggregate;
  /** fetch data from the table: "rpd.playlists" */
  rpd_playlists: Array<Rpd_Playlists>;
  /** fetch aggregated fields from the table: "rpd.playlists" */
  rpd_playlists_aggregate: Rpd_Playlists_Aggregate;
};


export type Subscription_RootAuth_RoleArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuth_RolesArgs = {
  distinct_on?: InputMaybe<Array<Auth_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Roles_Order_By>>;
  where?: InputMaybe<Auth_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Roles_Order_By>>;
  where?: InputMaybe<Auth_Roles_Bool_Exp>;
};


export type Subscription_RootAuth_UserArgs = {
  id: Scalars['String'];
};


export type Subscription_RootAuth_User_PrivateArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_User_Private_Order_By>>;
  where?: InputMaybe<Auth_User_Private_Bool_Exp>;
};


export type Subscription_RootAuth_User_Private_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Private_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_User_Private_Order_By>>;
  where?: InputMaybe<Auth_User_Private_Bool_Exp>;
};


export type Subscription_RootAuth_User_Role_MappingArgs = {
  role_id: Scalars['String'];
  user_id: Scalars['String'];
};


export type Subscription_RootAuth_User_Role_MappingsArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Role_Mappings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_User_Role_Mappings_Order_By>>;
  where?: InputMaybe<Auth_User_Role_Mappings_Bool_Exp>;
};


export type Subscription_RootAuth_User_Role_Mappings_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_User_Role_Mappings_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_User_Role_Mappings_Order_By>>;
  where?: InputMaybe<Auth_User_Role_Mappings_Bool_Exp>;
};


export type Subscription_RootAuth_UsersArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootAuth_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Auth_Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Auth_Users_Order_By>>;
  where?: InputMaybe<Auth_Users_Bool_Exp>;
};


export type Subscription_RootBucketArgs = {
  id: Scalars['String'];
};


export type Subscription_RootBucketsArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<Buckets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Buckets_Order_By>>;
  where?: InputMaybe<Buckets_Bool_Exp>;
};


export type Subscription_RootFileArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFilesArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<Files_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Files_Order_By>>;
  where?: InputMaybe<Files_Bool_Exp>;
};


export type Subscription_RootKpop_ArtistsArgs = {
  distinct_on?: InputMaybe<Array<Kpop_Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kpop_Artists_Order_By>>;
  where?: InputMaybe<Kpop_Artists_Bool_Exp>;
};


export type Subscription_RootKpop_Artists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kpop_Artists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kpop_Artists_Order_By>>;
  where?: InputMaybe<Kpop_Artists_Bool_Exp>;
};


export type Subscription_RootKpop_Artists_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootKpop_AudiotracksArgs = {
  distinct_on?: InputMaybe<Array<Kpop_Audiotracks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kpop_Audiotracks_Order_By>>;
  where?: InputMaybe<Kpop_Audiotracks_Bool_Exp>;
};


export type Subscription_RootKpop_Audiotracks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kpop_Audiotracks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kpop_Audiotracks_Order_By>>;
  where?: InputMaybe<Kpop_Audiotracks_Bool_Exp>;
};


export type Subscription_RootKpop_Audiotracks_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootKpop_CompanysArgs = {
  distinct_on?: InputMaybe<Array<Kpop_Companys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kpop_Companys_Order_By>>;
  where?: InputMaybe<Kpop_Companys_Bool_Exp>;
};


export type Subscription_RootKpop_Companys_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kpop_Companys_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kpop_Companys_Order_By>>;
  where?: InputMaybe<Kpop_Companys_Bool_Exp>;
};


export type Subscription_RootKpop_Companys_By_PkArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootKpop_TrackArgs = {
  id: Scalars['bigint'];
};


export type Subscription_RootKpop_TracksArgs = {
  distinct_on?: InputMaybe<Array<Kpop_Tracks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kpop_Tracks_Order_By>>;
  where?: InputMaybe<Kpop_Tracks_Bool_Exp>;
};


export type Subscription_RootKpop_Tracks_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Kpop_Tracks_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Kpop_Tracks_Order_By>>;
  where?: InputMaybe<Kpop_Tracks_Bool_Exp>;
};


export type Subscription_RootRpd_PartArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRpd_PartsArgs = {
  distinct_on?: InputMaybe<Array<Rpd_Parts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rpd_Parts_Order_By>>;
  where?: InputMaybe<Rpd_Parts_Bool_Exp>;
};


export type Subscription_RootRpd_Parts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rpd_Parts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rpd_Parts_Order_By>>;
  where?: InputMaybe<Rpd_Parts_Bool_Exp>;
};


export type Subscription_RootRpd_PlaylistArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRpd_Playlist_PartArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRpd_Playlist_PartsArgs = {
  distinct_on?: InputMaybe<Array<Rpd_Playlist_Parts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rpd_Playlist_Parts_Order_By>>;
  where?: InputMaybe<Rpd_Playlist_Parts_Bool_Exp>;
};


export type Subscription_RootRpd_Playlist_Parts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rpd_Playlist_Parts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rpd_Playlist_Parts_Order_By>>;
  where?: InputMaybe<Rpd_Playlist_Parts_Bool_Exp>;
};


export type Subscription_RootRpd_PlaylistsArgs = {
  distinct_on?: InputMaybe<Array<Rpd_Playlists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rpd_Playlists_Order_By>>;
  where?: InputMaybe<Rpd_Playlists_Bool_Exp>;
};


export type Subscription_RootRpd_Playlists_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Rpd_Playlists_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Rpd_Playlists_Order_By>>;
  where?: InputMaybe<Rpd_Playlists_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type AddPartToPlaylistMutationVariables = Exact<{
  part_id?: InputMaybe<Scalars['Int']>;
  playlist_id?: InputMaybe<Scalars['Int']>;
  position?: InputMaybe<Scalars['Int']>;
}>;


export type AddPartToPlaylistMutation = { __typename?: 'mutation_root', insert_rpd_playlist_part?: { __typename?: 'rpd_playlist_parts', id: number } | null };

export type CreatePartMutationVariables = Exact<{
  end_seconds?: InputMaybe<Scalars['Int']>;
  start_seconds?: InputMaybe<Scalars['Int']>;
  youtube_id?: InputMaybe<Scalars['String']>;
}>;


export type CreatePartMutation = { __typename?: 'mutation_root', insert_rpd_part?: { __typename?: 'rpd_parts', id: number } | null };

export type PartSearchQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']>;
}>;


export type PartSearchQuery = { __typename?: 'query_root', rpd_parts: Array<{ __typename?: 'rpd_parts', id: number, youtube_id: string, start_seconds: number, end_seconds: number, track: Array<{ __typename?: 'kpop_tracks', name: string, artist?: { __typename?: 'kpop_artists', name: string } | null }> }> };

export type DaisukiSearchQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']>;
}>;


export type DaisukiSearchQuery = { __typename?: 'query_root', kpop_tracks: Array<{ __typename?: 'kpop_tracks', vlink: string, name: string, artist?: { __typename?: 'kpop_artists', name: string } | null }> };

export type PlaylistsQueryVariables = Exact<{ [key: string]: never; }>;


export type PlaylistsQuery = { __typename?: 'query_root', rpd_playlists: Array<{ __typename?: 'rpd_playlists', id: number, created_at: any, name: string, public: boolean, updated_at: any, created_by: { __typename?: 'auth_users', id: string, username?: string | null } }> };

export type PlaylistWithPartsQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type PlaylistWithPartsQuery = { __typename?: 'query_root', rpd_playlist?: { __typename?: 'rpd_playlists', id: number, created_at: any, name: string, public: boolean, updated_at: any, playlist_parts: Array<{ __typename?: 'rpd_playlist_parts', part: { __typename?: 'rpd_parts', id: number, start_seconds: number, end_seconds: number, youtube_id: string, created_at: any, updated_at: any, track: Array<{ __typename?: 'kpop_tracks', name: string, artist?: { __typename?: 'kpop_artists', name: string } | null }> } }>, created_by: { __typename?: 'auth_users', id: string, username?: string | null } } | null };
