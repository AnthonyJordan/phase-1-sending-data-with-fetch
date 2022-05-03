// Add your code here

function submitData(userName, userEmail) {

    const formData = {
        name: userName,
        email: userEmail,
    };

    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(formData),
    };

    return fetch('http://localhost:3000/users', configurationObject).then(respone => respone.json()).then(json => document.querySelector('body').append(json.id)).catch(error => document.querySelector('body').append(error.message))

}