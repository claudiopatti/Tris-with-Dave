<script>
export default {
    data() {
        return {
            countClick: 0,
            wins: '',
            modal: false,
            iconX: '<h1><i class="fa-brands fa-x-twitter text-light"></i></h1>',
            iconO: '<h1><i class="fa-brands fa-opera text-light"></i></h1>',
            counterX: 0,
            counterO: 0,
            tie: false,
            tieCount: 0,
            results: [],
            reverseResults: [],
            resetCounter: 0,
            bestOfTree: true,
            mosse: 0,

        }
    },
    methods: {
        press(x) {
            let card = document.getElementById(`${x}`)
            if (card.innerHTML == "" && this.wins == '') {
                if (this.countClick % 2 == 0) {
                    console.log(this.countClick)
                    card.innerHTML = this.iconX
                }
                else if (!(this.countClick % 2 == 0)) {
                    console.log(this.countClick)
                    card.innerHTML = this.iconO
                }
                this.countClick++;
            }
            console.log(this.id)
        },
        numeroMosse() {
            if (this.countClick % 2 == 0) {
                // return alert(this.countClick / 2)
                this.mosse = this.countClick / 2;
            }
            else if (this.countClick % 2 != 0) {
                // return alert(((this.countClick - 1) / 2) + 1)
                this.mosse = ((this.countClick - 1) / 2) + 1;
            }
        },
        checkWin() {
            // let cards = document.getElementById(`${x}`)
            if (this.wins == '') {
                if ((document.getElementById(0).innerHTML === this.iconX) && (document.getElementById(1).innerHTML === this.iconX) && (document.getElementById(2).innerHTML === this.iconX)) {
                    console.log('hai vinto: X');
                    this.wins = 'x'
                    this.counterX++;
                    this.resetCounter++;
                    // console.log(this.resetCounter);
                    this.numeroMosse();
                    this.modal = true;

                    // if (this.resetCounter == 3 && this.bestOfTree == true) {
                    //     console.log('hai vinto: X');
                    //     this.wins = 'x'
                    //     alert('Hai avuto la meglio dei tre figlio di puttana X');
                    // } else {
                    //     console.log('bellaaa');

                    // alert('Hai vinto figlio di puttana X');
                    // document.getElementById('container-grande').innerHTML = document.getElementById('container-grande').innerHTML + ' <div class="myModalCont"></div>'
                    // }

                }
                else if ((document.getElementById(3).innerHTML === this.iconX) && (document.getElementById(4).innerHTML === this.iconX) && (document.getElementById(5).innerHTML === this.iconX)) {
                    console.log('hai vinto: X')
                    this.wins = 'x';
                    this.counterX++;
                    this.numeroMosse();
                    this.modal = true;



                }
                else if ((document.getElementById(6).innerHTML === this.iconX) && (document.getElementById(7).innerHTML === this.iconX) && (document.getElementById(8).innerHTML === this.iconX)) {
                    console.log('hai vinto: X')
                    this.wins = 'x';
                    this.counterX++;
                    this.numeroMosse();
                    this.modal = true;



                }
                else if ((document.getElementById(0).innerHTML === this.iconX) && (document.getElementById(4).innerHTML === this.iconX) && (document.getElementById(8).innerHTML === this.iconX)) {
                    console.log('hai vinto: X')
                    this.wins = 'x';
                    this.counterX++;
                    this.numeroMosse();
                    this.modal = true;



                }
                else if ((document.getElementById(2).innerHTML === this.iconX) && (document.getElementById(4).innerHTML === this.iconX) && (document.getElementById(6).innerHTML === this.iconX)) {
                    console.log('hai vinto: X')
                    this.wins = 'x';
                    this.counterX++;
                    this.numeroMosse();
                    this.modal = true;



                }
                else if ((document.getElementById(0).innerHTML === this.iconX) && (document.getElementById(3).innerHTML === this.iconX) && (document.getElementById(6).innerHTML === this.iconX)) {
                    console.log('hai vinto: X')
                    this.wins = 'x';
                    this.counterX++;
                    this.numeroMosse();
                    this.modal = true;



                }
                else if ((document.getElementById(1).innerHTML === this.iconX) && (document.getElementById(4).innerHTML === this.iconX) && (document.getElementById(7).innerHTML === this.iconX)) {
                    console.log('hai vinto: X')
                    this.wins = 'x';
                    this.counterX++;
                    this.numeroMosse();
                    this.modal = true;



                }
                else if ((document.getElementById(2).innerHTML === this.iconX) && (document.getElementById(5).innerHTML === this.iconX) && (document.getElementById(8).innerHTML === this.iconX)) {
                    console.log('hai vinto: X')
                    this.wins = 'x';
                    this.counterX++;
                    this.numeroMosse();
                    this.modal = true;



                }


                //**********************************************+ */
                else if ((document.getElementById(0).innerHTML === this.iconO) && (document.getElementById(1).innerHTML === this.iconO) && (document.getElementById(2).innerHTML === this.iconO)) {
                    console.log('hai vinto: O')
                    this.wins = 'o';
                    this.counterO++;
                    this.numeroMosse();
                    this.modal = true;


                }
                else if ((document.getElementById(3).innerHTML === this.iconO) && (document.getElementById(4).innerHTML === this.iconO) && (document.getElementById(5).innerHTML === this.iconO)) {
                    console.log('hai vinto: O')
                    this.wins = 'o';
                    this.counterO++;
                    this.numeroMosse();
                    this.modal = true;



                }
                else if ((document.getElementById(6).innerHTML === this.iconO) && (document.getElementById(7).innerHTML === this.iconO) && (document.getElementById(8).innerHTML === this.iconO)) {
                    console.log('hai vinto: O')
                    this.wins = 'o';
                    this.counterO++;
                    this.numeroMosse();
                    this.modal = true;



                }
                else if ((document.getElementById(0).innerHTML === this.iconO) && (document.getElementById(4).innerHTML === this.iconO) && (document.getElementById(8).innerHTML === this.iconO)) {
                    console.log('hai vinto: O')
                    this.wins = 'o';
                    this.counterO++;
                    this.numeroMosse();
                    this.modal = true;



                }
                else if ((document.getElementById(2).innerHTML === this.iconO) && (document.getElementById(4).innerHTML === this.iconO) && (document.getElementById(6).innerHTML === this.iconO)) {
                    console.log('hai vinto: O')
                    this.wins = 'o';
                    this.counterO++;
                    this.numeroMosse();
                    this.modal = true;



                }
                else if ((document.getElementById(0).innerHTML === this.iconO) && (document.getElementById(3).innerHTML === this.iconO) && (document.getElementById(6).innerHTML === this.iconO)) {
                    console.log('hai vinto: O')
                    this.wins = 'o';
                    this.counterO++;
                    this.numeroMosse();
                    this.modal = true;



                }
                else if ((document.getElementById(1).innerHTML === this.iconO) && (document.getElementById(4).innerHTML === this.iconO) && (document.getElementById(7).innerHTML === this.iconO)) {
                    console.log('hai vinto: O')
                    this.wins = 'o';
                    this.counterO++;
                    this.numeroMosse();
                    this.modal = true;



                }
                else if ((document.getElementById(2).innerHTML === this.iconO) && (document.getElementById(5).innerHTML === this.iconO) && (document.getElementById(8).innerHTML === this.iconO)) {
                    console.log('hai vinto: O')
                    this.wins = 'o';
                    this.counterO++;
                    this.numeroMosse();
                    this.modal = true;
                }
                else if ((document.getElementById(0).innerHTML != '') && (document.getElementById(1).innerHTML != '') && (document.getElementById(2).innerHTML != '') && (document.getElementById(3).innerHTML != '') && (document.getElementById(4).innerHTML != '') && (document.getElementById(5).innerHTML != '') && (document.getElementById(6).innerHTML != '') && (document.getElementById(7).innerHTML != '') && (document.getElementById(8).innerHTML != '')) {
                    this.tie = true
                    this.tieCount++
                    this.numeroMosse();
                    this.modal = true;
                }

            }

        },

        resetAllPage() {
            this.countClick = 0;
            this.wins = '';
            console.log(this.countClick);

            for (let resetCard = 0; resetCard < 9; resetCard++) {
                document.getElementById(resetCard).innerHTML = ""
            }

            this.tie = false;

            // if (this.resetCounter == 3 && this.bestOfTree == true) {
            //     this.results.unshift({ tie: this.tieCount, resultX: this.counterX, resultO: this.counterO });
            //     console.log(this.results);
            //     alert('vinto al meglio dei tre')
            // }

        },
        resetTable() {
            // this.results.push({tie: this.tieCount, resultX: this.counterX, resultO: this.counterO});
            this.results.unshift({ tie: this.tieCount, resultX: this.counterX, resultO: this.counterO });
            console.log(this.results);
            this.tieCount = 0;
            this.counterX = 0;
            this.counterO = 0;
            this.tie = false;
        },
        modalFilter() {
            if (this.bestOfTree == true) {
                if (this.counterO + this.counterX + this.tieCount == 3) {
                    return false
                }
                else {
                    return true
                }
            }
            else {
                return true
            }
        }


    },
    mounted() {
    }
};
</script>

