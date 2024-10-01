var u = document.querySelector("footer p+ul");
u.innerHTML = u.innerHTML.replace(
	/(\w+)\[аt\](\w+)\[dоt\](\w+)/g,
	'<a href="mailto:$1@$2\.$3">$1@$2\.$3</a>'
);