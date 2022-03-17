{
    var cats =['Milo', 'Otis','Garfield'];
    }
    function destructivelyAppendCat(Ralph) {
        cats.push(Ralph);
        return cats;
    }
    function destructivelyPrependCat(Felix) {
        cats.unshift(Felix);
        return cats;
    }
    function destructivelyRemoveLastCat(Salem){
        cats.pop(Salem);
        return cats
    }
    function destructivelyRemoveFirstCat(Sylvester){
        cats.shift(Sylvester);
        return cats;
      }
      var cats =['Milo', 'Otis','Garfield'];
      function appendCat(name) {
        var name_1= [... cats , name];
        return name_1;
      }
      function prependCat(name){
        var name_2=[name, ...cats];
        return name_2
      }
      function removeLastCat(){
        var gatos= cats.slice(0, cats.length-1);
        return gatos;
      }
     
      function removeFirstCat() {
        var kittens= cats.slice(1)
        return kittens
      }