install:
	npm install --save-dev babel 
	npm install --save-dev babel-cli
	npm install --save-dev babel-preset-es2015
watch:
	babel jedi.js --watch --out-file compiled.js
execute:
	node compiled.js