let nums = [1,2,3,4,5,6,7,8,9,10]

let del = []
let ned = []
nums.forEach((nums) => {
    if(nums %2===0) {
        del.push(nums)
    }
    else {ned.push(nums)}
})
console.log(`чётные ${del} нечетные ${ned}`)

let students = ['ayub', 'islom', 'daler', 'iskandar', 'shaxzod']
let dlName = ''
students.filter((name) => {
    if (name.length>dlName.length)
    {dlName=name}
}) 
console.log(dlName)

let styudent = ['ayub', 'islom', 'daler', 'iskandar', 'shaxzod']
let dl = prompt(styudent);2 
if(dl>=0&& dl <styudent.length) {styudent.splice(dl-1,1)
alert('Осталось ' + styudent);}
else {alert('Ошибка')}


let carprice = [20000, 16000, 40000, 30000, 35000, 60000, 13000, 15000, 45000, 110000]
alert(`имеется ${carprice}`)

let ot = prompt ('от')
let ss = prompt('до')
let  kon= carprice.filter((price) => price >= ot && price <=ss)
alert(kon)


let arr = [1, 2, false, 'hello', 24, 'world', undefined, null, 'eror', 22]

let nomer =arr.filter((nomerr) => typeof nomerr === 'номер')
if(nomer.length>5) { console.log('отлично')} else {console.log(`${nomer}Не правильно`)}

