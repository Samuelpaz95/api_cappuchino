const { writeFileSync } = require("fs");
const { cleanSubjects } = require("../professor/cleanSubjects");
const { groupRooms } = require("./groupRooms");
const { categorize } = require("./categorize");

const DATA_ROUTE = "./public/data/";
const FILE_ROUTE = "./public/data/rooms/fcyt/index.json";

const subjectsByDepartments = cleanSubjects(DATA_ROUTE + "departments/").fcyt;
const formattedRooms = groupRooms(subjectsByDepartments);
const categorizedRooms = categorize(formattedRooms);

writeFileSync(FILE_ROUTE, JSON.stringify(categorizedRooms));
console.log("> 👍", FILE_ROUTE, "rooms updated");
