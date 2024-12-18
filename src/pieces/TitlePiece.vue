<script>
import store from '../data/store.js'
export default {
    name: 'TitlePiece',
    data() {
        return {
            // Your data here
            store
        }
    },
    methods: {
        // Your methods here
        resetAllPage() {
            this.store.countClick = 0;
            this.store.wins = '';
            console.log(this.store.countClick);

            for (let resetCard = 0; resetCard < 9; resetCard++) {
                document.getElementById(resetCard).innerHTML = ""
            }

            this.store.tie = false;
        },
        resetTable() {
            // this.store.results.push({store.tie: this.store.store.tieCount, resultX: this.store.counterX, resultO: this.store.counterO});
            if (this.store.tieCount != 0 || this.store.counterX != 0 || this.store.counterO != 0 || this.store.tie != false) {
                this.store.results.unshift({ tie: this.store.tieCount, resultX: this.store.counterX, resultO: this.store.counterO });
                console.log(this.store.results);
                this.store.tieCount = 0;
                this.store.counterX = 0;
                this.store.counterO = 0;
                this.store.tie = false;
            }
        },
    },
}
</script>
<template>
    <div class="col-12 text-center pb-2">
        <h1 class="text-dark modak-regular"><span class="tris modak-regular text-warning">Tris</span> By <span class="modak-regular text-success">Claude</span> &
            <span class="modak-regular text-primary">Dave</span>
        </h1>
        <p v-if="store.bestOfTree == false && store.normal == false">
            Scegli una modalità di gioco
        </p>
        <div class="myCont d-flex justify-content-center gap-3 flex-wrap">
            <button @click="store.bestOfTree = true, store.modal = true, store.normal = false, store.bestOfFive = false, resetAllPage(), resetTable()"
                type="button" class="btn btn-success">Best Of 3</button>
            <button @click="store.bestOfFive = true, store.modal = true, store.normal = false, store.bestOfTree = false, resetAllPage(), resetTable()"
                type="button" class="btn btn-success">Best Of 5</button>
            <button @click="store.normal = true, store.modal = true, store.bestOfTree = false, store.bestOfFive = false, resetAllPage(), resetTable()"
                type="button" class="btn btn-success">Normal </button>

        </div>

    </div>
</template>
<style lang="scss" scoped>
// Your styles here
</style>