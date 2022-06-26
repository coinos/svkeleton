FROM node:18

USER node

WORKDIR /home/node

# copy the barebones SvelteKit dir to container: 
COPY  --chown=node:node apps/svelte-kit-bones svkeleton

# copy the init script from this repo's utils/dev-service 
# into the same SvelteKit dir... 
COPY  --chown=node:node utils/dev-service/init.cjs svkeleton/init.cjs

WORKDIR /home/node/svkeleton

# in the container, make copies of the src and static dirs
# which will be used by the init script if host machine does not already 
# have the necessary barebone files to drive a SvelteKit app:
RUN cp -rf src src-copy && cp -rf static static-copy && npm install