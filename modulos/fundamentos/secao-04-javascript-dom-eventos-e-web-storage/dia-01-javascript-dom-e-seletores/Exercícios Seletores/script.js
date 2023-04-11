const header = document.getElementById('header-container');
    header.style.backgroundColor = 'rgb(0, 176, 105)';

const emergencyTasks = document.querySelector('.emergency-tasks');
    emergencyTasks.style.backgroundColor = 'rgb(255, 159, 132)';

const cabecalhoEmergencia = document.querySelectorAll('.emergency-tasks h3');
    for (let i = 0; i < cabecalhoEmergencia.length; i += 1){
        cabecalhoEmergencia[i].style.backgroundColor = 'rgb(165,0,243)';
    }
const nonEmergencyTask = document.getElementsByClassName('no-emergency-tasks')[0];
    nonEmergencyTask.style.backgroundColor = 'rgb(249,219,94)';

const cabecalhoNotUrgent = document.querySelectorAll('.no-emergency-tasks h3');
    for (let i = 0; i < cabecalhoEmergencia.length; i += 1){
        cabecalhoNotUrgent[i].style.backgroundColor = 'rgb(35,37,37)';
    }

const rodape = document.getElementById('footer-container');
    rodape.style.backgroundColor = 'rgb(0,53,51)';

