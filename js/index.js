var mob_cname = document.getElementsByTagName("input")[0];
var Mcard_cname = document.querySelectorAll(".info p")[0];
mob_cname.oninput = () => {
    if (mob_cname.value == '')
    {
        Mcard_cname.innerHTML = 'JANE APPLESEED';
    }
    else 
    {
        Mcard_cname.innerHTML = mob_cname.value;
    }
}

var mob_Cnum = document.getElementsByTagName("input")[1];
var Mcard_cnum = document.getElementsByClassName("cardNumber")[0];
mob_Cnum.oninput = () => {

    if(mob_Cnum.value.length == 4 || mob_Cnum.value.length == 9 || mob_Cnum.value.length == 14)
    {
        mob_Cnum.value += " ";
    }

    if (mob_Cnum.value == '')
    {
        Mcard_cnum.innerHTML = '0000 0000 0000 0000';
    }
    else 
    {
        Mcard_cnum.innerHTML = mob_Cnum.value;
    }
}

var mob_mm = document.getElementsByTagName("input")[2];
var Mcard_mm = document.querySelectorAll(".info p")[1];
mob_mm.oninput = () => {
    if (mob_mm.value.length>2)
    {
        newval = mob_mm.value.slice(0,2);
        mob_mm.value = newval;
    }
    else if (mob_mm.value == '')
    {
        Mcard_mm.innerHTML = '00';
    }
    else 
    {
        Mcard_mm.innerHTML = mob_mm.value;
    }
}

var mob_yy = document.getElementsByTagName("input")[3];
var Mcard_yy = document.querySelectorAll(".info p")[3];
mob_yy.oninput = () => {
    if (mob_yy.value.length>2)
    {
        newval = mob_yy.value.slice(0,2);
        mob_yy.value = newval;
    }
    else if (mob_yy.value == '')
    {
        Mcard_yy.innerHTML = '00';
    }
    else 
    {
        Mcard_yy.innerHTML = mob_yy.value;
    }
}

var mob_cvv = document.getElementsByTagName("input")[4];
var Mcard_cvv = document.querySelectorAll(".cardBack p")[0];
mob_cvv.oninput = () => {
    if (mob_cvv.value.length>3)
    {
        newval = mob_cvv.value.slice(0,3);
        mob_cvv.value = newval;
    }
    else if (mob_cvv.value == '')
    {
        Mcard_cvv.innerHTML = '000';
    }
    else 
    {
        Mcard_cvv.innerHTML = mob_cvv.value;
    }
}

var pc_cname = document.getElementsByTagName("input")[5];
var Pcard_cname = document.querySelectorAll(".info p")[4];
pc_cname.oninput = () => {
    if (pc_cname.value == '')
    {
        Pcard_cname.innerHTML = 'JANE APPLESEED';
    }
    else 
    {
        Pcard_cname.innerHTML = pc_cname.value;
    }
}

var pc_Cnum = document.getElementsByTagName("input")[6];
var Pcard_cnum = document.getElementsByClassName("cardNumber")[1];
pc_Cnum.oninput = () => {

    if(pc_Cnum.value.length == 4 || pc_Cnum.value.length == 9 || pc_Cnum.value.length == 14)
    {
        pc_Cnum.value += " ";
    }

    if (pc_Cnum.value == '')
    {
        Pcard_cnum.innerHTML = '0000 0000 0000 0000';
    }
    else 
    {
        Pcard_cnum.innerHTML = pc_Cnum.value;
    }
}

var pc_mm = document.getElementsByTagName("input")[7];
var Pcard_mm = document.querySelectorAll(".info p")[5];
pc_mm.oninput = () => {
    if (pc_mm.value.length>2)
    {
        newval = pc_mm.value.slice(0,2);
        pc_mm.value = newval;
    }
    else if (pc_mm.value == '')
    {
        Pcard_mm.innerHTML = '00';
    }
    else 
    {
        Pcard_mm.innerHTML = pc_mm.value;
    }
}

var pc_yy = document.getElementsByTagName("input")[8];
var Pcard_yy = document.querySelectorAll(".info p")[7];
pc_yy.oninput = () => {
    if (pc_yy.value.length>2)
    {
        newval = pc_yy.value.slice(0,2);
        pc_yy.value = newval;
    }
    else if (pc_yy.value == '')
    {
        Pcard_yy.innerHTML = '00';
    }
    else 
    {
        Pcard_yy.innerHTML = pc_yy.value;
    }
}

var pc_cvv = document.getElementsByTagName("input")[9];
var Pcard_cvv = document.querySelectorAll(".cardBack p")[1];
pc_cvv.oninput = () => {
    if (pc_cvv.value.length>3)
    {
        newval = pc_cvv.value.slice(0,3);
        pc_cvv.value = newval;
    }
    else if (pc_cvv.value == '')
    {
        Pcard_cvv.innerHTML = '000';
    }
    else 
    {
        Pcard_cvv.innerHTML = pc_cvv.value;
    }
}

var errors = document.getElementsByClassName("error");

arr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];

function check(x)
{
    for (let i=0; i<arr.length; i++)
    {
        if (x == arr[i])
        {
            return true;
            break;
        }
    }
}

