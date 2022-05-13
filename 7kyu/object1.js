let users = [
  { id: 1, info: { name: "Ahmad", age: 21 } },
  { id: 2, info: { name: "Toshmad", age: 21 } },
  { id: 3, info: { name: "Gulmat", age: 21 } },
];

function update(id, info) {
  users.map((i) => {
    if (i.id == id) {
      i.info[info.key] = info.value;
    }
  });
  return users;
}
console.log(update(3, { key: "age", value: "8" }));
