let toggle=false
function toggleMode(){
    const calculator=document.querySelector('.calculator');
    toggle=!toggle
    if(toggle){
        calculator.classList.add("dark-mode")
    }else{
        calculator.classList.remove("dark-mode")
    }
}   


const clearDisplay=()=>{
    document.getElementById('input').value=''
}

const append=(str)=>{
    const value=document.getElementById('input').value+=str
    console.log(value)
}
const deleteCharacter=()=>{
    let input = document.getElementById('input');
    input.value = input.value.slice(0, -1);
}

const calculate=()=>{
    // eval()
    let input = document.getElementById('input').value;
    let output = document.getElementById('output');

    try {
        let result = eval(input);
        document.getElementById('input').value = result;
        output.innerText = '';
    } catch (error) {
        output.innerText = 'Invalid input';
    }
}