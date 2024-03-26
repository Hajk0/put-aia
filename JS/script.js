console.log('Hello World!');

const addBookButton = document.getElementById('add-book');

addBookButton.addEventListener('click', () => {
    console.log('Button clicked!');
    const list = document.getElementById('book-list');

    const listRow = document.createElement("div");
    listRow.classList.add('list-row');
    // listRow.innerHTML = '<div class="list-item"><input></div><div class="list-item"><input></div><div class="list-item"><button>Edit</button><button>Remove</button></div>';
    let listItem1 = document.createElement("div");
    listItem1.classList.add('list-item');
    let listItem2 = document.createElement("div");
    listItem2.classList.add('list-item');
    let listItem3 = document.createElement("div");
    listItem3.classList.add('list-item');
    let authorInput = document.createElement("input");
    let titleInput = document.createElement("input");
    let editButton = document.createElement("button");
    let removeButton = document.createElement("button");
    listItem1.appendChild(authorInput);
    listItem2.appendChild(titleInput);
    listItem3.appendChild(editButton);
    editButton.textContent = 'Save';
    editButton.addEventListener('click', () => {
        console.log('Edit button clicked!');
        authorInput.disabled = !authorInput.disabled;
        titleInput.disabled = !titleInput.disabled;
        if (authorInput.disabled) {
            editButton.textContent = 'Edit';
            let authorInput = listItem1.querySelector('input');
            let titleInput = listItem2.querySelector('input');
            let author = authorInput.value;
            let title = titleInput.value;
            listItem1.removeChild(authorInput);
            listItem2.removeChild(titleInput);
            let authorParagraph = document.createElement("p");
            authorParagraph.textContent = author;
            let titleParagraph = document.createElement("p");
            titleParagraph.textContent = title;
            listItem1.appendChild(authorParagraph);
            listItem2.appendChild(titleParagraph);
        } else {        
            editButton.textContent = 'Save';
            let authorParagraph = listItem1.querySelector('p');
            let titleParagraph = listItem2.querySelector('p');
            let author = authorParagraph.textContent;
            let title = titleParagraph.textContent;
            listItem1.removeChild(authorParagraph);
            listItem2.removeChild(titleParagraph);
            let authorInput = document.createElement("input");
            let titleInput = document.createElement("input");
            authorInput.value = author;
            titleInput.value = title;
            listItem1.appendChild(authorInput);
            listItem2.appendChild(titleInput);
        }
    });
    listItem3.appendChild(removeButton);
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => {
        console.log('Remove button clicked!');
        list.removeChild(listRow);
    });

    listRow.appendChild(listItem1);
    listRow.appendChild(listItem2);
    listRow.appendChild(listItem3);

    list.appendChild(listRow);
});