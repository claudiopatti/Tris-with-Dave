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
    }
}
</script>

<template>
    <div class="griglia col-12  d-flex justify-content-center align-items-center flex-wrap me-lg-5">
        <div v-for="(items, index) in 9" :key="index" :id="index" @click=" press(index), checkWin(index)"
            class="col-4 p-0 caselle d-flex justify-content-center align-items-center ">

        </div>
    </div>
</template>

<style lang="scss" scoped>
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
</style>