<script>
import store from '../data/store.js'
export default {
    name: 'TableResults',
    data() {
        return {
            store,
        }
    },
}
</script>

<template>
     <div class="table-container">
                <table class="table table-striped table-hover text-center shadow ">
                    <thead>
                        <tr>
                            <th scope="col" class=""><span class="fs-3"><i class="fa-solid fa-user"></i></span><span
                                    class="fs-6"><i class="fa-brands fa-x-twitter"></i></span></th>
                            <th scope="col">
                                <h3 class="mb-0"><i class="fa-brands fa-x"></i></h3>
                            </th>
                            <th scope="col" class=""><span class="fs-3"><i class="fa-solid fa-user"></i></span><span
                                    class="fs-6"><i class="fa-brands fa-opera"></i></span></th>
                            <th scope="col">
                                <h1 class="mb-0"><i class="fa-solid fa-trophy"></i></h1>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div v-if="store.wins == 'x'">
                                    <span class="text-success" role="alert"> Win!</span>
                                </div>
                                <div v-else-if="store.wins == 'o'">
                                    <span class="text-danger" role="alert"> Loose!</span>
                                </div>
                                <div v-else></div>
                            </td>
                            <td>
                                <div v-if="store.tie == true" class="text-warning ">
                                    <span class="text-warning" role="alert"> store.tie!</span>
                                </div>
                            </td>
                            <td>
                                <div v-if="store.wins == 'o'">
                                    <span class="text-succes" role="alert"> Win!</span>
                                </div>
                                <div v-else-if="store.wins == 'x'">
                                    <span class="text-danger" role="alert"> Loose!</span>
                                </div>
                                <div v-else></div>
                            </td>
                            <td>{{ store.counterX }} - {{ store.counterO }}</td>
                        </tr>
                        <tr v-for="item, index in store.results" :key="index">
                            <td :class="item.resultX > 0 ? 'text-success' : ''">{{ item.resultX }}</td>
                            <td :class="item.tie > 0 ? 'text-warning' : ''">{{ item.tie }}</td>
                            <td :class="item.resultO > 0 ? 'text-success' : ''">{{ item.resultO }}</td>
                            <td>
                                <div v-if="item.resultO > item.resultX" class="text-success">O wins!</div>
                                <div v-else-if="item.resultX > item.resultO" class="text-success">X wins!</div>
                                <div v-else class="text-warning">tie!</div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>
</template>

<style lang="scss" scoped>
.table-container {
    max-height: 300px;
    overflow-y: auto;
}

.table {
    border-collapse: collapse;
}

thead th {
    position: sticky;
    /* Manstore.tiene l'intestazione visibile durante lo scroll */
    top: 0;
    background-color: #f8f9fa;
    /* Sfondo dell'intestazione */
    z-index: 1;
}
</style>