
// friuts.push('lichee') end m ad krna
// friuts.pop() end se htana
// friuts.unshift('chana') start m add krna
// friuts.shift() start se htana
// friuts.splice(2,2 , 'puri') hatana add bi krna


// const companies=['bloomberg','nicrosoft','uber','google','ibm','netflix']
// const b =companies.includes('uber')
// console.log(b)     ===>>          includes search ka kaam krta h

// const companies=['bloomberg','nicrosoft','uber','google','ibm','netflix']
// const b =companies.indexOf('uber')
// console.log(b)   ===>>       index number check krna


// const friuts=['banana', 'mango' ,'lemon','chikku' , 'loki']
// console.log(friuts.slice(2 ,5))  select krna 2 se 4 tk

// const a=['bloomberg','nicrosoft','uber','google','ibm','netflix']
// const b=['yahoo','baba']
// const c =a.concat(b)
// console.log(c)     ===>>       dono string ko mliana

// join ka kaam space khtm krna

// const a=['yango','bloomberg','nicrosoft','uber','google','ibm','netflix']
// a.sort()
// console.log(a)  ===>>      alphabate set krta h A to Z

// const a=['yango','bloomberg','nicrosoft','uber','google','ibm','netflix']

// a.reverse()
// console.log(a)  ===>>       reverse kr deta h

// const a=['yango','bloomberg','nicrosoft','uber','google','ibm','netflix']


// const a='zohaib asghar ali'
// const b=a.split('a')
// console.log (b)     ===>>      ghaib krdeeta h


// const companies=['bloomberg','nicrosoft','uber','google','ibm','netflix']
// companies.shift();
// companies.splice(1,1,'ola')
// companies.push('amazon')

// console.log(companies)


// sir class test 

// const shop=['yango','bloomberg','nicrosoft','uber','google','ibm','netflix']
// const input =document.querySelector('#input')
// const h1 =document.querySelector('h1')
// function getfriuts(){
//     console.log=(input.value)
//     if(shop.includes(input.value)){
//         console.log ('friut available h')
//         h1.innerHTML=`${input.value} is avalable`
//     }else{
//         console.log ('friut available ni h')
//         h1.innerHTML=`${input.value} is not avalable`
//     }
// input.value=''
// }


const shop=['mango','banana','chikku','orange','apple','tomato']
const push= document.querySelector('#input')
const h1 = document.querySelector('h1')
function getfriuts(){
    console.log(input.value)
    if(shop.includes(input.value)){
        console.log('friut available h')
        h1.innerHTML=`${input.value} is available`
    }else{
        console.log ('fruit available ni h')
        h1.innerHTML=`${input.value} is not available`
    }

}


