console.group("external files")

let parent_ele=document.createElement("div")
document.body.appendChild(parent_ele)

let flag=false

let heading_ele=document.createElement("h1")
heading_ele.innerHTML="heading"

let paragraph_ele=document.createElement("p")
paragraph_ele.textContent="paragraph"

let add_button_ele=document.createElement("button")
add_button_ele.innerText="add styles"

let remove_button_ele=document.createElement("button")
remove_button_ele.innerHTML="remove styles"

add_button_ele.onclick=function(){
    // heading_ele.style.color="brown"
    // heading_ele.style.backgroundColor="lightpink"
    // heading_ele.style.fontSize="30px"
    // heading_ele.style.padding="20px"
    // paragraph_ele.style.color="blue"
    // paragraph_ele.style.backgroundColor="lightblue"
    // paragraph_ele.style.fontSize="30px"
    // paragraph_ele.style.padding="20px"
    if(flag==false){
        paragraph_ele.classList.add("para")
    heading_ele.classList.add("head")
    flag=true

    }else{
        paragraph_ele.classList.remove("para")
    heading_ele.classList.remove("head")
    flag=false

    }
    }
    
remove_button_ele.onclick=function(){
    paragraph_ele.classList.remove("para")
    heading_ele.classList.remove("head")

}

parent_ele.append(heading_ele,paragraph_ele,add_button_ele)


