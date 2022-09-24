class CreateEntries < ActiveRecord::Migration[7.0]
  def change
    create_table :entries do |t|
      t.integer :subevent_id
      t.integer :team_id
      t.integer :competitor_id
      t.integer :vehicle_id
      t.integer :entry_id 
      t.integer :vehicle_number 

      t.timestamps
    end
  end
end
