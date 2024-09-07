let sectionSkills = document.getElementById('skills')
let toggleButton = document.getElementById('toggle_skills')

toggleButton?.addEventListener('click', ()=>{
    if(sectionSkills.style.display === 'none'){
        sectionSkills.style.display = 'block'
    }
    else{
        sectionSkills.style.display = 'none'
    }
})