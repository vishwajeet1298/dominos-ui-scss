$(document).ready(function () {
    $(".menu-button-open").click(function () {
        showMenubar();
    })
    $(".menu-button-close").click(function () {
        hideMenubar();
    })



    $('.nav-sign-in-button').click(function(){
        $('#login_modal').show();

    })

    $('.close').click(function(){
        $('#login_modal').hide();
    
    })

    $('.order-now-btn, #fullmenu-button').click(function(){
        $('#fullmenu_modal').show();

    })

    $('.close').click(function(){
        $('#fullmenu_modal').hide();
    
    })



    
    
    
   

        $("#signupForm").validate({ 
            rules: { 
                Email: { 
                    required: true, 
                    email: true,
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                },
                Password: { 
                    required: true, 
                    minlength: 5 
                }, 
            }, 

            messages: { 
                Email: { 
                    required: " Please enter the Valid Email", 
                    pattern: "Please enter the valid email address with @ and .com"
                }, 
                Password: { 
                    required: " Please enter a password", 
                    minlength: 
                        " Your password must be consist of at least 5 characters"
                }, 
            } 
        }); 
    
    









    $('.accordion_description').hide();
    $('.accordion-title').click(function () {
        $(this).next().slideToggle();
    });


    $('.footer-ul').hide();
    $('.footer-heading').click(function () {
        $(this).next().slideToggle();

    });




});






function showMenubar() {
    const menubar = document.querySelector('.menubar')
    menubar.style.display = 'flex';
}
function hideMenubar() {
    const menubar = document.querySelector('.menubar')
    menubar.style.display = 'none';
}






