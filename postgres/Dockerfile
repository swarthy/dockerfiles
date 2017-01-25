FROM postgres:9.6-alpine
ENV LANG ru_RU.utf8
ENV TIMEZONE Asia/Yekaterinburg
RUN cp /usr/share/zoneinfo/$TIMEZONE /etc/localtime && \
    echo $TIMEZONE > /etc/timezone
