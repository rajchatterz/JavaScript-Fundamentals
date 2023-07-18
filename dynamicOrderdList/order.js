const btn = document.getElementById('btn')
let i=0
btn.addEventListener("click",()=>{
    let arr = ["HTML and Semantics",
        "Starting with CSS",
        "Working Template",
        "Mobile responsive webpages",
        "Grid and Flex-box in CSS",
        "Projects using HTML & CSS",
        "Version Control and Git",
        "Getting Started with JavaScript",
        "Advance JavaScript",
        "Working with DOM",
        "Making Projects using HTML, CSS and JavaScript",
        "Understanding Fundamental of Computer Science",
        "Getting Started with Database",
        "Understanding the Database",
        "Starting with NodeJS and Express",
        "Understanding React and its Fundamentals",
        "Understanding Hooks and Routers",
        "Starting and Completing Full Fledge Projects"]
    const item = document.getElementById('item')
    const newItem = document.createElement('li')
    newItem.textContent=arr[i++]
    item.appendChild(newItem)

})