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
        // resetAllPage() {
        //     this.store.countClick = 0;
        //     this.store.wins = '';
        //     console.log(this.store.countClick);

        //     for (let resetCard = 0; resetCard < 9; resetCard++) {
        //         document.getElementById(resetCard).innerHTML = ""
        //     }

        //     this.store.tie = false;

        //     // if (this.store.resetCounter == 3 && this.store.bestOfTree == true) {
        //     //     this.store.results.unshift({ store.tie: this.store.store.tieCount, resultX: this.store.counterX, resultO: this.store.counterO });
        //     //     console.log(this.store.results);
        //     //     alert('vinto al meglio dei tre')
        //     // }

        // },
        // resetTable() {
        //     // this.store.results.push({store.tie: this.store.store.tieCount, resultX: this.store.counterX, resultO: this.store.counterO});
        //     this.store.results.unshift({ tie: this.store.tieCount, resultX: this.store.counterX, resultO: this.store.counterO });
        //     console.log(this.store.results);
        //     this.store.tieCount = 0;
        //     this.store.counterX = 0;
        //     this.store.counterO = 0;
        //     this.store.tie = false;
        // },


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

            <!-- <div class="row w-100 ">

                <div class="col-6 col-lg-5 p-0 d-flex justify-content-center align-items-center mb-4 ">
                    <button @click="resetAllPage()" class="btn btn-primary">
                        RESET
                    </button>
                </div>
                <div class="col-6 col-lg-7 p-0 d-flex justify-content-center align-items-center mb-4">
                    <button @click="resetAllPage(), resetTable()" type="button" class="btn btn-success">
                        NEW GAME
                    </button>

                </div>
            </div> -->

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
