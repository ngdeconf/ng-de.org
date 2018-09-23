# ng-de.org
Website for the [ng-de.org](https://ng-de.org/) conference.

## Build Status
![Build Status](https://travis-ci.org/ngdeconf/ng-de.org.svg?branch=master "Travis Build Status")

## Photos
Background Image by Daniel Brosch on Unsplash

## Development

### 1. Get a local copy of the repository
Download or clone the repo to your machine.

### 2. Install the runtime dependenies
*You may need to install ruby.*
If the ruby runtime is already on your machine make sure to have the `bundler` gem installed.

```bash
gem install bundler
```

### 3.Install the project dependencies
Download deps that are defined in `Gemfile`.

```bash
bundle install
```

### 4. Run the jekyll instance

```bash
# start the web page at http://localhost:4000
bundle exec jekyll serve --incremental
```
