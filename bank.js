document.getElementById("login-submit").addEventListener('click', function(){ 
    const emailfield= document.getElementById("user-email");
    const useremail = emailfield.value;
   
    // get password
    const passwordfield = document.getElementById('user-password');
    const userpassword = passwordfield.value;
    //   valid email hole ai page chole jabe

    if ( useremail =='sontan@baap.com' && userpassword == 'secreat' ){
        window.location.href ='banking.html'
    }


})


