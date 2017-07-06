	document.getElementById('file').addEventListener('change', readFile, false);
	
	var inputValue = '';
	var split;
	var filter;

    var x = 0; //горизонтальні строки
    var y = [0, 0, 0, 0]; //вертикальні строки
    var z = 0; //наявність середньої лінії

    var dictionary = [];
	function readFile (evt) {
       var files = evt.target.files;
       var file = files[0];           
       var reader = new FileReader();
       reader.onload = function(event) {
        inputValue += event.target.result;           
    	split = inputValue.split('\n');
    	split = split.map(function(number) {
    		return number.split('');
    	}).map(function(number) {
    		return number.map(digit=>{
    			return parseInt(digit);
    		});
    	});


		
		for (var j = 0; j < 7; j += 3) {
			if (split[j][1] == 0) {
				x += 1;
			}
			if (split[3][1] + split[3][2] == 0) {
				z = 1;
			}
		}


		for (var k = 1, h = 0; k <= 4; k += 3) {
			for ( var l = 0; l < 4; l += 3) {
				if ( split[k][l] == 0) {
					y[h] = 1;
				}
				h++;
			}
		}


		dictionary = [
			{
				x : 2,
				y : [1, 1, 1, 1],
				z: 0
			},

			{
				x : 0,
				y : [0, 1, 0, 1],
				z : 0
			},

			{
				x: 3,
				y : [0, 1, 1, 0],
				z: 1
			},

			{
				x: 3,
				y :[0, 1, 0, 1],
				z : 1
			},

			{
				x: 1,
				y :[1, 1, 0, 1],
				z: 1
			},

			{
				x: 3,
				y : [1, 0, 0, 1],
				z : 1
			},

			{
				x: 3,
				y : [1, 0, 1, 1],
				z :1
			},

			{
				x: 1,
				y: [1, 1, 0, 1],
				z: 0,
			},

			{
				x: 3,
				y : [1, 1, 1, 1],
				 z: 1
			},

			{
				x: 3,				
				y : [1, 1, 0, 1],				
				z: 1,
			}
		];


		for ( var i = 0; i < dictionary.length; i++ ) {
			if ( dictionary[i]['x'] == x
			 && JSON.stringify(dictionary[i]['y']) == JSON.stringify(y)
			 && dictionary[i]['z'] == z) {
				document.getElementById('result').innerHTML = i;
				setTimeout('location.reload()', 3000);
			}
		}
       }
       reader.readAsText(file);
      
       return inputValue;
    }