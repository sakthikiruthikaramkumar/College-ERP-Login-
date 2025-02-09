document.addEventListener('click', function () { //'DOMContentLoaded' //'click'
    // Accessing elements in the DOM
    // adding column1
    var r=document.getElementById('1');
    var c=document.createElement('th');
    r.appendChild(c);
    c.textContent='IntTot';

    //adding column2
    var row=document.getElementById('1');
    var col1=document.createElement('th');
    row.appendChild(col1);
     col1.textContent='IntAvg';
   
    //adding new row1
    
    var r1=document.getElementById('2');
    var c1=document.createElement('td');
    var ce1=document.createElement('td');
    r1.appendChild(c1);
    r1.appendChild(ce1);
    var ma1=parseInt(document.getElementById('m1').innerHTML);
    var ma2=parseInt(document.getElementById('m2').innerHTML);
    var ma3=parseInt(document.getElementById('m3').innerHTML);
    var m1=parseInt(ma1);
    var m2=parseInt(ma2);
    var m3=parseInt(ma3);
    var tot=parseInt(m1+m2+m3);
    var avg=tot/4;
    ce1.textContent=avg.toString();
    c1.textContent=tot.toString();

    //adding row2

    var r2=document.getElementById('3');
    var c2=document.createElement('td');
    r2.appendChild(c2);
    var ce2=document.createElement('td');
    r2.appendChild(ce2);
    var d1=parseInt(document.getElementById('db1').innerHTML);
    var d2=parseInt(document.getElementById('db2').innerHTML);
    var d3=parseInt(document.getElementById('db3').innerHTML);
    var tot1=parseInt(d1+d2+d3);
    var avg1=tot1/4;
    ce2.textContent=avg1.toString();
    c2.textContent=tot1.toString();

   // adding row 3

    var r3=document.getElementById('4');
    var c3=document.createElement('td');
    r3.appendChild(c3);
    var ce3=document.createElement('td');
    r3.appendChild(ce3);
    var dss1=parseInt(document.getElementById('ds1').innerHTML);
    var dss2=parseInt(document.getElementById('ds2').innerHTML);
    var dss3=parseInt(document.getElementById('ds3').innerHTML);
    var tot2=parseInt(dss1+dss2+dss3);
    var avg2=tot2/4;
    ce3.textContent=avg2.toString();
    c3.textContent=tot2.toString();

    //adding row 4

    var r4=document.getElementById('5');
    var c4=document.createElement('td');
    r4.appendChild(c4);
    var ce4=document.createElement('td');
    r4.appendChild(ce4);
    var sse1=parseInt(document.getElementById('se1').innerHTML);
    var sse2=parseInt(document.getElementById('se2').innerHTML);
    var sse3=parseInt(document.getElementById('se3').innerHTML);
    var tot3=parseInt(sse1+sse2+sse3);
    var avg3=tot3/4;
    ce4.textContent=avg3.toString();
    c4.textContent=tot3.toString();

   //adding row 5

    var r5=document.getElementById('6');
    var c5=document.createElement('td');
    r5.appendChild(c5);
    var ce5=document.createElement('td');
    r5.appendChild(ce5);
    var py1=parseInt(document.getElementById('p1').innerHTML);
    var py2=parseInt(document.getElementById('p2').innerHTML);
    var py3=parseInt(document.getElementById('p3').innerHTML);
    var tot4=parseInt(py1+py2+py3);
    var avg4=tot4/4;
    ce5.textContent=avg4.toString();
    c5.textContent=tot4.toString();

    //adding row 6

    var r6=document.getElementById('7');
    var c6=document.createElement('td');
    r6.appendChild(c6);
    var ce6=document.createElement('td');
    r6.appendChild(ce6);
    var sdd1=parseInt(document.getElementById('sd1').innerHTML);
    var sdd2=parseInt(document.getElementById('sd2').innerHTML);
    var sdd3=parseInt(document.getElementById('sd3').innerHTML);
    var tot5=parseInt(sdd1+sdd2+sdd3);
    var avg5=tot5/4;
    ce6.textContent=avg5.toString();
    c6.textContent=tot5.toString();
   
   
});