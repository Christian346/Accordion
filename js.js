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