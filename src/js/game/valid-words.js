import getWordList from "./words"
import FOUR from "./dictionary/four"
import FIVE from "./dictionary/five"
import SIX from "./dictionary/six"
import SEVEN from "./dictionary/seven"
import EIGHT from "./dictionary/eight"
import NINE_A from "./dictionary/nine-a"
import NINE_B from "./dictionary/nine-b"

var validWords = {
    "4": FOUR,
    "5": FIVE,
    "6": SIX,
    "7": SEVEN,
    "8": EIGHT,
    "9": [...NINE_A, ...NINE_B]
}

var wordLists = {
    daily: {
        "4": [...validWords["4"]], "5": [...validWords["5"]], "6": [...validWords["6"]], "7": [...validWords["7"]], "8": [...validWords["8"]], "9": [...validWords["9"]]
    },
    practice: {
        "4": [...validWords["4"]], "5": [...validWords["5"]], "6": [...validWords["6"]], "7": [...validWords["7"]], "8": [...validWords["8"]], "9": [...validWords["9"]]
    }
}

function addToLists(customWordList, property) {
    customWordList.forEach(word => {
        if (!wordLists[property][(word.length).toString()].includes(word.toUpperCase())) {
            wordLists[property][(word.length).toString()].push(word.toUpperCase())
        }
    });
}

addToLists(getWordList(true), "daily")
addToLists(getWordList(false), "practice")

function getValidWordList(isDaily, length) {
    let property = "practice"
    if (isDaily) {
        property = "daily"
    }
    return wordLists[property][length.toString()]
}

export default getValidWordList;