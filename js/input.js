function finalRes(form) {
    'use strict';
    var peopleIs = form.numPeople.value;
    var widthIs = form.width.value;
    var radiusIs = form.radius.value; 
    var angle= (180/peopleIs);
    var sinValue = Math.sin(angle/180*Math.PI)
    var sizeOfCut = (2 * radiusIs * sinValue);
    alert("size of cut is " +sizeOfCut );
}

