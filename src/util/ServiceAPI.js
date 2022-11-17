

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

                    console.log(data);

                    alert(`User login \n` 
                    )
                }
                else {
                    alert("not login" + data.message)
                }

            } )
            .catch( error => { 
                console.log(error);
            } )

    }

}

export default ServiceAPI;