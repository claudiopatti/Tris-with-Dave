<script>
    export default {
        data() {
            return {
                message: 'ciao',
                countClick: 0,
                wins: false,
                iconX: '<h1><i class="fa-brands fa-x-twitter"></i></h1>',
                iconO: '<h1><i class="fa-brands fa-opera"></i></h1>'
            }   
        },
        methods: {
            press(x) {
                let card = document.getElementById(`${x}`)
                if (card.innerHTML == "" && this.wins == false) {
                    if (this.countClick % 2 == 0 ) {
                        console.log(this.countClick)
                        card.innerHTML = this.iconX
                    }
                    else if (!(this.countClick % 2 == 0 ) ) {
                        console.log(this.countClick)
                        card.innerHTML = this.iconO
                    }
                    this.countClick++;
                }
                console.log(this.id)
            },

            checkWin() {
                // let cards = document.getElementById(`${x}`)
                if ((document.getElementById(0).innerHTML === this.iconX) && (document.getElementById(1).innerHTML === this.iconX) && (document.getElementById(2).innerHTML === this.iconX) ) {
                    console.log('hai vinto: X');
                    this.wins = true;
                    alert('Hai vinto figlio di puttana X');

                    // this.showWins()

                }
                else if ((document.getElementById(3).innerHTML === this.iconX) && (document.getElementById(4).innerHTML === this.iconX) && (document.getElementById(5).innerHTML === this.iconX)) {
                    console.log('hai vinto: X')
                    this.wins = true;
                    alert('Hai vinto figlio di puttana X');


                    
                }
                else if ((document.getElementById(6).innerHTML === this.iconX) && (document.getElementById(7).innerHTML === this.iconX) && (document.getElementById(8).innerHTML === this.iconX)) {
                    console.log('hai vinto: X')
                    this.wins = true;
                    alert('Hai vinto figlio di puttana X');


                    
                }
                else if ((document.getElementById(0).innerHTML === this.iconX) && (document.getElementById(4).innerHTML === this.iconX) && (document.getElementById(8).innerHTML === this.iconX)) {
                    console.log('hai vinto: X')
                    this.wins = true;
                    alert('Hai vinto figlio di puttana X');


                    
                }
                else if ((document.getElementById(2).innerHTML === this.iconX) && (document.getElementById(4).innerHTML === this.iconX) && (document.getElementById(6).innerHTML === this.iconX)) {
                    console.log('hai vinto: X')
                    this.wins = true;
                    alert('Hai vinto figlio di puttana X');


                    
                }
                else if ((document.getElementById(0).innerHTML === this.iconX) && (document.getElementById(3).innerHTML === this.iconX) && (document.getElementById(6).innerHTML === this.iconX)) {
                    console.log('hai vinto: X')
                    this.wins = true;
                    alert('Hai vinto figlio di puttana X');


                    
                }
                else if ((document.getElementById(1).innerHTML === this.iconX) && (document.getElementById(4).innerHTML === this.iconX) && (document.getElementById(7).innerHTML === this.iconX)) {
                    console.log('hai vinto: X')
                    this.wins = true;
                    alert('Hai vinto figlio di puttana X');


                    
                }
                else if ((document.getElementById(2).innerHTML === this.iconX) && (document.getElementById(5).innerHTML === this.iconX) && (document.getElementById(8).innerHTML === this.iconX)) {
                    console.log('hai vinto: X')
                    this.wins = true;
                    alert('Hai vinto figlio di puttana X');


                    
                }


                //**********************************************+ */
                if ((document.getElementById(0).innerHTML === this.iconO) && (document.getElementById(1).innerHTML === this.iconO) && (document.getElementById(2).innerHTML === this.iconO) ) {
                    console.log('hai vinto: O')
                    this.wins = true;
                    alert('Hai vinto figlio di puttana O');


                }
                else if ((document.getElementById(3).innerHTML === this.iconO) && (document.getElementById(4).innerHTML === this.iconO) && (document.getElementById(5).innerHTML === this.iconO)) {
                    console.log('hai vinto: O')
                    this.wins = true;
                    alert('Hai vinto figlio di puttana O');


                    
                }
                else if ((document.getElementById(6).innerHTML === this.iconO) && (document.getElementById(7).innerHTML === this.iconO) && (document.getElementById(8).innerHTML === this.iconO)) {
                    console.log('hai vinto: O')
                    this.wins = true;
                    alert('Hai vinto figlio di puttana O');


                    
                }
                else if ((document.getElementById(0).innerHTML === this.iconO) && (document.getElementById(4).innerHTML === this.iconO) && (document.getElementById(8).innerHTML === this.iconO)) {
                    console.log('hai vinto: O')
                    this.wins = true;
                    alert('Hai vinto figlio di puttana O');


                    
                }
                else if ((document.getElementById(2).innerHTML === this.iconO) && (document.getElementById(4).innerHTML === this.iconO) && (document.getElementById(6).innerHTML === this.iconO)) {
                    console.log('hai vinto: O')
                    this.wins = true;
                    alert('Hai vinto figlio di puttana O');


                    
                }
                else if ((document.getElementById(0).innerHTML === this.iconO) && (document.getElementById(3).innerHTML === this.iconO) && (document.getElementById(6).innerHTML === this.iconO)) {
                    console.log('hai vinto: O')
                    this.wins = true;
                    alert('Hai vinto figlio di puttana O');


                    
                }
                else if ((document.getElementById(1).innerHTML === this.iconO) && (document.getElementById(4).innerHTML === this.iconO) && (document.getElementById(7).innerHTML === this.iconO)) {
                    console.log('hai vinto: O')
                    this.wins = true;
                    alert('Hai vinto figlio di puttana O');


                    
                }
                else if ((document.getElementById(2).innerHTML === this.iconO) && (document.getElementById(5).innerHTML === this.iconO) && (document.getElementById(8).innerHTML === this.iconO)) {
                    console.log('hai vinto: O')
                    this.wins = true;
                    alert('Hai vinto figlio di puttana O');

                    

                    
                }
            },

            resetAllPage() {
                this.countClick = 0;
                this.wins = false;
                console.log(this.countClick);
                
                for (let resetCard = 0; resetCard < 9; resetCard++) {
                    document.getElementById(resetCard).innerHTML = ""
                }

            },

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

        } 
    };
</script>

<template>
    <div id="container-grande" class="container h-100 d-flex justify-content-center align-items-center">
    
        <div class="griglia d-flex justify-content-center align-items-center flex-wrap gap-2 pt-3">
            <div v-for="(items, index) in 9" :key="index" :id="index" @click=" press(index), checkWin(index)" class="col-4 p-0 d-flex justify-content-center align-items-center ">
                
            </div>
            
            <div class="mt-5">
                <button @click="resetAllPage()" class="btn btn-primary">
                    Resetta
                </button>
            </div>
    
        </div>

    </div>
</template>

<style lang="scss" scoped>
.griglia {
    width: 600px;
    height: 600px;
    background-color: #000000cf;
    .col-4 {
        width: 180px;
        height: 180px;
        background-color: green;
        border: 1px solid black;
    }
}

.riga {
    height: 200px;

}
</style>
