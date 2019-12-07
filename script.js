"use strict";

function main(){
    // Можем как получать элементы, так и не получать,
    // но это работает только для случаев, когда переменных с таким id нету больше
    const contentDiv = document.getElementById("contentDiv");
    const mainDiv = document.querySelector("#mainDiv"); // # - значит элемент с конкретным ID
    
    window.console.log("Test");
    setInterval(()=>{
        contentDiv.style.display = "none";
    }, 1000);
    
    mainDiv.style.background = "red";
    
    // Можем выполнить CSS запрос и получить все последние ul элементы
    const elements = document.querySelectorAll("ul > li:last-child");
    for(const elem of elements){
        console.log(elem.textContent);
    }
    
    for(const elem of document.body.children){
        if(elem.matches('a[href$="zip"]')){
            console.log("Archieve link: " + elem.href);
        }
    }
    
    const inputElements = document.getElementsByTagName("input");
    for(const elem of inputElements){
        console.log(`${elem.value}: ${elem.checked}`);
    }
    
    // ищем по имени атрибута
    const form = document.getElementsByName("my_form")[0];
    
    // ищем по классу внутри form
    let articles = form.getElementsByClassName("article");
    console.log(articles.length); // 2, находим два элемента с классом article
}

window.onload = main;