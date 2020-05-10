function message(anketa)
{
	var letters = /[A-Za-z]/;
	var nums = /[0-9]/;
	var mail = /[0-9a-z_-]+@[a-z]+\.[a-z]/;
	var m = false;
	var name = form.name.value;
	var surname = form.surname.value;
	var email = form.email.value;
	var phone = form.phone.value;
	if(letters.test(surname) == false)
	{
		m = "Неправильно введено прізвище";
	}
	else if(letters.test(name) == false)
	{
		m = "Неправильно введено ім'я";
	}
	else if(mail.test(email) == false)
	{
		m = "Неправильно введено email";
	}
	else if(nums.test(phone) == false)
	{
		m = "Неправильно введено номер";
	}

	if(m)
	{
		alert(m);
	}
	else 
	{
		return alert("Заяву надіслано");
	}
}

function setColor(e){
     
    if(e.type==="mouseover")
        e.target.style.color = "#ADD8E6";
    else if(e.type==="mouseout")
        e.target.style.color = "#333300";
    if(e.type==="mousedown")
        e.target.style.backgroundColor = "#ADD8E6";
    else if(e.type==="mouseup")
        e.target.style.backgroundColor = "white";
    if(e.type === "click")
    	e.target.style.backgroundColor = "#ADD8E6";
}
var changeColor = document.getElementById("changeColor");
changeColor.addEventListener("mouseover", setColor);
changeColor.addEventListener("mouseout", setColor);
changeColor = document.getElementById("surname");
changeColor.addEventListener("mousedown", setColor);
changeColor.addEventListener("mouseup", setColor);
changeColor = document.getElementById("name");
changeColor.addEventListener("click", setColor);








function switchBtnTheme() {
  let switchBtn = document.querySelector('.dark_theme');
  let switchBtn_ = document.querySelector('.light_theme');
  let light = true;


  const lightPalette = {
    nav: '#00cc00',
    body: '#b3ffb3',
    article: '#80ff80',
    article_color:'#333300'
}

  const darkPalette = {
    nav:  '#006400',
    body: '#556B2F',
    article: '#228B22',
    article_color:'#FAF0E6'
}

  switchBtn.onclick = function (e) {
    if(light)getElements(darkPalette);
    light = !light;
    document.querySelector('.dark_theme').style.visibility = "hidden";
    document.querySelector('.light_theme').style.visibility = "visible";
  }
  switchBtn_.onclick = function (e) {
    if(!light)getElements(lightPalette);
    light = !light;
    document.querySelector('.dark_theme').style.visibility = "visible";
    document.querySelector('.light_theme').style.visibility = "hidden";
  }


  function getElements(pallet) {
    document.querySelector('#nav').style.backgroundColor = pallet.nav;
    document.querySelector('.body').style.backgroundColor = pallet.body;
    document.querySelector('#footer').style.backgroundColor= pallet.nav;
    document.querySelector('#article').style.backgroundColor= pallet.article;
    document.querySelector('.body').style.color = pallet.article_color;
  }

}
switchBtnTheme();

