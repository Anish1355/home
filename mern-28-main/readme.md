// Nodejs , vscode

Javascript(Basic Programming Concept)
    - Basics 
        - syntax 
        - run 
        - Variables and constants 
        - data types 
        - operators
    - Conditionals 
    - Functions 
        - sync 
        - Async 
    - OOP
    - ES Modules 
    - Git
NodeJs 
    - Node project setup and run 
    - package managers usages
    - fs, http usages 
BE ( express, Mongodb, to build an API )
    - Setup express 
    - Configuration
    - Server environment
    - Express 
    - DB require
        ----> Mongodb 
    - integration with mongodb
    - API Development 
        ------> All the apis for an ecommerce porject 
Fe ( reactjs, to build web/app)
    - HTML 
    - Css and css Library 
    - Js ===> DOM Manipulate
    - Reactjs 
    ---> ..... 
    - project 
    - nextjs 
    ------> project complete 
------------- You will be developing a new project for the cerficate


## Requirement 
    --> Web based app 

Version Controlling Tool

Project 
    => 3-4 develop

    3 devs 
        ===> Kathmandu
            index.js 
            Auth    ===> 3 days ===> Server 1.0.0
        ===> Pokhara
            index.js
            Category    ===> 5 days         Server
                                            2.0.0
        ===> Biratnagar
            Content

online Repo 
    => github
Local setup 
    => git


laptop 
online repository

gitlab, bitbucket, github

self develop 
access provide

                    Repo
                            Forking 
                                ====> project
    Clone 
        ===> Repo 



local code                                      Online repo(github)                     
            ====================================>  URL (https, ssh)
                            Push Opeartion 
One time step
Step global config: <optional> Global Config
    - git config --global user.name <your name>
    - git config --global user.email <your email>
    - git config --global branch.default <branchName>
    

master/main

step 1: git inititialize
    - git init 
step 2: Remote add from online  
    - git remote add <name> <url>

// default branch: main, master

Step Regular Steps 
Operation: Push 
Step-1: Staging/Commit 
    Step-1.1: Add changes(Tracking)
        - git add . 
        or 
        - git add <your filename>
    Step-1.2: Commit your codes 
        - git commit -m "<your message>"

Step-2: Push the code 
    - git push <name> <yourLocalBranch> ==================> Push
    or 
    - git push <name> <yourBranch>:<remoteBranch>
    or 
    - git push -u <name> <yourBranch>:<remoteBranch>

Step-3: Pull the code 
    - git pull <name> <remoteBranchName>   <=====================
    the code gets merged into your current branch
    sometimes conflict might comes 
    = Open your codes look for the changes and modify 
    -> Once all the conflict gets resolved, 
    repeat step 1
    -> Once the commiting is completed, your code is now merged/pull operation




a. To get the status 
    - git status 
    --- ... working tree is clean, nothing to commit 
b. To get the list of branches on your local 
    - git branch
    default/selected highlight
c. To create a new branch   
    - git checkout -b <branchName>
d. To switch to existing branch 
    - git checkout <branchName>
d. To Delete the local branch 
    - git branch -D <branchNamee>






2 dev 
    -> index.js 
    -> index.js 


first deve ===> index.js repor
push x not allowed
second dev has to pull the code first 
index.js <===== index.js

index.js 
        your changes
        incoming

I am another line in my local file.    
I am  a new line on github itself

    
    

-------------------------------------------------------------------