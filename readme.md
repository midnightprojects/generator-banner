# Banner generator

[Yeoman](http://yeoman.io) generator for HTML5 banner development.

![](http://i.imgur.com/VrkuFOg.jpg)

## Features

* CSS Autoprefixing
* Built-in preview server with LiveReload
* Wire up your Bower components with [grunt-wiredep](#third-party-dependencies).
* Sprite sheet generation support

For more information on what `generator-banner` can do for you, take a look at the [Grunt tasks](https://github.com/yeoman/generator-banner/blob/master/app/templates/_package.json) used in `package.json`.


## Getting Started

- Install: `npm install -g generator-banner`
- Run: `yo banner`
- For additional sizes, run: `yo banner:add [WIDTH]x[HEIGHT]`
- Run: `grunt serve --target=[WIDTH]x[HEIGHT]` for preview and live reload
- Run: `grunt build --target=[WIDTH]x[HEIGHT]` for a production ready build


#### Grunt Serve Note

Note: `grunt server` was used for previewing in earlier versions of the project, and has since been deprecated in favor of `grunt serve`.


## Options

* `--skip-install`

  Skips the automatic execution of `bower` and `npm` after scaffolding has finished.


## License

[MIT license](https://opensource.org/licenses/MIT)
