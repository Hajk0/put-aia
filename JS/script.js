console.log('Hello World!');

document.getElementById('add-book').addEventListener('click', () => {
    console.log('Button clicked!');
    const list = document.getElementById('book-list');

    const listRow = document.createElement("div");
    listRow.classList.add('list-row');
    listRow.innerHTML = '<div class="list-item"><input></div><div class="list-item"><input></div><div class="list-item"><button>Edit</button><button>Remove</button></div>';

    

    list.appendChild(listRow);
});