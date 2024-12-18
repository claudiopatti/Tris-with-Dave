<script>
import store from '../data/store.js'
export default {
    name: 'TableResults',
    data() {
        return {
            store,
        }
    },
    methods: {
        resetAllPage() {
            this.store.countClick = 0;
            this.store.wins = '';
            console.log(this.store.countClick);

            for (let resetCard = 0; resetCard < 9; resetCard++) {
                document.getElementById(resetCard).innerHTML = ""
            }

            this.store.tie = false;

            // if (this.store.resetCounter == 3 && this.store.bestOfTree == true) {
            //     this.store.results.unshift({ store.tie: this.store.store.tieCount, resultX: this.store.counterX, resultO: this.store.counterO });
            //     console.log(this.store.results);
            //     alert('vinto al meglio dei tre')
            // }

        },
        resetTable() {
            // this.store.results.push({store.tie: this.store.store.tieCount, resultX: this.store.counterX, resultO: this.store.counterO});
            this.store.results.unshift({ tie: this.store.tieCount, resultX: this.store.counterX, resultO: this.store.counterO });
            console.log(this.store.results);
            this.store.tieCount = 0;
            this.store.counterX = 0;
            this.store.counterO = 0;
            this.store.tie = false;
        },
    }
}
</script>

<template>
    <div class="row w-100 ">

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
    </div>
</template>

<style lang="scss" scoped>

</style>