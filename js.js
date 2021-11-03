//make the new div
var contentdiv = document.createElement('div');

//find main panel
var mainpanel = document.querySelectorAll('.main-panel')[0]


//start a loop that repeats 5 times
for(var i=0; i < 5; i++){
    //make the new div
    var contentdiv = document.createElement('div');
   //find main panel
    var mainpanel = document.querySelectorAll('.main-panel')[0]

  //create variables for texts
  var pregunta ="How many team members can I invite? "
  var respuesta ="As many as you want "

  //create variable with content
  var content = `
  <div class="item">
           <div class="upper-acc">
            <p class="question" > ${pregunta}</p> 
            <img src="images/icon-arrow-down.svg" class ="arrow-down" alt="">
        </div>
            <div class="popup">
            <p> ${respuesta}</p>
            </div>
        </div>
            <hr>
  `
  //add content into contentdiv
  contentdiv.innerHTML = content

  //append the content div to main panel
  mainpanel.append(contentdiv)
 }




// make the accordion happen
const items = document.querySelectorAll('.item');

for (number of items){
    number.addEventListener('click', function () {
       
        if (this.classList.contains('dropdown')) 
        {
            this.classList.remove('dropdown'); 
        }
        //if it contains that class remove it by clicking

         else 
         {
            for (number of items) 
            {
                number.classList.remove('dropdown');// else remove it from everywhere
            }
            this.classList.add('dropdown'); //if clicked add it 

        }
    })
}


//list the items that are clicked

function listWhenClicked(){
    var questions = document.querySelectorAll('.item')// gets all questions
     
    for(var i=0; i < questions.length; i++){
        var indv = questions[i]//each individual question
        
        indv.addEventListener('click', singleItem)   //to each individual question when clicked call singelitem function
     }
}

function singleItem(event){
    var questionClicked = event.target
    console.log(questionClicked.innerText)
}


 