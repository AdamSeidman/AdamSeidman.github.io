import DSF_EFFECTS from "./words/dsfEffects"
import SLURS from "./words/fakeSlurs"
import NAMES from "./words/friendNames"
import GAME_NAMES from "./words/games"
import SKRIBBL_WORDS from "./words/skribblList"
var words = []

function addWordList(wordList, blockFromDaily, blockFromPractice) {
    words.push({
        list: wordList,
        blockDaily: blockFromDaily || false,
        blockPractice: blockFromPractice || false
    })
}

let cookie = window.$cookies.get("GAMES-NIGHTLE-COOKIE")

if (cookie === null) {
    cookie = {
        practice_disallowCompanies: false,
        practice_disallowGeneral: false,
        practice_disallowNames: false,
        practice_disallowTechnical: false,
        practice_disallowSlang: false
    }
}

addWordList(GAME_NAMES, false, cookie.practice_disallowCompanies)
addWordList(SKRIBBL_WORDS, false, cookie.practice_disallowGeneral)
addWordList(NAMES, false, cookie.practice_disallowNames)
addWordList(DSF_EFFECTS, false, cookie.practice_disallowSlang)
addWordList(SLURS, false, cookie.practice_disallowTechnical)

function getGamesNightWords(isDaily) {
    var array = ["games"]
    var property = "blockPractice"
    if (isDaily) {
        property = "blockDaily"
    }
    words.forEach(list => {
        if (!list[property]) {
            array = array.concat(list.list)
        }
    })
    return array
}

export default getGamesNightWords;
