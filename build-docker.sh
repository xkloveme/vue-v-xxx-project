#!/bin/bash
npm install --registry=http://npm.hekr.me
npm run build

docker build . -t weixiaobao
