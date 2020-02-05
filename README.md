# CLI-Tests

## Setup

Creating workspace

```bash
$ ng new workspace-name-here --createApplication="false"
```

Creating a project inside of workspace

```bash
$ ng g application project-name-here --routing --style="scss"
```

```bash
$ ng g application project-name-here --routing --style="scss"
```

```bash
$ ng g library shared

$ ng add angular-playground

$ npm run playground

```

```

  my-app
  ├── angular.json
  ├── angular-playground.json
  ├── package.json
  ├── tsconfig.json
  ├── ...
  ├── projects
  │   -tsconfig.playground.json
  │   ├── my-lib
  │   │   ├── src
  │   │   │   └── ...
  │   │   └── ...
  ├── src
  │   ├── tsconfig.app.json
  │   ├── main.ts
  │   ├── main.playground.ts
  │   └── ...
  └─── ...
```

tsconfig.playground.json

```json
{
  "extends": "../tsconfig.json",
  "compilerOptions": {
    "outDir": "../out-tsc/app",
    "types": []
  },
  "include": ["**/*.ts", "./shared/src/**/*.ts"],
  "exclude": ["test.ts", "**/*.spec.ts", "**/*.e2e-spec.ts"]
}
```

angular-playground.json

```json
{
  "sourceRoots": ["./projects/ux-tests/src", "./projects/shared/src"],
  "angularCli": {
    "appName": "playground"
  }
}
```

angular.json

```json
{
  ...,
  "projects": {
    ...,
    "playground": {
      ...,
      "architect": {
        ...,
        "build": {
          ...,
          "options": {
            ...,
            "tsConfig": "src/tsconfig.playground.json",
            ...
          }
        }
      }
    }
  }
}
```
