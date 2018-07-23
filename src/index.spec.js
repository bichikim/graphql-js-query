import query from './'
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
    let realFetch, url, request
    before(() => {
      realFetch = window.fetch
      window.fetch = (_url, _request) => {
        url = _url
        request = _request
        return Promise.resolve('result')
      }

    })

    after(() => {
      window.fetch = realFetch
    })

    it('should work', async () => {
      const result = await image.request('abc')
      expect(url).to.equal('abc')
      expect(JSON.parse(request.body)).to.deep.equal({'query':'image(size:50){url,width,height}'})
      expect(request.headers).to.deep.equal({'Content-Type': 'application/json'})
      expect(result).to.equal('result')
    })

    it('should work with params', async () => {
      const result = await image.request('abc', {item: 'item'})
      expect(url).to.equal('abc')
      expect(JSON.parse(request.body)).to.deep.equal({
        'query':'image(size:50){url,width,height}',
        'variables': {item: 'item'},
      })
      expect(request.headers).to.deep.equal({'Content-Type': 'application/json'})
      expect(result).to.equal('result')
    })

    it('should work with params', async () => {
      const result = await image.request('abc', {item: 'item'}, {mode: 'cors'})
      expect(url).to.equal('abc')
      expect(JSON.parse(request.body)).to.deep.equal({
        'query':'image(size:50){url,width,height}',
        'variables': {item: 'item'},
      })
      expect(request.headers).to.deep.equal({'Content-Type': 'application/json'})
      expect(request.mode).to.equal('cors')
      expect(result).to.equal('result')
    })
  })
})
