/* eslint-disable no-undef */
const stream = weex.requireModule('stream')

export function get (url, callback) {
  return stream.fetch({
    methods: 'GET',
    type: 'json',
    url: url
  }, callback)
}
