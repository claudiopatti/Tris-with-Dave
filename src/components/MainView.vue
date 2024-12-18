<script>
import store from '../data/store.js';
import ModalView from '../pieces/ModalView.vue';
import TableResults from '../pieces/TableResults.vue';
import TitlePiece from '../pieces/TitlePiece.vue';
import Grid from '../pieces/Grid.vue';
import ButtonsResetAndNewgame from '../pieces/ButtonsResetAndNewgame.vue';

export default {
    name: 'MainView',
    components: {
        ModalView,
        TableResults,
        TitlePiece,
        Grid,
        ButtonsResetAndNewgame
    },
    data() {
        return {
            store,
        }
    },
    methods: {

    },
    mounted() {

    }

};
</script>

<template>
    <ModalView />
    <div id="container-grande" class="container d-flex justify-content-center align-items-center flex-wrap p-5">
        <titlePiece/>
        <Grid v-if="store.bestOfTree == true || store.normal == true" />
        <div v-if="store.bestOfTree == true || store.normal == true" class="col-12 col-lg-3 pt-3 d-flex flex-column justify-content-center align-items-center">
            <ButtonsResetAndNewgame />
            <TableResults />
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    height: 100%;
    position: relative;
    // width: 100vw;
}
</style>