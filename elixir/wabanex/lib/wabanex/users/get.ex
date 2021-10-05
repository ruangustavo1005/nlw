defmodule Wabanex.Users.Get do
  alias Ecto.UUID

  def call(id) do
    id
    |> UUID.cast()
    |> handle_uuid()
  end

  defp handle_uuid(:error) do
    {:error, "Invalid UUID"}
  end

  defp handle_uuid({:ok, uuid}) do
    case Wabanex.Repo.get(Wabanex.User, uuid) do
      nil -> {:error, "User not found"}
      user -> {:ok, user}
    end
  end

end
