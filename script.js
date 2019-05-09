var gamingImgs = ["https://www.extremetech.com/wp-content/uploads/2015/07/PS4-640x353.jpeg", "https://edge.slashgear.com/wp-content/uploads/2019/03/keyboaoooo-1280x720.jpg", "http://vamers.com/wp-content/uploads/2019/01/Vamers-Gaming-Confirmed-Cross-Play-Games-for-Xbox-PlayStation-Nintendo-Main-Banner.jpg"];
var coffeeImgs = ["https://www.sciencenews.org/sites/default/files/main/articles/100315_coffee_opener_NEW_0.jpg", "https://pics.me.me/coffee-coffee-coffee-coffee-coffee-25691366.png", "https://sayingimages.com/wp-content/uploads/Me-Before-Coffee-meme.jpg"];
var boredImgs = ["https://coda.newjobs.com/api/imagesproxy/ms/cms/monsterblog/article/bored-at-work.jpg", "https://sayingimages.com/wp-content/uploads/im-more-bored-memes.png", "https://media.makeameme.org/created/spongebob-im-bored.jpg"];
var relaxedImgs = ["https://www.wikihow.com/images/thumb/e/e7/Feel-Relaxed-Step-2-Version-3.jpg/aid78230-v4-728px-Feel-Relaxed-Step-2-Version-3.jpg", "https://pics.me.me/i-have-to-go-home-i-have-so-much-stuff-5265051.png", "https://pics.me.me/Facebook-Relaxing-like-a-boss-grin-emoticon-943eb5.png"];
$("#go").click(function() {
    var userInput = $("#input").val();
    $(".imgs").hide();
    if (userInput === "gaming") {
        gamingMood();
    } else if (userInput === "coffee"){
        coffeeMood();
    } else if (userInput === "bored"){
        boredMood();
    } else if (userInput === "relaxed"){
        relaxedMood();
    } else{
        changeMood("Please input the correct infomation.");
    }
    $("#input").val("");
});
function gamingMood() {
    changeBackground("#800080");
    changeText("#008080");
    displayImages(gamingImgs);
    changeMood("Gaming");
}
function coffeeMood() {
    changeBackground("#541515");
    changeText("#153554");
    displayImages(coffeeImgs);
    changeMood("Coffee");
}
function boredMood() {
    changeBackground("#808080");
    changeText("#ffffff");
    displayImages(boredImgs);
    changeMood("Bored");
}
function relaxedMood() {
    changeBackground("#add8e6");
    changeText("#d8e6ad");
    displayImages(relaxedImgs);
    changeMood("Relaxed");
}
function changeBackground(color) {
    $("#container").css("background-color", color);
}
function changeText(color) {
    $(".words").css("color", color);
}
function displayImages(image){
    image.forEach(function(img) {
        $('#images').append('<img src = "'+ img + '" class="imgs">');
    });
}
function changeMood(mood) {
    $(".mood").text(mood);
}