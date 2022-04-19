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

addWordList(COMPANIES, false)
addWordList(GENERAL_WORDS, false)
addWordList(PEOPLE, true)
addWordList(SLANG, false)
addWordList(TECHNICAL_WORDS, false)

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