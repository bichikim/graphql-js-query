import query from './'
describe('graphql-query-builder', () => {
  it('should work', () => {
    const image = query('image')({size: 50})('url', 'width', 'height')
    const result = query('user')({name: 'bichi'})(
      'id',
      {
        nickname: 'name',
        image,
      },
    ).toString()
    expect(result).to.equal(
      'user(name:bichi){' +
      'id,nickname:name,' +
      'image:image(size:50){url,width,height}' +
      '}'
    )
  })
  it('should work', () => {
    const result = query('user')()({name: 'bichi'}).toString()
    expect(result).to.equal(
      'user{name:bichi}'
    )
  })
})
