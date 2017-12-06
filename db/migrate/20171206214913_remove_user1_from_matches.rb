class RemoveUser1FromMatches < ActiveRecord::Migration[5.1]
  def change
    remove_column :matches, :user1_id
  end
end
