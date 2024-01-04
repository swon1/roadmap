function mainFn ( a,b ) {
    let targeth3 = a.querySelector('#content2024 > h3');
    
    let clip = new ClipboardJS('#content2024 > h3');

    // 성공시
    clip.on('success', function(e) {
        console.log("Success");
    });
    // 실패시
    clip.on('error', function(e) {
        console.log("Error");
    });

    console.log(targeth3);

    console.log(a,b);
};