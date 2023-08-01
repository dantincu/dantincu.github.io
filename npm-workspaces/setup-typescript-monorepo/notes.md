# How to setup a typescript monorepo using NPM

Here I wrote a summary about the article at [earthly.dev/blog/setup-typescript-monorepo](https://earthly.dev/blog/setup-typescript-monorepo/) on the 1st of August, 2023.

> ## Initialize the Directory Structure
> typescript-monorepo  
> ├── src  
> ├── node_modules  
> ├── ...  
> └── packages  
> ```
> # create the monorepo root directory
> mkdir typescript-monorepo
> 
> # enter the newly created directory
> cd typescript-monorepo
> 
> # creating the subdirectory
> mkdir src
> mkdir packages
> ```

> ## Define the Global package.json File
> Inside the `monorepo-typescript` directory, launch the following command:
> 
> ```
> npm init -y
> ```
> Now, let's update the /package.json as follows:
> ```json
> {
>   "name": "monorepo-typescript",
>   "version": "1.0.0",
>   "description": "A monorepo in TypeScript",
>   "private": true,
>   "workspaces": [
>     "packages/*"
>   ]
> }
> ```
> With this configuration, every folder inside `/packages` with a package.json file is considered a local package. When you `run npm install` in the root directory, folders within `packages/` are symlinked to the `node_modules` folder.

> ## Add the Core Dependencies
> Install these to your root project's dependencies:  
> ```
> npm install typescript
> npm install --save-dev @types/node ts-node
> ```
> `ts-node` transforms TypeScript into JavaScript and allows you to execute TypeScript on Node.js without precompiling.  

> You should add `eslint` and `prettier`:
> ```
> npm install eslint prettier @typescript-eslint/eslint-parser @typescript-eslint/eslint-plugin
> ```
> Then, create an <u>eslint configuration file</u>. For example, you can initialize a `.eslintrc.json` file as follows:
> ```json
> {
>   "extends": [
>     "eslint:recommended",
>     "plugin:@typescript-eslint/recommended"
>   ],
>   "parser": "@typescript-eslint/parser",
>   "plugins": [
>     "@typescript-eslint"
>   ]
> }
> ```
> Similarly, create a <u>prettier configuration file</u>. Again, you can define a `.prettierrc.json` file as below:
> ```json
> {
>   "trailingComma": "all",
>   "tabWidth": 2,
>   "printWidth": 120,
>   "semi": false,
>   "singleQuote": false,
>   "bracketSpacing": true
> }
> ```
> ## Add a Local Package
> First, create the `utils` folder inside `/packages`:
> ```
> mkdir utils
> ```
> Initialize a `package.json` file inside `utils` with this `npm` command:
> ```
> npm init --scope @monorepo --workspace ./packages/utils -y
> ```
> The `--scope` flag specifies an <u>npm scope name</u> in the package name.  
> You should adopt the same npm scope name for all your local packages.  
> 
> This keeps your monorepo `node_modules` directory cleaner, as all your local packages will appear as links in the same `@<scope_name>` folder. Also, it makes local imports more elegant and easy to recognize from global npm libraries.  
> 
> Make sure `package.json` contains the following content:
> ```json
> {
>   "name": "@monorepo/utils",
>   "version": "1.0.0",
>   "description": "The package containing some utility functions",
>   "main": "build/index.js",
>   "scripts": {
>     "build": "tsc --build"
>   }
> }
> ```
> You also need a `tsconfig.json` file. Initialize it as follows:
> ```json
> {
>     "compilerOptions": {
>         "target": "es2022",
>         "module": "commonjs",
>         "moduleResolution": "node",
>         "declaration": true,
>         "strict": true,
>         "incremental": true,
>         "esModuleInterop": true,
>         "skipLibCheck": true,
>         "forceConsistentCasingInFileNames": true,
>         "rootDir": "./src",
>         "outDir": "./build",
>         "composite": true
>     }
> }
> ```
> As explained in the [TypeScript documentation](https://www.typescriptlang.org/docs/handbook/project-references.html#composite), set the `composite` option to `true`. Since you're likely to reference this project in other parts of the monorepo, this enables you to reference this package in other `tsconfig.json`.
> 
> Then create a `src` directory:
> ```
> cd packages/utils
> mkdir src
> ```
> Then, initialize an `index.ts` file as follows:
> ```js
> export function isEven(n: number): boolean {
>     return n % 2 === 0
> }
> ```
> ## Verify That the Local Package Works
> ```
> npm run build --workspace ./packages/utils
> ```
> Make sure to launch it in the root directory of the monorepo. This command executes the `build` script defined in the local `package.json` of the package specified with the `--workspace` flag. Don't forget that a local package is nothing more than an npm workspace, which is why you need to use the `--workspace` flag.
> ## Define a Global tsconfig.json File
> Initialize a `tsconfig.json` file in the root directory with the following content:
> ```json
> {
>   "compilerOptions": {
>     "incremental": true,
>     "target": "es2022",
>     "module": "commonjs",
>     "declaration": true,
>     "strict": true,
>     "moduleResolution": "node",
>     "esModuleInterop": true,
>     "skipLibCheck": true,
>     "forceConsistentCasingInFileNames": true,
>     "rootDir": "./src",
>     "outDir": "./build"
>   },
>   "files": [
>   ],
>   "references": [
>     {
>       "path": "./packages/utils"
>     }
>   ]
> }
> ```
Thanks to [TypeScript references](https://www.typescriptlang.org/docs/handbook/project-references.html), you can split a TypeScript project into smaller parts. With the `references` option, you can define the list of packages your TypeScript monorepo consists of. When running `tsc --build` in the root directory, the TypeScript compiler accesses all packages defined in `references` and compiles them one by one in order.
> 
> Add a new `build` script in the global `./package.json` file:
> ```json
> "scripts": {
>   "build": "tsc --build --verbose"
> }
> ```
## Use a Local Package Inside Another Local Package
> Now, let's assume you want to use some utility functions from the `@monorepo/utils` in the `@monorepo/ui` package. All you have to do is run the following npm command in the root directory:
> ```
> npm install @monorepo/utils --workspace ./packages/ui
> ```
> This adds `@monorepo/utils` as a dependency in `@monorepo/utils`.
> 
> Take a look at the local `package.json` file inside `./packages/ui` and you'll see:
> ```json
> "dependencies": {
>   "@monorepo/utils": "^1.0.0"
> }
> ```
> Now, in `./packages/ui/index.ts`, you can access the utility functions exposed by `@monorepo/utils` as follows:
> ```js
> import { isEven } from "@monorepo/utils";
> ```
> ## Add an External npm Package to a Local Package
> In this case, don't run an `npm install` command inside the package folder; that would add the dependency to the local `package.json` file and consequently generate a locale `node_modules` folder. This violates the core idea that a monorepo has only one `node_modules`.
> 
> Let's assume you want to add [moment](https://www.npmjs.com/package/moment) to the `@monorepo/ui` package. Run the following `npm install` command in the root folder of your monorepo:
> ```
> npm install moment --workspace ./packages/ui
> ```
> This installs `moment` in the monorepo's `node_modules` folder and adds the following section to the local `packages.json` inside `./packages/ui`:
> ```json
> "dependencies": {
>   // ...
>   "moment": "^2.29.4"
> }
> ```
> ```js
> import moment from "moment"
> ```
> ## Putting It All Together
> Now, add `@monorepo/utils` and `@monorepo/ui` as project dependencies in the global `./package.json` file with this npm command:
> ```
> npm install @monorepo/utils @monorepo/ui
> ```