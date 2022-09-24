class CreateCompetitors < ActiveRecord::Migration[7.0]
  def change
    create_table :competitors do |t|
      t.string :first_name
      t.string :last_name 
      t.integer :nationality_id 

      t.timestamps
    end
  end
end
