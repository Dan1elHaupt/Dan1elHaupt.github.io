function githubLogin(){
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://github.com/login/oauth/authorize?scope=user:email&client_id=Iv1.622a1872fb940cbf%");
    
    // xhr.setRequestHeader("Access-Control-Allow-Origin", "*");
    // xhr.setRequestHeader("Access-Control-Allow-Headers", "X-Requested-With");

    xhr.send();
    xhr.responseType = "json";
    xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
        const data = xhr.response;
        console.log(data);
    } else {
        console.log(`Error: ${xhr.status}`);
    }
};
}