var obj = [
  { id: 1, name: "Sardor" },
  { id: 1, name: "Abdulloh" },
  { id: 1, name: "Ahror" },
];
var res = [];
const a = obj.map((i) => {
  return [{ id: i.id, name: i.name[0].toLowerCase() + i.name.slice(1) }];
});
