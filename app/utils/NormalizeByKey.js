export default function normalizeByKey(all = [], key) {
	let byId = {};
	let allIds = [];
	all.forEach((item) => {
		if (byId[item[key]]) byId[item[key]] = item;
		else {
			byId[item[key]] = {
				...item,
				id: key,
			};
			allIds.push(item[key]);
		}
	});

	return { byId, allIds };
}
