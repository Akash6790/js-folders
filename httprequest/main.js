
const githubdetails= document.querySelector('#github-details');
const usertext= document.querySelector('.user-text');
const searchbtn= document.querySelector('.search-btn');

searchbtn.addEventListener('click', ()=>{
    console.log(usertext.value);
       getUserDetails(usertext.value);
})

const getUserDetails = async(username) =>{
    //const username="Akash6790";
    const url=`https://api.github.com/users/${username}`;
  
    const response= await fetch(url);
    if(!response.ok){
        alert('Erro enter correct user nameS');
    }
    const data= await response.json();
    //  console.log(data);
    // console.log(data.avatar_url);

    githubdetails.innerHTML= `<h2>${data.name}</h2>
                                <img src="${data.avatar_url}" />
                                 <h2>${data.id}</h2>
                                 <h2>Username: ${data.login}</h2>
         `;
    
   
};


