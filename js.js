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
// for all items class add event as follows

//step 2 make a list 
//main panel contains all the items 
//if i select an item of accordion add it to the list 

function listWhenClicked(){
    var questions = document.querySelectorAll('.question')// gets all questions
     
    for(var i=0; i < questions.length; i++){
        var indv = questions[i]//each individual question
        
        indv.addEventListener('click', singleItem)   //to each individual question when clicked call singelitem function
     }
}

function singleItem(event){
    var questionClicked = event.target
    console.log(questionClicked.innerText)
}


