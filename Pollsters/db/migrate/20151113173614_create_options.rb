class CreateOptions < ActiveRecord::Migration
  def change
    create_table :options do |t|
      t.string :answer
      t.integer :vote

      t.timestamps null: false
    end
  end
end
