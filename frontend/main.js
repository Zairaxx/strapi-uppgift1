const fetchData = async (url) => {
    let response = await fetch(url)
    let json = await response.json();
    return json.data
}

const renderStudents = async () => {
    let students = await fetchData('http://localhost:1338/api/students');
    
    students.forEach(student => {
        let {firstName, lastName, Age, Education} = student.attributes;
        document.body.innerHTML += `
        <div style="border:1px solid black">
        <p>Förnamn: ${firstName}</p>
        <p>Efternamn: ${lastName}</p>
        <p>Ålder: ${Age}</p>
        <p>Utbildning: ${Education}</p>
        </div>`
    });
}

renderStudents();