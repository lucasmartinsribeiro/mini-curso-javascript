
// function Title(css, textContent, smallcontent, textContent2) {
//     console.log(css)

//     return `<h1 style="${css[0]}}">
//                 ${textContent}
//                 <small>${smallcontent}</small>
//                 <em>${textContent2}</em>
//             </h1>`

function Title(css, textContent) {
    return `
        <h1 style="${css[0]}">
            ${textContent} 
        </h1>`
}