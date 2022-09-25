class CreateResults < ActiveRecord::Migration[7.0]
  def change
    create_table :results do |t|
      t.integer :team_entry_id
      t.integer :start_position
      t.integer :finish_position
      t.string :time
      t.string :speed 
      t.boolean :finished 
      t.integer :laps 
      t.string :notes  
      t.timestamps
    end
  end
end
