/*
Question 2-3
 */
let canvasList = [];

function sync(){
    canvasList.forEach(canvasList => {
        refresh(canvasList.canvas, canvasList.context);
    });
}

window.addEventListener("load", () => {
    window.setInterval(sync, 1000);
});

/*
Question 11
*/
function drawBorder(canvas, context, len, wid, color, data){
    let min;
    canvas.width>canvas.height ? min=canvas.height : min=canvas.width

    for (let i = 0; i < data; i++) {
        context.beginPath();
        context.strokeStyle = color;
        context.lineWidth = wid;

        context.moveTo(
            (canvas.width / 2) + (min/2)*0.8 * Math.cos(Math.PI * ((i - (data / 4)) / (data / 2))),
            (canvas.height / 2) + (min/2)*0.8 * Math.sin(Math.PI * ((i - (data / 4)) / (data / 2)))
        );

        context.lineTo(
            (canvas.width / 2) + ((min/2) * 0.8 - len) * Math.cos(Math.PI * ((i - (data / 4)) / (data / 2))),
            (canvas.height / 2) + ((min/2) * 0.8 - len) * Math.sin(Math.PI * ((i - (data / 4)) / (data / 2)))
        );
        context.stroke();
    }
}

/*
Question 1-9
 */
function strokeClockhand(canvas, context, color, data, dataMax, wid, len){
    let w = canvas.width;
    let h = canvas.height;
    let min;
    w>h ? min=h : min=w

    let x = w/2  + (((min/2)*0.8)*len) * Math.cos(Math.PI * ((data - (dataMax / 4)) / (dataMax / 2)));
    let y = h/2 + (((min/2)*0.8)*len) * Math.sin(Math.PI * ((data - (dataMax / 4)) / (dataMax / 2)));

    context.beginPath();
    context.moveTo(w/2, h/2);
    context.lineTo(x, y);
    context.strokeStyle = color;
    context.lineWidth = wid;
    context.stroke();
}

function refresh(canvas, context) {
    let w = canvas.width;
    let h = canvas.height;
    let min;
    w>h ? min=h : min=w
    let date = new Date;

    /*
    Question 1-7
     */
    context.clearRect(0, 0, w, h);

    /*
    Question 1-3-1
     */
    // console.log(new Date);

    /*
    Question 1-3-2
     */
    console.log(date.getHours()+":"+date.getMinutes()+":"+date.getSeconds());

    /*
    Question 1-4-2
     */
    // console.log("Width: "+canvas.width+"\nHeight: "+canvas.height);

    /*
    Question 1-4-3, 1-8
     */
    // context.strokeStyle="red";
    // context.lineWidth=2;
    //
    // context.beginPath();
    // context.moveTo(w/2, h/2);
    // context.lineTo(w/2, 100);

    /*
    Question 1-7
     */
    // context.lineTo(w/2+((min/2)*0.8)*Math.cos(Math.PI*(date.getSeconds()-15)/30), h/2+((min/2)*0.8)*Math.sin(Math.PI*(date.getSeconds()-15)/30));
    // context.stroke();

    /*
    Question 1-5, 1-8
     */
    context.beginPath();
    context.strokeStyle="lightblue";
    context.lineWidth=3;
    context.arc(w/2, h/2, (min/2)*0.8, 0, 4 * Math.PI / 2);
    context.stroke();

    /*
    Question 1-9
     */
    // Seconds
    strokeClockhand(canvas, context, "red", date.getSeconds(), 60, 2, 0.9);

    // Minutes
    strokeClockhand(canvas, context, "black", date.getMinutes(), 60, 3.5, 0.85);

    /*
    Question 1-10
     */
    // Hours
    strokeClockhand(canvas, context, "black", date.getHours(), 24, 5, 0.8);

    /*
    Question 1-11
    */
    drawBorder(canvas, context, 10, 2, "lightblue", 12);
}

/*
Question 2-2
 */
function startClock(id){
    let canvas = document.getElementById(id);
    let context = canvas.getContext("2d");
    refresh(canvas, context);
    canvasList.push({
        canvas,
        context
    });
}