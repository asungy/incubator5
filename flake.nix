{
  description = "Plz give me easy compute";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
    rust-overlay.url = "github:oxalica/rust-overlay";
  };

  outputs = inputs: with inputs;
    flake-utils.lib.eachDefaultSystem (system:
      let
        overlays = [ (import rust-overlay) ];
        pkgs = import nixpkgs {
          inherit system overlays;
        };
        name = "plzify";
        shell-hook = shell-name: ''
          PS1="\n\[\033[01;32m\]${name}(${shell-name}) >\[\033[00m\] "
        '';
      in
      {
        devShells.default =
        let
          rust-toolchain = pkgs.rust-bin.stable.latest.default.override {
            extensions = [ "rust-src" "rust-analyzer" ];
          };
        in
        with pkgs; mkShell {
          buildInputs = [
            diesel-cli
            gdb
            postgresql_16
            rust-toolchain
          ];

          shellHook =
          let
            pwd = builtins.toString ./.;
          in
          shell-hook "default"
          + ''
            export PGDATA="$(pwd)/.data"
            if [ ! -d $PGDATA ]; then
              mkdir $PGDATA
              pg_ctl initdb -o "-U postgres"
            fi
            pg_ctl -o "-p 5432 -k $PGDATA" start -l psqlog
          '';
        };
      }
    );
}
