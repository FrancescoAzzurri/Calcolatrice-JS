//assegno il puntatore
const display = document.getElementById('display')
//seleziono tutti i button
const buttons = document.querySelectorAll('button')
let lastOperator = false;

//ciclo
buttons.forEach(btn => {
    //prendiamo il testo dal buttone
    btn.addEventListener('click', () => {
        if (display.textContent.length < 10) {
            const text = btn.textContent;
            //puliamo la stringa
            if (display.textContent ==='0' || display.textContent ==='Error') {display.textContent = ''}
            //inserisco i numeri
            if (text >='0' && text <= '9') {
                display.textContent += text;
                lastOperator = false;
            //inserisco operatori
            } else if (text ==='+' || text ==='-' || text ==='*' || text ==='/' || text ==='%' ) {
                if (display.textContent.length > 0) {
                    if (lastOperator === false) {
                        display.textContent += text;
                        lastOperator = true
                    } else {
                        display.textContent = display.textContent.slice(0, -1);
                        display.textContent += text
                    }
                } else {
                    display.textContent = '0';
                }
            }
            //inserisco il punto
            else if (text === '.') {
                    if (display.textContent.length < 1) {
                    display.textContent = '0.';
                } else {
                    display.textContent += text;
                    lastOperator = true;
                }
            }
            //cancello ultimo numero
            else if (text === 'C') {
                if (display.textContent.length > 1) {
                    display.textContent = display.textContent.slice(0, -1);
                    lastOperator = false
                } else {
                    display.textContent = '0'; 
                    lastOperator = false
                }
            //cancello tutto
            } else if (text === 'DEL') {
                display.textContent = '0';
                lastOperator = false;
            //uguale
            } else if (text === '=') {
                if (lastOperator === false) {
                    try {
                        let result = eval(display.textContent);
                        //controllo
                        if (result % 1 !== 0) {
                            result = parseFloat(result).toFixed(2);
                        }
                        display.textContent = result;
                        if (display.textContent.length < 1) {
                            display.textContent = '0';  
                        }
                    } catch (e) {
                        display.textContent = 'Error'; 
                    }
                }
            }
        

        console.log(display.textContent)
        //supero la larghezza della stringa
        } else {
            display.textContent = '0';
            lastOperator = true;
        }
    });
});