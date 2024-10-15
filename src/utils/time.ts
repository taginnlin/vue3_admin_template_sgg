// 判断当前时段
export const getTime = () => {
  const hour = new Date().getHours()
  if (hour <= 9) {
    return '早上'
  } else if (hour < 14) {
    return '上午'
  } else if (hour < 18) {
    return '下午'
  } else {
    return '晚上'
  }
}
