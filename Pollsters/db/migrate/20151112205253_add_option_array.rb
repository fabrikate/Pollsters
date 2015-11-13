class AddOptionArray < ActiveRecord::Migration
  def change
    add_column :polls, :options, :string, default: [], array: true
  end
end
