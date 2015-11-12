class AddVoteToOption < ActiveRecord::Migration
  def change
    add_column :options, :vote, :integer
  end
end
