class CreateCompetitorEntries < ActiveRecord::Migration[7.0]
  def change
    create_table :competitor_entries do |t|
      t.integer :competitor_id
      t.integer :team_entry_id

      t.timestamps
    end
  end
end
