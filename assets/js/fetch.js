fetch(
    "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@younsess-elbrag"
)
    .then((res) => res.json())
    .then((data) => {
        // Filter for acctual posts. Comments don't have categories, therefore can filter for items with categories bigger than 0
        const res = data.items; //This is an array with the content. No feed, no info about author etc..
        const posts = res.filter((item) => item.categories.length > 0); // That's the main trick* !

        // Functions to create a short text out of whole blog's content
        function toText(node) {
            let tag = document.createElement("div");
            tag.innerHTML = node;
            node = tag.innerText;
            return node;
        }
        function shortenText(text, startingPoint, maxLength) {
            return text.length > maxLength
                ? text.slice(startingPoint, maxLength)
                : text;
        }

        // Put things in right spots of markup
        let output = "";
        posts.forEach((item) => {
            output += `
         <tr>
<td width=25%>
    <span class="image blog"><img src="${item.thumbnail}"></span>
</td>
<td align=justify><b>${shortenText(item.title, 0, 30) + "..."}</b>
    </br>
    <em>${"Intro : " + shortenText(toText(item.content), 70, 350) + "..."}</em>
    </br>
    <span align="center"><p> Author: ${item.author}</span>
</br>
    <span align="left">${"Post Puplished " + shortenText(item.pubDate, 0, 10)}</span>
</br>
<a href="${item.link}" class="button primary fit small">Read Article</a>
</td>
</tr>
         `;
        });
        document.querySelector(".blog__slider").innerHTML = output;
    });
