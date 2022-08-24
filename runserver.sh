npm i
npm run departaments
npm run professors
npm run build

cp -r dist/. /mnt/data/api.starhuks
cd /mnt/data/api.starhuks

npm i
pm2 restart api.starhuks