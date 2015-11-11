class CreatePolls < ActiveRecord::Migration
  def change
    create_table :polls do |t|
      t.text :title
      t.string :options, array: true, default: []

      t.timestamps null: false
    end
  end
end
