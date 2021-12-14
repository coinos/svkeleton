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
cd demos
mkdir my-awesome-demo
cp ../../utils/dev-service/docker-compose.yml .
mkdir src #(necessary to avoid container permission issue)
docker-compose up
# SvelteKit dev server (w/ Vite hotreloading and Tailwind JIT)
# now watching ur new src dir at http://localhost:3333
```

Then get to coding! 

If you wish to edit or add new static files then also be sure to `mkdir static` and uncomment the `./static:` line under `volumes` in the `docker-compose.yml` file. 

If necessary, make a copy and/or edit the base SvelteKit app `./apps/svelte-kit-bones` and rebuild the image to introduce structural changes that otherwise are difficult to do via the stock Docker service/container.