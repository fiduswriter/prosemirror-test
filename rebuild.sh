#!/bin/bash

source venv/bin/activate

rm -fr node_modules

npm install

cd node_modules/prosemirror/
npm install
npm run dist

cd ../..
node_modules/.bin/browserify --outfile prosemirror.js -t babelify prosemirror-src.js

deactivate
