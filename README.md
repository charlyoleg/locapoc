README of locapoc
=================


Presentation
------------

*locapoc* is a small *nodejs* that let you deploy simply a *static web serve* for a local application. It helps you to distribute your applcation as a *zip-file*.

*locapoc* is the contraction of *local application Proof-of-Concept*.


Getting started
---------------

In a bash-terminal, run:

```bash
git clone https://github.com/charlyoleg/locapoc
cd locapoc
npm install
npm run
npm run build
cd ..
mkdir myApp
cd myApp
cp -a ../locapoc/tests/webui ./
cp ../locapoc/dist/locapoc.cjs ./
cp ../locapoc/scr/linux_runs_locapoc.sh ./
cp ../locapoc/scr/windows_runs_locapoc.cmd ./
# adapt the starter scripts to your wished port-number and content-folder
vim linux_runs_locapoc.sh windows_runs_locapoc.cmd
# test that your pure frontend app is working
linux_runs_locapoc.sh
# stop the server locapoc with ctrl-c
cd ..
zip -r myApp.zip myApp
ls -l myApp.zip
# you can distribute your frontend app as a zip!
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




