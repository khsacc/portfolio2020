const browsers = (userAgent:string) :'Internet Explorer' | 'Edge' | 'Chrome' | 'Safari' | 'FireFox' | 'Opera' | undefined => {
  if (userAgent.includes('msie') || userAgent.includes('trident')) {
    return 'Internet Explorer'
  } else if (userAgent.includes('edge')) {
    return 'Edge'
  } else if (userAgent.includes('chrome')) {
    return 'Chrome'
  } else if (userAgent.includes('safari')) {
    return 'Safari'
  } else if (userAgent.includes('firefox')) {
    return 'FireFox'
  } else if (userAgent.includes('opera')) {
    return 'Opera'
  } else {
    return undefined
  }
}

const machines = (userAgent:string): 'iPhone' | 'iPad' |'android-sp' | 'android-tab' | undefined => {
  if (userAgent.includes('iphone')) {
    return 'iPhone'
  } else if (userAgent.includes('ipad')) {
    return 'iPad'
  } else if (userAgent.includes('android')) {
    if (userAgent.includes('mobile')) {
      return 'android-sp'
    } else {
      return 'android-tab'
    }
  } else {
    return undefined
  }
}

export default function () {
  const userAgent = window.navigator.userAgent.toLowerCase()
  const browser = browsers(userAgent)
  const machine = machines(userAgent)
  return {
    browser,
    machine
  }
}
