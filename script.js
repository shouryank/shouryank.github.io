let darkMode = localStorage.getItem("darkMode");

const darkTheme = () => {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";  
    localStorage.setItem("darkMode", "enabled");  
    document.getElementById("toggle-button").className = "btn btn-dark"    
}

const lightTheme = () => {
    document.body.style.backgroundColor = "silver";
    document.body.style.color = "black";
    localStorage.setItem("darkMode", null);
    document.getElementById("toggle-button").className = "btn btn-light"
}

if(darkMode === "enabled"){
    darkTheme();
}

function toggle()
{
    darkMode = localStorage.getItem("darkMode");
    if(darkMode !== 'enabled'){
        darkTheme();
    }
    else{
        lightTheme();
    }
}