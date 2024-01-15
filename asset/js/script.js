"use script";

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBtn");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}
/**/

//variables utilisés pour chasseur
var wood = 0;
var food = 0;
var skin = 0;
var ammo_chasseur = 0;
var weapon = 0;

//variables utilisés pour medecin
var gauze = 0;
var needle = 0;
var sanitizer = 0;
var bandage = 0;

//variables utilisés pour soldat
var ammo_soldat = 0;
var infected = 0;
var captured = 0;
var killed = 0;

//variables utilisées pour rebelle
var badge = 0;
var confidential = 0;


// Gestion du clic sur le bouton
function toggleImage() {
  // Récupère l'élément "displayedImage"
  var imageElement = document.querySelector(".displayedImage");

  // Vérifie l'état actuel de l'image
  if (imageElement.style.display === "none" || !imageElement.style.display) {
      // Si l'image est cachée, l'affiche
      imageElement.style.display = "block";
  } else {
      // Si l'image est affichée, la cache
      imageElement.style.display = "none";
  }
}

// Gestion du clic sur l'image chasseur
function imageClickHandler_chasseur() {
    // Génère un nombre au hasard entre 1 et 5
    var randomnumber = Math.floor(Math.random() * 5) + 1;
    //Ajout de ressource
        if (randomnumber === 1) {
            wood += 10;
            alert("vous avez récolté : bois");
        }
        else if (randomnumber === 2) {
            food += 10;
            alert("vous avez récolté : nourriture");
        }
        else if (randomnumber === 3) {
            skin += 10;
            alert("vous avez récolté : peau");
        }
        else if (randomnumber === 4) {
            ammo_chasseur += 10;
            alert("vous avez récolté : munition");
        }
        else if (randomnumber === 5) {
            weapon += 10;
            alert("vous avez récolté : arme");
        }
}

// Afficher la fenêtre ressource medecin
function showPopup_chasseur() {
    // affiche la quantité de ressource
    alert("vous avez " + wood + " bois" + "\n" + "vous avez " + food + " nourriture(s)" + "\n" + "vous avez " + skin + " peau(x)" + "\n" + "vous avez " + ammo_chasseur + " munition(s)" + "\n" + "vous avez " + weapon + " arme(s)");
}

// Gestion du clic sur l'image medecin
function imageClickHandler_medecin() {
  // Génère un nombre au hasard entre 1 et 4
  var randomnumber = Math.floor(Math.random() * 4) + 1;
  //Ajout de ressource
      if (randomnumber === 1) {
          gauze += 10;
          alert("vous avez récolté : gaze");
      }
      else if (randomnumber === 2) {
          needle += 10;
          alert("vous avez récolté : seringue");
      }
      else if (randomnumber === 3) {
          sanitizer += 10;
          alert("vous avez récolté : désinfectant");
      }
      else if (randomnumber === 4) {
          bandage += 10;
          alert("vous avez récolté : pansement");
      }
}

// Afficher la fenêtre ressource medecin
function showPopup_medecin() {
  // affiche la quantité de ressource
  alert("vous avez " + gauze + " gaze(s)" + "\n" + "vous avez " + needle + " seringue(s)" + "\n" + "vous avez " + sanitizer + " désinfectant(s)" + "\n" + "vous avez " + bandage + " pansement(s)");
}

// Gestion du clic sur l'image soldat
function imageClickHandler_soldat() {
  // Génère un nombre au hasard entre 1 et 4
  var randomnumber = Math.floor(Math.random() * 4) + 1;
  //Ajout de ressource
      if (randomnumber === 1) {
          ammo_soldat += 10;
          alert("vous avez récolté : munitions");
      }
      else if (randomnumber === 2) {
          infected += 1;
          alert("vous avez tué : infecté");
      }
      else if (randomnumber === 3) {
          captured += 1;
          alert("vous avez capturé : insurgé");
      }
      else if (randomnumber === 4) {
          killed += 1;
          alert("vous avez tué : insurgé");
      }
}

