function ready() {
    
    let mass = [
        [96, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 45, 61],
        [113, 119, 101, 114, 116, 121, 117, 105, 111, 112, 91, 93, 92],
        [97, 115, 100, 102, 103, 104, 106, 107, 108, 59, 39, 13],
        [122, 120, 99, 118, 98, 110, 109, 44, 46, 47],
        [32]
    ];

    let secondMass = [
        ["Backquote", "Digit1", "Digit2", "Digit3","Digit4", "Digit5",
         "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal"],

        ["KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI",
         "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash"],

        ["KeyA", "KeyS", "KeyD", "KeyF", "KeyF", "KeyG", "KeyH", "KeyJ",
         "KeyK", "KeyL", "Semicolon", "Quote", "Enter"],

        ["KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash"],

        ["Space"]
    ];

    let wrapper = document.createElement('div');
    wrapper.className = 'conteiner';

    let backspace = document.createElement('div');
    backspace.className = 'key-button backspace';
    backspace.innerText = 'Backspace';
    backspace.setAttribute('data', 'Backspace')

    let tab = document.createElement('div');
    tab.className = 'key-button tab';
    tab.innerText = 'Tab';

    let del = document.createElement('div');
    del.className = 'key-button delete';
    del.innerText = 'DEL';

    let capslock = document.createElement('div');
    capslock.className = 'key-button capslock';
    capslock.innerText = 'Caps Lock';
    capslock.setAttribute('data', 'CapsLock')

    let leftShift = document.createElement('div');
    leftShift.className = 'key-button first-shift';
    leftShift.innerText = 'Shift';
    leftShift.setAttribute('data', 'ShiftLeft')

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
            // let newMass = commonMass.mass[i];
            for(let b = 0; b<mass[i].length; b++) {
                    let key = document.createElement('div');
                    key.innerText = String.fromCharCode(mass[i][b]);
                    key.setAttribute('data', secondMass[i][b] );

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
    let flag = false;

    document.onkeydown = function (event) {
        let simpleKeys = document.querySelectorAll('.simple');
        let content = textarea.textContent;
        let code = event.code;

        simpleKeys.forEach(element => {
            element.classList.remove('active');
        });

        if(code == 'CapsLock') {
            if(flag == false) {
                flag = true;
                capslock.classList.add('active');
                simpleKeys.forEach(element => {
                    element.style.textTransform = 'uppercase';
                });
            } else {
                // if(code == 'Backspace') {
                //     flag = false;
                // }
                flag = false;
                capslock.classList.remove('active');
                simpleKeys.forEach(element => {
                    element.style.textTransform = '';
                });
            }
        }

        if(code == 'ShiftLeft') {

            leftShift.classList.add('active');
            simpleKeys.forEach(element => {
                element.style.textTransform = 'uppercase';
            });
        }

        let result = '';

        if(code == 'Backspace' && content.length !== 0) {
            backspace.classList.add('active');
            result = content.split('');
            let b = result.pop();
            textarea.innerText = result.join('');
        }

        if(code == 'Delete') {
            del.classList.add('active');
        }

        if(code != 'Delete' && code != 'Backspace' && code != 'ShiftLeft' && code != 'CapsLock') {
            simpleKeys.forEach(element => {
                if (element.getAttribute('data') == code) {
                    element.classList.add('active');
                }
            });
            textarea.textContent += event.key;    
        }
    }

    document.onkeypress = function (event) {

    };

    document.onkeyup = function (event) {
        let simpleKeys = document.querySelectorAll('.simple');
        let code = event.code;

        simpleKeys.forEach(element => {
            element.classList.remove('active');
        });

        if(code == 'ShiftLeft') {
            leftShift.classList.remove('active');
            simpleKeys.forEach(element => {
                element.style.textTransform = '';
            });
        }

        if(code == 'Delete') {
            del.classList.remove('active');
        }

        if(code == 'Backspace' ) {
            backspace.classList.remove('active');
        }
    }

    document.querySelectorAll('.row div').forEach(element => {
        let result = '';
        let content = textarea.textContent;
        let simpleKeys = document.querySelectorAll('.simple');
        
        element.onclick = function (event) {
            
            document.querySelectorAll('.simple').forEach(element => {
                element.classList.remove('active');
            });
            
            let code = this.getAttribute('data');

            if(code != 'Backspace' && code != 'ShiftLeft' && code != 'CapsLock') {
                textarea.textContent += this.textContent;
            } 
            if (code == 'Backspace'){
                backspace.classList.add('active');
                result = content.split('');
                let b = result.pop();
                textarea.innerText = result.join('');
            }
            if (code == 'ShiftLeft') {
                if (flag == true){
                    flag = false;
                    simpleKeys.forEach(element => {
                        element.style.textTransform = '';
                    }); 
                    leftShift.classList.remove('active');
                } else {
                    flag = true;
                    leftShift.classList.add('active');
                    simpleKeys.forEach(element => {
                        element.style.textTransform = 'uppercase';
                    }); 
                }
            }
            if(code == 'CapsLock') {
                if (flag == true){
                    flag = false;
                    simpleKeys.forEach(element => {
                        element.style.textTransform = '';
                    }); 
                    capslock.classList.remove('active');
                } else {
                    flag = true;
                    capslock.classList.add('active');
                    simpleKeys.forEach(element => {
                        element.style.textTransform = 'uppercase';
                    }); 
                }
            }
            
            this.classList.add('active');
        };

        element.onmousemove = function () {
            document.querySelectorAll('.row div').forEach(element => {
                element.classList.remove('active');
            });
        };
    });
}

document.addEventListener("DOMContentLoaded", ready);