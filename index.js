const myLabel=document.getElementById("mylabel");

update();
setInterval(update,1000);

function update(){
    let date = new Date();
    myLabel.innerHTML=formatTime(date);

    function formatTime(date){
        let hours=date.getHours();
        let minutes=date.getMinutes();
        let seconds=date.getSeconds();

        let amorpm=hours>=12?"pm":"am";

        hours=(hours%12) || 12;

        hours=formatZones(hours);
        minutes=formatZones(minutes);
        seconds=formatZones(seconds);

        return `${hours}:${minutes}:${seconds} ${amorpm}`
    }

    function formatZones(time){
        time=time.toString();
        return time.length<2?"0"+time:time;
    }

}
