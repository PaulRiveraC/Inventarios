let grades = [{ subject: 'Matematicas', grade: "9.5" }, { subject: 'Fisica', grade: "9.2" }];

export const saveGrade = (objeto) => {
    grades.push(objeto);
}

export const getGrades = () => {
    return grades;
}


export const updateGrade = (nota) => {
    let indice = find(nota.subject);
    if (indice != null || indice != 0) {
        grades[indice] = nota;
    }
}

const find = (subject) => {
    for (let i = 0; i < grades.length; i++) {
        if (grades[i].subject == subject) {
            return i;
        }
    }
    return null;
}