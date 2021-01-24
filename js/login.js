function check() {
    if(uname.value == "admin" && pwd.value == "admin") {
        $('#exampleModal').modal('show');
        
    }

    else if(uname.value == "diego" && pwd.value == "diego") {
        $('#example2Modal').modal('show');
        var x = document.getElementById("uname").value;
        var y = x.charAt(0).toUpperCase() + x.slice(1)
        document.getElementById("user").innerHTML = y;
    }

    else {
        $('#example3Modal').modal('show');
    }
}
        
        

  