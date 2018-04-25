class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :name
      t.string :city
      t.date :date
      t.integer :likes, default:0, null: false
      t.timestamps
    end
  end
end
