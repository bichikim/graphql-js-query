import query from './'
describe('graphql-query-builder', () => {
  const image = query('image')({size: 50})('url', 'width', 'height')
  it('should work', () => {
    const result = query('user')({name: 'bichi'})(
      'id',
      {
        nickname: 'name',
        item: ['candy', 'cookie', {
          ham: ['smoked', {brand: ['spam']}]
        }],
        image,
      },
    )
    expect(result.toString()).to.equal(
      'user(name:"bichi"){' +
      'id,nickname:"name",item{candy,cookie,ham{smoked,brand{spam}}},' +
      'image:image(size:50){url,width,height}' +
      '}'
    )
  })
  it('should work without arguments', () => {
    const result = query('user')()(
      'id',
      {
        nickname: 'name',
        image,
      },
      )
    expect(result.toString()).to.equal(
      'user{' +
      'id,nickname:"name",' +
      'image:image(size:50){url,width,height}' +
      '}'
    )
  })
  it('should work without results', () => {
    const result = query('user')({name: 'bichi'})().toString()
    expect(result.toString()).to.equal(
      'user(name:"bichi")'
    )
  })
  it('should work with complex arguments', () => {
    const result = query('user')({
      user: {name: 'bob'},
      friends: [
        {id: 1, name: 'ann'},
        {id: 2, name: 'tom'},
      ],
    })().toString()
    expect(result.toString()).to.equal(
      'user(user:{name:"bob"},friends:[{id:1,name:"ann"},{id:2,name:"tom"}])'
    )
  })
  it('should work without arguments & results', () => {
    const result = query('user')()()
    expect(result.toString()).to.equal('user')
  })
  it('should work without arguments & results', () => {
    const result = query('any','my', 'user')({name: 'bichi'})('name', 'age')
    expect(result.toString()).to.equal('any:my:user(name:"bichi"){name,age}')
  })
})
