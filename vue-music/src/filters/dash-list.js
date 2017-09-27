Vue.filter('dash-list', (val) => {
    if (!val) { return '' }
  
    return val.join(', ')
  })
