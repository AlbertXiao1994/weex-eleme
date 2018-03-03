/* eslint-disable no-undef */
const stream = weex.requireModule('stream')

/**
 * @func
 * @desc 使用stream模块获取数据
 * @export
 * @param {string} url - 接口url
 * @param {any} callback - 回调函数
 * @returns
 */
export function get (url, callback) {
  return stream.fetch({
    methods: 'GET',
    type: 'json',
    url: url
  }, callback)
}
