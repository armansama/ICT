const searchbox = document.querySelector('.search_bar');
const searchbtn = document.querySelector('.fa fa-search');

function navigate(){
    const searchitem = document.getElementById('input').value.toLowerCase();
    const pages = {
        "home": "PracticeQs.html",
        "sem-3 imp": "second page/sem-3 imp/index.html",
        "sem-4 imp": "second page/sem-4 imp/index.html",
        "sem-5 imp": "second page/sem-5 imp/index.html",
        "sem-6 imp": "second page/sem-6 imp/index.html",
        "sem-3 syllabus": "second page/sem-3 syllabus/index.html",
        "sem-4 syllabus": "second page/sem-4 syllabus/index.html",
        "sem-5 syllabus": "second page/sem-5 syllabus/index.html",
        "sem-6 syllabus": "second page/sem-6 syllabus/index.html"
    };
    if (pages[searchitem]) {
        window.location.href = pages[searchitem];
    } else {
        alert("Page not found. Please try a different term.");
    }
}