const currentYear = new Date().getFullYear();

// Встановлюємо значення року в елемент із id "year"
document.getElementById('year').textContent = currentYear;

function calculateAge(birthDate) {
    const now = new Date();
    const birth = new Date(birthDate);
    let age = now.getFullYear() - birth.getFullYear();
    const monthDiff = now.getMonth() - birth.getMonth();
    const dayDiff = now.getDate() - birth.getDate();

    // Якщо місяць або день народження ще не настав цього року, то віднімаємо 1 рік
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    return age;
}

function updateAge() {
    const birthDate = '2002-11-17';  // Заміни на свою дату народження
    const ageElement = document.getElementById('age');
    const age = calculateAge(birthDate);
    ageElement.textContent = age;
}

updateAge();