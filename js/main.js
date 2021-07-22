var links = [
    {
        title : "- Week 1 Assignment",
        url : "week1/index.html"
    },
    {
        title : "- Week 2 Assignment",
        url : "week2/index.html"
    },
    {
        title : "- Week 3 Assignment",
        url : "week3/index.html"
    },
    {
        title : "- Week 4 Assignment",
        url : "week4/index.html"
    },
    {
        title : "- Week 5 Assignment",
        url : "week5/index.html"
    },
    {
        title : "To Do Assignment",
        url : "week5/todo.html"
    },
    {
        title : "Week 7 Assignment",
        url : "week7/index.html"
    },
    {
        title : "Week 8 Assignment",
        url : "week8/index.html"
    },
    {
        title : "Week 9 Assignment",
        url : "week9/index.html"
    },
    { 
        title: "Week 10 Assignment",
        url : "week10/index.html"
    },
    {
        title: "Week 11 Assignment",
        url : "week11/group.html"
    }, 
    {
        title: "Final Project",
        url : "final/build/index.html"
    }
  ]       

for (i = 0; i < links.length; i++) {
    var list = document.getElementById("list")
    var newItem = document.createElement("li")
    var linkRef = document.createElement("a")
    list.appendChild(newItem)
    newItem.appendChild(linkRef)
    linkRef.href = links[i]["url"]
    linkRef.innerHTML = links[i]["title"]   
}

