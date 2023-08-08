const myUsers = {
    userList : []
}
// console.log(myUsers.userList)

/* const myFunc = async () => {
    const response = await fetch("https://pixabay.com/api/?key=34340120-5f3f875ee0601dd1b3300379b&q=" + linkedKeywords + "&image_type=photo");
    // console.log(response)
    const jsonUser = await response.json();
    myUsers.userList = jsonUser;
    // console.log(myUsers.userList)
    // console.log(myUsers.userList.hits)

} */

const imgDiv = document.querySelector(".imgDiv")
// console.log(imgDiv)
const input = document.querySelector("input");
// console.log(input);
const tags = document.querySelector(".tags");
console.log(tags);

const func = () => {
input.addEventListener("keydown", (event)=> {
    if (event.key === "Enter") {
        imgDiv.innerHTML = "";
        tags.innerHTML = "";

        const inputValue = input.value;
        const keywords = inputValue.split(' ')
        .filter(word => {
          // exclude non-keyword words here
          return word.length > 2 && !['the', 'and', 'a'].includes(word.toLowerCase());
        });

        input.value = null;
        console.log(keywords[1]);
        for (i=0; i<keywords.length;i++) {
            const div = document.createElement("div");
            tags.append(div);
            div.textContent = keywords[i];

        }
        const linkedKeywords = keywords.join("+");
        console.log(linkedKeywords);
        
        const myFunc = async () => {
            const response = await fetch("https://pixabay.com/api/?key=34340120-5f3f875ee0601dd1b3300379b&q=" + linkedKeywords + "&image_type=photo");
            console.log("https://pixabay.com/api/?key=34340120-5f3f875ee0601dd1b3300379b&q=" + linkedKeywords + "&image_type=photo")
            // console.log(response)
            const jsonUser = await response.json();
            myUsers.userList = jsonUser;
            console.log(myUsers.userList.hits)
            // console.log(myUsers.userList)
            // console.log(myUsers.userList.hits)
            for (let i=0; i < myUsers.userList.hits.length; i++) {

                const mainDiv = document.createElement("div");
                imgDiv.append(mainDiv);
                    const mainImg = document.createElement("img");
                    mainDiv.append(mainImg);
                        mainImg.setAttribute("height", "300px")
                        mainImg.setAttribute("src",myUsers.userList.hits[i].largeImageURL);
                        mainImg.addEventListener("click", ()=> {
                            window.open(myUsers.userList.hits[i].largeImageURL);
                        })
                    const secDiv = document.createElement("div");
                    mainDiv.append(secDiv);
                        const secImg = document.createElement("img");
                        secDiv.append(secImg);
                            secImg.setAttribute("src", myUsers.userList.hits[i].userImageURL)
                            if (myUsers.userList.hits[i].userImageURL.length === 0) {
                                secImg.setAttribute("src", "images/man-7827681_1920.jpg");
                            }
        
                        const terDiv = document.createElement("div");
                        secDiv.append(terDiv);
                        const fourthDiv = document.createElement("div");
                        terDiv.append(fourthDiv);
                            const likesDiv = document.createElement("div");
                            fourthDiv.append(likesDiv);
                                    const likeEmoji = document.createElement("abbr");
                                    likesDiv.append(likeEmoji);
                                    likeEmoji.textContent = "❤️";
                                    likeEmoji.setAttribute("title", "likes");
                                    const likes = document.createElement("strong");
                                    likesDiv.append(likes);
                                    likes.textContent = myUsers.userList.hits[i].likes;
        
                            const viewsDiv = document.createElement("div");
                            fourthDiv.append(viewsDiv);
                                    const viewEmoji = document.createElement("abbr");
                                    viewsDiv.append(viewEmoji);
                                    viewEmoji.textContent = "👁️";
                                    viewEmoji.setAttribute("title", "views");
                                    const views = document.createElement("strong");
                                    viewsDiv.append(views);
                                    views.textContent = myUsers.userList.hits[i].views;
                            
                            const downloadsDiv = document.createElement("div");
                            fourthDiv.append(downloadsDiv);
                                    const downloadEmoji = document.createElement("abbr");
                                    downloadsDiv.append(downloadEmoji);
                                    downloadEmoji.textContent = "↓";
                                    downloadEmoji.setAttribute("title", "downloads");
                                    const downloads = document.createElement("strong");
                                    downloadsDiv.append(downloads);
                                    downloads.textContent = myUsers.userList.hits[i].downloads;
        
        
                            const fifthDiv = document.createElement("div");
                            terDiv.append(fifthDiv);
                                const tagEmoji = document.createElement("abbr");
                                fifthDiv.append(tagEmoji);
                                    tagEmoji.setAttribute("title", "tags");
                                    tagEmoji.textContent = "tags: " + myUsers.userList.hits[i].tags;
                                
                                const tags = document.createElement("strong");
                                fifthDiv.append(tags);
                                    // tags.textContent = "Asdsa";      
                                
        }
        
        }
        myFunc();
    }
})
}
func();






