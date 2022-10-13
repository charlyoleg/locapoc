Deployment of locapoc
=====================


One of the goal of the proof-of-concept is to try different ways to deploy this app. Here the long-term wishes:

- zip-file with node-app and frontend
- zip-file with only the frontend
- [npm package](https://www.npmjs.com/)
- [AppImage](https://appimage.org/)
- [Snap](https://snapcraft.io/)
- [Ubuntu package](https://packaging.ubuntu.com/html/)
- a central static website


zip-file with node-app and frontend
-----------------------------------

The node-app sources are converted with [esbuild](https://esbuild.github.io/) into a single _commonjs_ script that contains all dependencies. So it can run without any previous _npm install_.

We are using _commonjs_ because the _esm_ output for _node_ of _esbuild_ seems buggy.


zip-file with only the frontend
-------------------------------

Under Linux you can use *open* or *sensible-browser* to create a launch-script. Html should not contain any absolute path. Only relative path will work with *file://*.


npm package
-----------

Using the [npm infrastructure](https://www.npmjs.com/), you can run it either by install _locapoc_ in your local project or directly by using npx.

### Within a local porject

```bash
mkdir myLocalProject
cd myLocalProject
npm init -y
npm install locapoc
npx locapoc
```

### Using directly npx

```bash
npx locapoc
```

The executable _locapoc_ is a _commonjs_ script created with [esbuild](https://esbuild.github.io/) from the typescript sources. We are using _commonjs_ because _esm_ output for _node_ doesn't seem to be yet properly supported by _esbuild_.

The way to get the directory of the running script has changed drastically between _commonjs_ and _esm_. _CommonJS_ uses _\_\_dirname_. _ESM_ uses information from _import.meta_. _esbuild_ is not able to make this conversion. So we have to comment this part from the sources written in _esm_ and prepend it in _commonjs_ in the build script _make_bincli.sh_.

AppImage
--------

Using [AppImage](https://appimage.org/) ...

I haven't found documented example for node-js app. So, I haven't investigated further.


snap
----

Using [Snap](https://snapcraft.io/) ...

Using _core22_ wasn't really working. _snapcraft_ was running forever.


debian package
--------------

Using [Ubuntu package](https://packaging.ubuntu.com/html/) or [Debian package](https://www.debian.org/doc/manuals/maint-guide/) ...

_locapoc_ requires node v16. Ubuntu 22.04 provides node v12. So the debian package won't be straight forward.


central static website
----------------------

