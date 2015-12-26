#!/bin/bash

virtualenv venv
source venv/bin/activate
pip install nodeenv
nodeenv -p

npm install

cd node_modules/prosemirror/
npm install
npm run dist
cd ../..

node_modules/.bin/browserify --outfile prosemirror.js -t babelify prosemirror-src.js

deactivate
