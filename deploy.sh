#!/bin/sh
npm run build
cd build
git init
git add .
git commit -m "Deploy to gh-pages"
git remote add origin git@github.com:seveninchorange/seveninchorange.github.io.git
git push origin master --force
