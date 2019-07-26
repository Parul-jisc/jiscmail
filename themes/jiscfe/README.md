# Front-end foundations, by Jisc Digital team.

Front-end code for the shared front-end foundations.
- Source code is located in `\src`. 
- Code is built into `\dist`, which is ignored by the repo.

## Installation

```npm install```

## Commands

- Clean old files, build dest and launch site in browser
  - `gulp`

- Individual commands should you need to use them

  - Clean out distribution directory.
    - `gulp clean`

  - Clean out distribution directory and build distribution.
    - `gulp clean-build`

  - Build distribution.
    - `gulp build`

  - Run unit tests.
    - `gulp test`

  - Tell browserSync to watch all source files for changes; build distribution when they change. 
    - Note that this does not clean out the distribution directory 
    - `gulp prototype`

Note gulpfile is an MVP.
