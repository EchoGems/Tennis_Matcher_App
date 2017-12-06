class AddUserToMatches < ActiveRecord::Migration[5.1]
  def change
    add_reference :matches, :user, foreign_key: true
  end
end
