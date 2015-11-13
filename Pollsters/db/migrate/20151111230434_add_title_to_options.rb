class AddTitleToOptions < ActiveRecord::Migration
  def change
    create_table :options
    add_column :options, :title, :string
  end
end
