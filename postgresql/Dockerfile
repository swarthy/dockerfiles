FROM postgres:9.6-alpine

RUN apk add --no-cache bash

COPY docker-healthcheck /usr/local/bin/

HEALTHCHECK CMD ["docker-healthcheck"]

ENV LANG ru_RU.utf8
ENV TIMEZONE Asia/Yekaterinburg

RUN cp /usr/share/zoneinfo/$TIMEZONE /etc/localtime && \
    echo $TIMEZONE > /etc/timezone
