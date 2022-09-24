class CreateManufacturers < ActiveRecord::Migration[7.0]
  def change
    create_table :manufacturers do |t|
      t.string :name
      t.integer :nationality_id

      t.timestamps
    end
  end
end
