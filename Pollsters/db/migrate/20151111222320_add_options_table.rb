class AddOptionsTable < ActiveRecord::Migration
  def change
    create_table :polls do |t|
      t.string :title
      t.integer :user_id
      t.integer :options_id, array: true, default: []
    end
  end
end
