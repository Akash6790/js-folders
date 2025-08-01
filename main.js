    // console.log("hello world");
    //     var m="hello akash";
    //     console.log(m);
    //     let ak="akash "
    //     console.log(ak);

    //     function akash(){
    //         console.log("hello again recap my ajvascript");
    //     }
    //     akash();
    //     const arrow = () => {
    //         console.log("hello again recap my ajvascript");
    //     }
    //     arrow(); 


    // let age =150 ;
    // if (age<20){
    //     console.log("age is less than 20 ");

    // }
    // else{
    //      console.log("age is not  less than 20 ");
    // }
    
    // for(let i=0; i<10;i++){
    //     console.log(i);
    // }

    // let i=1;
    // while(i<10){
    //     console.log(i);
    //     i++;
    // }



    // const hello= document.querySelector('h1');
    // console.log(hello);
    // const hello1=document.querySelector('.main-title');
    // console.log(hello1);
    // const hello2=document.querySelector('#aksh');
    // console.log(hello2);
    // const btn=document.querySelector('#btn');
    // console.log(btn);

    // btn.onclick = () =>{
    //     console.log("i just clicked");
    //      alert("i am clicked");
    // };

    // btn.addEventListener("")

    // hello.innerHTML= "hello I changed it  new";


    /////////  ****** mini project ************** ,,///////

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
