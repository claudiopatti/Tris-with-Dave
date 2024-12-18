<script>
import store from '../data/store.js'
export default {
    name: 'TitlePiece',
    data() {
        return {
            // Your data here
            store
        }
    }
}
</script>
<template>
    <div class="col-12 text-center">
        <h1 class="text-dark modak-regular">Tris By <span class="modak-regular text-success">Claude</span> &
            <span class="modak-regular text-primary">Dave</span>
        </h1>
        <p v-if="store.bestOfTree == false && store.normal == false">
            Scegli una modalità di gioco
        </p>
        <button @click="store.bestOfTree = true" type="button" class="btn btn-success me-2">Al meglio di 3</button>
        <button @click="store.normal = true" type="button" class="btn btn-success">Gioca </button>

    </div>
</template>