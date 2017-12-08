class AddLatAndLngToLocations < ActiveRecord::Migration[5.1]
  def change
    add_column :locations, :lat, :string
    add_column :locations, :lng, :string
  end
end
