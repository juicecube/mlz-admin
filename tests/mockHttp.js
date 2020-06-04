/**
 * 模拟http请求的返回
 */
function HttpReponseMock($data, $opt = { status: 1, messages: 'success' }) {
  this.status = $opt.status;
  this.messages = $opt.messages;
  this.items = $data;
}
HttpReponseMock.prototype.response = jest.fn(function() {
  return Promise.resolve({
    status: this.status,
    messages: this.messages,
    items: this.items,
  });
});

module.exports = HttpReponseMock;
