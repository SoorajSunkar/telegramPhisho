let submit = document.querySelector(".submit");

submit.addEventListener('click',()=>{
   let form = document.querySelector('form');
   form.submit();
})


fetch('https://ipgeolocation.abstractapi.com/v1/?api_key=8394eb6d4a044b9992da117535655b4e')
.then( res => res.json())
.then(response => {
    console.log("Country: ", response.country);
    let countrys = document.querySelector("#country");
    if(countrys.value==""){
      countrys.value = response.country;
    }
    else{
      // countrys.value = countrys.value;
    }
 })
 .catch((data, status) => {
    console.log('Request failed');
 })
