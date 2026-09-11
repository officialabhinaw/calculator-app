const display = document.getElementById('display');
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', () => {
        const value = box.textContent.trim();
        if (value === "=") {
            try {
                display.value = eval(display.value);
            }
            catch (error) {
                display.value = "Error";
            }
        }
        else if (value === "AC") {
            display.value = "";
        }
        else if (value === "back") {
            display.value = display.value.slice(0, -1);
        }
        else if (value === "%") {
            display.value = display.value.slice(1 / 100);
        }
        else {
            display.value += value;
        }
    });
});
document.getElementById('output').addEventListener('input',(e)=>
{
    console.log(e.target.innertext);
});
