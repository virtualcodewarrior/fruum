
## Installation instructions

Make sure you are running at least node.js 8.x.x and npm 5.x.x. Verify by doing the following in the console:

```
npm --version
5.5.1

node --version
v8.9.1
```

Grab the latest source code

```
git clone https://github.com/virtualcodewarrior/fruum.git
```

Install node.js dependencies

```
cd fruum
npm install
```

Edit ```config.json``` and map elasticsearch host to the proper value, or leave as is if running elasticsearch locally.

Setup the database

```
npm start -- --setup
```
Register an application xxxxxxxxx

```
npm start -- --add-app myforum
```
Start the server

```
npm start
```

Check for options by executing the command

```
npm start -- --help
```

#### What to see next?

 - [Website integration](website-integration.md)

