# Table Of Contents
- [Table Of Contents](#table-of-contents)
- [Preface](#preface)
- [Environment Variable Injection Process](#environment-variable-injection-process)
- [Environment Variable Injection For GitHub CI Pipeline](#environment-variable-injection-for-github-ci-pipeline)
- [Additional Note](#additional-note)
  - [Environment Variables Prefixed with `_P_`](#environment-variables-prefixed-with-_p_)

# Preface

Because this is a Single Page Application (SPA).  
There is no backing server that could pull environment variables at runtime.  
To inject environment variable like property, to following process should be followed.

In the following example, `CONTACT_EMAIL` environment variable would be used.

# Environment Variable Injection Process

1. Add the environment variable to [.env.example](/.env.example)

    This is used to make sure developers know what environment variables are being injected into the application.
    ```
    CONTACT_EMAIL=
    ```
    Note that some of the variables are left empty, these are either secrets that should not present in the repository or are subject to change.

2. Add the environment variable to [vite.config.ts](/vite.config.ts)

    Namely the `define` field. `import.meta.env.XXX` is used by Vite to inject environment variables specifically for SPA. The variable name does not have to be the same but just keep them the same for simplicity sake.
    ```typescript
    "import.meta.env.CONTACT_EMAIL": JSON.stringify(env.CONTACT_EMAIL)
    ```

3. Add the environment variable to [src/Config.ts](/src/Config.ts)

    Now we are within the scope of the actual application. After calling the following function, it would just be a plain variable within the application.

    ```typescript
    const getEnvOrEmpty = (env: string | undefined): string => {
    let defaultValue = "";
    if (env) {
        defaultValue = env;
    }

    return defaultValue;
    };

    export const CONTACT_EMAIL = getEnvOrEmpty(import.meta.env.CONTACT_EMAIL);
    ```

    The general approach here is to set it to a default value is there is no such environment variable.

4. Using the variable

    Since `CONTACT_EMAIL` is just a variable now, use it just like any other variable. Note that do not modify it as it is assumed to be a constant.

5. Running the application

    When using `npm run dev` or `npm run serve` to run the application, copy `.env.example` as `.env` and add values to the empty fields.

# Environment Variable Injection For GitHub CI Pipeline

The GitHub CI pipeline would need the environment variables to properly build the SPA for end user.

1. Add secrets to GitHub repository

    Go to repository `Settings > Security > Secrets and variables > Actions` and add `CONTACT_EMAIL` as a new secret.

2. Modify CI Pipeline

    Modify [.github/workflows/deploy_node_20.yml](/.github/workflows/deploy_node_20.yml) and [.github/workflows/test_node_20.yml](/.github/workflows/test_node_20.yml), add the following to `jobs.build_test.env`
    ```yml
    CONTACT_EMAIL: ${{ secrets.CONTACT_EMAIL }}
    ```

Note that each time the environment variables are changed, CI need to be re-run so the changes are applied to the new build.

# Additional Note

## Environment Variables Prefixed with `_P_`

GitHub CI does not allow custom environment variable starting with `GITHUB`. To circumvent the issue, `_P_` is prefixed to such environment variable.
