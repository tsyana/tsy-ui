import Hljs from 'highlight.js'

const hl = function (el, binding) {
  if (binding.value) {
    el.className = binding.value
  }
  Hljs.initHighlightingOnLoad()
  Hljs.highlightBlock(el);
}

export default  {
  bind (el, binding) {
     hl(el, binding);
  },
  componentUpdated (el, binding) {
     hl(el, binding);
  }
}