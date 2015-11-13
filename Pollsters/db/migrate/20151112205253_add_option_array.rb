class AddOptionArray < ActiveRecord::Migration
  def change
    add_column :polls, :options, :, default: [], array: true
  end
end
