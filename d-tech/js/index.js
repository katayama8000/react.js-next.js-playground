const test = {};

const wm = new WeakMap();
wm.set(test, "hoge");　　　　　//キー:test、バリュー："hoge"を設定

console.log(wm.has(test));　　//true
console.log(wm.get(test));　　//hoge

wm.delete(test);　　　　　　　　//キー:test、バリュー："hoge"を削除
console.log(wm.has(test));　　//false