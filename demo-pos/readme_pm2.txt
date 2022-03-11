sudo npm i -g pm2

# basic 1
pm2 start server.js
pm2 start server.js --name custom_name
pm2 status
pm2 start 0
pm2 stop 0
pm2 restart 0

# basic 2
pm2 start/stop/restart all
pm2 log 0 
pm2 start --watch
pm2 monit
pm2 show 0
pm2 delete 

#cluster
 pm2 start server.js -i 3
 pm2 scale server +2
 pm2 scale server 2

yarn global add serve
serve -s . -p 80