document.addEventListener("DOMContentLoaded", function(){
    var a = document.getElementById("icone_a");
    var b = document.getElementById("icone_b");
    var c = document.getElementById("icone_c");
    var d = document.getElementById("icone_d");

    var elementsArray = [a, b, c, d];


    var ta = document.getElementById("texto_a");
    var tb = document.getElementById("texto_b");
    var tc = document.getElementById("texto_c");
    var td = document.getElementById("texto_d");

    var textElementsArray = [ta, tb, tc, td];

    elementsArray.forEach(function(el, index){
        el.addEventListener('click', function(event){

            var wasChecked = this.classList.contains("checked");

            elementsArray.forEach(function(innerEl, innerIndex){
                innerEl.classList.remove("checked");
                innerEl.classList.remove("circulo");
                
                textElementsArray[innerIndex].classList.remove("roxo");
            });

            if(!wasChecked){
                this.classList.add("checked");
                this.classList.add("circulo");

                textElementsArray[index].classList.add("roxo");
            }

            event.stopPropagation();
        });
    });

    ['a', 'b', 'c', 'd'].forEach(function(elementID){
        var liElement = document.getElementById(elementID);
        liElement.addEventListener('click', function(){
            document.getElementById('icone_' + elementID).click();
        });
    }); 
});
