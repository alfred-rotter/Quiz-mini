var frågor = [
    {
        fråga: "Antons förnamn",
        svar: "Anton"
    },
    {
        fråga: "Antons mellannamn",
        svar: "Björn"
    },
    {
        fråga: "Antons efternamn",
        svar: "Sassing"
    },
    {
        fråga: "Antons ålder(mentalt)",
        svar: "2"
    },
    {
        fråga: "Vilken kroppsdel skadade Anton förra året",
        svar: "foten"
    },
    {
        fråga: "Antons favoritspel",
        svar: "rocket league"
    },
    {
        fråga: "Emils förnamn",
        svar: "Emil"
    },
    {
        fråga: "Emils mellannamn",
        svar: "Holmfrid"
    },
    {
        fråga: "Emils efternamn",
        svar: "Hansson"
    },
    {
        fråga: "Emils ålder (mentalt)",
        svar: "30"
    },
    {
        fråga: "Har Emil en hund",
        svar: "ja"
    },
    {
        fråga: "Vad heter Emils hund",
        svar: "Herkules"
    },
]
var input=document.querySelectorAll('#fraga');
var h1=document.querySelectorAll('.fraga h1');
var svar=document.querySelector('.svar h1')
for (var i=0; i < h1.length; i++){
    h1[i].innerHTML=frågor[i].fråga;
}
function check(){
    var rätt=0;
    for (var i = 0; i < frågor.length; i++) {
        if (input[i].value==frågor[i].svar){
            rätt++;

        }
      }
      console.log(rätt)
      svar.innerHTML="Du fick " + rätt + " utav 12 poäng!";
}


