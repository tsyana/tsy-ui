<template>
    <div id="app">
        <transition name="slide" mode="out-in">
            <router-view @view="meta"></router-view>
        </transition>
    </div>
</template>
<script>
    import { mapGetters, mapActions } from 'vuex';

    export default {
        methods: {
            ...mapActions([
                'updateTitle',
                'updateDescription',
                'updateKeywords',
            ]),
            meta(obj) {
                this.updateTitle(obj.title);
            }
        }
    };
</script>
<style >

</style>
