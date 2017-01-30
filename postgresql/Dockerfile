FROM postgres:9.6-alpine
ENV LANG ru_RU.utf8
ENV TIMEZONE Asia/Yekaterinburg

COPY docker-healthcheck /usr/local/bin/

HEALTHCHECK CMD ["docker-healthcheck"]

RUN cp /usr/share/zoneinfo/$TIMEZONE /etc/localtime && \
    echo $TIMEZONE > /etc/timezone
