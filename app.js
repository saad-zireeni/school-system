const form = document.getElementById('form');
const table = document.getElementById('table');


form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let fullName = e.target.name.value;
    let dob = e.target.dob.value;
    let gender = e.target.gender.value;
    let phone = e.target.phone.value;
    let grade = e.target.grade.value;

    render(fullName, dob, gender, phone, grade);
});


function render(fullName, dob, gender, phone, grade){

    let row = document.createElement('tr');
    let name_data = document.createElement('td');
    let dob_data = document.createElement('td');
    let gender_data = document.createElement('td');
    let phone_data = document.createElement('td');
    let grade_data = document.createElement('td');


    name_data.textContent = fullName;
    dob_data.textContent = dob;
    gender_data.textContent = gender;
    phone_data.textContent = phone;
    grade_data.textContent = grade;


    table.appendChild(row);
    row.appendChild(name_data);
    row.appendChild(dob_data);
    row.appendChild(gender_data);
    row.appendChild(phone_data);
    row.appendChild(grade_data);
}