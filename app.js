const btn = document.getElementById("btn-signup")
btn.addEventListener('click', function(){
    const email = document.getElementById("email").value
    const sdt = document.getElementById("phone").value
    const pass = document.getElementById("pass").value
    if(email == ""){
        alert("Chưa nhập email!!")
    } else if(sdt == ""){
        alert("Chưa nhập số điện thoại!!")
    } else if(pass == ""){
        alert("Chưa nhập mật khẩu!!")
    }
})