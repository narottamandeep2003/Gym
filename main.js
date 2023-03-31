
// window.addEventListener("scroll", function () {
//     var header = document.querySelector("header");
//     header.classList.toggle("sticky", window.scrollY > 0);
// })
let modal=document.querySelector('.modal1')
const submit_form=document.getElementById("submit")
let click_modal=document.getElementById("modal_click")
submit_form.addEventListener("click",function()
{
modal.classList.toggle('modal2')
})

click_modal.addEventListener("click",function()
{
    modal.classList.remove('modal2')
})
// submit_form.addEventListener("click",function()
// {
//     alert("Your feedback has been sent")
// })


// bmi
const submit_bmi=document.getElementById("get_bmi")
let bmi_heading=document.getElementById("bmi_con1_heading")
let weight_bmi
let height_bmi
let num
function show(str,color)
{
    bmi_heading.innerHTML = str
    bmi_heading.style=` color: ${color};  `

}
submit_bmi.addEventListener("click",function()
{
     weight_bmi=document.getElementById("Weight").value
     height_bmi=document.getElementById("height").value
      height_bmi=height_bmi/100
      height_bmi*=height_bmi
      num=weight_bmi/height_bmi
      if(num<18.5)
      {
          show("Under Weight","red")
      }
      else if(num>18.5 && num<24.9)
      {
          show("Normal Weight","green")
      }
      else if(num>25.0 && num<29.9)
      {
          show("Over Weight","red")
      }
      else if(num>30.0 && num<34.9)
      {
          show("Obese","red")
      }
      else
      {
        show("Extremly Obese","red")
      }

     
})


let hamburger = document.querySelector("#checkbox");
let nav1 = document.querySelector(".second_nav");
let nav2 = document.querySelector(".third_nav");
hamburger.addEventListener("click", () => {
    nav1.classList.toggle("second_nav2");
    // nav2.classList.toggle("third_nav2");
})
