FROM keyruu/pgloader

RUN apt-get update \
  && apt-get install -y --no-install-recommends mariadb-client

COPY mariadb/pgloader/start.sh /bin/start.sh

RUN chmod +x /bin/start.sh
