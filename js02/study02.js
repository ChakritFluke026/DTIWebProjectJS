//Variable ตัวแปร
//Ver เปลี่ยนค่าได้ กำหนกค่าทีหลังได้
//let เปลี่ยนค่าได้ กำหนัดค่าทีหลังได้
//const เปลี่ยนค่าไมได้ กำหนดค่าทีหลังได้

var aa
aa = 20
var bb = 30
aa = 100
bb = 200

let cc
cc = 30
let dd = 40
cc = 100
dd = 200

//const ee Error
const ee = 50
//ee = 500 Error

var a1 = 10
let a2 = 20
const  = 30
{
    var b1 = 100
    let b2 = 200
    const b3 = 300
    {
        var c1 = 1000
        let c2 = 2000
        const c3 = 3000
        console.log(a1)
        console.log(b1)
        console.log(c1)
    }
    console.log(a2)
    console.log(b2)
    //console.log(c2) Error
}
console.log(a3)
//console.log(b3) Error
//console.log(c3) Error


