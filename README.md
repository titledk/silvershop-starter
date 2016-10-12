# SilverStripe Starter

Gulp & npm based frontend development setup for SilverStripe and other projects, leveraging live reloading 
& Babel for ES6 and other cool stuff

This setup comes preloaded with Foundation.

## Install

```sh
cd public
composer install
cd mysite
npm install
```


## Watch

```sh
make watch
```

## Deploying

Note that this is meant to be a starter that's easily amendable for your own processes.
The current setting is that compiled files are not comitted which you'd need to do for a simple deployment. Just remove the correspoding lines in `/public/mysite/.gitignore`

