var sectionSkills = document.getElementById('skills');
var toggleButton = document.getElementById('toggle_skills');
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener('click', function () {
    if (sectionSkills.style.display === 'none') {
        sectionSkills.style.display = 'block';
    }
    else {
        sectionSkills.style.display = 'none';
    }
});
