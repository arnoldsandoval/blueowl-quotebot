# Blue Owl Quotebot

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Blue Owl Quotebot is a simple one page web application that retrieves a quote from a notable robot friend. 

This project was bootstrapped with Create React App. It has taken care not to eject it favoring the use of `react-app-rewired` in its place for tweaks to the webpack config(s). If you wish to review the CRA README, please refer to `./README-CRA.md`.

## Requirements

### Functional (from the Technical Challenge Document)
- At runtime, a Robot friend generates a blockquote with apropriate citation.
- The user can rate the quote with one of three reactions (Lame, Meh..., Great!)
- Once the user rates the quote, a new quote and robot image is generated.
- There are three additional options related to the curently present quote, they are as follow:
  - "Read this quote" _Optional_, When clicked the quote is played in audio form. (See APIs > Optional APIs > Text to Speech)
  - "Show past quotes" Show a list of previously read quotes.
  - "Yodify future quotes" _Optional_

### Personal
Additionally, the author has set out a few personal requirements.

1. Write as little CSS as possible, do this by leveraging modern CSS (`flexbox`, `grid`, `--var`).
2. Add services which handle data retrieval.
3. Implement both `stylelint`, `eslint` with `standard` presets in addition to `eslint-plugin-jsx-a11y`.

### APIs

##### Robot Image Generation
The robot image will be generated using the users IP address as the seed.

`GET` `https://robohash.org/${user_ip_address}.png?bgset=bg2.`

##### Random Quote
`GET` `http://quotesondesign.com/wp­json/posts?filter[orderby]=rand&filter[posts_per_page]=1`

##### Google Image Map
This isnt an API (endpoint) per-se, but we will be using Google Image Map to display an image for our Robot quote author's location.

`GET` `https://maps.googleapis.com/maps/api/staticmap?zoom=13&size=300x100&markers=37.7758,-122.4128&key=AIzaSyB7AjTQhkSyetbfqGi704_hmKb-x1MeFJM`


#### Optional APIs

##### Text to Speech
`GET` `http://api.voicerss.org/?key=224866d5892a49c4bb768f6f1679b8d4&src=${URL_Encoded_String_Here}.&hl=en-us`

## Git Workflow
This project takes care to use standard gitflow workflow with minor exceptions.

### Branches
  - `master` is our "final" production codebase, code in here is tagged with a semver and release notes. Merge rights here are restricted to certain team members (or in this instance, me alone, because its a technical exercise, not a real live production project, but humor me here...)
  - `develop` is a working branch which contains the latest working code from different branches. _*A pull request is required to merge in to this branch*_
  - `feature/${branch-name}` the feature prefix is reserved for **new feature work**
  - `bugfix/${branch-name}` the bugfix prefix is reserved for **existing features that have bugfixes**

Additionally, `refactor` and `hotfix` branches may be necessary in certain instances. Use at your discression.

### tl;dr;
```
  |-<--Pull Request--<-|
  |                    |
  | - develop -> -> feature/branch-name -->|---> Commit #1
                           ^               |---> Commit #2
                           |               |---> Commit #3
                           ^               |---> Commit #4
                           |<-<-Squash-<-<-|
```

## Thank you.
If you read this far, thank you. 🌟