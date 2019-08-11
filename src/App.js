import React from 'react';
import logo from './logo.svg';
import './App.css';
import './index.js';
var r=0;

function oclick(){
  document.getElementById("news1").removeChild("news");
  var xhr=new XMLHttpRequest();
  const proxyurl = "https://cors-anywhere.herokuapp.com/";
  xhr.open("GET", proxyurl+"https://api.currentsapi.services/v1/latest-news", true);
  xhr.setRequestHeader("Authorization", "U-oPpqajoJHIIs7hFstEEfTsNU_WA9ZBg225A2zZGIhXjLRc");
  xhr.send(null);
  xhr.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
   
  var a=JSON.parse(this.responseText);
 if(r>0){
  var e=document.getElementById("news");
  document.getElementById.removeChild(e);
 }
  var main=document.createElement("div");
  main.setAttribute("id","news");
  document.getElementById("news1").appendChild(main);
for(let i=0;i<25;i++)
{
  

 var x=document.createElement("h3");
 x.innerHTML=a.news[i].title;
 x.setAttribute("id","title");
 document.getElementById("news").appendChild(x);
 var author=document.createElement('div');
 author.innerHTML=a.news[i].author+"  |  ";
 author.setAttribute("id","author");
 document.getElementById("news").appendChild(author);
 var time=document.createElement('div');
 time.innerHTML=a.news[i].published;
 time.setAttribute("id","author");
 document.getElementById("news").appendChild(time);
 var des=document.createElement("div");
 des.innerHTML=a.news[i].description+"<br><h4>Reference<h4>";
 des.setAttribute("id","des");
 document.getElementById("news").appendChild(des);
 var ref=document.createElement("a");
 ref.innerHTML=a.news[i].url;
 var s=a.news[i].url;
 ref.setAttribute("href",s);
 ref.setAttribute("id","url");
 document.getElementById("news").appendChild(ref);
 var main1=document.createElement("div");
  main1.setAttribute("id","u");
 document.getElementById("news").appendChild(main1);
}

}
 };
 r=r+1;
}

function App() {
  return (
    
      React.createElement("div",{id:'main'},
      React.createElement("header",{id:'header'},
      React.createElement("button",{id:'head',onClick:oclick},"Show Latest News")),
      React.createElement("div",{id:'body'},
      React.createElement("div",{id:'filter'},
      React.createElement("div",{id:'head2'},
      React.createElement("div",{id:'head1'},"Filter News"),
      React.createElement("a",{id:'reset',href:""},"Reset"),
      ),
      React.createElement("label",{id:'label1'},"LANGUAGE"),
      React.createElement("input",{id:'textarea1'},null),
      React.createElement("p",null,null),
      React.createElement("label",{id:'label1'},"COUNTRY"),
      React.createElement("input",{id:'textarea1'},null),
      React.createElement("p",null,null),
      React.createElement("label",{id:'label1'},"START DATE"),
      React.createElement("input",{id:'textarea1',type:"Date"},null),
      React.createElement("p",null,null),
      React.createElement("label",{id:'label1'},"END DATEE"),
      React.createElement("input",{id:'textarea1',type:"Date"},null),
      React.createElement("button",{id:'btn'},"Show News") 
      ),
      React.createElement("div",{id:'news1'},
   
      )

      
      )
      )
     
  );
}


export default App;
