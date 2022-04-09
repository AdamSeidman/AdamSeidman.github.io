<template>
    <div class="game-container">
        <Transition>
          <div class="message" v-if="this.msg.showMessage">
            {{ this.msg.message }}
          </div>
        </Transition>
        <header>
            <h1 class="game-header">RIT BAJA-DLE</h1>
        </header>
        <div id="board">
            <div
                v-for="(row, index) in board"
                :key="`row ${index}`"
                :class="[
                    'row',
                    shakeRowIndex === index && 'shake',
                    success && currentRowIndex === index && 'jump'
                ]"
            >
                <div
                    v-for="(tile, subindex) in row"
                    :key="`row ${index} tile ${subindex}`"
                    :class="['tile', tile.letter.length > 0 && 'filled', tile.state.name !== 'initial' && 'revealed']"
                >
                    <div class="front" :style="{ transitionDelay: `${index * 300}ms` }">
                        {{ tile.letter }}
                    </div>
                    <div
                        :class="['back', tile.state.name]"
                        :style="{
                            transitionDelay: `${index * 300}ms`,
                            animationDelay: `${index * 100}ms`
                        }"
                    >
                        {{ tile.letter }}
                    </div>
                </div>
            </div>
        </div>
        <Keyboard @key="onKey" />
    </div>
</template>

<script>
import getWordList from '../js/game/words'
import Keyboard from '../components/Keyboard'
import random from '../js/game/random'
import properties from '../js/game/game'
import getValidWordList from '../js/game/valid-words'

const LetterState = {
  CORRECT: {icon: '🟩', name: 'correct'},
  PRESENT: {icon: '🟨', name: 'present'},
  ABSENT: {icon: '⬜', name: 'absent'},
  INITIAL: {icon: null, name: 'initial'}
}

export default {
    components: {
        Keyboard
    },
    data () {
        return {
            msg: {message: "", showMessage: false, index: 0},
            daily: true,
            shakeRowIndex: -1,
            currentRowIndex: 0,
            success: false,
            board: [],
            allowInput: true,
            letterStates: []
        }
    },
    computed: {
        word() {
            let wordList = getWordList(this.daily)
            return wordList[random.getTodaysIndex(wordList.length)]
        },
        wordList() {
          return getValidWordList(this.daily, this.word.length)
        }
    },
    created () {
        this.setupBoard()
        const onKeyup = e => this.onKey(e.key)
        window.addEventListener('keyup', onKeyup)
    },
    methods: {
        showMessage(msg, time) {
            if (time === void 0) { time = 1000; }
            this.msg.message = msg;
            this.msg.index += 1
            let index = this.msg.index
            this.$set(this.msg, 'showMessage', true)
            let self = this
            if (time > 0) {
                setTimeout(function () {
                    if (self.msg.index == index) {
                        self.$set(self.msg, 'showMessage', false)
                    }
                }, time);
            }
        },
        setupBoard() {
            this.board =
              Array.from({ length: properties.getNumGuesses(this.word.length) }, () => 
                Array.from({ length: this.word.length }, () => ({
                  letter: '',
                  state: LetterState.INITIAL
                }))
              )
            this.currentRowIndex = 0
            this.shakeRowIndex = -1
            this.success = false
            this.allowInput = true
            this.letterStates = {}
            for (let i = 0; i < 26; i++) {
              this.letterStates[String.fromCharCode(97 + i)] = LetterState.INITIAL
            }
            this.letterStates["Backspace"] = LetterState.INITIAL
            this.letterStates["Enter"] = LetterState.INITIAL
        },
        onKey(key) {
          if (!this.allowInput) {
            return
          }
          if (/^[a-zA-Z]$/.test(key)) {
            this.fillTile(key.toLowerCase())
          } else if (key === 'Backspace') {
            this.clearTile()
          } else if (key === 'Enter') {
            this.completeRow()
          }
        },
        fillTile(letter) {
          for (const tile of this.board[this.currentRowIndex]) {
            if (!tile.letter) {
              tile.letter = letter
              break
            }
          }
        },
        clearTile() {
          for (const tile of [...this.board[this.currentRowIndex]].reverse()) {
            if (tile.letter) {
              tile.letter = ''
              break
            }
          }
        },
        completeRow() {
          if (this.board[this.currentRowIndex].every(tile => tile.letter)) {
            const guess = this.board[this.currentRowIndex].map(tile => tile.letter).join('')
            if (!this.isValidWord(guess)) {
              this.shake()
              this.showMessage('Not in word list')
              return
            }
            const answerLetters = this.word.split('')
            // Greens
            this.board[this.currentRowIndex].forEach((tile, i) => {
              if (answerLetters[i] === tile.letter) {
                tile.state = LetterState.CORRECT
                this.letterStates[tile.letter] = LetterState.CORRECT
                answerLetters[i] = null
              }
            })
            // Yellows
            this.board[this.currentRowIndex].forEach(tile => {
              if (tile.state.name === LetterState.INITIAL.name && answerLetters.includes(tile.letter)) {
                tile.state = LetterState.PRESENT
                answerLetters[answerLetters.indexOf(tile.letter)] = null
              }
            })
            // GRAYS
            this.board[this.currentRowIndex].forEach(tile => {
              if (tile.state.name === LetterState.INITIAL.name) {
                tile.state = LetterState.ABSENT
                if (this.letterStates[tile.letter] === undefined) {
                  this.letterStates[tile.letter] = LetterState.ABSENT
                }
              }
            })

            this.allowInput = false
            if (this.board[this.currentRowIndex].every(tile => tile.state.name === LetterState.CORRECT.name)) {
              this.showMessage(['Genius', 'Magnificent', 'Impressive', 'Splendid', 'Great', 'Phew'][this.currentRowIndex])
              this.success = true// TODO
            } else if (this.currentRowIndex < this.board.length - 1) {
              this.currentRowIndex++
              let self = this
              setTimeout(() => {
                self.allowInput = true
              }, 1600)
            } else {
              this.showMessage("GAME OVER") // timeout? TODO
              // TODO game over
            }
            // todo allow input
          } else {
            this.shake()
            this.showMessage("Not enough letters")
          }
        },
        isValidWord(word) {
          return this.wordList.includes(word.toUpperCase())
        },
        shake() {
          this.shakeRowIndex = this.currentRowIndex
          let self = this
          setTimeout(() => {
            self.shakeRowIndex = -1
          }, 1000)
        },
        getResultGrid() {
          return board.slice(0, currentRowIndex + 1).map(row => {
            return row.map(tile => tile.state.icon).join('')
          }).join('\n')
        }
    }
}
</script>

