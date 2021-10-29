const fs = require('fs');

fs.readFile ('./public/data/departments/index.json', (err, data) => { 
    const faculty=[];   
    if (err) throw err;
    const faculties = JSON.parse(data);
    for (const {semanticName: semanticName} of faculties) {
        faculty.push({semanticName} );   
    }
    console.log(faculty)
for (const {semanticName} of faculty){
fs.readFile (`./public/data/departments/${semanticName}/index.json`, (error, data) => {
    const materia=[];
    if (error) throw error;
    const materias = JSON.parse(data);
    for (const {code: code} of materias) {
        materia.push({code}); 
    }
    console.log(materia)

    for(const {code } of materia){
        fs.readFile (`./public/data/departments/${semanticName}/2021-1/${code}.json`, (err, data) => {
            const profesor=[];
            if (err) throw err;
            const profesors = JSON.parse(data);
            //  for (const {name:name} of profesors) {
            //       profesor.push({name }); 
            //  }
            // no logro ingresar a la informacion de los profesores 
            console.log(profesors)
        })}
})};
});