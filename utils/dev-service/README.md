### Svkeleton as a service

SvelteKit dev server rdy to go with Tailwind JIT. 

This Docker image / compose service can run as alternative to copy/pasting the entirety of files of a Svelte Kit barebones install (`./apps/svelte-kit-bones`); useful for rapid prototyping.    

First, build the image from *root of this repo*: 

```bash
docker build -t svkeleton -f svkeleton.Dockerfile .
```

Then copy `docker-compose.yml` from *this directory* into the target directory for which you want to create a new Svelte Kit app or demo.  Ex:

```
# (from the root of this repo)
mkdir demos; cd demos
mkdir my-awesome-demo; cd my-awesome-demo
cp ../../utils/dev-service/docker-compose.yml .
mkdir src #(necessary to avoid container permission issue)
docker-compose up
# SvelteKit dev server (w/ Vite hotreloading and Tailwind JIT)
# now watching ur new src dir at http://localhost:3333
```

SvelteKit dev server running; now get to coding! 

#### customizing

**static**
If you wish to edit or add new static files then also be sure to `mkdir static` and uncomment the `./static:` line under `volumes` in the `docker-compose.yml` file. 

---

**importing npm modules**
To add modules that need to be installed via npm you can edit your `docker-compose.yml` to add a line for each module you wish to make available on container start. Ex: 
```yml
command: >
  sh -c "node init.cjs && 
          npm install axios &&
          npm run dev"       
```
(where `axios` is a npm module not otherwise available)

---


**svelte.config.js, tailwind.config.js, or any other individual file**
If you need to override an individual file in the Svekeleton container you can use a bind volume; just create the file in your app or demo dir and then mount it into container like so: 
```yml
    volumes:
       - ./src:/home/node/svkeleton/src
       - ./static:/home/node/svkeleton/static
       - type: bind 
         source: ./tailwind.config.cjs
         target: /home/node/svkeleton/tailwind.config.cjs
```
---

**other changes**
If necessary, make a copy and/or edit the base SvelteKit app `./apps/svelte-kit-bones` and rebuild the image to introduce structural changes that otherwise are difficult to do via the stock Docker service/container.