let input=document.querySelector("input");
function addValue(element)
{
    input.value+=element;
}

function funclear(element)
{
    input.value=" ";
}

function fundel(element)
{
    input.value=input.value.slice(0,input.length-1)
}

function equal(element)
{
    input.value=eval(input.value)
}