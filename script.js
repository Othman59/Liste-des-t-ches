const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

todoForm.addEventListener('submit', (e) => {
	e.preventDefault();
	
	// Get the value of the input field
	const todoText = todoInput.value.trim();
	
	if (todoText !== '') {
		// Create a new li element
		const newTodo = document.createElement('li');
		
		// Add the todo text as a span element
		const todoSpan = document.createElement('span');
		todoSpan.innerText = todoText;
		newTodo.appendChild(todoSpan);
		
		// Add a delete button
		const deleteBtn = document.createElement('button');
		deleteBtn.innerText = 'Delete';
		deleteBtn.addEventListener('click', () => {
			newTodo.remove();
		});
		newTodo.appendChild(deleteBtn);
		
		// Add the new todo to the list
		todoList.appendChild(newTodo);
		
		// Clear the input field
		todoInput.value = '';
	}
});
