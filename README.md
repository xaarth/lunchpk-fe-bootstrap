## How to setup

Install all the dependencies:

```bash
npm i
```

Then create a new file in the root ".env.local" and these variables

```
NEXT_PUBLIC_RAPI_HOST = https://api.lunch.pk
NEXT_PUBLIC_FE_HOST = https://www.lunch.pk
```

Finally, run the dev server:

```bash
npm run dev
```

To test the production version. first compile the code like so

```bash
npm run build
```

and then run server the production server:

```bash
npm run start
```
