import { data } from "../MappareOggettoJson/data.js";

console.log(data);

const users = [];

for (let key of Object.keys(data.users)) {
  users.push({ id: key, ...data.users[key] });
}

console.log(users);