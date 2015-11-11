class CreatePolls < ActiveRecord::Migration
  def change
    create_table :polls do |t|
      t.text :title
      t.array :options

      t.timestamps null: false
    end
  end
end
