# TravisPractice
![Travis-Badge-Build](https://travis-ci.org/Samatar26/TravisPractice.svg?branch=master)

Continuous Integration (CI) is a development practice that requires developers to integrate code into a shared repository several times a day. Each check-in is then verified by an automated build, allowing teams to detect problems early.

By integrating regularly, you can detect errors quickly, and locate them more easily.

![flow-diagram](./ci.png)
## Practices

- Maintain a single source repository
- Automate the build
- Make your build self-testing
- Every commit should build on an integration tool such as Travis
- Keep the build fast
- Test in a clone of the production environment. Your testing server should be configured in the same way as your production environment.
- Make it easy for anyone to get the latest executable version
- Everyone can see what’s happening
- Automate deployment

## How you can do it

- Work on a branch of the main/shared repository
- Before you push your changes you should check whether a build is in the succesfull status. If not, assist in fixing that.
- When you're finished/the build's succesfull, make a pull-request
- The CI Server (Travis) automatically monitors the repository and runs your unit and integration tests
- You can see whether the new code has passed the CI's tests on GitHub.
- You can also configure your CI tool to alert teams of succesfull builds/tests.
- Contiue to regularly integrate and test through


## Benefits

#### Reduces risk
- It makes it a lot easier from finding and removing bugs.

#### Faster iterations

- Because we're integrating regularly often the gap between the application in production and the one in development will be smaller.
- This also puts you in a position to release more often.
#### Better communication
- More visibility of code.
- Better collaboration between developers.

## Travis Setup

1. Sign in to Travis with your GitHub account
2. Wait for Travis to synchronise your repositories
3. Add a `.travis.yml` file to the root directory of your repository.
Contents should be like this:

```yml
language: node_js
node_js:
- '7'
```

## Displaying badge

Click on the badge on the Travis build page.
Link to build status badge should look something like this: https://travis-ci.org/Samatar26/TravisPractice.svg?branch=master

Then you can put this link in your readme which will auto-update and show team/users whether the build is passing or failing
