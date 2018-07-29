![intro](./media/intro.png)
# Graphql JS Query
> Js style Graphql Query

You can use this library to create code similar to Graphql Query.

[![Build Status](https://travis-ci.org/bichikim/keg.svg?branch=master)](https://travis-ci.org/bichikim/graphql-js-query)
[![Codecov](https://img.shields.io/codecov/c/github/bichikim/keg.svg)](https://codecov.io/github/bichikim/graphql-js-query)


```bash
$ npm install graphql-js-query
$ yarn add graphql-js-query
```

## Members

- query: (name) => (params) => QueryBuilder
- QueryBuilder
  - .toString(): build Graphql Query string
  - .request(url, params?, options?): request


## How to use
```javascript
import query from './src'
const result = 
query('user')({name: 'bichi'})(
  'id',
  'name',
  'age'
)
.toString()

/* 
user(name:"bichi"){
 id,
 name,
 age
}
*/ 
```
```javascript
import query from './src'
const result = 
query('my', 'user')({name: 'bichi'})(
  'id',
  'name',
  'age'
)
.toString()

/* my:user(name:"bichi"){
  id,
  name,
  age
}
*/
```
```javascript
import query from './src'
const result = 
query('user')({name: 'bichi'})(
  'id',
  'name',
  'age', {
  'items': [
    'cookie',
      'jam',
      {candy: [
        'red',
        'blue',
      ]}
    ]
  }
)
.toString()

/*
user(name:"bichi"){
  id,
  name,
  age,
  items{
    cookie,
    jam,
    candy{
      red,
      blue,
    }
  }
} 
*/
```
```javascript
import query from './src'
const result = 
query('user')({name: '$name', friends: [{name: 'ann'},{name: 'tom'}]})(
  'id',
  'name',
  'age'
)

result.request('https://myServer.com', {name: 'bichi'}).then((result) => {
  console.log(result)
})

/* 
user(name:"$name",friends:[{name:"ann"},{name:"tom"]){
  id,
  name,
  age
} */
```