# Setup

### Run project (node)

:warning: you need have install [nvm](https://github.com/nvm-sh/nvm) as a requirement.

first copy the `.env.example` and create a new file called `.env` and fill all fields

then you can run:

    nvm use

    npm i

    npm run dev

### Run project (docker)

first copy the `.env.example` and create a new file called `.env` and fill all fields

next run next command:

    docker-compose up -d 


## Endpoints

- [post] /login
- [get] /_health
- [get] /mask/${cidr} // need to be authorized
- [get] /cidr/${mask} // need to be authorized
