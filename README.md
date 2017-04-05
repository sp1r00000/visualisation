# Melonchallenge

Solution by Simon Emanuel Schmid

Challenge description: https://gist.github.com/retotrinkler/aebe8429fe51173d5ed5e5ca780bb6a1

Live: https://melonchallenge.now.sh


## Noteworthy features of this solution
[x] Based on Meteor/React
[x] Code quality assured through [Airbnb Javascript Style Guide](https://github.com/airbnb/javascript)
[x] Test driven with Mocha/Chai
[x] Redux state management
[x] Deployed with zeit.co now
[x] No server-side code
[ ] Filter results from contract
[ ] Adjust to Melonport CI
[ ] Use https://github.com/frozeman/meteor-build-client

## Notes on server-side code
It does not make a lot of sense to use Meteor without server side code, except for the build system,
which is not the best. If we really want to deploy this piece of software to IPFS, we need to refactor
it into a frontend only solution with a Webpack-build system or something. But I can do that, no worries ;).
