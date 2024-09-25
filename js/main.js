function getInputValue(id){
    const inputValue= document.getElementById(id).value;
     return inputValue;
 }
 
 function getTextValue(id){
     const textValue=document.getElementById(id).innerText;
     return textValue;
 }
 
 function doubleSection(id){
     document.getElementById('donate-btn').classList.add('hidden');
     document.getElementById('history-btn').classList.add('hidden');
     document.getElementById(id).classList.remove('hidden')   
 }
 
 function  colourSection(id){
     document.getElementById('donation').classList.remove('bg-primary')
     document.getElementById('history').classList.remove('bg-primary')
     document.getElementById(id).classList.add('bg-primary')
 }
 
 

 