# storesearchpage
Simple full stack web app implementing a search page with various filtering options for a game store using a database created in MySQL Workbench. Also incorporates escaping query values to avoid SQL injection attacks (functionally same as prepared statements).

Steps to run on Ubuntu:
1. import the provided database.sql onto mysql into database "store_database" in mySQL
2. change mysql login details in routes/index.js
3. install nodejs and dependencies (express, mysql, vue)
4. run with $ npm start

![Image of application](https://i.imgur.com/b2un7LE.png)
