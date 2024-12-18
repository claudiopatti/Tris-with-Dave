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
    <div class="col-12">
        <h1 class="text-dark modak-regular text-center">Tris By <span class="modak-regular text-success">Claude</span> &
            <span class="modak-regular text-primary">Dave</span></h1>
    </div>
</template>