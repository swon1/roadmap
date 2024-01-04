function mainFn ( a,b ) {
    let targeth3 = a.querySelector('#content2024 > h3');
    targeth3.addEventListener('click',function(){
        navigator.clipboard.writeText('https://swon1.github.io/roadmap/');
        alert('복사 완료');
    });

    console.log(targeth3);

    console.log(a,b);
};