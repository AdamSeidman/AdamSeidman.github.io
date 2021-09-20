var getUserAgent = function() {
    return navigator.userAgent;
}

var isTablet = function () {
    return /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(getUserAgent());
}

var isMobile = function () {
    return /Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(getUserAgent());
}

var isDesktop = function () {
    return !isTablet && !isMobile;
}

const helperFunctions = {
    getUA: getUserAgent,
    isTablet: isTablet,
    isMobile: isMobile,
    isDesktop: isDesktop
}

export default helperFunctions;