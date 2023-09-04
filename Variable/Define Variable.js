
// -----1.ตัวแปร let สามารถเปลี่ยนค่าได้----------
let None; //สร้างตัวแปรไม่กำหนดค่า
Name = "Nattanan"; //กำหนดข้อความเก็บในตัวแปร Name
let age = 19;
let Name1 = "Nutta", age1 = 18; //หรือจะเขียนแบบต่อกันบรรทัดเดียวเลยก็ได้

console.log(None); //แสดงผลใน console ขึ้นเป็น undefined เพราะว่ายังไม่กำหนดค่า
console.log(Name); //แสดงเป็นชื่อที่เก็บไว้ในตัวแปร Name ใน console
console.log("Age:", age); //สามารถนำเอาข้อความมาแสดงร่วมกับตัวแปรได้



// -----2.ตัวอย่างการเปลี่ยนค่าในตัวแปร----------
console.log("Before", Name); //ตัวแปร Name ที่เก็บชื่อ Nattanan ไว้ในตอนแรก
Name = "Prayuth"; //เปลี่ยนค่าในตัวแปรใหม่เป็น Prayuth
console.log("After", Name); //แสดงค่าใหม่ในตัวแปร คือ Prayuth



// -----3.ตัวแปรค่าคงที่ const-------
const salary = 25000; //ตัวแปรที่ไม่สามารถเปลี่ยนค่าได้ คือค่าคงที่ = 25000
console.log("Before", salary); //แสดงค่าคงที่ใน console
salary = 10000; //เปลี่ยนค่าใหม่ในตัวแปร salary = 10000
console.log("After", salary); //ทดลองให้แสดงใน console


