import COMPANIES from "./words/companies"
import GENERAL_WORDS from "./words/general"
import PEOPLE from "./words/people"
import SLANG from "./words/slang"
import TECHNICAL_WORDS from "./words/technical"

var words = []

function addWordList(wordList, blockFromDaily, blockFromPractice) {
    words.push({
        list: wordList,
        blockDaily: blockFromDaily || false,
        blockPractice: blockFromPractice || false
    })
}

addWordList(COMPANIES)
addWordList(GENERAL_WORDS)
addWordList(PEOPLE, true)
addWordList(SLANG)
addWordList(TECHNICAL_WORDS)

function getWordList(isDaily) {
    var array = []
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

export default getWordList;