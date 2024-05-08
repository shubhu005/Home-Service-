const firebaseConfig = {
    apiKey: "AIzaSyAX97OXWvYR5Df3xFRPMUos_hBCBe5NUpE",
    authDomain: "sujal-95f90.firebaseapp.com",
    databaseURL: "https://sujal-95f90-default-rtdb.firebaseio.com",
    projectId: "sujal-95f90",
    storageBucket: "sujal-95f90.appspot.com",
    messagingSenderId: "1009961067699",
    appId: "1:1009961067699:web:f0348219261cb9022a3cc6",
    measurementId: "G-3SERGEMPMS"
};

firebase.initializeApp(firebaseConfig);

var contactFormSP = firebase.database().ref('contactFormSP');

document.getElementById("index").addEventListener("submit", submitForm);

function submitForm(e) {
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var password = getElementVal('password');
    var confirm_password = getElementVal('confirm_password');
    var phoneNumber = getElementVal('phoneNumber');
    var service_type = getElementVal('service_type');
    var service_description = getElementVal('service_description');
    var service_area = getElementVal('service_area');
    var hourly_rate = getElementVal('hourly_rate');
    var fixed_rate = getElementVal('fixed_rate');

    // Create an object to store the form data
    var formData = {
        name: name,
        email: email,
        password: password,
        confirm_password: confirm_password,
        phoneNumber: phoneNumber,
        service_type: service_type,
        service_description: service_description,
        service_area: service_area,
        hourly_rate: hourly_rate,
        fixed_rate: fixed_rate,
    };

    // Push the form data to the database
    contactFormSP.push(formData);

    // Clear the form after submission
    clearForm();

    console.log(formData);
}

const getElementVal = (id) => {
    const element = document.getElementById(id);
    return element ? element.value : null;
}


function clearForm() {
    const clearElementById = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.value = '';
        }
    };

    clearElementById('name');
    clearElementById('email');
    clearElementById('password');
    clearElementById('confirm_password');
    clearElementById('service_type');
    clearElementById('phoneNumber');
    clearElementById('service_area');
    clearElementById('otpInput');
    clearElementById('service_description');
    clearElementById('hourly_rate');
    clearElementById('fixed_rate');
    
}