class CreateTeamEntries < ActiveRecord::Migration[7.0]
  def change
    create_table :team_entries do |t|
      t.integer :subevent_id
      t.integer :team_id
      t.string :vehicle_number
      t.integer :vehicle_id

      t.timestamps
    end
  end
end
