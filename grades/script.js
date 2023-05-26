const $ = (query) => document.querySelector(query);

let students = [
  { name: "Popescu Ion", grades: [10, 9, 6], id: 1 },
  { name: "Blandiana Ana", grades: [9, 9, 8], id: 2 },
];
let student;

const createStudent = (string) => ({
  name: string,
  grades: [],
  id: students.at(-1).id + 1,
});

const createStudentTable = () => {
  $(".students").innerHTML = "";
  students.forEach(
    (student) =>
      ($(".students").innerHTML =
        `
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>Medie</td>
        <td>
            <button data-id="${student.id}" class="view-grades">Vezi note</button>
        </td>
        <td>
            <button data-id="${student.id}" class="delete-student">Șterge elev</button>
        </td> 
        ` + $(".students").innerHTML)
  );
};

const createGradesTable = () => {
  $(".grades").innerHTML = "";
  $(".grades").innerHTML =
    `
        <p>Nume și Prenume:</p>
        <p>${student.name}</p>
        <input class="input-grades" type="number" />
        <button class="add-grade">Add grade</button>
        <table>
          <thead>
            <td>Note</td>
            <td>Șterge</td>
          </thead>
          <tbody>
            ${student.grades.reduce(
              (string, grade, index) =>
                `<tr>
                    <td>${grade}</td>
                    <td>
                        <button data-id="${index}" class="delete-grade">Delete grade</button>
                    </td>
                </tr>` + string,
              ""
            )}
          </tbody>
        </table>
        ` + $(".grades").innerHTML;
};

$(".container").addEventListener("click", (event) => {
  const id = Number(event.target.dataset.id);
  if (event.target.classList.contains("add-student")) {
    students.push(createStudent($(".input-students").value));
    createStudentTable();
  } else if (event.target.classList.contains("view-grades")) {
    student = students.find((el) => el.id === id);
    createGradesTable();
  } else if (event.target.classList.contains("delete-student")) {
    students = students.filter((el) => el.id !== id);
    createStudentTable();
  } else if (event.target.classList.contains("add-grade")) {
    student.grades.push(Number($(".input-grades").value));
    createGradesTable();
  } else if (event.target.classList.contains("delete-grade")) {
    student.grades.splice(id, 1);
    createGradesTable();
  }
});

createStudentTable();
