defmodule WabanexWeb.Schema.Types.User do
  use Absinthe.Schema.Notation

  @desc "Logic user representation"
  object :user do
    field :id, non_null(:uuid4)
    field :name, non_null(:string)
    field :email, non_null(:string)
  end

  input_object :create_user_input do
    field :name, non_null(:string), description: "Nome completo do usuário"
    field :email, non_null(:string), description: "E-mail formatado do usuário"
    field :password, non_null(:string), description: "Senha com mais de 6 dígitos"
  end
end
