<template>
    <span class="full-settings">
        <font-awesome-icon v-if="daily" :icon="['fa', 'infinity']" class="infinity icon" @click="setWindow('game-infinite')" />
        <font-awesome-icon v-else :icon="['fa', 'calendar']" class="calendar icon" @click="setWindow('game')" />
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
    methods: {
        toggleModal() {
            this.showSettings = !this.showSettings
        },
        setWindow(extension) {
            window.location = "https://seidman-ad.am/" + extension
        }
    }
}
</script>

<style scoped>
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