// Afficher la fenêtre ressource soldat
function showPopup_soldat() {
  // affiche la quantité de ressource
  alert("vous avez " + ammo_soldat + " munition(s)" + "\n" + "vous avez tué " + infected + " infecté(s)" + "\n" + "vous avez capturé " + captured + " insurgé(s)" + "\n" + "vous avez tué " + killed + " insurgé(s)");
}

// Gestion du clic sur l'image rebelle
function imageClickHandler_rebelle() {
  // Génère un nombre au hasard entre 1 et 4
  var randomnumber = Math.floor(Math.random() * 4) + 1;
  //Ajout de ressource
      if (randomnumber === 1) {
          badge += 1;
          alert("vous avez récolté : badge");
      }
      else if (randomnumber === 2) {
          alert("vous n'avez rien trouvé");
      }
      else if (randomnumber === 3) {
          alert("vous n'avez rien trouvé");
      }
      else if (randomnumber === 4) {
          confidential += 1;
          alert("vous avez trouvé : information");
      }
}

// Afficher la fenêtre ressource rebelle
function showPopup_rebelle() {
  // affiche la quantité de ressource
  alert("vous avez " + badge + " badge(s)" + "\n" + "vous avez " + confidential + " informations(s)");
}

/**/

/**/

function checkPassword6(){
  if(document.getElementById('password6').value === "Cordier Oswald / Vieslet Théo" )
  {
   alert('Merci du tuyau !'); 
     window.location.href ="./thankyoupage.html";
    }
   else if(document.getElementById('password6').value === "Vieslet Théo / Cordier Oswald" )
   {
    alert('Merci du tuyau !'); 
      window.location.href ="./thankyoupage.html";
    } 
    else {
     alert('Mauvais mots de passe !');
     window.location.href ="./lucioles.html"; /*remplacer par la page accueil lucioles*/
    }
  }

function checkPassword5(){
  if(document.getElementById('password5').value === "Cornet Alessia / Constant Nicolas" )
  {
   alert('Merci du tuyau !'); 
     window.location.href ="./thankyoupage.html";
    }
   else if(document.getElementById('password5').value === "Constant Nicolas / Cornet Alessia" )
   {
    alert('Merci du tuyau !'); 
      window.location.href ="./thankyoupage.html";
    } 
   else {
     alert('Mauvais mots de passe !');
     window.location.href ="./fedra.html"; /*remplacer par la page accueil fedra*/
    }
  }

function checkPassword4(){
  if(document.getElementById('password4').value == '00020'){
    alert('Bienvenu !'); 
      window.location.href ="./fedraespion.html";
    } 
    else {
    alert('Mauvais mots de passe !');
    window.location.href ="./luciolesmedecin.html";
    }
}
  
function checkPassword3(){
  if(document.getElementById('password3').value == '00007'){
    alert('Bienvenu !'); 
      window.location.href ="./fedraespion.html";
    } 
    else {
      alert('Mauvais mots de passe !');
      window.location.href ="./lucioleschasseur.html";
         
    }
}
  
function checkPassword2(){
  if(document.getElementById('password2').value == '372'){
    alert('Bienvenu !'); 
      window.location.href ="./luciolesespion.html";
    } 
    else {
      alert('Mauvais mots de passe !');
      window.location.href ="./fedrarebelle.html";
    }
}
  
function checkPassword1(){
  if(document.getElementById('password1').value == '145'){
    alert('Bienvenu !'); 
      window.location.href ="./luciolesespion.html";
    } 
    else {
      alert('Mauvais mots de passe !');
      window.location.href ="./fedrasoldat.html";
    }
}

/**/

/**/

function dochange(){
  alert('Bien vu ! Le mots de pass est 372');
}

function dochange2(){
  alert('Bien vu ! Le mots de pass est 145');
}

function dochange3(){
  alert('Bien vu ! Le mots de pass est 00007');
}

function dochange4(){
  alert('Bien vu ! Le mots de pass est 00020');
}
/**/

