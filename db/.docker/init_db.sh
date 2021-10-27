#! /bin/bash

/usr/bin/mysqld_safe --skip-grant-tables & sleep 5
mysql -uroot -p -e "CREATE DATABASE nodedb"
mysql -uroot -p nodedb < dump.sql

# mysql -uroot -p
# use nodedb;
# source /tmp/dump.sql;