

// Click on a close button to hide the current list item
 const close = document.querySelectorAll('.close');
 close.forEach(el => el.addEventListener('click', event => {
  console.log(event.target);
  console.log("ioki")
}, false));
 



// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
 
  var toDoList = JSON.parse(localStorage.getItem("toDoLists") || "[]");
  const newState = toDoList.map(obj =>
    obj.id === ev.target.id ? { ...obj, completed: true } : obj
  );
  localStorage.clear();
  localStorage.setItem("toDoLists", JSON.stringify(newState));
}, false);



function showCompleted() {
    var toDoList = JSON.parse(localStorage.getItem("toDoLists") || "[]");

    let completedList = [];
    for(let i = 0; i < toDoList.length; i++) {
        if(toDoList[i].completed === true)
        completedList.push(toDoList[i])
    }
    
    document.getElementById('myUL').innerHTML = "";
    document.getElementById('details').innerHTML = completedList.length + " tasks completed"

    for (let i = 0; i < completedList.length; i++ ) {
        let li = document.createElement("li");
        let h2 = document.createElement('h2');
        let sub =document.createElement('sub');
        var span = document.createElement("span");
        let p = document.createElement('p');

        h2.textContent = toDoList[i].content
        sub.textContent = toDoList[i].id.toLocaleString();

        if(toDoList[i].completed === true) {
            li.setAttribute('class', 'checked')
        }

        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);

        li.appendChild(h2);
        li.appendChild(sub);
        li.appendChild(span);
        li.setAttribute('id', toDoList[i].id);

        document.getElementById('myUL').appendChild(li);
    }
}

function showActive() {
    document.getElementById('myUL').innerHTML = "";
    var toDoList = JSON.parse(localStorage.getItem("toDoLists") || "[]");

    let completedList = [];
    for(let i = 0; i < toDoList.length; i++) {
        if(toDoList[i].completed === false)
        completedList.push(toDoList[i])
    }
    document.getElementById('details').innerHTML = completedList.length + " tasks left"

    for (let i = 0; i < completedList.length; i++ ) {
        let li = document.createElement("li");
        let h2 = document.createElement('h2');
        let sub =document.createElement('sub');
        var span = document.createElement("span");
        let p = document.createElement('p');
 
        h2.textContent = toDoList[i].content
        sub.textContent = toDoList[i].id.toLocaleString();

        if(toDoList[i].completed === true) {
            li.setAttribute('class', 'checked')
        }

        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);

        li.appendChild(h2);
        li.appendChild(sub)
        li.appendChild(span)
        li.setAttribute('id', toDoList[i].id)

        document.getElementById('myUL').appendChild(li);
    }
}



function showtoDoLists() {
    var toDoList = JSON.parse(localStorage.getItem("toDoLists") || "[]");
    document.getElementById('myUL').innerHTML = "";
    document.getElementById('details').innerHTML = toDoList.length + " tasks"

    for (let i = 0; i < toDoList.length; i++ ) {
        let li = document.createElement("li");
        let h2 = document.createElement('h2');
        let sub =document.createElement('sub');
        var span = document.createElement("span");
        let p = document.createElement('p');

        h2.textContent = toDoList[i].content
        sub.textContent = toDoList[i].id.toLocaleString();

        if(toDoList[i].completed === true) {
            li.setAttribute('class', 'checked')
        }

        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);

        li.appendChild(h2);
        li.appendChild(sub)
        li.appendChild(span)
        li.setAttribute('id', toDoList[i].id)

        document.getElementById('myUL').appendChild(li);
    }
}

function saveTodo() {
  var inputValue = document.getElementById("todoItem").value;

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    var toDoList = JSON.parse(localStorage.getItem("toDoLists") || "[]");
    toDoList.push({ id: new Date(), content: inputValue, completed: false });
    localStorage.setItem("toDoLists", JSON.stringify(toDoList));

    showtoDoLists()
  }

  document.getElementById("todoItem").value = "";
}