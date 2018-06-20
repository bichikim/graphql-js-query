# Graphql JS Query
> Js style Graphql Query

## How to use
```javascript
import query from './src'
const result = query('user')({name: 'bichi'})(
  'id', 'name', 'age'
)
// result = user(name:'bichi'){id,name,age}
```
```javascript
import query from './src'
const result = query('my', 'user')({name: 'bichi'})(
  'id', 'name', 'age'
)
// result = my:user(name:'bichi'){id,name,age}
```
```javascript
import query from './src'
const result = query('user')({name: 'bichi'})(
  'id', 'name', 'age', {
    items: ['cookie', 'jam', {candy: ['red', 'blue']}]
  }
)
// result = user(name:'bichi'){id,name,age,items{cookie,jam,candy{red,blue}}}
```
```javascript
import query from './src'
const result = query('user')({name: 'bichi', friends: [
  {name: 'ann'},
  {name: 'tom'}
]})(
  'id', 'name', 'age'
)
// result = user(name:'bichi',friends:[{name:"ann"},{name:"tom"]){id,name,age}
```