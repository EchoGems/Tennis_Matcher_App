class CreateLocations < ActiveRecord::Migration[5.1]
  def change
    create_table :locations do |t|
      t.string :name
      t.string :address
      t.string :zip
      t.boolean :has_lights

      t.timestamps
    end
  end
end
