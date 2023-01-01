var request = new XMLHttpRequest();
request.open("GET", "./books.json", false);
request.send(null)
var my_JSON_object = JSON.parse(request.responseText);
for (let objects in my_JSON_object){
// delete my_JSON_object[objects].rank
// my_JSON_object[objects].price = `${Math.floor(Math.random()*20 + 10)}`
}

class JavascriptDataDownloader {
    constructor(data={}) {
        this.data = data;
    }
    download (type_of = "text/plain", filename= "data.txt") {
        let body = document.body;
        const a = document.createElement("a");
        a.href = URL.createObjectURL(new Blob([JSON.stringify(this.data, null, 2)], {
            type: type_of
        }));
        a.setAttribute("download", filename);
        body.appendChild(a);
        a.click();
        body.removeChild(a);
    }
} 
new JavascriptDataDownloader(my_JSON_object).download();