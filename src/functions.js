module.exports = {
  parseBody: function (text) {
    return text
      .replace(/\n/gi, '</p><p>')
      .replace(/<blockquote>/g, '<blockquote><span>')
      .replace(/<\/blockquote>/g, '</span></blockquote>')
  }
}
