const form = document.getElementById('form');
let card_container = document.getElementById('cards-container');
let students_list = [];

if(localStorage.students_list != null)
    students_list = JSON.parse(localStorage.students_list);



form.addEventListener('submit', (e)=>{
    e.preventDefault();
    let fullName = e.target.name.value;
    let dob = e.target.dob.value;
    let gender = e.target.gender.value;
    let major = e.target.major.value;
    let phone = e.target.phone.value;

    let student = new Student(fullName, dob, gender, major, phone);
    students_list.push(student);
    localStorage.setItem('students_list', JSON.stringify(students_list));
    render([student]);
    form.clear();
});

function Student(fullName, dob, gender, major, phone){
    this.fullName = fullName;
    this.dob = dob;
    this.gender = gender;
    this.major = major;
    this.phone = phone;
}


function render(students_list){

    students_list.forEach(student => {
        
        let card = document.createElement('div');
        card.classList.add('card');

        let img_holder = document.createElement('img');
        img_holder.src = isMale(student) ? "./assets/avatar_male.png" : "./assets/avatar_female.png";
        img_holder.style.width  = '100%';
        card.appendChild(img_holder);

        let card_info = document.createElement('div');
        card_info.classList.add('card-info');
        card_info.id = "card-info";
        card.appendChild(card_info);

        

        let name_holder = document.createElement('h4');
        name_holder.textContent = `${student.fullName}`;
        let dob_holder = document.createElement('p');
        dob_holder.textContent = `${student.dob}`;
        let gender_holder = document.createElement('p');
        gender_holder.textContent = `${student.gender}`;
        let major_holder = document.createElement('p');
        major_holder.textContent = `${student.major}`;
        let phone_holder = document.createElement('p');
        phone_holder.textContent = `${student.phone}`;


        card_info.appendChild(name_holder);
        card_info.appendChild(dob_holder);
        card_info.appendChild(gender_holder);
        card_info.appendChild(major_holder);
        card_info.appendChild(phone_holder);

        card.appendChild(card_info);
        card_container.appendChild(card);
    });
}

function isMale(student) {
    if(student.gender === 'male') {
        return true;
    }
    else{
        return false;
    }
}