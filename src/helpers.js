const choice = (items) => {
	const idx = Math.floor(Math.random() * items.length);
	const item = items[idx];
	return item;
};

const remove = (items, item) => {
	if (items.includes(item)) {
		return items.filter(function(el) {
			return el != item;
		});
	} else {
		return undefined;
	}
};

export { choice, remove };
