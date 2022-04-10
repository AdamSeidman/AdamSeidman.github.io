<template>
    <span class="full-settings">
        <font-awesome-icon :icon="['fa', 'share']" :class="['redirect-arrow', this.daily && 'daily']" @click="setWindow()" />
        <font-awesome-icon v-if="daily" :icon="['fa', 'infinity']" class="infinity icon" @click="setWindow()" />
        <font-awesome-icon v-else :icon="['fa', 'calendar']" class="calendar icon" @click="setWindow()" />
        <slot></slot>
        <font-awesome-icon :icon="['fa', 'cog']" class="cog icon" @click="toggleModal()" />
        <div class="message" v-if="this.showSettings">
            Settings
            <hr>
        </div>
    </span>
</template>

<script>
export default {
    props: {
      daily: Boolean
    },
    data() {
        return {
            showSettings: false
        }
    },
    computed: {
        extension () {
            if (this.daily) {
                return 'game-infinite'
            }
            return 'game'
        }
    },
    methods: {
        toggleModal() {
            this.showSettings = !this.showSettings
        },
        setWindow() {
            window.location = "https://seidman-ad.am/" + this.extension
        }
    }
}
</script>

<style scoped>
.redirect-arrow {
    position: absolute;
    transform: rotate(315deg);
    font-size: 8px;
    color: #444;
    padding-top: 36px;
    padding-left: 5px;
    cursor: pointer;
}
.redirect-arrow.daily {
    padding-left: 11px;
}
.icon {
    font-size: 20px;
    cursor: pointer;
    color: #444;
    padding-bottom: 3px;
}
.cog {
    padding-left: 20px;
}
.infinity, .calendar {
    padding-right: 21px;
}
</style>