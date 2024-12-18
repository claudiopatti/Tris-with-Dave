import { reactive } from 'vue';


const iMieiDati = reactive({
    // PROVA 2
    bestOfTree: false,
    wins: '',
    counterX: 0,
    counterO: 0,
    tieCount: 0,
    modal: false,
    countClick: 0,
    tie: false,
    results: [],
    resetCounter: 0,
    mosse: 0,
    iconX: '<h1><i class="fa-brands fa-x-twitter text-light"></i></h1>',
    iconO: '<h1><i class="fa-brands fa-opera text-light"></i></h1>',
});

export default iMieiDati