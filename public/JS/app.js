console.log('Hello World');

document.addEventListener('click',(e) =>{
    if('short' in e.target.dataset){
        console.log('Exist')
        const url = `http://localhost:3000/${e.target.dataset.short}`;
        navigator.clipboard
        .writeText(url)
        .then(()=>{
            console.log('Text Copied at clipboard...');
        })
        .catch((err)=>{
            console.log('Something went wrong',err);
        })
    }
})