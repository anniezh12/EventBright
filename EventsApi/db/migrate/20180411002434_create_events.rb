class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :name
      t.string :city
      t.date :date
      t.timestamps
    end
  end
end