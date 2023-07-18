let paragraph = document.getElementById("para")
let highlight = paragraph.textContent.split(" ")
for(let i =0;i<highlight.length;i++){
    if(highlight[i].length>8){
        highlight[i]='<span style="background-color: yellow">' + highlight[i] + '</span>';
    }
}
paragraph.innerHTML=highlight.join(" ")
