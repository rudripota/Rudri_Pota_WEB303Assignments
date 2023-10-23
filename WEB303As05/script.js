/*
    Name: Rudri Pota
    Student no.: 0817379
    Assignment: 05
*/

$(document).ready(function () {

    class ContentItem {
        id;
        name;
        des;
        genre;
    
    constructor(id, name, des, genre) {
        this.id = id;
        this.name = name;
        this.des = des;
        this.genre = genre;
        }
    
        updateContentItem(id, name, des, genre) {
            if((this.id == id) && (name != null) && (des != null) && (genre != null)){
                this.name = name;
                this.des = des;
                this.genre = genre;
            }
        }
    
    
        toString(){
            $("#content-item-list").append("<div class='content-item-wrapper' id='content-item"+ this.id +"'><h2>"+ this.name +"</h2><p>"+ this.des +"</p><div>"+ this.genre +"</div></div>");
         }
    }


    let contentItemList = [
        new ContentItem(1,"All Too Well","It is a song about remembering the previous stages of a relationship and how you move on after the reeling. This is a Taylor Swift song from the album Red.","Country Music"),
        new ContentItem(2,"Bet You Think About Me","This song is sung by Taylor Swift and it talks about how big of an impact you can make in someone's life, you never truly forget an important person","Country Pop"),
        new ContentItem(3,"Cruel Summer","This song is about young and desperate love starting and ending quickl over the duration of the Summer", "Pop"),
        new ContentItem(4,"Shake It Off","This song motivates us to shake off the seemingly un-ending hate in the world. It also talks about not taking everything so personally", "Dance pop"),
        new ContentItem(5,"Karma","This song talks about Karma and how whatever we put out into the world always comes back around. It protrays karma being a person's best friend.", "Disco")
    ];

    for(let content in contentItemList) {
        contentItemList[content].toString();
    }

    $(".content-item-wrapper").css({"border" : "15px #e06b60", "width": "99%", "padding" : "15px", "margin-top" : "15px", "margin-bottom" : "15px"});

});