function mob_sub()
{
    if (mob_cname.value == "")
    {
        mob_cname.style.borderColor = "red"; 
        errors[0].style.display = "flex";
    }
    else
    {
        mob_cname.style.borderColor = "rgba(0, 0, 0, 0.3)"; 
        errors[0].style.display = "none";
    }

    if (mob_Cnum.value == "")
    {
        mob_Cnum.style.borderColor = "red"; 
        errors[1].innerHTML = "Can't be blank";
        errors[1].style.display = "flex";
    }
    else if (mob_Cnum.value.length < 19)
    {
        mob_Cnum.style.borderColor = "red"; 
        errors[1].innerHTML = "Should be a 16 digit number";
        errors[1].style.display = "flex";
    }
    else
    {
        mob_Cnum.style.borderColor = "rgba(0, 0, 0, 0.3)"; 
        errors[1].style.display = "none";
    }

    errors[2].style.display = "none";

    if(mob_mm.value == "")
    {
        mob_mm.style.borderColor = "red";
        errors[2].innerHTML = "Can't be blank";
        errors[2].style.display = "flex";
    }
    else 
    {
        mob_mm.style.borderColor = "rgba(0, 0, 0, 0.3)";
    }

    if(mob_yy.value == "")
    {
        mob_yy.style.borderColor = "red";
        errors[2].innerHTML = "Can't be blank";
        errors[2].style.display = "flex";
    }
    else if(mob_yy.value.length<2)
    {
        mob_yy.style.borderColor = "red";
        errors[2].innerHTML = "Should be a 2 digit number";
        errors[2].style.display = "flex";
    }
    else 
    {
        mob_yy.style.borderColor = "rgba(0, 0, 0, 0.3)";
    }

    if(mob_cvv.value == "")
    {
        mob_cvv.style.borderColor = "red";
        errors[2].innerHTML = "Can't be blank";
        errors[2].style.display = "flex";
    }
    else if(mob_cvv.value.length<3)
    {
        mob_cvv.style.borderColor = "red";
        errors[2].innerHTML = "Should be a 3 digit number";
        errors[2].style.display = "flex";
    }
    else 
    {
        mob_cvv.style.borderColor = "rgba(0, 0, 0, 0.3)";
    }
    
    for (let j=0; j<19; j++)
    {
        let res = check((mob_Cnum.value)[j].toUpperCase());
        if (res == true)
        {
            mob_Cnum.style.borderColor = "red"; 
            errors[1].innerHTML = "Wrong format, numbers only";
            errors[1].style.display = "flex";
            break;
        }
    }
}


function pc_sub()
{
    if (pc_cname.value == "")
    {
        pc_cname.style.borderColor = "red"; 
        errors[3].style.display = "flex";
    }
    else
    {
        pc_cname.style.borderColor = "rgba(0, 0, 0, 0.3)"; 
        errors[3].style.display = "none";
    }

    if (pc_Cnum.value == "")
    {
        pc_Cnum.style.borderColor = "red"; 
        errors[4].innerHTML = "Can't be blank";
        errors[4].style.display = "flex";
    }
    else if (pc_Cnum.value.length < 19)
    {
        pc_Cnum.style.borderColor = "red"; 
        errors[4].innerHTML = "Should be a 16 digit number";
        errors[4].style.display = "flex";
    }
    else
    {
        pc_Cnum.style.borderColor = "rgba(0, 0, 0, 0.3)"; 
        errors[4].style.display = "none";
    }

    errors[5].style.display = "none";

    if(pc_mm.value == "")
    {
        pc_mm.style.borderColor = "red";
        errors[5].innerHTML = "Can't be blank";
        errors[5].style.display = "flex";
    }
    else 
    {
        pc_mm.style.borderColor = "rgba(0, 0, 0, 0.3)";
    }

    if(pc_yy.value == "")
    {
        pc_yy.style.borderColor = "red";
        errors[5].innerHTML = "Can't be blank";
        errors[5].style.display = "flex";
    }
    else if(pc_yy.value.length<2)
    {
        pc_yy.style.borderColor = "red";
        errors[5].innerHTML = "Should be a 2 digit number";
        errors[5].style.display = "flex";
    }
    else 
    {
        pc_yy.style.borderColor = "rgba(0, 0, 0, 0.3)";
    }

    if(pc_cvv.value == "")
    {
        pc_cvv.style.borderColor = "red";
        errors[5].innerHTML = "Can't be blank";
        errors[5].style.display = "flex";
    }
    else if(pc_cvv.value.length<3)
    {
        pc_cvv.style.borderColor = "red";
        errors[5].innerHTML = "Should be a 3 digit number";
        errors[5].style.display = "flex";
    }
    else 
    {
        pc_cvv.style.borderColor = "rgba(0, 0, 0, 0.3)";
    }
    
    for (let j=0; j<19; j++)
    {
        let res = check((pc_Cnum.value)[j].toUpperCase());
        if (res == true)
        {
            pc_Cnum.style.borderColor = "red"; 
            errors[4].innerHTML = "Wrong format, numbers only";
            errors[4].style.display = "flex";
            break;
        }
    }
}