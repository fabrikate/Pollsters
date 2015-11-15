class AddIdtoPoll < ActiveRecord::Migration
  def change
    add_column :options, :poll_id, :string
  end
end
