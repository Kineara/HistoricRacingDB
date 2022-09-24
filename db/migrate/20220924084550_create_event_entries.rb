class CreateEventEntries < ActiveRecord::Migration[7.0]
  def change
    create_table :event_entries do |t|
      t.integer :event_id
      t.integer :team_id
      t.integer :competitor_id
      t.integer :vehicle_id 

      t.timestamps
    end
  end
end
