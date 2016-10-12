# SilverShop Starter

Gulp & npm based frontend development setup for SilverStripe and other projects, leveraging live reloading 
& Babel for ES6 and other cool stuff

This setup comes preloaded with Foundation.

## This is a Fork!

**This is a fork of [SilverStripe Starter](https://github.com/titledk/silverstripe-starter)**

Any non-SilverShop specific changed should be made there.

Updating from SilverStripe Starter:

```sh
git remote add upstream git@github.com:titledk/silverstripe-starter.git
git fetch upstream
git rebase upstream/master
```


## Install

```sh
cd public
composer install
cd mysite
npm install
gulp build
```


## Watch

```sh
make watch
```

## Deploying

Note that this is meant to be a starter that's easily amendable for your own processes.
The current setting is that compiled files are not comitted which you'd need to do for a simple deployment. Just remove the correspoding lines in `/public/mysite/.gitignore`

