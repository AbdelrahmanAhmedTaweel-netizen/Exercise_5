let registerForm = document.querySelector("#Register form"),
    registerInputs = document.querySelectorAll("#Register input"),
    students = [];
    id=0,
    tableBody = document.querySelector("#Data tbody"),
     regexInputs = {
        firstName: /^[A-Za-z]+$/,
        lastName: /^[A-Za-z]+$/,
        email: /^[A-Za-z0-9._-]+@(gmail|yahoo)\.(com|org)$/,
        age: /^[0-9]{2}$/,
        phone: /^(02)?01(0|1|2|5)[0-9]{8}$/
    },
    searchInput = document.querySelector("#searchInput");
    

if(localStorage.getItem("students")=== null){
  updateLocalStorage()
} else{
  students = JSON.parse(localStorage.getItem("students"));
  id = students[students.length -1]?.id ?? 0 ; 
  showStudents(students);
}


registerForm.addEventListener("submit" , function(e){
  e.preventDefault();

  let formType = registerForm.getAttribute('data-type');

  if(formType=="add"){
    addStudent();
  } else if(formType=="edit"){
    editStudent();
  }

 
})   

searchInput.addEventListener("keyup" , function(){
  search(this.value)
})

