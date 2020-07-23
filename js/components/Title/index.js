<<<<<<< HEAD
function Title(css, textContent, smallcontent, textContent2) {
    console.log(css)

    return `<h1 style="${css[0]}}">
                ${textContent}
                <small>${smallcontent}</small>
                <em>${textContent2}</em>
            </h1>`
=======
function Title(css, textContent) {
    return `
        <h1 style="${css[0]}">
            ${textContent} 
        </h1>`
>>>>>>> 402b18c7e85ff5d2266b5f9e1a8defda5e620d9a
}