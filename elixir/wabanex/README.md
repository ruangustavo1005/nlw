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

## instalar as deps do projeto:
$ mix deps.get

## inicializar o projeto:
$ mix ecto.setup

## subir o server:
$ mix phx.server

## abrir o iterativo do Elixir:
$ iex -S mix

## outros:
match geral de funcs: _ -> se ele tiver no começo do nome do param, também fica como match geral. ex: _reason

console.log(): IO.inspect()
<<<<<<< HEAD

## criar migration (usando Ecto):
$ mix ecto.gen.migration create_users_table

## executar migration:
$ mix ecto.migrate

## dar down em todas as migartions e upar elas de novo:
$ mix ecto.reset

## não tem objeto
tem "struct". é tipo um map (array). declara com %NomeDoModulo.NomeDoModulo{}. dentro das chaves dá de passar os campos, tipo um map com chaves. ex: $Module{name: "Joao"}

## __MODULE__
variável mágica que referencia o nome do próprio modulo

## variável de módulo (atributo da classe)
usar "@". ex: @fields [:valor1, :valor2]

## padrão de map:
%{chave: "valor", key: "value}
%{"result" => result}

## quantidade de argumentos: "ariedade"

## null é "nil"

## pra usar o GraphQL (deps):
{:absinthe, "~> 1.5.0"},
{:absinthe, "~> 1.5"}

## formatar arquivos do projeto
$ mix format

## compilar o projeto pra ver se roda:
$ mix compile

## exemplo de GraphQL:
{
  user(id: "bcaa33bc-a93d-48c3-b512-dc19b323036e"){
    email
    name
  }
}
=======
>>>>>>> 7aa296fef9deef6c358ca2120c38db4db9a8eea8
