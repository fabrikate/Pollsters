class SchemaCleanUp < ActiveRecord::Migration
  def change
    drop_table(:options)
    remove_column :polls, :options_id
  end
end
