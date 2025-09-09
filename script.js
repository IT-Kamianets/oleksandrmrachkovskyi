const currentYear = new Date().getFullYear();

document.getElementById('year').textContent = currentYear;

function calculateAge(birthDate) {
    const now = new Date();
    const birth = new Date(birthDate);
    let age = now.getFullYear() - birth.getFullYear();
    const monthDiff = now.getMonth() - birth.getMonth();
    const dayDiff = now.getDate() - birth.getDate();

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    return age;
}

function updateAge() {
    const birthDate = '2002-11-17';
    const ageElement = document.getElementById('age');
    const age = calculateAge(birthDate);
    ageElement.textContent = age;
}

updateAge();