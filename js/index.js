// Common Function
function getInputFieldtextById(id){
    const result1 = document.getElementById(id).innerText;
    const resultValue = parseFloat(result1);
    return resultValue;
}
function showSectionById(id){
  document.getElementById('section1').classList.add('hidden');  
  document.getElementById('section2').classList.add('hidden');        
  document.getElementById('section3').classList.add('hidden');               
  document.getElementById(id).classList.remove('hidden');  
}

document.getElementById("button2")
 .addEventListener("click", function (){
 showSectionById('section2').innerText;
 })



document.getElementById("blog-button")
 .addEventListener("click", function (){
 showSectionById('section3').innerText;
 })
function myFunction(event){
  event.innerHTML = 'Home';
  showSectionById('section3').innerText;

}


const historyTab = document.getElementById('button2');
const historyTab2 = document.getElementById('button1');
historyTab.addEventListener("click", function(){
historyTab.classList.add('bg-[#B4F461]');
historyTab.classList.remove('bg-white');

historyTab2.classList.remove('bg-[#B4F461]');
})


document.getElementById("button1")
 .addEventListener("click", function (){
 showSectionById('section1').innerText;
 })


// 1st Card

 const donateButton = document.getElementById("btn1");
 donateButton.addEventListener("click", function (){
 const donate = parseFloat(document.getElementById('input1').value);
  if(donate > 0 ){
  const balance = document.getElementById('balance1').innerText;
 const balanceNumber = parseFloat(balance);
  const totalBalance = donate + balanceNumber;
 document.getElementById('balance1').innerText = totalBalance;
 const history1 = getInputFieldtextById('input4');
 document.getElementById('input4').innerText = donate;
 const textValue = document.getElementById('nav-balance').innerText;
 const textNumber = parseFloat(textValue);
 const newBalance = textNumber - donate;
 document.getElementById('nav-balance').innerText = newBalance; 
} else{
  alert( 'Input Valid Amount.')
 }
 
})
// 2nd Card

const donateButton2 = document.getElementById("btn2");
donateButton2.addEventListener("click", function (){
 const donate2 = parseFloat(document.getElementById('input2').value);
 if(donate2 > 0 ){
 const balance1 = document.getElementById('balance2').innerText;
 const balanceNumber2 = parseFloat(balance1);
 const totalBalance2 = donate2 + balanceNumber2;
 document.getElementById('balance2').innerText = totalBalance2;
 const history2 = getInputFieldtextById('input5');
 document.getElementById('input5').innerText = donate2;
 const textValue = document.getElementById('nav-balance').innerText;
 const textNumber = parseFloat(textValue);
 const newBalance = textNumber - donate2;
 document.getElementById('nav-balance').innerText = newBalance;
 } else{
  alert( 'Input Valid Amount.')
 }
})
// 3rd Card

 const donateButton3 = document.getElementById("btn3");
 donateButton3.addEventListener("click", function (){
 const donate3 = parseFloat(document.getElementById('input3').value);
 if(donate3 > 0 ){
 const balance2 = document.getElementById('balance3').innerText;
 const balanceNumber2 = parseFloat(balance2);
 const totalBalance3 = donate3 + balanceNumber2;
 document.getElementById('balance3').innerText = totalBalance3;
 const history3 = getInputFieldtextById('input6');
 document.getElementById('input6').innerText = donate3;
 const textValue = document.getElementById('nav-balance').innerText;
 const textNumber = parseFloat(textValue);
 const newBalance = textNumber - donate3;
 document.getElementById('nav-balance').innerText = newBalance;
 } else{
  alert( 'Input Valid Amount.')
 }
})

// history item

const now = new Date();
const historyContainer = document.getElementById("history-item").innerText;
document.getElementById("history-item").innerText = (now);
const historyContainer1 = document.getElementById("history-item1").innerText;
document.getElementById("history-item1").innerText =(now);
const historyContainer2 = document.getElementById("history-item2").innerText;
document.getElementById("history-item2").innerText = (now);




// popup section
const popUp = document.getElementById('my-modal');

const navBalance = document.getElementById('nav-balance');
navBalance.addEventListener("click",function(){
  if(donate>5500){
    return alert("Insuficient Balance")
  }
  else{
    alert('popUp()')
  }
})