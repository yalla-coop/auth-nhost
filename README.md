Redwood Nhost Auth Integration
==============================

## Building
```
$ npm install
$ npm run build
```
## Publishing (Yalla)
Login to npm:
```
$ npm login
npm notice Log in on https://registry.npmjs.org/
Username: yalla-cooperative
Password: {{Find in Bitwarden (Npm)}}
Email: (this IS public) hello@yallacooperative.com
npm notice Please check your email for a one-time password (OTP)
Enter one-time password: {{Find in Gmail}}
```
You may need to update the "version" field in package.json. Then:
```
$ npm publish
``` 

## Redwood Docs
> **Warning**
>
> This package is no longer maintained

Nhost used to be an officially supported auth provider in RedwoodJS. But,
starting in v4, we decided that we needed to cut back on the number of auth
providers we maintain support for. Based on usage statistics, we decided to
stop maintaining the Nhost auth integration.

This was the PR that removed support for Nhost and a few more:
https://github.com/redwoodjs/redwood/pull/7138. That means this was the last
commit that had support for Nhost:
https://github.com/redwoodjs/redwood/commit/3d057db199487ea0b17240317d66ddde3f83f332.

If you want to use Nhost as your auth provider, we recommend that you first
check to see if anyone has forked this repo (by using the
[Network Graph](https://github.com/redwoodjs/auth-nhost/network)) and has an
active fork. If not, you can fork this repo and publish the packages to NPM.
That way, you and the rest of the community can keep using Nhost auth. You can
also get the community's help keeping the Nhost auth integration maintained.

