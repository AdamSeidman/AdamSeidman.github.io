<template>
    <div class="game-container">
        <header>
            <h1>RIT BAJADLE</h1>
        </header>
        <div>
            <Keyboard />
        </div>
    </div>
</template>

<script>
import getWordList from '../js/game/words'
import Keyboard from '../components/Keyboard'

export default {
    components: {
        Keyboard
    },
    computed: {
        tempWords() {
            return getWordList(true);
        }
    }
}
</script>

<style>
</style>