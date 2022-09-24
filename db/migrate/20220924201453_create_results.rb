class CreateResults < ActiveRecord::Migration[7.0]
  def change
    create_table :results do |t|
      t.integer :event_entry_id
      t.integer :start_position
      t.integer :finish_position
      t.integer :time

      t.timestamps
    end
  end
end
