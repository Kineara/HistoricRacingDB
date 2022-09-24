class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :name
      t.integer :championship_id
      t.integer :track_id

      t.timestamps
    end
  end
end
