function parseCount(number){  
    let result = parseFloat(number); 
    if (isNaN(result)){   
        throw new Error("Невалидное значение");    
    } else {
        return result; 
    }
}

function validateCount(number){ 
    let result;
    try {
        result = parseCount(number); 
    } catch (error) {  
        return error; 
    }
    return result;

}

class Triangle {             
    constructor(a, b, c){   
        this.a = a;
        this.b = b;
        this.c = c;
        this._perimeter = a + b + c; 
        this._area = Number(Math.sqrt((this._perimeter / 2) * ((this._perimeter / 2) - this.a) * ((this._perimeter / 2) - this.b) * ((this._perimeter / 2) - this.c)).toFixed(3)); 

        if ((a+b) < c || (b+c) < a || (a+c) < b){                              
            throw new Error("Треугольник с такими сторонами не существует");  
        }
    }

    get perimeter(){ 
        return this._perimeter;
    }
 
    get area(){
        return this._area; 
     
    }
}

function getTriangle (a, b, c){        
    try {
        return new Triangle(a, b, c);  
    } catch (error){
        return {
            get perimeter() { return "Ошибка! Треугольник не существует"; }, 
            get area() { return "Ошибка! Треугольник не существует"; } 
        };
    }

}



