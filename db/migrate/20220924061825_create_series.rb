class CreateSeries < ActiveRecord::Migration[7.0]
  def change
    create_table :series do |t|
      t.string :name
      t.string :vehicle_type

      t.timestamps
    end
  end
end
