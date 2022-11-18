

const { default: axios } = require("axios");

const BASE = "http://localhost:8080"  // use this if running locally
// const BASE = "http://0.0.0.0:8080" // edit this with your AWS endpoint
const URI = BASE + "/api"

const ServiceAPI = {
    login: (user) => {
        // axios.post(BASE + "/authenticate",user)
        // .then(result => {
        //     console.log(result)

        // } )
        // .catch (e => console.log(e.message))
        fetch(BASE + "/authenticate", {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json" }
        })
            .then( result => result.json() )
            .then( data => {

                if(typeof data.jwt !== 'undefined') {

                  
                    sessionStorage.setItem("jwt", data.jwt);
                    
                    localStorage.setItem("isAuth", "true");
                    alert(`User login \n` 
                    )
                }
                else {
                    localStorage.setItem("isAuth", "false");
                }

            } )
            .catch( error => { 
                console.log(error);
            } )

    },


    register: (user) => {
        alert (JSON.stringify(user))
        fetch(BASE + "/api/user", {
            method: "POST",
            body: JSON.stringify(user),
            headers: { "Content-Type": "application/json" }
        })
            .then( result => result.json() )
            .then( data => {

                if(typeof data.id !== 'undefined') {

                    console.log("CREATED USER:");
                    console.log(data);

                    alert(`USER CREATED \n` +
                        `------------------------\n` + 
                        `ID: ${data.id}\n` +
                        `First Name: ${data.firstName}\n` +
                        `Last Name: ${data.lastName}\n` +
                        `Email: ${data.email}\n` 
                       
                    )
                }
                else {
                    alert("User can't be created, check that you are not using an email already in use by another user.")
                }

            } )
            .catch( error => { 
                console.log(error);
            } )

    },
    getAll: (setUserList) => {

        fetch(BASE + "/api/services")
            .then( result => result.json() )
            .then( data => {
                setUserList(data)
                console.log(data)
            } )
            .catch( error => { console.log(error) } )
    },

    addService: (serviceid) => {
       
        fetch(BASE + "/api/orders/checkout2", {
            method: "POST",
            body: JSON.stringify(serviceid),
            headers: { "Content-Type": "application/json" }
        })
            .then( result => result.json() )
            .then( data => {

                if(typeof data.id !== 'undefined') {

                    console.log("CREATED USER:");
                    console.log(data);

                    alert(`USER CREATED \n` +
                        `------------------------\n` + 
                        `ID: ${data.id}\n` +
                        `First Name: ${data.firstName}\n` +
                        `Last Name: ${data.lastName}\n` +
                        `Email: ${data.email}\n` 
                       
                    )
                }
                else {
                    alert("User can't be created, check that you are not using an email already in use by another user.")
                }

            } )
            .catch( error => { 
                console.log(error);
            } )

    },

}

export default ServiceAPI;