class UI{
    constructor(){
        this.profile=document.getElementById('profile')
    }

    //display profile
    showProfile(user){
        this.profile.innerHTML=`
        <div class="card card-body mb-3">
        <div class="row">
           <div class="col-md-3">
              <img class="img-fluid mb-2" src="${user.avatar_url}">
              <a class="btn btn-primary btn-block mb-4" href="${user.html_url}" target="_blank">view profile</a>
        </div>
        </div>
            <div class="col-md-9">
            <span class="badge badge-primary p-2 mb-1">Public Repos:${user.public_repos}</span>
            <span class="badge badge-primary p-2 mb-1">Public Gists:${user.public_gists}</span>
            <span class="badge badge-primary p-2 mb-1">Followers:${user.followers}</span>
            <span class="badge badge-primary p-2 mb-1">Following:${user.following}</span>
            
            </div>
        <div class="col-md-9">
        <span class="badge badge-primary p-2 mb-1">Company: ${user.company}</span>
        <span class="badge badge-primary p-2 mb-1">website/blog: ${user.blog}</span>
        <span class="badge badge-primary p-2 mb-1">location: ${user.location}</span>
        <span class="badge badge-primary p-2 mb-1">member since: ${user.created_at}</span>
            
            
         
   </div>
   <h3 class="page-heading mb-3">latest Repos</h3>
   <div id="repos"></div>
        `;
    }


    //clear Profile
    clearProfile(){
        this.profile.innerHTML='';
    }

    //show Alert
    showAlert(msg,className){
        this.clearAlert();

        const div=document.createElement('div');
        div.className=className;
        div.textContent=msg;
        const container=document.querySelector('.search-container');
        const search=document.querySelector('.search');
        container.insertBefore(div,search);

        setTimeout(()=>{
            this.clearAlert();
        },3000);
    }

    //clearAlert

    clearAlert(){
        const alert=document.querySelector('.alert');

        if(alert){
            alert.remove();
        }
    }

    //Show Repos
    showRepos(repos){
        const reposOutput=document.getElementById('repos');
        let output='';
        repos.forEach(repo=>{
            output +=`
            <div class="card card-body mb-3">
               <div class="row">
                   <div class="col-md-6">
                  <strong>${repo.name}</strong>:${repo.description}
                    </div>
                    <div class="col-md-6">
                    <spam class="badge badge-primary p-2">stars:${repo.stargazers_count}</spam>
                    <spam class="badge badge-primary p-2">watchers:${repo.watchers_count}</spam>
                    <spam class="badge badge-primary p-2">forks:${repo.forks_count}</spam>
                </div>
                <div class="col-md-2">
                <a class="btn btn-primary btn-block mb-4" href="${repo.html_url}" target="_blank">Repo Page</a>
            </div>
        </div>
        `;
        });
        reposOutput.innerHTML=output;
    }
}
