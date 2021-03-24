Things to improve:
1) Regex could be better done for filter user by names
2) Allow an array of names to be searched at the same time instead of changing array of strings into a single string
3) Add React tests as there is an issue with babel configs

## Issues with test
I have run into a problem for some reason testing the React component, I tried to solve the issue why jest couldn't render the
components and ran out of time. Also tried the babel config but then ran into the Next.js dev compiling issues.
In any case the React component testing should be easy to test, but I didn't manage to config the jest for it

If you try to run test you will see that I get parse issue with jest rendering a React component

# How to run
Open project dir install dependencies by running command: 
```bash
npm install
```
to run the project run command:
```bash
npm run dev
```
to run project tests command:
```bash
npm run test
```
