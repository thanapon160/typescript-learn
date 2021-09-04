# Type Guard ควรใช้เมื่อ return type ไม่เคลียร์

# Record Type
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
 same as
type Record2<K extends string, V> = {
  [P in K]: V;
};
