In order to add the redux Action Library we need to add it from github package go to project in  terminal and
First create token for user from github : https://github.com/settings/tokens . With the following rights: admin:gpg_key, admin:org, admin:org_hook, admin:public_key, admin:repo_hook, delete:packages, delete_repo, gist, notifications, repo, user, workflow, write:discussion, write:packages. 
Copy the token and  run the following command to setup the RAL :
npm login --scope=@mosaic-wellness --registry=https://npm.pkg.github.com
When it prompts for password enter the token .
Once logged in run : yarn add @mosaic-wellness/redux-action-library@0.11.15 to add the package

