---
title: test
layout: post
---
dsadsadas

```js
    function fetchImage() {
    const apiKey = "Your-apiKey";
    fetch("https://any-anime.p.rapidapi.com/anime/img", {
        method: "GET",
        headers: {
        "x-rapidapi-key": apiKey,
        "x-rapidapi-host": "any-anime.p.rapidapi.com",
        },
    })
        .then((response) => response.blob())
        .then((blob) => {
        const imageUrl = URL.createObjectURL(blob);
        const imageElement = document.createElement("img");
        imageElement.src = imageUrl;
        const container = document.getElementById("image-container");
        container.appendChild(imageElement);
        })
        .catch((error) => console.error(error));
    }
    const button = document.getElementById("fetch-image-button");
    button.addEventListener("click", fetchImage);
```