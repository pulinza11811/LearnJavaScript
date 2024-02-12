let count = 1;

while(count<=5)
{
  console.log("ผลิตสินค้าชิ้นที่", count)
  if(count == 4)
  {
    break;
  }
  count++;
}

for(let time = 1; time <= 5; time++)
{
  console.log("Hello World", time)
}

let pop = 1;
do
{
  console.log("do", pop)
  ++pop
}
while(pop<=5)

for(let count = 1; count <=999; count++)
{
  console.log(count)
  if(count > 5) continue;
}
console.log("จบแล้วไอสาส")