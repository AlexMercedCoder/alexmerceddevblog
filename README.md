# Alex Merced's Dev Blog
## By Author
### [LIVE PROJECT](https://alexmercedcoder.github.io/alexmerceddevblog/)
### [Portfolio Website](https://www.AlexMercedCoder.com)
---
**SUMMARY** :
This is my blog as a developer. Content created using the contentful headless CMS, deployed using github pages. I also used the NES.CSS library for styling. The goal is to post thoughts as a developer. I'll also be using the wiki to document code strategies I use to solve common issues.
---
## Resources Used

- jquery
- jquery UI
- Google Fonts (Font A, Font B)
- Other CSS and JS Libraries
- NES.CSS

## Design of Functionality

Explanation of my code

```
.then ((data) => {

    let theinfo = data;
    console.log(theinfo.items[0].fields.blogTitle);
    theinfo.items.map((author) => {

    $blogContent = $('<div>'),
    $blogContent.html(`

        <div class="nes-container with-title is-centered">
        <p class="title">${author.fields.blogTitle}</p>
        <p>${author.fields.blogContent}</p>
        </div>

        `);
    $('main').append($blogContent);

```
Nothing super crazy. I use the contentful API to pull the blog data then  map it to a div with a block of html.

## Other Comments


<!-- Image Tag: ![alt text](image.jpg) -->
<!-- Link Tag: [title](https://www.example.com) -->
<!-- https://www.markdownguide.org/cheat-sheet/ -->
