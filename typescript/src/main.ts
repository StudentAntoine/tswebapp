let age1: number | undefined
let name1: string | null = null

enum Color {
	White, Black, Brown, Red, Orange, Yellow, Green, Blue, Purple, Grey
}
let colBackground: Color = Color.Blue

enum PropKind {
	Read = 1,
	Write = 4,
	Indexed = "indexed",
}
let kind: PropKind = PropKind.Read

console.log(kind, PropKind[PropKind.Read]) // 1 Read
console.log(PropKind.Write, PropKind[PropKind.Write]) // 4 Write
console.log(PropKind.Indexed) // indexed

const key = Symbol()
const key2 = Symbol()
// console.log(key == key2) // erreur

const KEY = "key"
type key_t = "key"
let e1: key_t = KEY