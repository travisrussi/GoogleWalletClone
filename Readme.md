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

### Related documents

* [Google Wallet iOS in Ionic Framework](https://docs.google.com/document/d/1U2o7KXGZPL8EFmm5Oo9WsO1luaxmMdPqHWSLFW3iILo/edit#heading=h.dbdt7239ez0v)
* [Screenshots](https://drive.google.com/a/russigroup.com/folderview?id=0B1lB-i43vZI9TDNDanMyc1NJOFU&usp=sharing)