const changeOnNumber = elem => {
    const value = elem.value;
    elem.value = value.replace(/\D/g, '');
}

class Cat {
    constructor(catsname, ownername, phone, email, breed, food, gender, comment) {
        this.catsname = catsname;
        this.ownername = ownername;
        this.phone = phone;
        this.email = email;
        this.breed = breed;
        this.food = food;
        this.gender = gender;
        this.comment = comment;
    }
}

function addCat() {
    let catsname = document.getElementById("catstName").value;
    let ownername = document.getElementById("ownerName").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let breed = document.getElementById("Breed").value;
    let food = getCheckedCheckBoxes();
    let gender = document.querySelector('input[name="gender"]:checked').value;
    let comment = document.getElementById("comment").value;

    let cat = new Cat(catsname, ownername, phone, email, breed, food, gender, comment);
    console.log(cat);
}

function getCheckedCheckBoxes() {
    var checkboxes = document.getElementsByClassName('checkbox');
    var checkboxesChecked = [];
    for (var index = 0; index < checkboxes.length; index++) {
        if (checkboxes[index].checked) {
            checkboxesChecked.push(checkboxes[index].value);
        }
    }
    return checkboxesChecked;
}