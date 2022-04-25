const postcss = require('postcss')
module.exports = postcss.plugin('postcss-fw500', function () {
  return function (root) {
    root.walkRules(function(rule){
      rule.walkDecls(/font-weight/,function(decl){
        if(decl.value === '500'){
          rule.append({ prop:'-webkit-text-stroke',value:'var(--fw500-stroke,0)' })
        }
      })
    })
  }
})



