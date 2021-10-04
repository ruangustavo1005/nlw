# Wabanex

To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.setup`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

Ready to run in production? Please [check our deployment guides](https://hexdocs.pm/phoenix/deployment.html).

## Learn more

  * Official website: https://www.phoenixframework.org/
  * Guides: https://hexdocs.pm/phoenix/overview.html
  * Docs: https://hexdocs.pm/phoenix
  * Forum: https://elixirforum.com/c/phoenix-forum
  * Source: https://github.com/phoenixframework/phoenix

# <<-------------------------------------------------------->>

## config:
$ cinst elixir -y
$ mix archive.install hex phx_new 1.5.8

## criando projeto:
$ mix phx.new <nome> --no-html --no-webpack

## instalar no VSCode: "ElixirLS"

## inicializar o projeto:
$ mix ecto.setup

## subir o server:
$ mix phx.server

## abrir o iterativo do Elixir:
$ iex -S mix

match geral de funcs: _ -> se ele tiver no começo do nome do param, também fica como match geral. ex: _reason

console.log(): IO.inspect()