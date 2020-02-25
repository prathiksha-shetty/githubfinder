class Github {
    constructor(){
        this.client_id='f0e33db9737d63c75b5b'
        this.client_secret='b5849775e0c394e1faf3ead4954a6e78a9479081'
        this.repos_count=5;
        this.repos_sort='created: asc'
    }
    
    async getUser(user){
        const profileResponse=await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile=await profileResponse.json();

        const reposResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos=await  reposResponse.json();
       
        return{
            profile,
            repos
        }
    }
}
