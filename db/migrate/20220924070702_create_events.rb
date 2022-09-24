class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :name
      t.date :start_date
      t.date :end_date
      t.integer :championship_id
      t.integer :track_id

      t.timestamps
    end
  end
end
