const btn = document.querySelector("button");
const para = document.querySelector("p");

let randomOTP = () =>{
    // Generating random OTP
    let otp = Math.floor(100000 + (Math.random()*899999));
    return otp;
}

btn.addEventListener("click", ()=>{
    para.classList.add("otpPara");
    para.innerHTML= randomOTP();
})