class RemoveHasLightsFromLocations < ActiveRecord::Migration[5.1]
  def change
    remove_column :locations, :has_lights
  end
end
