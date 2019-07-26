#!/bin/bash

eval git reset --hard $logOutput
eval git fetch origin $logOutput
latestTag=$(git describe --tags `git rev-list --tags --max-count=1`)
logOutput="2>&1 | tee -a output.log"
echo "Checking out latest release:" $latestTag
eval git checkout tags/$latestTag $logOutput
echo "Installing npm packages."
eval npm install $logOutput
echo "Carrying out gulp deploy."
eval node_modules/gulp/bin/gulp.js deploy $logOutput
