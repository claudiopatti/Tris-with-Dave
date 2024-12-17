<script>
export default {
    data() {
        return {
            countClick: 0,
            wins: '',
            iconX: '<h1><i class="fa-brands fa-x-twitter text-light"></i></h1>',
            iconO: '<h1><i class="fa-brands fa-opera text-light"></i></h1>',
            counterX: 0,
            counterO: 0,
            tie: false,
            tieCount: 0,
            results: [],
            reverseResults: [],
            resetCounter: 0,
            bestOfTree: false,

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

        checkWin() {
            // let cards = document.getElementById(`${x}`)
            if ((document.getElementById(0).innerHTML === this.iconX) && (document.getElementById(1).innerHTML === this.iconX) && (document.getElementById(2).innerHTML === this.iconX)) {
                console.log('hai vinto: X');
                this.wins = 'x'
                this.counterX++;
                this.resetCounter++;   
                console.log(this.resetCounter);
                
                if (this.resetCounter == 3 && this.bestOfTree == true) {
                    console.log('hai vinto: X');
                    this.wins = 'x'
                    alert('Hai avuto la meglio dei tre figlio di puttana X'); 
                } else {
                    alert('Hai vinto figlio di puttana X');
                }

            }
            else if ((document.getElementById(3).innerHTML === this.iconX) && (document.getElementById(4).innerHTML === this.iconX) && (document.getElementById(5).innerHTML === this.iconX)) {
                console.log('hai vinto: X')
                this.wins = 'x';
                this.counterX++;
                alert('Hai vinto figlio di puttana X');



            }
            else if ((document.getElementById(6).innerHTML === this.iconX) && (document.getElementById(7).innerHTML === this.iconX) && (document.getElementById(8).innerHTML === this.iconX)) {
                console.log('hai vinto: X')
                this.wins = 'x';
                this.counterX++;
                alert('Hai vinto figlio di puttana X');



            }
            else if ((document.getElementById(0).innerHTML === this.iconX) && (document.getElementById(4).innerHTML === this.iconX) && (document.getElementById(8).innerHTML === this.iconX)) {
                console.log('hai vinto: X')
                this.wins = 'x';
                this.counterX++;
                alert('Hai vinto figlio di puttana X');



            }
            else if ((document.getElementById(2).innerHTML === this.iconX) && (document.getElementById(4).innerHTML === this.iconX) && (document.getElementById(6).innerHTML === this.iconX)) {
                console.log('hai vinto: X')
                this.wins = 'x';
                this.counterX++;
                alert('Hai vinto figlio di puttana X');



            }
            else if ((document.getElementById(0).innerHTML === this.iconX) && (document.getElementById(3).innerHTML === this.iconX) && (document.getElementById(6).innerHTML === this.iconX)) {
                console.log('hai vinto: X')
                this.wins = 'x';
                this.counterX++;
                alert('Hai vinto figlio di puttana X');



            }
            else if ((document.getElementById(1).innerHTML === this.iconX) && (document.getElementById(4).innerHTML === this.iconX) && (document.getElementById(7).innerHTML === this.iconX)) {
                console.log('hai vinto: X')
                this.wins = 'x';
                this.counterX++;
                alert('Hai vinto figlio di puttana X');



            }
            else if ((document.getElementById(2).innerHTML === this.iconX) && (document.getElementById(5).innerHTML === this.iconX) && (document.getElementById(8).innerHTML === this.iconX)) {
                console.log('hai vinto: X')
                this.wins = 'x';
                this.counterX++;
                alert('Hai vinto figlio di puttana X');



            }


            //**********************************************+ */
            else if ((document.getElementById(0).innerHTML === this.iconO) && (document.getElementById(1).innerHTML === this.iconO) && (document.getElementById(2).innerHTML === this.iconO)) {
                console.log('hai vinto: O')
                this.wins = 'o';
                this.counterO++;
                alert('Hai vinto figlio di puttana O');


            }
            else if ((document.getElementById(3).innerHTML === this.iconO) && (document.getElementById(4).innerHTML === this.iconO) && (document.getElementById(5).innerHTML === this.iconO)) {
                console.log('hai vinto: O')
                this.wins = 'o';
                this.counterO++;
                alert('Hai vinto figlio di puttana O');



            }
            else if ((document.getElementById(6).innerHTML === this.iconO) && (document.getElementById(7).innerHTML === this.iconO) && (document.getElementById(8).innerHTML === this.iconO)) {
                console.log('hai vinto: O')
                this.wins = 'o';
                this.counterO++;
                alert('Hai vinto figlio di puttana O');



            }
            else if ((document.getElementById(0).innerHTML === this.iconO) && (document.getElementById(4).innerHTML === this.iconO) && (document.getElementById(8).innerHTML === this.iconO)) {
                console.log('hai vinto: O')
                this.wins = 'o';
                this.counterO++;
                alert('Hai vinto figlio di puttana O');



            }
            else if ((document.getElementById(2).innerHTML === this.iconO) && (document.getElementById(4).innerHTML === this.iconO) && (document.getElementById(6).innerHTML === this.iconO)) {
                console.log('hai vinto: O')
                this.wins = 'o';
                this.counterO++;
                alert('Hai vinto figlio di puttana O');



            }
            else if ((document.getElementById(0).innerHTML === this.iconO) && (document.getElementById(3).innerHTML === this.iconO) && (document.getElementById(6).innerHTML === this.iconO)) {
                console.log('hai vinto: O')
                this.wins = 'o';
                this.counterO++;
                alert('Hai vinto figlio di puttana O');



            }
            else if ((document.getElementById(1).innerHTML === this.iconO) && (document.getElementById(4).innerHTML === this.iconO) && (document.getElementById(7).innerHTML === this.iconO)) {
                console.log('hai vinto: O')
                this.wins = 'o';
                this.counterO++;
                alert('Hai vinto figlio di puttana O');



            }
            else if ((document.getElementById(2).innerHTML === this.iconO) && (document.getElementById(5).innerHTML === this.iconO) && (document.getElementById(8).innerHTML === this.iconO)) {
                console.log('hai vinto: O')
                this.wins = 'o';
                this.counterO++;
                alert('Hai vinto figlio di puttana O');
            }
            else if ((document.getElementById(0).innerHTML != '') && (document.getElementById(1).innerHTML != '') && (document.getElementById(2).innerHTML != '') && (document.getElementById(3).innerHTML != '') && (document.getElementById(4).innerHTML != '') && (document.getElementById(5).innerHTML != '') && (document.getElementById(6).innerHTML != '') && (document.getElementById(7).innerHTML != '') && (document.getElementById(8).innerHTML != '')) {
                this.tie = true
                this.tieCount++
                alert('Pareggio figli/e di puttana')
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
            
            if (this.resetCounter == 3 && this.bestOfTree == true) {
                this.results.unshift({tie: this.tieCount, resultX: this.counterX, resultO: this.counterO});
                console.log(this.results);
                alert('vinto al meglio dei tre')
            }

        },
        resetTable() {
            // this.results.push({tie: this.tieCount, resultX: this.counterX, resultO: this.counterO});
            this.results.unshift({tie: this.tieCount, resultX: this.counterX, resultO: this.counterO});
            console.log(this.results);
            this.tieCount = 0;
            this.counterX = 0;
            this.counterO = 0;
            this.tie = false;

            
        },
        alMeglioDiTre() {
            
        }
        // showWins() {
        //     document.getElementById('container-grande').innerHTML = `
        //         <div class="modal" tabindex="-1">
        //             <div class="modal-dialog">
        //                 <div class="modal-content">
        //                     <div class="modal-header">
        //                         <h5 class="modal-title">Modal title</h5>
        //                         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        //                     </div>
        //                     <div class="modal-body">
        //                         <p>Modal body text goes here.</p>
        //                     </div>
        //                     <div class="modal-footer">
        //                         <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        //                         <button type="button" class="btn btn-primary">Save changes</button>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>

        //     `

        // }


    },
    mounted() {
        console.log('larghezza :', document.getElementsByClassName('griglia').style);
        
    }
};
</script>

<template>
    <button  type="button" class="btn btn-success">Al meglio di 3</button>
    <div id="container-grande" class="container d-flex justify-content-center align-items-center flex-wrap p-5">
        <div class="col-12">
            <h1 class="text-dark modak-regular text-center">Tris By <span class="modak-regular text-success">Claude</span> & <span class="modak-regular text-primary">Dave</span></h1>
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
.container{
    height: 100%;
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
  position: sticky; /* Mantiene l'intestazione visibile durante lo scroll */
  top: 0;
  background-color: #f8f9fa; /* Sfondo dell'intestazione */
  z-index: 1;
}
</style>
