var request = new XMLHttpRequest();
request.open("GET", "./json/youngadult.json", false);
request.send(null)
var my_JSON_object = JSON.parse(request.responseText);
for (let objects in my_JSON_object){
delete my_JSON_object[objects].age_group
delete my_JSON_object[objects].article_chapter_link
delete my_JSON_object[objects].book_review_link
delete my_JSON_object[objects].buy_links
delete my_JSON_object[objects].contributor
delete my_JSON_object[objects].contributor_note
delete my_JSON_object[objects].created_date
delete my_JSON_object[objects].first_chapter_link
delete my_JSON_object[objects].rank_last_week
delete my_JSON_object[objects].sunday_review_link
delete my_JSON_object[objects].updated_date
delete my_JSON_object[objects].weeks_on_list
my_JSON_object[objects].genre = "youngadult"

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