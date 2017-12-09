# pudding

This is a tiny tiny library that allows one to cleanly define css styles inside of Javascript.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

This project uses webpack so you will need to install that.

### Installing

A step by step series of examples that tell you have to get a development env running

Git clone this repository to your project

```
Give the example
```
1. git clone git@github.com:meanaycore/pudding-.git
2. require it like any other webpack dependency

```
  const $ = require('./pudding');
  const _ = $.init();

  Usage Example:

      _.(`
            body {
              background: red;
            }
        `);
```

## Built With

* [webpack](https://webpack.js.org/concepts/) - Dependency management


## Contributing

Submit a pull request to this repo and it might or might not be merged.

## Versioning

currently on version 0.0.1

## Authors

* **Akhona Mahlathi** - *Initial work* - twitter.com/meanaycore


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
