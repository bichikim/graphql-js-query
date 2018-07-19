import query from './'
import sinon from 'sinon'
describe('graphql-js-query', () => {
  const image = query('image')({size: 50})('url', 'width', 'height')

  describe('toString', () => {
    it('should work', () => {
      const result = query('user')({name: 'bichi'})(
        'id',
        {
          nickname: 'name',
          item: ['candy', 'cookie', {
            ham: ['smoked', {brand: ['spam']}],
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
  describe('request', () => {
    let spyFetch, result
    beforeEach(() => {
      spyFetch =  sinon.spy(window, 'fetch')
    })
    afterEach(() => {
      spyFetch.restore()
    })
    it('should work', () => {
      const result = image.request('abc')
      const args = spyFetch.getCall(0).args
      console.log(args[1])
      expect(args[0]).to.equal('abc')
      expect(args[1].body).to.equal('{"query":"image(size:50){url,width,height}"}')
      expect(args[1].headers).to.equal({})
    })
  })
})
