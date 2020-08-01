# deploy.sh

#!/usr/bin/env sh

set -e

echo Building. This may take a minute...

rm -rf temp
rm -rf dist
mkdir dist
npm run build

cd dist

mkdir ../temp
mv * ../temp
cp ../index.html ./index.html
cp ../CNAME ./CNAME

mkdir dist
mv ../temp/* dist
rm -rf ../temp

echo Deploying...
git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:AdamSeidman/AdamSeidman.github.io.git master

cd -