<style>
h1.game-header {
  margin: 4px 0;
  font-size: 36px;
}

header {
  border-bottom: 1px solid #ccc;
  margin-bottom: 30px;
  position: relative;
}

#source-link {
  position: absolute;
  right: 1em;
  top: 0.5em;
}

.correct,
.present,
.absent {
  color: #fff !important;
}

.correct {
  background-color: #6aaa64 !important;
}

.present {
  background-color: #c9b458 !important;
}

.absent {
  background-color: #787c7e !important;
}

</style>

<style scoped>
#board {
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-gap: 5px;
  padding: 10px;
  box-sizing: border-box;
  --height: min(420px, calc(var(--vh, 100vh) - 310px));
  height: var(--height);
  width: min(350px, calc(var(--height) / 6 * 5));
  margin: 0px auto;
}
.message {
  position: absolute;
  left: 50%;
  top: 80px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.85);
  padding: 16px 20px;
  z-index: 2;
  border-radius: 4px;
  transform: translateX(-50%);
  transition: opacity 0.3s ease-out;
  font-weight: 600;
}
.message.v-leave-to {
  opacity: 0;
}
.row {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 5px;
}
.tile {
  width: 100%;
  font-size: 2rem;
  line-height: 2rem;
  font-weight: bold;
  vertical-align: middle;
  text-transform: uppercase;
  user-select: none;
  position: relative;
}
.tile.filled {
  animation: zoom 0.2s;
}
.tile .front,
.tile .back {
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
}
.tile .front {
  border: 2px solid #d3d6da;
}
.tile.filled .front {
  border-color: #999;
}
.tile .back {
  transform: rotateX(180deg);
}
.tile.revealed .front {
  transform: rotateX(180deg);
}
.tile.revealed .back {
  transform: rotateX(0deg);
}

@keyframes zoom {
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.shake {
  animation: shake 0.5s;
}

@keyframes shake {
  0% {
    transform: translate(1px);
  }
  10% {
    transform: translate(-2px);
  }
  20% {
    transform: translate(2px);
  }
  30% {
    transform: translate(-2px);
  }
  40% {
    transform: translate(2px);
  }
  50% {
    transform: translate(-2px);
  }
  60% {
    transform: translate(2px);
  }
  70% {
    transform: translate(-2px);
  }
  80% {
    transform: translate(2px);
  }
  90% {
    transform: translate(-2px);
  }
  100% {
    transform: translate(1px);
  }
}

.jump .tile .back {
  animation: jump 0.5s;
}

@keyframes jump {
  0% {
    transform: translateY(0px);
  }
  20% {
    transform: translateY(5px);
  }
  60% {
    transform: translateY(-25px);
  }
  90% {
    transform: translateY(3px);
  }
  100% {
    transform: translateY(0px);
  }
}

@media (max-height: 680px) {
  .tile {
    font-size: 3vh;
  }
}

div.game-container {
  font-family: 'Clear Sans', 'Helvetica Neue', Arial, sans-serif;
  text-align: center;
  max-width: 500px;
  margin: 0px auto;
}
</style>
