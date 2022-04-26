const choice = (items) => {
	const idx = Math.floor(Math.random() * items.length);
	const item = items[idx];
	return item;
};

const remove = (items, item) => {
	if (items.includes(item)) {
		items.splice(items[item], 1);
	} else {
		return undefined;
	}
};

export { choice, remove };
