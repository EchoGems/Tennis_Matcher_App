class LatAndLngToFloat < ActiveRecord::Migration[5.1]
  def change
    remove_column :locations, :lat
    remove_column :locations, :lng
  end
end
