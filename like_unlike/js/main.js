  const likebtn=document.querySelector('.btn-like');
const unlikebtn=document.querySelector('.btn-unlike');

    const likecount=document.querySelector('.like-count');
        console.log(likecount);

    let likes=0;

    likebtn.addEventListener('click',()=>{
        console.log("like button clicked");
        likes++;
        likecount.innerHTML=`${likes} Likes`;
    })
    unlikebtn.addEventListener('click',()=>{
        console.log("unlike button clicked");
        if(likes>0){
              likes--;
        }
        likecount.innerHTML=`${likes}  Likes`;
    })