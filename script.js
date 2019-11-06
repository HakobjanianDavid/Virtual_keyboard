function ready() {
    
    let mass = [
        [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61],
        [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92],
        [97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13],
        [122, 120, 99, 118, 98, 110, 109, 44, 46, 47],
        [32]
    ];
    

    let wrapper = document.createElement('div');
    wrapper.className = 'conteiner';

    let backspace = document.createElement('div');
    backspace.className = 'key-button backspace';
    backspace.innerText = 'Backspace';
    backspace.onkeyup

    let tab = document.createElement('div');
    tab.className = 'key-button tab';
    tab.innerText = 'Tab';

    let del = document.createElement('div');
    del.className = 'key-button delete';
    del.innerText = 'DEL';

    let capslock = document.createElement('div');
    capslock.className = 'key-button capslock';
    capslock.innerText = 'Caps Lock';

    let leftShift = document.createElement('div');
    leftShift.className = 'key-button first-shift';

    let rightShift = document.createElement('div');
    rightShift.className = 'key-button second-shift';
    rightShift.innerText = 'Shift';

    let arrowUp = document.createElement('div');
    arrowUp.className = 'key-button';
    arrowUp.innerHTML = '&#8593';

    let ctrl = document.createElement('div');
    ctrl.className = 'key-button';
    ctrl.innerText = 'Ctrl';

    let win = document.createElement('div');
    win.className = 'key-button';
    win.innerText = 'Win';

    let alt = document.createElement('div');
    alt.className = 'key-button';
    alt.innerText = 'Alt';

    let arrowLeft = document.createElement('div');
    arrowLeft.className = 'key-button';
    arrowLeft.innerHTML = '&#8592';
    
    let arrowDown = document.createElement('div');
    arrowDown.className = 'key-button';
    arrowDown.innerHTML = '&#8595';

    let arrowRight = document.createElement('div');
    arrowRight.className = 'key-button';
    arrowRight.innerHTML = '&#8594';

    let ctrlRigth = document.createElement('div');
    ctrlRigth.className = 'key-button';
    ctrlRigth.innerText = 'Ctrl';

    let textarea = document.createElement('textarea');
    textarea.className = 'field';
    textarea.setAttribute('rows', '15');
    textarea.setAttribute('cols', '100');

    function init() {

        wrapper.appendChild(textarea);

        for (let i = 0; i<mass.length; i++) {
            let row = document.createElement('div');
            row.className = 'row';
            let newMass = mass[i];
            for(let b = 0; b<mass[i].length; b++) {
                    let key = document.createElement('div');
                    key.innerText = String.fromCharCode(mass[i][b]);
                    // key.innerText = String.fromCodePoint(mass[i][b]);
                    key.setAttribute('data', mass[i][b]);
                    key.classList.add('simple');
                    row.appendChild(key);

                }
                
            wrapper.appendChild(row);
        }
        
        console.log(wrapper);
        
        document.body.append(wrapper);

        let rows = document.querySelectorAll('.row');
        console.log(rows[0].firstChild);

        //add key-buttons in every lines
        //first-line -> 'backspace'

        rows[0].appendChild(backspace);

        //second-line -> 'tab' and 'delete'
        rows[1].className = 'tab-row row';
        rows[1].firstChild.before(tab);
        rows[1].appendChild(del);

        //third-line -> 'Caps Lock' and added class and text for 'Enter'

        rows[2].className = 'capslock-row row';
        rows[2].firstChild.before(capslock);
        rows[2].lastChild.className = 'enter key-button';
        rows[2].lastChild.innerText = 'Enter';

        //fourth-line -> left and right 'Shift'
        //added in line arrow-up

        rows[3].className = 'shift-row row';
        rows[3].firstChild.before(leftShift);
        rows[3].appendChild(rightShift);
        document.querySelector('.second-shift').before(arrowUp);

        //fifth-line

        rows[4].className = 'space-row row';
        rows[4].firstChild.className = 'key-button space';
        rows[4].firstChild.before(ctrl, win, alt);
        rows[4].appendChild(arrowLeft);
        rows[4].appendChild(arrowDown);
        rows[4].appendChild(arrowRight);
        rows[4].appendChild(ctrlRigth);
     }
    
    
    init();
    
    document.onkeypress = function (event) {
        let simpleKeys = document.querySelectorAll('.simple');

        simpleKeys.forEach(element => {
            element.classList.remove('active');
        });
        document.querySelector('.simple[data = "'+event.keyCode+'"]').classList.add('active');
        textarea.textContent += event.key;
    };

    document.querySelectorAll('.simple').forEach(element => {
        element.onclick = function (event) {
            document.querySelectorAll('.simple').forEach(element => {
                element.classList.remove('active');
            });
            let code = this.getAttribute('data');
            this.classList.add('active');
            textarea.textContent += this.textContent;
            

            //Использовать метод слайс для backspace

            console.log(typeof(textarea.textContent));
        };

        element.onmousemove = function () {
            document.querySelectorAll('.simple').forEach(element => {
                element.classList.remove('active');
            });
        };
    });
}

document.addEventListener("DOMContentLoaded", ready);