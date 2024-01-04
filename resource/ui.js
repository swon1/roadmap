function mainFn ( a,b ) {
    let clip = new ClipboardJS('.textcopy');

    // 성공시
    clip.on('success', function(e) {
        console.log("Success");
        console.log(e);
    });
    // 실패시
    clip.on('error', function(e) {
        console.log("Error");
    });

    a.querySelector('#content2024 > h3').addEventListener('click', () => {
        a.querySelector('.textcopy').click();
    });
};