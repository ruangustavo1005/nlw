defmodule Wabanex.IMC do
  def calculate(%{"filename" => filename}) do
    filename
    |> File.read()
    |> handle_file()
  end

  defp handle_file({:ok, content}) do
    data =
      content
      |> String.split("\r\n")
      |> Enum.map(fn item -> parse_line(item) end)
      |> Enum.into(%{})

    {:ok, data}
  end

  defp handle_file({:error, _reason}) do
    {:error, "Error while opening the file"}
  end

  defp parse_line(item) do
    item
    |> String.split(",")
    |> List.update_at(1, &String.to_float/1)
    |> List.update_at(2, &String.to_float/1)
    |> calc_imc()
  end

  defp calc_imc([name, height, weight]), do: {name, weight / (height * height)}
end
