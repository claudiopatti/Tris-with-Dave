<script>
import store from '../data/store.js';
import ModalView from '../pieces/ModalView.vue';
import TableResults from '../pieces/TableResults.vue';
import Grid from '../pieces/Grid.vue';
import ButtonsResetAndNewgame from '../pieces/ButtonsResetAndNewgame.vue';

export default {
    name: 'MainView',
    components : {
        ModalView,
        TableResults,
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
    <!-- <button  type="button" class="btn btn-success">Al meglio di 3</button> -->
    <ModalView/>
    <div id="container-grande" class="container d-flex justify-content-center align-items-center flex-wrap p-5">

        
        <div class="col-12">
            <h1 class="text-dark modak-regular text-center">Tris By <span
                    class="modak-regular text-success">Claude</span> & <span
                    class="modak-regular text-primary">Dave</span></h1>
        </div>


        <Grid/>

        <div class="col-12 col-lg-3 pt-3 d-flex flex-column justify-content-center align-items-center">


            <ButtonsResetAndNewgame/>

            <TableResults/>


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