<template>
    <!-- <button  type="button" class="btn btn-success">Al meglio di 3</button> -->
    <div id="container-grande" class="container d-flex justify-content-center align-items-center flex-wrap p-5">
        <div v-if="modal == true" class="myModalCont">
            <div class="myModalCont">
                <div class="myModal">
                    <div class="modal-header d-flex justify-content-end">
                        <i class="fa fa-close fs-3" aria-hidden="true" @click="modal = false, mosse = 0"></i>
                    </div>
                    <div v-if="wins == 'x' && modalFilter() == true"
                        class="modal-body d-flex flex-column align-items-center">
                        <h1 class="modak-regular">Hai vinto MERDA <i class="fa-brands fa-x-twitter"></i></h1>
                        <p>
                            Hai vinto con {{ mosse }} mosse.
                        </p>
                    </div>
                    <div v-else-if="wins == 'o' && modalFilter() == true"
                        class="modal-body d-flex flex-column align-items-center">">
                        <h1 class="modak-regular">Hai vinto MERDA <i class="fa-brands fa-opera"></i></h1>
                        <p>
                            Hai vinto con {{ mosse }} mosse.
                        </p>
                    </div>
                    <div v-else-if="tie == true && modalFilter() == true"
                        class="modal-body d-flex flex-column align-items-center">
                        <h1 class="modak-regular">Pareggio MERDA</h1>
                        <!-- <p>
                            Hai vinto con {{ mosse }} mosse.
                        </p> -->
                    </div>

                    <div v-else-if="wins == 'x' && modalFilter() == false">
                        <h1 class="modak-regular"><i class="fa-brands fa-x-twitter"></i> Ha vinto la sfida al meglio di
                            tre</h1>
                        <p>Comincia una Nuova Partita o continua la seguente.</p>
                    </div>
                    <div v-else-if="wins == 'o' && modalFilter() == false">
                        <h1 class="modak-regular"><i class="fa-brands fa-opera"></i> Ha vinto la sfida al meglio di tre
                        </h1>
                        <p>Comincia una Nuova Partita o continua la seguente.</p>
                    </div>
                    <div v-else-if="tie == true && modalFilter() == false">
                        <h1 class="modak-regular"><i class="fa-brands fa-opera"></i> Hai Pareggiato la sfida al meglio delle 3.
                        </h1>
                        <p>Comincia una Nuova Partita o continua la seguente.</p>
                    </div>
                    <div class="modal-footer d-flex justify-content-between">
                        <button type="button" class="btn btn-outline-dark" @click="modal = false, mosse = 0">
                            Chiudi
                        </button>
                        <button v-if="bestOfTree == true && (counterO + counterX + tieCount) == 3" type="button"
                            class="btn btn-outline-success"
                            @click="resetAllPage(), resetTable(), modal = false, mosse = 0">
                            Nuova sfida
                        </button>
                        <button @click="resetAllPage(), modal = false, mosse = 0" class="btn btn-outline-primary">
                            Gioca
                        </button>

                    </div>
                </div>
            </div>
        </div>
        <div class="col-12">
            <h1 class="text-dark modak-regular text-center">Tris By <span
                    class="modak-regular text-success">Claude</span> & <span
                    class="modak-regular text-primary">Dave</span></h1>
        </div>


        <div class="griglia col-12  d-flex justify-content-center align-items-center flex-wrap me-lg-5">
            <div v-for="(items, index) in 9" :key="index" :id="index" @click=" press(index), checkWin(index)"
                class="col-4 p-0 caselle d-flex justify-content-center align-items-center ">

            </div>
        </div>
        <div class="col-12 col-lg-3 pt-3 d-flex flex-column justify-content-center align-items-center">

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
                                <div v-if="wins == 'x'">
                                    <span class="text-success" role="alert"> Win!</span>
                                </div>
                                <div v-else-if="wins == 'o'">
                                    <span class="text-danger" role="alert"> Loose!</span>
                                </div>
                                <div v-else></div>
                            </td>
                            <td>
                                <div v-if="tie == true" class="text-warning ">
                                    <span class="text-warning" role="alert"> Tie!</span>
                                </div>
                            </td>
                            <td>
                                <div v-if="wins == 'o'">
                                    <span class="text-succes" role="alert"> Win!</span>
                                </div>
                                <div v-else-if="wins == 'x'">
                                    <span class="text-danger" role="alert"> Loose!</span>
                                </div>
                                <div v-else></div>
                            </td>
                            <td>{{ counterX }} - {{ counterO }}</td>
                        </tr>
                        <tr v-for="item, index in results" :key="index">
                            <td :class="item.resultX > 0 ? 'text-success' : ''">{{ item.resultX }}</td>
                            <td :class="item.tie > 0 ? 'text-warning' : ''">{{ item.tie }}</td>
                            <td :class="item.resultO > 0 ? 'text-success' : ''">{{ item.resultO }}</td>
                            <td>
                                <div v-if="item.resultO > item.resultX" class="text-success">O wins!</div>
                                <div v-else-if="item.resultX > item.resultO" class="text-success">X wins!</div>
                                <div v-else class="text-warning">Tie!</div>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>


        </div>
    </div>
</template>

<style lang="scss" scoped>
.container {
    height: 100%;
    position: relative;
    // width: 100vw;
}

.griglia {
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-template-rows: repeat(3, 1fr);
    // gap: 10px;
    width: 80vw;
    height: 80vw; // Griglia sempre quadrata
    max-width: 600px;
    max-height: 600px;
    background-color: #222;
    box-shadow: #222 0 0 20px;

    .caselle {
        // width: calc((100% - 3rem) / 3);
        // margin: 0.5rem;
        height: calc(100% / 3);
        background-color: rgb(0, 0, 0);
        border: 1px solid white;
        transition: 300ms;

        &:active {
            transform: rotate(360deg) scale(1.2);
            box-shadow: white 0px 0px 10px;
        }
    }
}

.riga {
    height: 200px;
}

.table-container {
    max-height: 300px;
    overflow-y: auto;
}

.table {
    border-collapse: collapse;
}

thead th {
    position: sticky;
    /* Mantiene l'intestazione visibile durante lo scroll */
    top: 0;
    background-color: #f8f9fa;
    /* Sfondo dell'intestazione */
    z-index: 1;
}
</style>
