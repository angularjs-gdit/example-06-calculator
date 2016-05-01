
app.controller('calculatorController', function($scope, MathService){
	//Controller:: $scope, service -> null
	/*
		View-Model Controller for our calculator 
	*/

	var contains = function(value, array){
		//Func:: variable, array -> boolean
		/*
			Checks if a value is contained within the array
		*/
		return array.some(function(item){
			return value === item;
		});
	};

	var reset = function(){
		//Func:: null -> null
		/*
			Resets values on the $scope
		*/
		$scope.x		= null;
		$scope.y	  	= null;
		$scope.operand 	= null;		
	};

	$scope.digit = function(n){
		//$scope method:: number -> null
		/*
			Sets the display value.  Since we want our calculator to start with zero showing, 
			dont' concatenate digits to zero, instead replace with number			
		*/
		if($scope.displayValue === 0 || contains($scope.displayValue, ['*', '-', '+', '/'])){
			$scope.displayValue = n.toString();
		}
		else{
			$scope.displayValue += n.toString()
		}
	};

	$scope.storeAndGetOperand = function(operand){
		//$scope method:: str -> null
		/*
			Stores the first number entered then stores the operand chosen
			displays operand selected to screen
		*/
		if($scope.operand === null){
			$scope.x 		= +($scope.displayValue);
			$scope.operand 	= operand;
			$scope.displayValue = $scope.operand;
		}
	};

	$scope.clear = function(){
		//$scope method:: null -> null
		/*
			Resets the screen back to zero
		*/
		$scope.displayValue		= 0; 
		reset();
	};

	$scope.calculate = function(){	
		//$scope method:: null -> null
		/*
			Calls the MathService to execute the operation provided to calculate the value
		*/	
		$scope.y = $scope.displayValue;

		$scope.displayValue = MathService.execute({
				x 		: Number($scope.x),
				y 		: Number($scope.y),
				operand	: $scope.operand
		});
		reset();
	};

	//init our $scope values here:
	$scope.clear();
});	
