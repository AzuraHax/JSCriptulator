javascript:

var pr;
var formulas;
var p7 = '%';
var p6 = 'sqr';
var p5 = 'sin';
var p4 = 'cos';
var p3 = '+';
var p2 = '*';
var p1 = '-';
var p = '/';
var variable = 0;
/*Were The Variables Are Stored
And Kept In The Script*/
document.onkeydown = calc;

function calc(e) {
    if (e.keyCode === 50) {
        var num1 = prompt('Enter Num 1');
        pr = prompt('Calc With');
        var num2 = prompt('Enter Num 2 ');
        /*The Input Sequence, Logs What
        Numbers And Signs You Entered*/
        var x1 = 0;
        x = parseFloat(num1);
        y = parseFloat(num2);
        if (p === pr) {
            var sum = x / y;
        } else if (p1 === pr) {
            sum = x - y;
        } else if (p2 === pr) {
            sum = x * y;
        } else if (p3 === pr) {
            sum = x + y;
        } else if (p4 === pr) {
            sum = Math.cos(x);
            x1 = 1;
        } else if (p5 === pr) {
            sum = Math.sin(x);
            x1 = 1;
        } else if (p6 === pr) {
            sum = Math.sqrt(num1);
            x1 = 2;
        } else if (p7 === pr) {
            sum = x % y;
        }
        /*The Checking System And The Actual Calculator 
        Checks And Calculates The Things That Were
        Loged First Into The Calculator*/
        if (x1 === 0) {
            var sum1 = alert(num1 + ' ' + pr + ' ' + num2 + ' = ' + sum);
        } else if (x1 === 1) {
            sum1 = alert(pr + ' (' + num1 + ') ' + ' = ' + sum);
        } else if (x1 === 2) {
            sum1 = alert(pr + ' of ' + num1 + ' = ' + sum);
        }
        /*Output System, Outputs The Things That Were Inputed
        And The Things That Were Checked, This Is What
        You See When You Get Your Answer*/
    } else if (e.keyCode === 49) {
        var Dist = 'Dist';
        var Slope = 'Slope';
        var py = 'Py';
        var circ = 'Circle';
        var Ellipse = 'Ellipse';
        var Pyramid = 'Pyramid';
        var Cone = 'Cone';
        var Cyl = 'Cyl';
        var CtoFa = 'C';
        var FatoC = 'Fa';
        var KE = 'KE';
        var Cube = 'Cube';
        var Rect = 'Rect';
        var redForm = 'redForm';
        var formulas = prompt('Enter a formula');
        var TA = 'TAREA';
        if (formulas === Dist) {
            variable = 1;
            var x = prompt('Enter Coord 1 x');
            var y = prompt('Enter Coord 1 y');
            var x1 = prompt('Enter Coord 2 x');
            var y1 = prompt('Enter Coord 2 y');
            var answer = Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1));
            /*Calculates Distance*/
        } else if (formulas === Slope) {
            variable = 0;
            x = prompt('Enter x1');
            y = prompt('Enter y1');
            x1 = prompt('Enter x2');
            y1 = prompt('Enter y2');
            var slopeFormulaY = y1 - y;
            var slopeFormulaX = x1 - x;
            alert(slopeFormulaY + '/' + slopeFormulaX);
            /*Calculates Slope*/
        } else if (formulas === py) {
            variable = 1;
            var a2 = prompt('A2');
            var b2 = prompt('b2');
            var c = Math.sqrt(a2 * a2 + b2 * b2);
            answer = c;
            /*Calculates Pythagoreans Theroem*/
        } else if (formulas === Ellipse) {
            variable = 1;
            var r1 = prompt('Radi 1');
            var r2 = prompt('Radi 2');
            var pi = Math.PI;
            answer = pi * r1 * r2;
            /*Calculates Volume Of A Ellipse*/
        } else if (formulas === circ) {
            variable = 1;
            r1 = prompt('Radi');
            answer = Math.PI * r1 * r1;
            /*Calculates Volume Of A Circle*/
        } else if (formulas === Pyramid) {
            variable = 1;
            var l = prompt('Length');
            var w = prompt('Width');
            var h = prompt('Height');
            answer = l * w * h / 3;
            /*Calculates Volume Of A Pyramid*/
        } else if (formulas === Cone) {
            variable = 1;
            r1 = prompt('Radi');
            h = prompt('Height');
            answer = (Math.PI * r1 * r1 * h) / 3;
            /*Calculates Volume Of A Cone*/
        } else if (formulas === Cyl) {
            variable = 1;
            r1 = prompt('Radi');
            h = prompt('Height');
            answer = Math.PI * r1 * r1 * h;
            /*Calculate Volume Of A Sphere*/
        } else if (formulas === CtoFa) {
            variable = 1;
            var c = prompt('Celcsius');
            answer = c * 9 / 5 + 32;
            /*Calculate Celsius To Farenheit*/
        } else if (formulas === FatoC) {
            variable = 1;
            c = prompt('Celcius');
            answer = (c * 2) + 30;
            /*Calculate Farenheit To Celcius*/
        } else if (formulas === KE) {
            variable = 1;
            var m = prompt('Mass');
            var v = prompt('Velocity');
            answer = 0.5 * m * v * v;
            /*Calculate Kinetic Energy*/
        } else if (formulas === Cube) {
            v = prompt('Edge');
            answer = Math.pow(v, 3);
        } else if (formulas === Rect) {
            l = prompt('Length');
            w = prompt('Width');
            h = prompt('Height');
            answer = l * w * h;
        } else if (formulas === redForm) {
            x = prompt('x');
            var a = Math.cos((Math.PI / 2) + x);
            alert('-sin(' + a + ')');
        }else if(formulas === TA){
            x = prompt('SideOne');
            x1 = prompt('SideTwo');
            h = prompt('Height');
            answer = 1/2 * h * (x + x1);
        }
        alert(answer);
    } else if (e.keyCode === 51) {

    }
}
