function gradingStudents(grades) {

    let newArr = [];

    grades.map((grade) => {
        if (grade < 38) {
            newArr.push(grade);
        } else {
            if (grade % 5 === 3 || grade % 5 === 4) {
                const rest = grade % 5
                const add = 5 - rest
                const newValue = grade + add

                newArr.push(newValue)
            } else {
                newArr.push(grade)
            }
        }
    })

    return newArr

}