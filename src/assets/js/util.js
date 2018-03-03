const stream = weex.requireModule('stream')

export default {
  get (url, callback) {
    return stream.fetch({
      methods: 'GET',
      type: 'json',
      url: url
    }, callback)
  }
}
