
       Array.prototype.even = function(){
        var filteredeven = this.filter(x => x%2==0);
    
         return filteredeven;
     }

       Array.prototype.odd = function(){
        var filteredeven = this.filter(x => x%2==1);
    
         return filteredeven;
     }
   console.log([1,2,3,4,5,6,7,8,9].even());

console.log([1,2,3,4,5,6,7,8,9].odd());
