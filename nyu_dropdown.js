<h4>My Favorite Cars</h4>     
<form name=chooseCar>

    <select name="make" id="make" size=1 onchange="ChangeModel();">
        <Option selected  >Select A Make
        <Option Value="Lamborghini">Lamborghini
        <Option Value="Ferrari">Ferrari
        <Option Value="GMC">GMC
        <Option Value="Mercedes">Mercedes 
        <Option Value="JEEP">Jeep
    </select>
<br>
<br>
    <select name="model" id="model" size=1>
         <option selected>---Model---</option>
    </select>
  <br>
      <button type="search" class="btn">SEARCH</button>
    
</form>

</div>



<script>

var Models   = new Object();                    //an object that contains many arrays

Models.Lamborghini = ['Gallardo','Aventador','Hurcan','Diablo','Murcielago']; 
Models.Ferrari = ['F12berlinetta','458 Italia','California','Modena','Enzo']; 
Models.GMC  = ['Corvette'];
Models.Mercedes = ['SL63','SL500','SL430'];
Models.JEEP = ['Wrangler'];
function ChangeModel() {        
    
        var value = document.getElementById('make').value;              //obtain which make was chosen

        var modelArray = Models[value];                                 //get all the models for that make

        document.getElementById('model').length = 0;                    //erase entire option list

        var dummyOption = new Option('Select A Model','none',true,true);

        document.getElementById('model').options[0] = dummyOption;      //place the first option

        for (var i = 0; i < modelArray.length; i++) 
        {
            var opt = new Option(modelArray[i], modelArray[i], false, false); 
            document.getElementById('model').options[i+1] = opt; 
        }
}
</script>