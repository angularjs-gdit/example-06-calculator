
app.service('MathService', function(){
	//Service:: null -> null
	/*
		Mathematical operations 
	*/
	this.addition = function(x, y){
		return x + y;
	};

	this.subtraction = function(x, y){
		return x - y;
	};

	this.division = function(x, y){
		return x / y;
	};

	this.multiplication = function(x, y){
		return x * y;
	};

	this.execute = function(config){
		if(config){				
			switch(config.operand){
				case '*' : return this.multiplication(config.x, config.y);
				case '+' : return this.addition(config.x, config.y); 
				case '-' : return this.subtraction(config.x, config.y);
				case '/' : return this.division(config.x, config.y); 
				default	 : return new Error('operand not defined');
			}
		}
		else{
			throw new Error('no config found for calculator service');
		}
	}
});