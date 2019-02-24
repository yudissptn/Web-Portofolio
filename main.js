
const nama = document.getElementsByTagName('h1')[0];
const motto = document.getElementsByTagName('p')[0];
const navb = document.getElementsByTagName('nav')[0];
const project1 = document.getElementById('pro1');
const project2 = document.getElementById('pro2');
const project3 = document.getElementById('pro3');
const project4 = document.getElementById('pro4');
const project5 = document.getElementById('pro5');
const project6 = document.getElementById('pro6');
const project7 = document.getElementById('pro7');
const caption1 = document.getElementById('cap1');
const caption2 = document.getElementById('cap2');
const caption3 = document.getElementById('cap3');
const caption4 = document.getElementById('cap4');
const caption5 = document.getElementById('cap5');
const caption6 = document.getElementById('cap6');
const caption7 = document.getElementById('cap7');


window.onscroll = function(){myFunction()};

function myFunction(){
  if (document.documentElement.scrollTop > 100){
    nama.setAttribute('class', 'remove');
     if (document.documentElement.scrollTop > 250){
    motto.setAttribute('class', 'remove');
       if (document.documentElement.scrollTop > 520){
    navb.setAttribute('class', 'backgroundsolid');
    if(window.innerWidth > 500){
        if (document.documentElement.scrollTop > 550){
    project1.classList.add('geserkanan');
    caption1.classList.add('turun');
          if (document.documentElement.scrollTop > 850){
    project2.classList.add('geserkiri');
    caption2.classList.add('naik');
          if (document.documentElement.scrollTop > 1150){
    project3.classList.add('geserkanan');
    caption3.classList.add('turun');
    if (document.documentElement.scrollTop > 1550){
      project4.classList.add('geserkiri');
      caption4.classList.add('naik');
            if (document.documentElement.scrollTop > 1850){
      project5.classList.add('geserkanan');
      caption5.classList.add('turun');
      if (document.documentElement.scrollTop > 2150){
        project6.classList.add('geserkiri');
        caption6.classList.add('naik');
              if (document.documentElement.scrollTop > 2550){
        project7.classList.add('geserkanan');
        caption7.classList.add('turun');
    }
    }
  }
  }
  }
  }
  }  
  }
  }
  }
  }
   if (document.documentElement.scrollTop < 520){
    navb.removeAttribute('class', 'backgroundsolid');
     if (document.documentElement.scrollTop < 250){
    motto.removeAttribute('class', 'remove');
       if (document.documentElement.scrollTop < 100){
    nama.removeAttribute('class', 'remove');
  }
  }
  }
}
