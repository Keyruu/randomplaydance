FROM python:slim

RUN pip install requests

COPY mariadb/fetch/fetch_db.py /

CMD [ "python", "/fetch_db.py" ]