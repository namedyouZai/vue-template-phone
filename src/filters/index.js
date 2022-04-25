//计算距离
export function calcKm(m) {

    if(!m)return '';
    let km = (parseInt(m) / 1000).toFixed(1)
    return `${km}km`
  
  }