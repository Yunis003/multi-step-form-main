let form1=document.querySelector('.form1')
let form2=document.querySelector('.form2')
let form3=document.querySelector('.form3')
let form4=document.querySelector('.form4')

let confirm=document.querySelector('.confirm')
let nextBtn=document.querySelector('.nextBtn')
let preBtn=document.querySelector('.preBtn')

let forms=[form1,form2,form3,form4,confirm]
let current=0


//?
let plans=document.querySelectorAll('.card')

let obj={
    plan:null,
    price:null,
}
let obj2={
    plan2:null,
    price2:null
}




//! inputs
let input1=document.querySelector('.input1')
let input2=document.querySelector('.input2')
let input3=document.querySelector('.input3')
let inputs=[input1,input2,input3]
let err=document.querySelector('.error')


let textarea2=document.querySelector('.textarea2'),textarea3=document.querySelector('.textarea3'),textarea4=document.querySelector('.textarea4')
let textareas=[textarea2,textarea3,textarea4]


    nextBtn.addEventListener('click',function(){



       if(current<4 && validateInput()){
        forms[current].style.display='none'
        textareas[current].style.backgroundColor='#BEE2FD'   //*??!
        current++
        forms[current].style.display='flex'
        preBtn.style.display='block'
       }
       if(current==3){
        nextBtn.textContent='Confirm'
       }
       if(current==4){
        nextBtn.style.display='none'
        // textareas[current].style.backgroundColor='#BEE2FD'
    }
   
   

         //?valid start
       function validateInput(){
        for(let i=0;i<inputs.length;i++){
            if(inputs[i].value.length==0){
                inputs[i].style.borderColor='red'
                // err.style.display='block'
            }
            else{
                inputs[i].value.length>4
                inputs[i].style.borderColor='gray'
               
            return true}}}
            //?valid end

    //? plans start
    plans.forEach((plan)=>{
        plan.addEventListener('click',function(){
            document.querySelector(".selected").classList.remove("selected");
    plan.classList.add("selected");
    let planName=plan.querySelector('.type')
    let price=plan.querySelector('.priced')
    obj.plan=planName
    obj.price=price
    console.log(obj);})})
    //?plans end

    //?add-ons start
    let checkbox=document.querySelectorAll('.form3 .select input')
    let select=document.querySelectorAll('.select')
    console.log(checkbox);
//    checkbox.forEach((check)=>{
//     check.addEventListener('click',function(){
//         document.querySelector(".selected2").classList.remove("selected2");
//         check.classList.add("selected2");
//     })
//    })
select.forEach((se)=>{
    se.addEventListener('click',function(){
        document.querySelector('.selected2').classList.remove('selected2')
        se.classList.toggle('selected2')
        let anotherService=se.querySelector(".anotherService")
        let priced2=se.querySelector('.priced2')
        obj2.plan2=anotherService
        obj2.price2=priced2
        console.log(obj2);
        
    })
})
  
    //?finalMark start
    let finalType=document.querySelector('.finalType')
    let typePrice=document.querySelector('.typePrice')
    let service1=document.querySelector('.service1')
    let cash1=document.querySelector('.cash1')
    let ttlCash=document.querySelector('.ttlCash')

    finalType.textContent=obj.plan.innerText
    typePrice.textContent=obj.price.innerText
    service1.textContent=obj2.plan2.innerText
    cash1.textContent=obj2.price2.innerText

    
    ttlCash.textContent=parseFloat(obj.price.innerText)+parseFloat(obj2.price2.innerText)
    //? finalMark end
 

    })

//?evvelki page qayitmaq background removla
    preBtn.addEventListener('click',function(){
        if(current<=4){
            forms[current].style.display='none'
            current--
            forms[current].style.display='flex'
            textareas[current].style.backgroundColor='transparent'
        }
        if(current==0){
            preBtn.style.display='none'
        }
    })










