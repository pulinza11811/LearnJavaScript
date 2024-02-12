//การนับตำแหน่ง Array ตำแหน่งแรกถือว่าเป็น 0-1-2-3 เป็นต้น

let number = Array(100,200,300,400,500,600);//วิธีแรก

console.log(number)
console.log(number[0])
console.log(number[3])

let student = ["โอม" , "อิ" , "มา" , "ดิ" , "ครับ"];//วิธีที่สอง
student[1] = "อุ"//เปลี่ยนช่อง 1 เป็น คำว่า อุจากอิ
console.log(student[1])//แสดงช่องหมายเลข 1


let color = ["ฟ้า","น้ำเงิน","ชมพู","แดง","ม่วง"]
let count = color.length;
let result = color.sort()
color.push("ชมพูเข้ม")
console.log(count,result)
console.log(color[color.length-1])

let baht = [80,600,90,30]
console.log("before",baht.sort())

baht.sort((a, b) => a - b);
console.log("after",baht);

for(let i = 0; i<baht.length; i++)
{
    console.log((i+1), baht[i])
}

student.forEach(_number)

function _number(quantity)
{
    
    console.log(quantity)
}

console.log(typeof (color))//abc