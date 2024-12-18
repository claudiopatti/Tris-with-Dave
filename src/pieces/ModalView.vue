<script>
import store from '../data/store.js'

export default {
    name: 'ModalView',
    data() {
        return {
            // Your data here
            store
        }
    },
    methods: {
        // ... your methods here
        modalFilter() {
            if (this.store.bestOfTree == true) {
                if (this.store.counterO + this.store.counterX + this.store.tieCount == 3) {
                    return false
                }
                else {
                    return true
                }
            }
            else {
                return true
            }
        },
        resetAllPage() {
            this.store.modal = false
            store.mosse = 0
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
    <div v-if="store.modal == true">
            <div class="myModalCont">
                <div class="myModal col-10 col-md-8 col-lg-5">
                    <div class="modal-header d-flex justify-content-end">
                        <i class="fa fa-close fs-3" aria-hidden="true" @click="store.modal = false, store.mosse = 0"></i>
                    </div>
                    <div v-if="store.normal == true || store.bestOfTree == true"
                        class="modal-body d-flex flex-column align-items-center">
                        <h1 v-if="store.bestOfTree == true && store.wins == false" class="modak-regular">Hai cominciato una nuova partita al meglio dei 3!</h1>
                        <h1 v-else-if="store.normal == true && store.wins == false" class="modak-regular">Hai cominciato una nuova partita!</h1>
                    </div>
                    <div v-if="store.wins == 'x' && modalFilter() == true"
                        class="modal-body d-flex flex-column align-items-center">
                        <h1 class="modak-regular">Hai vinto MERDA <i class="fa-brands fa-x-twitter"></i></h1>
                        <p>
                            Hai vinto con {{ store.mosse }} mosse.
                        </p>
                    </div>
                    <div v-else-if="store.wins == 'o' && modalFilter() == true"
                        class="modal-body d-flex flex-column align-items-center">
                        <h1 class="modak-regular">Hai vinto MERDA <i class="fa-brands fa-opera"></i></h1>
                        <p>
                            Hai vinto con {{ store.mosse }} mosse.
                        </p>
                    </div>
                    <div v-else-if="store.tie == true && modalFilter() == true"
                        class="modal-body d-flex flex-column align-items-center">
                        <h1 class="modak-regular">Pareggio MERDA</h1>
                        <!-- <p>
                            Hai vinto con {{ store.mosse }} mosse.
                        </p> -->
                    </div>

                    <div v-else-if="store.counterX > store.counterO && modalFilter() == false">
                        <h1 class="modak-regular"><i class="fa-brands fa-x-twitter"></i> Ha vinto la sfida al meglio di
                            tre</h1>
                        <p>Comincia una Nuova Partita.</p>
                    </div>
                    <div v-else-if="store.counterX < store.counterO && modalFilter() == false">
                        <h1 class="modak-regular"><i class="fa-brands fa-opera"></i> Ha vinto la sfida al meglio di tre
                        </h1>
                        <p>Comincia una Nuova Partita.</p>
                    </div>
                    <div v-else-if="store.counterX == store.counterO && modalFilter() == false">
                        <h1 class="modak-regular"> Hai Pareggiato la sfida al meglio delle 3.
                        </h1>
                        <p>Comincia una Nuova Partita.</p>
                    </div>
                    <div class="modal-footer d-flex justify-content-between">
                        <button type="button" class="btn btn-outline-dark" @click="store.modal = false, store.mosse = 0">
                            Chiudi
                        </button>
                        <button v-if="store.bestOfTree == true && modalFilter() == false" type="button"
                            class="btn btn-outline-success"
                            @click="resetAllPage(), resetTable()">
                            Nuova sfida
                        </button>
                        <button v-if="modalFilter() == true" @click="resetAllPage(), store.modal = false, store.mosse = 0" class="btn btn-outline-primary">
                            Gioca
                        </button>

                    </div>
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
.myModalCont {
    width: 100vw;
    height: 100vh;
    background: #2222225e ;
    z-index: 99999999;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;

    .myModal {
    // width: 40%;
    padding: 2rem;
    background-color: white;
    border-radius: 1rem;
    }
  }

</style>