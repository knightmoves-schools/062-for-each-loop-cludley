function markAsDone(todos) {
	todos.forEach((todo, idx, arr) => {
		arr[idx] = 'done - ' + todo;
	});
	return todos;
}


