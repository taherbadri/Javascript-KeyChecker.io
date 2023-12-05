const displayKey = (e) => {
	const container = document.querySelector(".container");
	container.innerHTML = "";
	const keys = {
		key: e.key === " " ? "Space" : e.key,
		keyCode: e.keyCode,
		code: e.code,
	};

	for (let key in keys) {
		const div = document.createElement("div");
		div.className = "display-containers";
		const small = document.createElement("small");
		const text = document.createTextNode(key);
		const value = document.createTextNode(keys[key]);
		small.appendChild(text);
		div.appendChild(small);
		div.appendChild(value);
		container.appendChild(div);
	}
};
window.addEventListener("keydown", displayKey);
