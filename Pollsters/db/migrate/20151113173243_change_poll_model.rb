class ChangePollModel < ActiveRecord::Migration
  def change
      remove_column :polls, :options, :string
  end
end
