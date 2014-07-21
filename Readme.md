# Requirements

- ruby & compass (rvm recommended)

- node & npm
```
Install from http://nodejs.org/
```

- bower & grunt
```shell
npm install -g grunt-cli bower
```

- ionic & cordova
```shell
npm install -g cordova ionic
```

- Yeoman and the ionic generator (recommended for scaffolding)

```shell
npm install -g yo generator-ionic
```


# Installing dependencies

```shell
npm install && bower install
```

# Running it locally

- Grunt to the rescue
```shell
grunt serve
```

This will run a server and open a browser window.

# Building dist

```shell
grunt build
```

This will create the www directory. Further instructions depend on the device needed. You can add a platform by running:

```shell
cordova platform add <platform>
```

## Updating the dependencies

Every time we make modifications to bower.json and package.json, we obviously need to update the dependencies locally. This is pretty easy to do:

```shell
npm install && bower install
```

## Styles

Styles are written in SCSS (SASS), but compile to pure CSS via a grunt task.