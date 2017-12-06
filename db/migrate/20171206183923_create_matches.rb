class CreateMatches < ActiveRecord::Migration[5.1]
  def change
    create_table :matches do |t|
      t.integer :user1_id
      t.integer :user2_id
      t.string :location
      t.timestamp :timeslot

      t.timestamps
    end
  end
end
