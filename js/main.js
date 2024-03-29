



var siteNAMEInPUT = document.getElementById("siteNAMEInPUT")

var websiteNameInPUT = document.getElementById("siteUrlInPUT")
var addBtn = document.getElementById("addBtn")
var tabelBody = document.getElementById("tabelBody")
var updateBtn= document.getElementById("updateBtn")
var UpdateIndex=0;
var nameMassege=document.getElementById("nameMassege")

var bookmarksList=[];

function addBookmark(){
   if (validationName()==true &&validationWebsiteNameInPUT()==true ) {
    var bookmark={
        name:siteNAMEInPUT.value,
        Url:websiteNameInPUT.value

    }

    bookmarksList.push(bookmark);
    // console.log(bookmarksList);

   

    localStorage.setItem("bookmarks is",JSON.stringify(bookmarksList))
    displyBook();
    
    clearData();
   }
}


function clearData(){
    siteNAMEInPUT.value="";
    websiteNameInPUT.value="";

}
 




function displyBook(anyArry){
    var marks =``;
    for(var i=0;i<bookmarksList.length;i++){
        marks +=`<tr>
        <td>${i + 1}</td>
        <td>${bookmarksList[i].name}</td>
        <td><a class="btn btn-info" href="${bookmarksList[i].Url}">visit</a></td>
        <td><button  class="btn btn-info" onclick="updata(${i})" >update</button></td>
        <td><button class="btn btn-danger" onclick="deleteBook(${i})" >delete</button></td>
        
  
        </tr>
       ` 
    }
     
    tableData.innerHTML=marks;
     getElementById("tableData").innerHTML= marks;
}


function deleteBook(index){
    bookmarksList.splice(index,1);
    displyBook();
}

function updata(index){
    UpdateIndex=index; 
    var curnt=bookmarksList[index]
siteNAMEInPUT.value=curnt.name;
websiteNameInPUT.value=curnt.Url;
updateBtn.classList.remove("d-none")
addBtn.classList.add("d-none")
}
function updatProduct(){
    var bookmark={
        name:siteNAMEInPUT.value,
        Url:websiteNameInPUT.value

    }

bookmarksList.splice(UpdateIndex,1,bookmark)
localStorage.setItem("bookmarks is",JSON.stringify(bookmarksList))
displyBook();
clearData();
updateBtn.classList.add("d-none")
addBtn.classList.remove("d-none")
}


function search(){
    var cartona=""
   var wantetBook=[];
    for(var i=0;i<bookmarksList.length;i++){
        if(marks[i].name.includes(term)){
            wantetBook.push(bookmarksList[i])
            marks +=`<tr>
            <td>${i + 1}</td>
            <td>${bookmarksList[i].name}</td>
            <td><a  class="btn btn-info" href="${bookmarksList[i].Url}">visit</a></td>
            <td><button  class="btn btn-info" onclick="updata(${i})" >update</button></td>
            <td><button class="btn btn-danger" onclick="deleteBook(${i})" >delete</button></td>
            
      
            </tr>
           ` 
        }
    }
    displyBook(wantetBook)
}


function validationName(){
  
    var text=siteNAMEInPUT.value;
    rejexName=/^[A-Z][a-z]{4,15}$/

    console.log(rejexName.test(text));

    if (rejexName.test(text)==true) {
        
        siteNAMEInPUT.classList.add("is-valid");
        siteNAMEInPUT.classList.remove("is-invalid");
        nameMassege.classList.add("d-none")
        return true
        
    } else {
        siteNAMEInPUT.classList.add("is-invalid");
        siteNAMEInPUT.classList.remove("is-valid");
       
        nameMassege.classList.remove("d-none")

        return false;
    }
    
}


function validationWebsiteNameInPUT(){
  
    var TESST=websiteNameInPUT.value;
    rejexName=/^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/

    console.log(rejexName.test(TESST));

    if (rejexName.test(TESST)==true) {
        
        websiteNameInPUT.classList.add("is-valid");
        websiteNameInPUT.classList.remove("is-invalid");
        namelll.classList.add("d-none")
        return true
        
    } else {
        websiteNameInPUT.classList.add("is-invalid");
        websiteNameInPUT.classList.remove("is-valid");
       
        namelll.classList.remove("d-none")

        return false;
    }
    
}