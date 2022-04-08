function SeedRandom(state1,state2){
    // https://stackoverflow.com/questions/424292/seedable-javascript-random-number-generator
    var mod1=4294967087
    var mul1=65539
    var mod2=4294965887
    var mul2=65537
    if(typeof state1!="number"){
        state1=+new Date()
    }
    if(typeof state2!="number"){
        state2=state1
    }
    state1=state1%(mod1-1)+1
    state2=state2%(mod2-1)+1
    function random(limit){
        state1=(state1*mul1)%mod1
        state2=(state2*mul2)%mod2
        if(state1<limit && state2<limit && state1<mod1%limit && state2<mod2%limit){
            return random(limit)
        }
        return (state1+state2)%limit
    }
    return random
}

var getIndex = function (listSize) {
    var backlog = []
    var date = Math.floor((new Date().getTime() - new Date("04/07/2022").getTime()) / (1000 * 3600 * 24))
    var generator = SeedRandom(date / listSize)
    while (backlog.length <= (date % listSize) + 1) {
        var num = generator(listSize)
        while (backlog.includes(num)) {
            num = generator(listSize)
        }
        backlog.push(num)
    }
    return backlog[backlog.length - 1]
}

var getRandom = function (listSize) {
    var generator = SeedRandom()
    return generator(listSize)
}

const random = {
    getTodaysIndex: getIndex,
    getRandomIndex: getRandom
}

export default random;