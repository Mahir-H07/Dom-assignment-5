
document.getElementById('btn-blog').addEventListener('click',function(event){
    event.preventDefault();
    window.location.href = "./blog.html";
 

})



document.getElementById('btn-donate-noakhali').addEventListener('click',function(){
    const mainBalance = Number(getTextValue('main-balance'));
    const donateNoakhali = Number(getTextValue('donate-noakhali'))  
    const InputDonateNoakhali= Number(getInputValue('input-donate-noakhali'))
    
    if ( isNaN(InputDonateNoakhali) || InputDonateNoakhali > mainBalance || InputDonateNoakhali<=1 ) {
     onclick=modal_1.showModal()
     document.getElementById('input-donate-noakhali').value = '';
 
    }else{
     const showMainBalance = mainBalance-InputDonateNoakhali;
     document.getElementById('main-balance').innerText = showMainBalance;
 
     const showNoakhaliDonate = donateNoakhali+InputDonateNoakhali;
    
     document.getElementById('donate-noakhali').innerText = showNoakhaliDonate;
     const history = document.getElementById('history-btn');
  
     const div = document.createElement('div');
     div.classList.add('w-9/12', 'mx-auto', 'border-2', 'p-5', 'rounded-xl',  'my-7')
   
     div.innerHTML = `
             <h4 class="lg:text-2xl md:text-2xl text-lg font-bold">${InputDonateNoakhali} Taka is Donate for Flood at Noakhali, Bangladesh</h4>
             <p class=" font-semibold mt-3">Date: ${new Date().toString()}</p>
     `;
     history.appendChild(div);
 
     onclick=modal_2.showModal()
     document.getElementById('input-donate-noakhali').value = '';
     
    }
     
 })
 
 
 document.getElementById('btn-donate-feni').addEventListener('click',function(){
     const mainBalance = Number(getTextValue('main-balance'));
     const donatefeni = Number(getTextValue('doante-feni'))
     const inputDonateFeni = Number(getInputValue('input-donate-feni'))
 
     if ( isNaN(inputDonateFeni) || inputDonateFeni>mainBalance || inputDonateFeni<=1) {
         onclick=modal_1.showModal()
         document.getElementById('input-donate-feni').value=''
     }else{
         
         document.getElementById('main-balance').innerText = mainBalance-inputDonateFeni;
         document.getElementById('doante-feni').innerText = donatefeni+inputDonateFeni
         document.getElementById('input-donate-feni').value =''
         onclick=modal_3.showModal()
 
         const history = document.getElementById('history-btn');
         const div = document.createElement('div');
         div.classList.add('w-9/12', 'mx-auto', 'border-2', 'p-5', 'rounded-xl',  'my-7')

         div.innerHTML = `
                 <h4 class="lg:text-2xl md:text-2xl text-lg font-bold">${inputDonateFeni} Taka is Donated for Flood Relief in Feni,Bangladesh</h4>
                 <p class=" font-semibold mt-3">Date: ${new Date().toString()}</p>
         `;
         history.appendChild(div);
     
         
     }
     
     
 })
 
 
 document.getElementById('btn-donate-quota').addEventListener('click',function(){
    const mainBalance = Number(getTextValue('main-balance'));
    const inputQuotaDonate = Number(getInputValue('input-donate-quota'))
    const donateQuota = Number(getTextValue('donate-quota'));
   
    if ( isNaN(inputQuotaDonate)|| inputQuotaDonate > mainBalance || inputQuotaDonate<=1) {
         onclick = modal_1.showModal()
         document.getElementById('input-donate-quota').value=''
         
    }else{
      document.getElementById('main-balance').innerText = mainBalance - inputQuotaDonate;
      document.getElementById('donate-quota').innerText = donateQuota + inputQuotaDonate;
      
      document.getElementById('input-donate-quota').value =''
      onclick=modal_4.showModal()
      const history = document.getElementById('history-btn');
         const div = document.createElement('div');
         div.classList.add('w-9/12', 'mx-auto', 'border-2', 'p-5', 'rounded-xl',  'my-7')
         div.innerHTML = `
             <h4 class="lg:text-2xl md:text-2xl text-lg font-bold">${inputQuotaDonate} Taka is Aid for Injured in the Quota Movement</h4>
            <p class=" font-semibold mt-3">Date: ${new Date().toString()}</p>
         `;
         history.appendChild(div);
 
    }
    
    
 })
 


 document.getElementById('history').addEventListener('click',function(){
    doubleSection('history-btn')
    colourSection('history')
    
})

document.getElementById('donation').addEventListener('click',function(){
    doubleSection('donate-btn')
    colourSection('donation')
})


