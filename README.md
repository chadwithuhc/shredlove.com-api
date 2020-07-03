# shredlove-com-api

> headless CMS for shredlove.com data

## About

This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## Getting Started

Getting up and running is as easy as 1, 2, 3.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    cd path/to/shredlove-com-api
    npm install
    ```

3. Add your mongodb connection

    ```
    touch .env
    ```
    ```
    MONGO_URI=mongodb://site.com:port/database
    ```

> Note: You can connect to the mongodb remotely using the cli command
> ```
> $ mongo -u <user> -p <pass> <host>:<port>/<db>
> ```

4. Start your app

    ```
    npm run dev
    ```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run.

## Scaffolding

Feathers has a powerful command line interface. Here are a few things it can do:

```
$ npm install -g @feathersjs/cli          # Install Feathers CLI

$ feathers generate service               # Generate a new Service
$ feathers generate hook                  # Generate a new Hook
$ feathers help                           # Show all commands
```

## Help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).
