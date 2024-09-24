
document.getElementById("btn-blog").addEventListener("click", function () {
    window.location.href = "../blog.html";
  });
  document.getElementById("home-click").addEventListener("click", function () {
    window.location.href = "../index.html";
  });
  console.log('home-bg"');

document.getElementById('btn-donate-noakhali').addEventListener('click',function(){
    const mainBalance=Number(getTextValue('main-balance'));
    const donateNoakhali=Number(getTextValue('donate-noakhali'))  
    const InputDonateNoakhali= Number(getInputValue('input-donate-noakhali'))
    const inputDonate = document.getElementById('input-donate-noakhali').value.trim()
    
    if ( inputDonate === '' || isNaN(InputDonateNoakhali) || InputDonateNoakhali > mainBalance ) {
     onclick=modal_1.showModal()
     document.getElementById('input-donate-noakhali').value = '';
 
    }else{
     const showMainBalance = mainBalance-InputDonateNoakhali;
     document.getElementById('main-balance').innerText = showMainBalance;
 
     const showNoakhaliDonate =donateNoakhali+InputDonateNoakhali;
     console.log(showNoakhaliDonate);
     
     document.getElementById('donate-noakhali').innerText = showNoakhaliDonate;
     const history = document.getElementById('history-btn');
     const div = document.createElement('div');
     div.innerHTML = `
         <div class="w-9/12 mx-auto border-2 p-5 rounded-xl my-7">
             <h1 class="text-xl font-bold">${InputDonateNoakhali} Taka is Donate for Flood at Noakhali, Bangladesh</h1>
             <p class="text-text2 font-medium mt-4">Date: ${new Date().toString()}</p>
         </div>
     `;
     history.appendChild(div);
 
     onclick=modal_2.showModal()
     document.getElementById('input-donate-noakhali').value 
     
    }
     
 })
 
 
 document.getElementById('btn-donate-feni').addEventListener('click',function(){
     const mainBalance = Number(getTextValue('main-balance'));
     const donatefeni=Number(getTextValue('doante-feni'))
     const inputDonateFeni=Number(getInputValue('input-donate-feni'))
     const inputDonate = document.getElementById('input-donate-feni').value.trim()
 
     if (inputDonate === '' || isNaN(inputDonateFeni) || inputDonateFeni>mainBalance) {
         onclick=modal_1.showModal()
         document.getElementById('input-donate-feni').value=''
     }else{
         
         document.getElementById('main-balance').innerText = mainBalance-inputDonateFeni;
         document.getElementById('doante-feni').innerText = donatefeni+inputDonateFeni
         document.getElementById('input-donate-feni').value =''
         onclick=modal_3.showModal()
 
         const history = document.getElementById('history-btn');
         const div = document.createElement('div');
         div.innerHTML = `
             <div class="w-9/12 mx-auto border-2 p-5 rounded-xl my-7">
                 <h1 class="text-xl font-bold">${inputDonateFeni} Taka is Donated Donate for Flood Relief in Feni,Bangladesh</h1>
                 <p class="text-text2 font-medium mt-4">Date: ${new Date().toString()}</p>
             </div>
         `;
         history.appendChild(div);
         
     }
     
     
 })
 
 
 document.getElementById('btn-donate-quta').addEventListener('click',function(){
    const mainBalance=Number(getTextValue('main-balance'));
    const inputQutaDonate=Number(getInputValue('input-donate-quta'))
    const qutaDonate=Number(getTextValue('donate-quta'));
    const inputDonate= document.getElementById('input-donate-quta').value.trim()
     
    if (inputDonate==='' || isNaN(inputQutaDonate)|| inputQutaDonate>mainBalance) {
         onclick=modal_1.showModal()
         document.getElementById('input-donate-quta').value=''
    }else{
      document.getElementById('main-balance').innerText = mainBalance-inputQutaDonate;
      document.getElementById('donate-quta').innerText = qutaDonate+inputQutaDonate;
      
 
 
      document.getElementById('input-donate-quta').value =''
      onclick=modal_4.showModal()
      const history = document.getElementById('history-btn');
         const div = document.createElement('div');
         div.innerHTML = `
             <div class="w-9/12 mx-auto border-2 p-5 rounded-xl my-7">
                 <h1 class="text-xl font-bold">${inputQutaDonate} Taka is Donated Aid for Injured in the Quota Movement</h1>
                 <p class="text-text2 font-medium mt-4">Date: ${new Date().toString()}</p>
             </div>
         `;
         history.appendChild(div);
 
    }
    
    
 })
 
 