
## I try to make it work with the [DogApi](https://github.com/kinduff/dog-api).

But the error of CORS policy was really horrible, and I don't know how to resolve it. I try to build the backend in my machine to make it, but I was with a clean database.

```js
Access to XMLHttpRequest at 'https://dog-facts-api.herokuapp.com/api/facts?number=5'
 from origin 'http://localhost:3000' has been blocked by CORS policy: 
 No 'Access-Control-Allow-Origin' header is present on the requested resource.
```

So if you want to test in the branch `feat/working-with-repos` it's working, but not with the correct api.

https://main--vermillion-llama-52c255.netlify.app

To run locally, clone the repository and then.

```sh
npm install

or 

yarn install
```

and run:


```json
 yarn dev                       
```
