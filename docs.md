# Type Guard ควรใช้เมื่อ return type ไม่เคลียร์

# Record Type
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
 same as

> type Record2<K extends string, V> = {
>  **[P in K]: V;**
>};

# Utility Type
## Partial
เหมือน Record type แต่ไม่จำเป็นต้องใส่ค่า ไม่เกิด error

## Readonly
map ค่าทุกตัว และ type เป็น readonly

## Pick
<T, K>
เลือกมาเฉพาะตัวที่กำหนด
first parameter คือ type ที่เราเลือก
ตัวที่สองคือ เลือกว่าจะเอา key จาก type นี้ตัวไหน


## Exclude >>> Union type only
remove from Union

## Extract >>> Unions type only
Include these from Union
