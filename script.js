//selecting popup-overlay popupbox button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popupbox")
var popupbutton=document.getElementById("addpopup")
addpopup.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
}
)
//selecting cancel button
var cancelpopup=document.getElementById("cancelbook")
cancelpopup.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})
//selecting container, addbook,book-title-input,book-author-input,book-histor-input
var container=document.querySelector(".container")
var addbook=document.getElementById("addbook")
var booktittleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookhistoryinput=document.getElementById("book-history-input")

addbook.addEventListener("click",function (){
   event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookitems")
    div.innerHTML=`<h2>${booktittleinput.value}</h2>
            <h5>${bookauthorinput.value}</h5>
            <p>${bookhistoryinput.value}</p>
            <button onclick="deletebook(event)">delete</button>`
            container.append(div)
             popupoverlay.style.display="none"
           popupbox.style.display="none"     
        })

function deletebook(event)
{
    event.target.parentElement.remove()
}