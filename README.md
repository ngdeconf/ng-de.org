# ng-de.org
Website for the [ng-de.org](https://ng-de.org/) conference.

## Build Status
![Build Status](https://travis-ci.org/ngdeconf/ng-de.org.svg?branch=master "Travis Build Status")

## Photos
Background Image by Daniel Brosch on Unsplash

## Development

### 0. Prerequisite Software

* [Git](http://git-scm.com) and/or the **GitHub app** (for [Mac](http://mac.github.com) or
  [Windows](http://windows.github.com)); [GitHub's Guide to Installing
  Git](https://help.github.com/articles/set-up-git) is a good source of information.

* [Ruby](https://www.ruby-lang.org/en/)

### 1. Getting the Sources

Fork and clone repository:

1. Login to your GitHub account or create one by following the instructions given
   [here](https://github.com/signup/free).
2. [Fork](http://help.github.com/forking) the [main repository](https://github.com/ngdeconf/ng-de.org).
3. Clone your fork of the repository and define an `upstream` remote pointing back to
   the main repository that you forked in the first place.

```shell
# Clone your GitHub repository:
git clone git@github.com:<github username>/ng-de.org.git

# Go to the directory:
cd ng-de.org

# Add the main repository as an upstream remote to your repository:
git remote add upstream https://github.com/ngdeconf/ng-de.org.git
```

### 2. Install the project dependencies
```bash
# install bundler as ruby package manager
gem install bundler
# install the project depdencies defined int the Gemfile
bundle install
```

### 3. Run the jekyll instance

```bash
# start the web page at http://localhost:4000
bundle exec jekyll serve --incremental
```
