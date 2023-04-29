# Fullstack Exam
## Exam
### 1 ออกแบบระบบ
    - font หน้า form user สามารถ กรอก original url และ กด generate จะได้เป็น url ที่ย่อมาแล้วกลับมา
    - service backend จะนำ orginal url ไป hash32bit และบันทึกลงฐานข้อมูล H2 database และยังสามารถกำหนด
    วันหมดอายุของ url ได้อีกด้วย หากไม่ระบุวันหมดอายุ ระบบจะ default ให้เป็น 1 วัน
    โครงสร้างตารางบน database

    | Tables        |               |
    | ------------- |:-------------:|
    | id            |           int |
    | original_url  |          clob |
    | short_url     |       varchar |
    | created_at    |     timestamp |
    | expires_at    |     timestamp |

    - fontend : angular
    - backend : springboot 
    - database : H2
    - deployment : build app and run with nginx on docker 
    
    เหตุผลที่เลือก framwork เหล่านี้เพราะผมถนัดที่สุด และสร้างขึ้นมาได้ไวที่สุดโดยคำนึงถึงเวลาในการตอบสนองต่อ Requirement 
    ถึงแม้โจทย์จะไม่ได้กำหนดเวลา อีกทั้ง database H2 ยังเป็น relational database ที่เล็ก และเหมาะกับงานที่ไม่ซับซ้อน 
    และ buildin มากับ springboot เลยครับ 


### 2 ออกข้อสอบอะไรก็ได้ อย่างน้อย 1 ข้อ
    - 1.จะออกแบบการพัฒนาระบบอย่างไรให้รวดเร็ว และลดความผิดพลาดในการเขียนโค้ด
    คำตอบ เน้นการใช้เครื่องมือ หรือพัฒนาเครื่องมือขึ้นมา และใช้ในการเขียนโค้ดและลดการเขียนโค้ดจากมนุษย์ให้น้อยที่สุด
    - 2.ถ้ามีนักพัฒนา 10 คน จะทำอย่างไรให้งานที่พัฒนาออกมาไม่มี bug หรือข้อผิดพลาด
    ตอบ แทบเป็นไปไม่ได้ ที่นักพัฒนา 10คนจะทดสอบแอพให้ละเอียดมากกว่าคนใช้งาน 100 หรือ 1000 คน สิ่งที่ทำได้มากที่สุดคือ
    ใส่ใจรายละเอียดและรอบคอบในการพัฒนาให้มากที่สุด เพราะโปรแกรมที่ไม่มีมี bug คือโปรแกรมที่ไม่มีคนใช้งาน

### 3 วิธี run app
    - 1. cd project
    - 2. run command 'docker-compose up -d'
    - 3. เข้าใช้งานที่ http://localhost:82

### email ตอบกลับ
    - uthendevelop@gmail.com
