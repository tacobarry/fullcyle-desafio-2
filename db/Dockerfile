FROM mysql:5.7

ENV MYSQL_DATABASE=nodedb
ENV MYSQL_ROOT_PASSWORD=root

WORKDIR /var/lib/mysql

VOLUME ./mysql/:/var/lib/mysql

ADD ./dump/nodedb.sql /var/lib/mysql/dump.sql

ADD .docker/init_db.sh /var/lib/mysql/init_db.sh

# RUN rm -f init_db.sh && rm -f dump.sql

RUN chown -R mysql:root /var/lib/mysql/

# RUN /bin/bash -c "/usr/bin/mysqld_safe --skip-grant-tables &" && \
#   sleep 5 && \
#   mysql -u root -e "CREATE DATABASE nodedb" && \
#   mysql -u root nodedb < dump.sql

EXPOSE 3306

# ENTRYPOINT ["./init_db.sh"]
# CMD [ "--innodb-use-native-aio=0" ]
# CMD ["./init_db.sh"]