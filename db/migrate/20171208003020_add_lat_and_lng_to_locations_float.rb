class AddLatAndLngToLocationsFloat < ActiveRecord::Migration[5.1]
  def change
    add_column :locations, :lat, :float
    add_column :locations, :lng, :float
  end
end
