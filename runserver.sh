npm i
npm run build
npm run departaments
npm run professors

cp -r dist/. /mnt/data/api.starhuks
cd /mnt/data/api.starhuks

npm i
pm2 restart api.starhuks