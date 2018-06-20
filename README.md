![intro](./media/intro.svg)
# Graphql JS Query
> Js style Graphql Query

[![Build Status](https://travis-ci.org/bichikim/keg.svg?branch=master)](https://travis-ci.org/bichikim/graphql-js-query)
[![Codecov](https://img.shields.io/codecov/c/github/bichikim/keg.svg)](https://codecov.io/github/bichikim/graphql-js-query)
## How to use
```javascript
import query from './src'
const result = query('user')({name: 'bichi'})(
  'id', 'name', 'age'
).toString()
// result = user(name:"bichi"){id,name,age}
```
```javascript
import query from './src'
const result = query('my', 'user')({name: 'bichi'})(
  'id', 'name', 'age'
).toString()
// result = my:user(name:"bichi"){id,name,age}
```
```javascript
import query from './src'
const result = query('user')({name: 'bichi'})(
  'id', 'name', 'age', {
    items: ['cookie', 'jam', {candy: ['red', 'blue']}]
  }
).toString()
// result = user(name:"bichi"){id,name,age,items{cookie,jam,candy{red,blue}}}
```
```javascript
import query from './src'
const result = query('user')({name: 'bichi', friends: [
  {name: 'ann'},
  {name: 'tom'}
]})(
  'id', 'name', 'age'
).toString()
// result = user(name:"bichi",friends:[{name:"ann"},{name:"tom"]){id,name,age}
```