<script>
import store from '../data/store.js';
import ModalView from '../pieces/ModalView.vue';
import TableResults from '../pieces/TableResults.vue';

export default {
    name: 'MainView',
    components : {
        ModalView,
        TableResults
    },
    data() {
        return {
            store,
        }
    },
    methods: {
        press(x) {
            let card = document.getElementById(`${x}`)
            if (card.innerHTML == "" && this.store.wins == '') {
                if (this.store.countClick % 2 == 0) {
                    console.log(this.store.countClick)
                    card.innerHTML = this.store.iconX
                }
                else if (!(this.store.countClick % 2 == 0)) {
                    console.log(this.store.countClick)
                    card.innerHTML = this.store.iconO
                }
                this.store.countClick++;
            }
            console.log(this.id)
        },
        numeroMosse() {
            if (this.store.countClick % 2 == 0) {
                // return alert(this.store.countClick / 2)
                this.store.mosse = this.store.countClick / 2;
            }
            else if (this.store.countClick % 2 != 0) {
                // return alert(((this.store.countClick - 1) / 2) + 1)
                this.store.mosse = ((this.store.countClick - 1) / 2) + 1;
            }
        },
        checkWin() {
            // let cards = document.getElementById(`${x}`)
            if (this.store.wins == '') {
                if ((document.getElementById(0).innerHTML === this.store.iconX) && (document.getElementById(1).innerHTML === this.store.iconX) && (document.getElementById(2).innerHTML === this.store.iconX)) {
                    console.log('hai vinto: X');
                    this.store.wins = 'x'
                    this.store.counterX++;
                    this.store.resetCounter++;
                    // console.log(this.store.resetCounter);
                    this.numeroMosse();
                    this.store.modal = true;

                    // if (this.store.resetCounter == 3 && this.store.bestOfTree == true) {
                    //     console.log('hai vinto: X');
                    //     this.store.wins = 'x'
                    //     alert('Hai avuto la meglio dei tre figlio di puttana X');
                    // } else {
                    //     console.log('bellaaa');

                    // alert('Hai vinto figlio di puttana X');
                    // document.getElementById('container-grande').innerHTML = document.getElementById('container-grande').innerHTML + ' <div class="mystore.modalCont"></div>'
                    // }

                }
                else if ((document.getElementById(3).innerHTML === this.store.iconX) && (document.getElementById(4).innerHTML === this.store.iconX) && (document.getElementById(5).innerHTML === this.store.iconX)) {
                    console.log('hai vinto: X')
                    this.store.wins = 'x';
                    this.store.counterX++;
                    this.numeroMosse();
                    this.store.modal = true;



                }
                else if ((document.getElementById(6).innerHTML === this.store.iconX) && (document.getElementById(7).innerHTML === this.store.iconX) && (document.getElementById(8).innerHTML === this.store.iconX)) {
                    console.log('hai vinto: X')
                    this.store.wins = 'x';
                    this.store.counterX++;
                    this.numeroMosse();
                    this.store.modal = true;



                }
                else if ((document.getElementById(0).innerHTML === this.store.iconX) && (document.getElementById(4).innerHTML === this.store.iconX) && (document.getElementById(8).innerHTML === this.store.iconX)) {
                    console.log('hai vinto: X')
                    this.store.wins = 'x';
                    this.store.counterX++;
                    this.numeroMosse();
                    this.store.modal = true;



                }
                else if ((document.getElementById(2).innerHTML === this.store.iconX) && (document.getElementById(4).innerHTML === this.store.iconX) && (document.getElementById(6).innerHTML === this.store.iconX)) {
                    console.log('hai vinto: X')
                    this.store.wins = 'x';
                    this.store.counterX++;
                    this.numeroMosse();
                    this.store.modal = true;



                }
                else if ((document.getElementById(0).innerHTML === this.store.iconX) && (document.getElementById(3).innerHTML === this.store.iconX) && (document.getElementById(6).innerHTML === this.store.iconX)) {
                    console.log('hai vinto: X')
                    this.store.wins = 'x';
                    this.store.counterX++;
                    this.numeroMosse();
                    this.store.modal = true;



                }
                else if ((document.getElementById(1).innerHTML === this.store.iconX) && (document.getElementById(4).innerHTML === this.store.iconX) && (document.getElementById(7).innerHTML === this.store.iconX)) {
                    console.log('hai vinto: X')
                    this.store.wins = 'x';
                    this.store.counterX++;
                    this.numeroMosse();
                    this.store.modal = true;



                }
                else if ((document.getElementById(2).innerHTML === this.store.iconX) && (document.getElementById(5).innerHTML === this.store.iconX) && (document.getElementById(8).innerHTML === this.store.iconX)) {
                    console.log('hai vinto: X')
                    this.store.wins = 'x';
                    this.store.counterX++;
                    this.numeroMosse();
                    this.store.modal = true;



                }


                //**********************************************+ */
                else if ((document.getElementById(0).innerHTML === this.store.iconO) && (document.getElementById(1).innerHTML === this.store.iconO) && (document.getElementById(2).innerHTML === this.store.iconO)) {
                    console.log('hai vinto: O')
                    this.store.wins = 'o';
                    this.store.counterO++;
                    this.numeroMosse();
                    this.store.modal = true;


                }
                else if ((document.getElementById(3).innerHTML === this.store.iconO) && (document.getElementById(4).innerHTML === this.store.iconO) && (document.getElementById(5).innerHTML === this.store.iconO)) {
                    console.log('hai vinto: O')
                    this.store.wins = 'o';
                    this.store.counterO++;
                    this.numeroMosse();
                    this.store.modal = true;



                }
                else if ((document.getElementById(6).innerHTML === this.store.iconO) && (document.getElementById(7).innerHTML === this.store.iconO) && (document.getElementById(8).innerHTML === this.store.iconO)) {
                    console.log('hai vinto: O')
                    this.store.wins = 'o';
                    this.store.counterO++;
                    this.numeroMosse();
                    this.store.modal = true;



                }
                else if ((document.getElementById(0).innerHTML === this.store.iconO) && (document.getElementById(4).innerHTML === this.store.iconO) && (document.getElementById(8).innerHTML === this.store.iconO)) {
                    console.log('hai vinto: O')
                    this.store.wins = 'o';
                    this.store.counterO++;
                    this.numeroMosse();
                    this.store.modal = true;



                }
                else if ((document.getElementById(2).innerHTML === this.store.iconO) && (document.getElementById(4).innerHTML === this.store.iconO) && (document.getElementById(6).innerHTML === this.store.iconO)) {
                    console.log('hai vinto: O')
                    this.store.wins = 'o';
                    this.store.counterO++;
                    this.numeroMosse();
                    this.store.modal = true;



                }
                else if ((document.getElementById(0).innerHTML === this.store.iconO) && (document.getElementById(3).innerHTML === this.store.iconO) && (document.getElementById(6).innerHTML === this.store.iconO)) {
                    console.log('hai vinto: O')
                    this.store.wins = 'o';
                    this.store.counterO++;
                    this.numeroMosse();
                    this.store.modal = true;



                }
                else if ((document.getElementById(1).innerHTML === this.store.iconO) && (document.getElementById(4).innerHTML === this.store.iconO) && (document.getElementById(7).innerHTML === this.store.iconO)) {
                    console.log('hai vinto: O')
                    this.store.wins = 'o';
                    this.store.counterO++;
                    this.numeroMosse();
                    this.store.modal = true;



                }
                else if ((document.getElementById(2).innerHTML === this.store.iconO) && (document.getElementById(5).innerHTML === this.store.iconO) && (document.getElementById(8).innerHTML === this.store.iconO)) {
                    console.log('hai vinto: O')
                    this.store.wins = 'o';
                    this.store.counterO++;
                    this.numeroMosse();
                    this.store.modal = true;
                }
                else if ((document.getElementById(0).innerHTML != '') && (document.getElementById(1).innerHTML != '') && (document.getElementById(2).innerHTML != '') && (document.getElementById(3).innerHTML != '') && (document.getElementById(4).innerHTML != '') && (document.getElementById(5).innerHTML != '') && (document.getElementById(6).innerHTML != '') && (document.getElementById(7).innerHTML != '') && (document.getElementById(8).innerHTML != '')) {
                    this.store.tie = true
                    this.store.store.tieCount++
                    this.numeroMosse();
                    this.store.modal = true;
                }

            }

        },

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
</style>
