class CreateSubevents < ActiveRecord::Migration[7.0]
  def change
    create_table :subevents do |t|
      t.string :name
      t.date :start_date
      t.date :end_date
      t.integer :event_id

      t.timestamps
    end
  end
end
