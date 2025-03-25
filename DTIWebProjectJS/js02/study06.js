//Control Statement
//Condiction/Selection Statement
//if, if-else, if-else-if, switch-case

//Loop Statement
//while, do-while, for, for-in, for-of, forEach

//break, contiunue
for(let i = 1; i <= 5; i++){
    if(i === 3){
        break
    }
    console.log('${i}...Hi')
}
console.log('+++++++++++++++++++')
for(let i = 1; i <= 5; i++){
    if(i === 3){
        continue
    }
    console.log('${i}....Hi')
}
console.log('+++++++++++++++++++')
//foreach ใช้กับ Array (เข้าถึงข้อมูลทุกตัวใน Array)
let data = [10, 20, 30, 40]
console.log(data[0] * 100)
console.log(data[1] * 100)
console.log(data[2] * 100)
console.log(data[3] * 100)
console.log('+++++++++++++++++++')
data.forEach((value)=>{
    console.log(value * 100)
})
console.log('+++++++++++++++++++')
//for-of ใช้กับ Array
for(let value of data){
    console.log(value * 100)
}
console.log('+++++++++++++++++++')
//for-in ใช้กับ Object
let info = {
    aa: 10,
    bb: 20,
    cc: 30,
    dd: 40
}
console.log(info.aa * 100)
console.log(info.bb * 100)
console.log(info.cc * 100)
console.log(info.dd * 100)
console.log('+++++++++++++++++++')
for(let keyvalue in info){
    console.log(keyvalue)
    //consule.log(info.key) ERROR
    console.log(info[keyvalue] * 100)
}