README of locapoc
=================


Presentation
------------

*locapoc* is a Proof-of-Concept for a *nodejs* application intended to be used locally (i.e. on your own machine) that serves a *static content* and a rest-api. The focus is on the User eXperience for a local user for running the app and deploying it.

*locapoc* is the contraction of *local application Proof-of-Concept*.


Getting started
---------------

In a bash-terminal, run:

```bash
git clone https://github.com/charlyoleg/locapoc
cd locapoc
npm install
npm run
npm run make_all
cp dist/locapoc_*.zip /tmp/
cd /tmp
unzip locapoc_*.zip
cd locapoc_*
./linux_starts_locapoc.sh
# you can distribute your local app as a zip!
```

If you want to use *locapoc* on a regular server, we recommend to following option values:

```bash
node build/locapoc.js \
  --directory=./webui \
  --brower=false      \
  --quitable=false    \
  --cors=true         \
  --port=80           \
  --host=0.0.0.0
```

Description
-----------

The purpose of *locapoc* is to create a *nodejs* application that serves a directory as static content. The generated application contents all its dependencies and doesn't depend on *node_modules*. This let you deploy a *static content* with its *static web-server* easily without having to run *npm install*.
In other words, this small application is an alternative to [nginx](http://hg.nginx.org/nginx/) or [apache](http://svn.apache.org/viewvc/httpd/) used as [static webserver](https://docs.nginx.com/nginx/admin-guide/web-server/serving-static-content/).

*locapoc* is thought for running local application. If you want an efficient server that supports thousands of connections, *nginx* or *apache-httpd* are better choices.

If you want to run a *static webserver* while using *npm*, you will be better with [http-server](https://github.com/http-party/http-server) or [serve](https://github.com/vercel/serve).


Concept
-------

The source file *static-webserver.js* is a small *express-js* web-server that serves a static content. *esbuild* is used to bundle this *nodejs* to make it standalone. Now, you are free to copy and run the *static webserver* *locapoc.cjs* just with *nodejs* i.e. without running any *npm install*.




