class CreateChampionships < ActiveRecord::Migration[7.0]
  def change
    create_table :championships do |t|
      t.string :name
      t.integer :season_id

      t.timestamps
    end
  end
end
