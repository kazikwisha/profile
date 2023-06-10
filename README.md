### My Profile

### Checkout develop branch

```shell
$ git fetch
```

```shell
$ git branch -v -a
```

```shell
$ git switch develop

```
Navigate to the repo `cd <repo>`

```shell
$ npm install
```
You can check `package.json` scripts sections for specific commands

### Format/Prettify Files

```shell
$ npm run format
```

### How to build locally

```shell
$ npm run start
```

`http://localhost:8000`

### How to build for production

```shell
$ npm run build
```

#### Serve files

```shell
$ npm run serve
```

#### View in browser

`http://localhost:9000`


#### Push to develop branch

```shell
$ git status

$ git add .

$ git commit -m "updates"

$ git push -u origin develop

```

### Deploy to Github Pages

Deploy to Github pages [^1]

```shell
$ npm run deploy
```

### Step 8: Check your site is running and changes were effected

`https://xbns.github.io/profile`

Clear browser cache if you don't see changes

### Note.

You don't need to switch to `main` branch since this command in (`package.json`) will deploy [^1] to  main

`"deploy": "gatsby build --prefix-paths && gh-pages -d public -b main",`