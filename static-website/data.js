data = {
    services:[
        {
            name:"Application Services",
            image:"application.png",
            features:["Latest Technology", "Micro Service Architecture","Cloud Native","Test Driven Development"]
        },
        {
            name:"Testing Services",
            image:"testing.png",
            features:["End to End Testing", " performance Analysis ","Quality Assurance","Powerful tools"]

        },
        {
            name:"infrastructure Services",
            image:"infrastructure.jfif",
            features:["Cloud Service ", "low cost ","Premium hardWare","High Performance"]
        }
    ]
}


let code=""

for(let service of data.services){
    code += "<div class ='service-box'>"
    code+="<h3>"+service.name+"</h3>"
    code+="<img src='"+service.image+"'>"
    code+="<div class='features'> <ul>"
    for(let feature of service.features){
        //code+="<li>"+feature+"</li>"
        code+="<li onclick=\"featureli('" + feature + "')\">" +feature+"</li>"
    }
    code+="</ul></div></div>"
}
document.getElementById("services-wrapper").innerHTML=code

function featureli(select){
    alert("you are selected :"+ select)
}
document.getElementsByClassName('feature').innerHTML


