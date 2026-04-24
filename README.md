npx tsc

npm publish

-------

npm run build
npm version patch
npm publish

npm version patch   # 1.0.1
npm version minor   # 1.1.0
npm version major   # 2.0.0


## Rule Update
| Branch              | Version publish lên registry |
|---------------------|------------------------------|
| [`main / master`]() | 1.0.0, 1.0.1                 |
| [`develop`]()       | 1.0.1-beta.1                 |
| [`feature/x`]()     | 1.0.1-alpha.x123  

🚀 View all versions
```
npm view @LamNguyen17/sp-features-friends versions --registry=https://npm.pkg.github.com
```

🚀 View dist-tag
```
npm dist-tag ls @LamNguyen17/sp-features-friends --registry=https://npm.pkg.github.com
```
