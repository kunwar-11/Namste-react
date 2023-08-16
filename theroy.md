//inception

# 1-What is Emmet ?

Emmet is free add-on for your text editor. It allows you to type shortcuts that are then expanded into full pieces of code.

# 2-Difference Between Framework and Library ?

Framework is a complete package of its own , we have set every thing up from scratch to use it.
where as,
A library can be used anywhere in you code it doesnt need a complete creation from scratch, you can use it anywhere in you existing project

# 3-What is CDN ? Why Do we use it ?

CDN stands for Content Delivery Network or Content Distribution Network, it is a distibuted group of server that caches the content close to end user.

# 4-Why is React known as React?

React is called React because it is a library that reacts to changes in data and updates the user interface accordingly.

# 5- What is cross-origin in the script tag?

The cross-origin is a attribute used to share resource from one domain to another domain, this attribute provide support or the CORS (Cross Origin Resource Sharing), it defines how elements handles cross origin requests.

# 6- What is the difference between React and reactDOM?

As React is a library that means we can add it where-ever we want to, React basically allow us to encoporate and use React in our app where as reactDOM allow us to manipulate the DOM with help of react reactDOM gives us function which can be used to maniplulate DOM efficiently.

# 7- What are async and defer?

Async allows your script to run as soon as it's loaded, without blocking other elements on the page.
Defer means your script will only execute after the page has finished loading

//Igniting

# 1- What is NPM ?

NPM is a package manager, it basically a git repository which have all the packages inside it and it helps us to manage those packages, i.e install, update version, delete any package in our app

# 2- What is parcel/webpack ? Why do we need it ?

These are the bundlers whiich bundle/package our code i.e minify, clean ,make the code compact so we can ship it to production and will make our app faster and inside it it uses many technices which make our app faster and optimizes it for end users

# 3- What is .parcel-cache ?

It is a folder which is created when we run build our app in development or production. It basically caches when we build our app for the first time and make rebuilding very fast as it doesnt have to re-parse and re-analyze everything from scratch again.

# 4- What is npx ?

npx helps us to run the packages we install via npm, as npm is a package manager so npx is a package executer

# 5- What is difference between dependencies and devDependencies ?

dependecies are the packages on which our app will be dependent on which we install via npm.
devDependencies are those packages which we need in our development phase
dependenices are those packages which we need in development as well as production

# 6- What is Tree Shaking Algorithm ?

removal of unreachable / un-used code (dead code) from the bundle is called tree shaking,

imagine your application as a tree. The source code and libraries you actually use represent the green, living leaves of the tree. Dead code represents the brown, dead leaves of the tree that are consumed by autumn. In order to get rid of the dead leaves, you have to shake the tree, causing them to fall.”

# 7- What is hot Module Replacement ?

Hot Module Replacement (HMR) improves the development experience by automatically updating modules in the browser at runtime without needing a whole page refresh,allowing us to preserve the state of your front-end application, it uses file watching algo which is writtern in C++

# 8- 5 super pwers of parcel and explain any 2

    - Hot Module Replacement
    - Minification & Bundling
    - Tree Shaking
    - Differential Building
    - Local Server
    - Dev Build
    - Code Splitting
    - Caching

Code Splitting :- When multiple parts of your application depend on the same common modules, they are automatically deduplicated into a separate bundle. This allows commonly used dependencies to be loaded in parallel with your application code and cached separately by the browser.

Differential Building :- It will have different build for old browser so that app will run smoothly on all browsers

# 9- What is '.gitignore'?What should we add and not add into it?

as the name says the file will contains the name of folder and files which will be ignored by git and which doesnt need to be pushed to our repository, we should not add those file and folder to it which cannot be re-generated on the server.

# 10- What is the difference between 'package.json' and 'package-lock.json'?

package.json is configuration file for npm, it keeps tracks of the aprrox verion of the package we install via npm, it can also keep track of exact version of the package by removing caret or tilde.

package-lock.json keeps track of the exact version of the package we install and also tracks the eact version of the package used by the installed package (transitive dependency)

# 11- Why should I not modify 'package-lock.json'?

we shouldn't modify it because it keeps tracks of exact version of the dependency we install and also keep tracks of the dependency's dependcies and so on

# 13- What is 'node_modules'?Is it a good idea to push that on git?

node_modules is a folder which contains the code for all the dependecies/package we installed and also contain the code of the dependency's dependecies and so on. No we should not push node_modules to git as it can be re-generated at server via package.json file

# 14- What is the 'dist' folder?

When we build our app a dist folder is created which will have minified code for all the files we use in our app, and our app will be served from dist folder, and it can be re-generated at server.

# 15- What is 'browserlists'?

To make our app compatible with older version of browsers we use browser list.We need to tell it what are all the versions of browsers we need our app to support with in.

# 16- Caret (^) vs tilde(~)

Major.Minor.Patch
Caret(^) - It is used for automatically updating the minor updates along with patch updates.
Tilde(~) - It is used to match the most recent patch version. Tilde ~ notation freezes the major version and minor version.
