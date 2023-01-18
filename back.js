function Login(){
    const xhr = new XMLHttpRequest();
    const url = "https://github.com/login/oauth/authorize?scope=user:email&client_id=Iv1.622a1872fb940cbf"
//     xhr.open("GET", );
    
    // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    // xhr.setRequestHeader("Access-Control-Allow-Headers", "X-Requested-With");
    fetch(url, { method: 'GET', headers: { 'Accept': 'application/json', }, }) 
        .then(response => response.text()) .then(text => console.log(text))

//     xhr.send();
//     xhr.responseType = "json";
//     xhr.onload = () => {
//     if (xhr.readyState == 4 && xhr.status == 200) {
//         const data = xhr.response;
//         console.log(data);
//     } else {
//         console.log(`Error: ${xhr.status}`);
//     }
// };
}
