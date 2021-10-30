//make the new div
var contentdiv = document.createElement('div');

//add classes to the new div
//contentdiv.classList.add('');


//find main panel
var mainpanel = document.querySelectorAll('.main-panel')[0]
//create variable with content

var content = `
<div class="item">
           <div class="upper-acc">
            <p class="question" >How many team members can I invite?</p> 
            <img src="images/icon-arrow-down.svg" class ="arrow-down" alt="">
        </div>
            <div class="popup">
            <p> nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
            <hr>
            
            <div class="item">
            <div class="upper-acc"> 
            <p class="question" >What is the maximum file upload size?</p>
            <img src="images/icon-arrow-down.svg" class ="arrow-down" alt="">
            </div>

            <div class="popup">
            <p> nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
            <hr>

            <div class="item">
            <div class="upper-acc">
            <p href ="" class="question" >How do I reset my password?</p>
            <img src="images/icon-arrow-down.svg" class ="arrow-down" alt="">
            </div>

            <div class="popup">
            <p> nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
            <hr>

            <div class="item">
            <div class="upper-acc">
            <p href ="" class="question" >Can I cancel my subscription?</p>
            <img src="images/icon-arrow-down.svg" class ="arrow-down" alt="">
           </div>

            <div class="popup">
            <p> nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
            <hr>

            <div class="item">
            <div class="upper-acc">
            <p href ="" class="question" >Do you provide additional support?</p>
            <img src="images/icon-arrow-down.svg" class ="arrow-down" alt="">
            </div>

            <div class="popup">
            <p> nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
            <hr>
`
//add content into contentdiv
contentdiv.innerHTML = content
//append the content div to main panel
 mainpanel.append(contentdiv)


 
// do the accordion happen
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


 