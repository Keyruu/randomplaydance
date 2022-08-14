#!/bin/bash

until mysqlcheck -h $MARIADB_HOST --user=$MARIADB_USER --password=$MARIADB_PASS $MARIADB_DB 
do
  echo "Trying again" && sleep 5
done

pgloader mysql://$MARIADB_USER:$MARIADB_PASS@$MARIADB_HOST/$MARIADB_DB postgresql://$POSTGRES_USER:$POSTGRES_PASS@$POSTGRES_HOST/$POSTGRES_DB

exit 0