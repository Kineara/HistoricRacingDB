class CreateSeasons < ActiveRecord::Migration[7.0]
  def change
    create_table :seasons do |t|
      t.string :name
      t.integer :series_id

      t.timestamps
    end
  end
end
