
const settingsMenu = document.querySelector('.settings-menu');
const settingsOptions = document.querySelector('.settings-options');

let hideTimeout;

settingsMenu.addEventListener('mouseenter', () => {
	clearTimeout(hideTimeout);
	settingsOptions.style.visibility = 'visible';
	settingsOptions.style.opacity = '1';
});

settingsMenu.addEventListener('mouseleave', () => {
	hideTimeout = setTimeout(() => {
	settingsOptions.style.visibility = 'hidden';
	settingsOptions.style.opacity = '0';
	}, 500); // 延迟500ms后隐藏
});

settingsOptions.addEventListener('mouseenter', () => {
	clearTimeout(hideTimeout);
});

settingsOptions.addEventListener('mouseleave', () => {
	hideTimeout = setTimeout(() => {
	settingsOptions.style.visibility = 'hidden';
	settingsOptions.style.opacity = '0';
	}, 500); // 延迟500ms后隐藏
});
