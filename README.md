# meteor-bourbon-suite
The complete bourbon suite for meteor - bourbon, bitters, neat and refills

This package depends upon [thegeekmachine:ruby-sass](https://github.com/thegeekmachine/meteor-ruby-sass), which uses `ruby-sass` instead of `libsass` based compilers like `node-sass`, which doesn't (yet) support features found in Sass 3.2+. When it does, and is stable enough, we plan on migrating to it as it blows `ruby-sass` out of the water when it comes to speed.

## Getting started

This package requires `ruby-sass` to be installed in order to compile scss files. To install it, do:

    $ gem install sass
    # or check http://sass-lang.com/install

Add a `ruby-sass.json` file to the root of the project, with the following contents:

    {
        "import": ".meteor/local/build/programs/server/assets/packages/thegeekmachine_bourbon-suite"
    }

Run `meteor`. Enjoy ^\_^


## The Bourbon family

- [Bourbon](http://bourbon.io): A simple and lightweight mixin library for Sass
- [Neat](http://neat.bourbon.io): A lightweight semantic grid framework for Sass and Bourbon
- [Bitters](http://bitters.bourbon.io): Scaffold styles, variables and structure for Bourbon projects
- [Refills](http://refills.bourbon.io): Prepackaged patterns and components, built on top of Bourbon, Bitters & Neat

## Credits

![thoughtbot](http://thoughtbot.com/images/tm/logo.png)

Bourbon is maintained and funded by [thoughtbot, inc](http://thoughtbot.com). Tweet your questions or suggestions to [@bourbonsass](https://twitter.com/bourbonsass) and while you’re at it follow us too.

## License

Copyright © 2011–2014 [thoughtbot, inc](http://thoughtbot.com). Bourbon is free software, and may be redistributed under the terms specified in the [license](LICENSE.md).
