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
        <h1 class="text-dark modak-regular">Tris By <span class="modak-regular text-success">Claude</span> &
            <span class="modak-regular text-primary">Dave</span>
        </h1>
        <p v-if="store.bestOfTree == false && store.normal == false">
            Scegli una modalità di gioco
        </p>
        <button @click="store.bestOfTree = true, store.modal = true, store.normal = false, resetAllPage(), resetTable()"
            type="button" class="btn btn-success me-2">Al meglio di 3</button>
        <button @click="store.normal = true, store.modal = true, store.bestOfTree = false, resetAllPage(), resetTable()"
            type="button" class="btn btn-success">Play </button>

    </div>
</template>