# maddie-web

A place to showcase the brilliance of Mabbie Cuttler

## Pushing changes live

1. push commits to master branch
2. run the command below to push changes live

```
git subtree push --prefix express origin gh-pages
```

if that fails then:

```
git push origin `git subtree split --prefix express master`:gh-pages --force
```