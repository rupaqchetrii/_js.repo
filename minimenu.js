function menuChoice(choice) {
	let result;

	switch (choice) {
		case 1:
			result = "Start Game";
			break;
		case 2:
			result = "Load Game";
			break;
		case 3:
			result = "Settings";
			break;
		case 4:
			result = "Exit";
			break;
		default:
			result = "Invalid Choice";
			break;
	}

	return result;
}
console.log(menuChoice(1));