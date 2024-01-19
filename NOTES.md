# Diesel

## Connecting to Postgres

Running `nix develop` will create a Postgres data files in a directory called
`.data` and start a corresponding server.

To connect to the database with `psql`, run the following command:
```shell
psql --host=localhost --username=postgres
```

This is a good reference: https://stackoverflow.com/a/75829318

## Configuration

Copy this to a file called `.env`:
```conf
DATABASE_URL=postgres://postgres@localhost/cement
```
