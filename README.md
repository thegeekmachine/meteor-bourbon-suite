# meteor-bourbon-suite
The complete bourbon suite for meteor - bourbon, bitters, neat and refills

This package depends upon [grigio:ruby-sass](https://github.com/grigio/meteor-ruby-sass), which uses `ruby-sass` instead of `libsass` based compilers like `node-sass`, which doesn't (yet) support features found in Sass 3.2+. When it does, and is stable enough, we plan on migrating to it as it blows `ruby-sass` out of the water when it comes to speed.

## Getting started

Add a `ruby-sass.json` file to the root of the project, with the following contents:

    {
        'file': '.meteor/local/build/programs/server/assets/packages/thegeekmachine_bourbon-suite/**/*.scss'
    }

Run `meteor`. Enjoy ^\_^
