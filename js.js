const acc = document.querySelectorAll('.item');

for (x of acc){
    x.addEventListener('click', function () {
       
        if (this.classList.contains('dropdown')) 
        {
            this.classList.remove('dropdown');
        }

         else 
         {
            for (item of acc) 
            {
                item.classList.remove('dropdown');
            }
            this.classList.add('dropdown');
        }
    })
}
// for all items class add event as follows