# Type Guard ควรใช้เมื่อ return type ไม่เคลียร์

# Generic type
1.ใช้เมื่อต้องการบีบค่า type ให้แคบลง

# Utility Type
## Record Type
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
 same as

> type Record2<K extends string, V> = {
>  **[P in K]: V;**
>};

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

# typecheck in typescript
type CheckType<T> = T extends string ? 'is string' : T extends number ? 'is number' : T extends [infer Head, ...infer Last] ? ['is array', Head, Last] : 'nope'
type ResultA = CheckType<'hello'>
type ResultB = CheckType<50>
type ResultC = CheckType<[50, 40, 30, 20]>

<Advance Tips>
1. refactor ก่อนแล้วค่อย generic