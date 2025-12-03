start: brew services start nginx   

stop: brew services stop nginx   

restart: brew services restart nginx



openssl req -x509 -nodes -days 365 -newkey rsa:2048 \
  -keyout ~/personal/PREDMETI/NAPREDNI\ WEB/lab4/Jure.key \
  -out ~/personal/PREDMETI/NAPREDNI\ WEB/lab4/Jure.crt \
  -subj "/CN=example.com"
chmod 600 ~/personal/PREDMETI/NAPREDNI\ WEB/lab4/Jure.key

path: /opt/homebrew/etc/nginx

curl -vk https://127.0.0.1:8443/

listen [::]:8443 ssl http2 default_server;

cp /opt/homebrew/var/www/index.html /opt/homebrew/etc/html
cp /opt/homebrew/var/www/index.html /opt/homebrew/etc/html

curl -vk --http2 https://127.0.0.1:8443/ -o /dev/null -w 'time_total=%{time_total}\n'

curl -vk --http1.1 https://127.0.0.1:8443/ -o /dev/null -w 'time_total=%{time_total}\n'