//init Github
const github=new Github;
//init UI
const ui=new UI;
const searchUser=document.getElementById('search-user');

searchUser.addEventListener('keyup',(e)=>{

    const searchText=e.target.value;
    if(searchText !==''){
       github.getUser(searchText).then(data=> {
          if(data.profile.message=== 'Not Found'){
               //show alert
               ui.showAlert('User Not Found', 'alert alert-danger')
            }else{
                //show profile
                ui.showProfile(data.profile);
                //Show repos
                ui.showRepos(data.repos);
               //console.log(data.profile)
            }
        });
    }else{
        //clear Profile
        ui.clearProfile();
    }
});