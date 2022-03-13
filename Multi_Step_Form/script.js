const [form1, form2, form3] = document.getElementsByClassName('pages');

const hideAllForm = () => {
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";
}

const showForm = (form) => {
    hideAllForm();
    form.style.display = "block";
}

const showForm1 = () => showForm(form1);
const showForm2 = () => showForm(form2);
const showForm3 = () => showForm(form3);

const submitForm = () => {
    alert("Your form submitted successfully");
    window.location.replace('./index.html');
}